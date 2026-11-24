(function () {
  'use strict';

  const $ = (sel) => document.querySelector(sel);

  const FREE_ID = 'libero';
  const FREE_PALETTE = {
    '1': COL.rosso, '2': COL.arancio, '3': COL.giallo, '4': COL.verde,
    '5': COL.azzurro, '6': COL.viola, '7': COL.rosa, '8': COL.marrone, '9': COL.nero
  };

  const LIBERO = {
    id: FREE_ID,
    classe: 'Disegno libero',
    difficolta: 'Fantasia!',
    emoji: '🎨',
    colore: '#ff8fab',
    desc: 'Una griglia grande tutta per te: nessuna regola, solo colori e fantasia!',
    mistero: false,
    libero: true,
    disegni: [{ nome: 'Il mio capolavoro', libero: true, simboli: FREE_PALETTE, griglia: vuota(16, 16) }]
  };

  const ALL_LEVELS = LEVELS.concat([LIBERO]);

  const FRASI = [
    'Bravissimo! 🌟',
    'Perfetto! 💪',
    'Sei una stella! ⭐',
    'Che occhio attento! 👀',
    'Continua così! 🚀',
    'Fantastico! 🎈'
  ];

  const state = {
    livello: null,
    idx: 0,
    disegno: null,
    scelto: null,
    giusti: 0,
    totale: 0,
    err: 0,
    vinto: false,
    muto: localStorage.getItem('pixelkids-muto') === '1'
  };

  function vuota(righe, colonne) {
    return Array.from({ length: righe }, () => '.'.repeat(colonne));
  }

  function leggiStelle() {
    try {
      return JSON.parse(localStorage.getItem('pixelkids-stelle') || '{}');
    } catch (e) {
      return {};
    }
  }

  function salvaStelle(chiave, stelle) {
    const p = leggiStelle();
    if ((p[chiave] || 0) < stelle) {
      p[chiave] = stelle;
      localStorage.setItem('pixelkids-stelle', JSON.stringify(p));
    }
  }

  let ctx = null;
  function nota(freq, dur, tipo, volume) {
    if (state.muto) return;
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = tipo || 'sine';
      o.frequency.value = freq;
      g.gain.setValueAtTime(volume || 0.07, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + dur);
    } catch (e) {
    }
  }

  const sfx = {
    ok() { nota(660, 0.12); },
    doppio() { nota(660, 0.1); setTimeout(() => nota(880, 0.14), 90); },
    no() { nota(150, 0.25, 'square', 0.05); },
    vittoria() {
      [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => nota(f, 0.25), i * 140));
    }
  };

  function mostra(id) {
    document.querySelectorAll('.schermata').forEach((s) => {
      s.classList.toggle('nascosta', s.id !== id);
    });
    window.scrollTo(0, 0);
  }

  function messaggio(testo, tipo) {
    const m = $('#msg');
    m.className = tipo || '';
    m.innerHTML = testo;
    if (tipo === 'ok') {
      clearTimeout(messaggio._t);
      messaggio._t = setTimeout(() => { m.className = ''; m.textContent = ''; }, 2600);
    }
  }

  function frase() {
    return FRASI[Math.floor(Math.random() * FRASI.length)];
  }

  function testoSu(hex) {
    const n = parseInt(hex.slice(1), 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? '#33334d' : '#fff';
  }

  function stelleTesto(n) {
    return n > 0 ? '⭐'.repeat(n) : '—';
  }

  function creaAnteprima(disegno, showSilhouette) {
    const cols = disegno.griglia[0].length;
    const righe = disegno.griglia.length;
    const box = document.createElement('div');
    box.className = 'anteprima';
    box.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
    if (showSilhouette) {
      const mirino = document.createElement('div');
      mirino.className = 'mistero';
      mirino.textContent = '❓';
      mirino.style.gridColumn = '1 / -1';
      box.appendChild(mirino);
      return box;
    }
    disegno.griglia.forEach((riga) => {
      riga.split('').forEach((sym) => {
        const cella = document.createElement('div');
        cella.className = 'mini';
        if (sym !== '.') cella.style.background = disegno.simboli[sym].hex;
        box.appendChild(cella);
      });
    });
    return box;
  }

  function stelleLivello(livello) {
    const p = leggiStelle();
    return livello.disegni.reduce((acc, _d, i) => acc + (p[livello.id + ':' + i] || 0), 0);
  }

  function stelleMassime(livello) {
    return livello.disegni.length * 3;
  }

  function renderHome() {
    const wrap = $('#cards');
    wrap.innerHTML = '';
    ALL_LEVELS.forEach((livello) => {
      const card = document.createElement('article');
      card.className = 'card scelta';
      card.style.setProperty('--colore-livello', livello.colore);
      const h3 = document.createElement('h3');
      h3.textContent = livello.emoji + ' ' + livello.classe;
      const badgia = document.createElement('span');
      badgia.className = 'badgia';
      badgia.textContent = livello.difficolta;
      const ante = document.createElement('div');
      ante.style.display = livello.libero ? 'none' : 'grid';
      ante.style.gridTemplateColumns = '1fr 1fr';
      ante.style.gap = '8px';
      if (!livello.libero) {
        ante.appendChild(creaAnteprima(livello.disegni[0]));
        const al = document.createElement('div');
        al.className = 'anteprima';
        al.style.gridTemplateColumns = '1fr';
        const mx = document.createElement('div');
        mx.className = 'mistero';
        mx.style.fontSize = '1.6rem';
        mx.textContent = livello.mistero ? '🤫' : '✨';
        al.appendChild(mx);
        ante.appendChild(al);
      }
      const p = document.createElement('p');
      p.textContent = livello.desc;
      const stelle = document.createElement('div');
      stelle.className = 'stelle';
      stelle.textContent = livello.libero ? '' : stelleLivello(livello) + ' / ' + stelleMassime(livello) + ' ⭐';
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn-gioca';
      btn.textContent = livello.libero ? 'Disegna! 🖌️' : 'Gioca! ▶';
      btn.addEventListener('click', () => apriLivello(livello.id));
      card.append(h3, badgia, ante, p, stelle, btn);
      wrap.appendChild(card);
    });
  }

  function etichetta(disegno) {
    return disegno.stagione || disegno.festa || '';
  }

  function apriLivello(id) {
    state.livello = ALL_LEVELS.find((l) => l.id === id);
    $('#livello-titolo').textContent = state.livello.emoji + ' ' + state.livello.classe;
    $('#livello-desc').textContent = state.livello.desc;
    const wrap = $('#disegni');
    wrap.innerHTML = '';
    state.livello.disegni.forEach((disegno, i) => {
      const card = document.createElement('article');
      card.className = 'card scelta';
      card.style.setProperty('--colore-livello', state.livello.colore);
      card.appendChild(creaAnteprima(disegno, state.livello.mistero && !disegno.libero));
      const h3 = document.createElement('h3');
      h3.textContent = state.livello.mistero && !disegno.libero ? 'Disegno misterioso' : disegno.nome;
      const tag = state.livello.mistero && !disegno.libero ? '' : etichetta(disegno);
      if (tag) {
        const pil = document.createElement('span');
        pil.className = 'pillola-tag';
        pil.textContent = tag;
        card.appendChild(pil);
      }
      const p = leggiStelle();
      const stelle = document.createElement('div');
      stelle.className = 'stelle';
      stelle.textContent = stelleTesto(p[state.livello.id + ':' + i] || 0);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn-gioca';
      btn.textContent = 'Colora! 🖌️';
      btn.addEventListener('click', () => apriDisegno(i));
      card.append(h3, stelle, btn);
      wrap.appendChild(card);
    });
    mostra('livello');
  }

  function apriDisegno(idx) {
    state.idx = idx;
    state.disegno = state.livello.disegni[idx];
    state.scelto = null;
    state.giusti = 0;
    state.err = 0;
    state.vinto = false;
    state.totale = state.disegno.griglia.join('').split('').filter((c) => c !== '.').length;
    $('#disegno-nome').textContent = state.livello.mistero && !state.disegno.libero
      ? '🎨 Disegno misterioso!'
      : '🎨 ' + state.disegno.nome + (etichetta(state.disegno) ? '  ' + etichetta(state.disegno) : '');
    costruisciTavolozza();
    costruisciGriglia();
    aggiornaAvanzamento();
    $('#btn-salva').classList.toggle('nascosta', !state.disegno.libero);
    $('#btn-modello').classList.toggle('nascosta', !!state.disegno.libero);
    $('#btn-aiuto').classList.toggle('nascosta', !!state.disegno.libero);
    $('#avanzamento').classList.toggle('nascosta', !!state.disegno.libero);
    messaggio(state.disegno.libero
      ? 'Scegli un colore e crea il tuo capolavoro! ✨'
      : 'Scegli un colore dalla tavolozza e riempi le caselle giuste! 💪', '');
    mostra('gioco');
  }

  function costruisciTavolozza() {
    const tav = $('#tavolozza');
    tav.innerHTML = '';
    const gomma = document.createElement('button');
    gomma.type = 'button';
    gomma.className = 'colore-btn';
    gomma.dataset.scelta = 'gomma';
    gomma.innerHTML = '<span class="campione" style="background:#fff;color:#33334d;">🧽</span> Gomma';
    gomma.addEventListener('click', () => seleziona('gomma'));
    tav.appendChild(gomma);
    Object.keys(state.disegno.simboli).forEach((sym) => {
      const col = state.disegno.simboli[sym];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'colore-btn';
      btn.dataset.scelta = sym;
      btn.innerHTML = '<span class="campione" style="background:' + col.hex + ';color:' + testoSu(col.hex) + ';">' + sym + '</span> ' + col.nome;
      btn.addEventListener('click', () => seleziona(sym));
      tav.appendChild(btn);
    });
    seleziona(Object.keys(state.disegno.simboli)[0]);
  }

  function seleziona(sym) {
    state.scelto = sym;
    document.querySelectorAll('.colore-btn').forEach((b) => {
      b.classList.toggle('attivo', b.dataset.scelta === sym);
    });
  }

  function costruisciGriglia() {
    const g = $('#griglia');
    const d = state.disegno;
    g.innerHTML = '';
    g.style.setProperty('--cols', d.griglia[0].length);
    const frag = document.createDocumentFragment();
    d.griglia.forEach((riga, r) => {
      riga.split('').forEach((sym, c) => {
        const cella = document.createElement('button');
        cella.type = 'button';
        cella.className = 'cell' + (sym === '.' ? ' vuota' : '');
        cella.dataset.r = String(r);
        cella.dataset.c = String(c);
        cella.dataset.sym = sym;
        cella.textContent = sym === '.' ? '' : sym;
        cella.addEventListener('click', () => suCella(cella));
        frag.appendChild(cella);
      });
    });
    g.appendChild(frag);
    if (typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(() => {
        const prima = g.firstElementChild;
        if (prima) {
          const larg = prima.getBoundingClientRect().width;
          g.style.fontSize = Math.max(10, Math.round(larg * 0.55)) + 'px';
        }
      });
    }
  }

  function cellaIn(r, c) {
    const g = $('#griglia');
    const cols = Number(g.style.getPropertyValue('--cols'));
    return g.children[r * cols + c];
  }

  function dipingi(cella, sym) {
    cella.dataset.fill = sym;
    cella.classList.add('piena');
    cella.style.background = state.disegno.simboli[sym].hex;
  }

  function svota(cella) {
    delete cella.dataset.fill;
    cella.classList.remove('piena');
    cella.style.background = '';
    if (!state.disegno.libero) state.giusti--;
  }

  function scuoti(cella) {
    cella.classList.remove('err');
    void cella.offsetWidth;
    cella.classList.add('err');
  }

  function suCella(cella) {
    const d = state.disegno;
    const sym = cella.dataset.sym;
    const piena = !!cella.dataset.fill;
    const scelto = state.scelto;

    if (scelto === 'gomma') {
      if (piena) {
        svota(cella);
        nota(300, 0.08);
        aggiornaAvanzamento();
      }
      return;
    }

    if (!scelto) {
      messaggio('Prima scegli un colore nella tavolozza! 👈', 'aiuto');
      return;
    }

    if (d.libero) {
      if (piena && cella.dataset.fill === scelto) {
        svota(cella);
        nota(300, 0.08);
      } else {
        dipingi(cella, scelto);
        sfx.ok();
      }
      return;
    }

    if (sym === '.') {
      if (!piena) {
        state.err++;
        scuoti(cella);
        sfx.no();
        messaggio('Questa casella è <b>bianca</b>: qui non si colora! Cerca le caselle che hanno un simbolo dentro. 🙂', 'errore');
      }
      return;
    }

    if (piena && cella.dataset.fill === scelto) return;

    if (scelto === sym) {
      dipingi(cella, scelto);
      state.giusti++;
      sfx.ok();
      if (state.giusti % 5 === 0) {
        messaggio('Hai colorato ' + state.giusti + ' caselle! ' + frase(), 'ok');
      }
      aggiornaAvanzamento();
      controllaVittoria();
    } else {
      state.err++;
      scuoti(cella);
      sfx.no();
      const voluto = d.simboli[sym];
      const preso = d.simboli[scelto];
      const tipoSimbolo = /^[0-9]$/.test(sym) ? 'il numero' : 'la lettera';
      const tipoScelto = /^[0-9]$/.test(scelto) ? 'il numero' : 'la lettera';
      messaggio('💡 Quasi! Questa casella ha ' + tipoSimbolo + ' <b>' + sym + '</b>, che è di colore <b>' + voluto.nome + '</b>. Tu hai scelto ' + tipoScelto + ' <b>' + scelto + '</b> (' + preso.nome + '). Guarda la legenda e riprova! 🎯', 'errore');
    }
  }

  function aggiornaAvanzamento() {
    if (state.disegno.libero) return;
    const pct = state.totale ? Math.round((state.giusti / state.totale) * 100) : 0;
    $('#barra').style.width = pct + '%';
    $('#conteggio').textContent = 'Caselle colorate: ' + state.giusti + ' su ' + state.totale + ' · Errori: ' + state.err;
  }

  function controllaVittoria() {
    if (state.vinto) return;
    if (state.giusti !== state.totale) return;
    const celle = document.querySelectorAll('#griglia .cell');
    for (const cella of celle) {
      if (cella.dataset.sym === '.' && cella.dataset.fill) return;
    }
    vittoria();
  }

  function vittoria() {
    state.vinto = true;
    sfx.vittoria();
    const stelle = state.err <= 2 ? 3 : state.err <= 6 ? 2 : 1;
    salvaStelle(state.livello.id + ':' + state.idx, stelle);
    const idxNext = ALL_LEVELS.indexOf(state.livello) + 1;
    const prossimo = idxNext < ALL_LEVELS.length ? ALL_LEVELS[idxNext] : null;
    const box = $('#modal-box');
    box.innerHTML = '';
    const chiudi = document.createElement('button');
    chiudi.type = 'button';
    chiudi.className = 'chiudi';
    chiudi.textContent = '✕';
    chiudi.addEventListener('click', chiudiModal);
    box.appendChild(chiudi);
    const h2 = document.createElement('h2');
    h2.textContent = '🎉 Che capolavoro!';
    box.appendChild(h2);
    const nome = document.createElement('p');
    nome.style.fontWeight = '800';
    nome.textContent = 'Hai completato: ' + state.disegno.nome;
    box.appendChild(nome);
    const st = document.createElement('div');
    st.className = 'stelle-grandi';
    st.textContent = '⭐'.repeat(stelle);
    box.appendChild(st);
    const note = document.createElement('p');
    note.innerHTML = 'Errori: <b>' + state.err + '</b><br>' + (stelle === 3
      ? 'Perfetto! Occhio da vero artista! 🎨'
      : stelle === 2
        ? 'Bravissimo! Con un po\' più di attenzione prenderai 3 stelle! 💪'
        : ' Prima di colorare, guarda bene la legenda: la prossima volta andrà ancora meglio! 🙂');
    note.className = 'legenda';
    box.appendChild(note);
    const ante = creaAnteprima(state.disegno, false);
    ante.style.marginBottom = '4px';
    box.appendChild(ante);
    const legenda = document.createElement('p');
    legenda.className = 'legenda';
    legenda.textContent = state.livello.mistero ? 'Ecco il disegno misterioso che hai scoperto! 🤫' : 'Ecco il tuo disegno finito!';
    box.appendChild(legenda);
    const riga = document.createElement('div');
    riga.className = 'riga-btn';
    const bRigioca = document.createElement('button');
    bRigioca.type = 'button';
    bRigioca.className = 'btn-gioca';
    bRigioca.textContent = 'Rigioca 🔁';
    bRigioca.style.setProperty('--colore-livello', state.livello.colore);
    bRigioca.addEventListener('click', () => { chiudiModal(); apriDisegno(state.idx); });
    riga.appendChild(bRigioca);
    const bAltri = document.createElement('button');
    bAltri.type = 'button';
    bAltri.className = 'btn-gioca';
    bAltri.textContent = 'Altri disegni 🖼️';
    bAltri.style.setProperty('--colore-livello', state.livello.colore);
    bAltri.addEventListener('click', () => { chiudiModal(); apriLivello(state.livello.id); });
    riga.appendChild(bAltri);
    if (prossimo) {
      const bNext = document.createElement('button');
      bNext.type = 'button';
      bNext.className = 'btn-gioca';
      bNext.textContent = 'Vai a: ' + prossimo.classe + ' ➡️';
      bNext.style.setProperty('--colore-livello', prossimo.colore);
      bNext.addEventListener('click', () => { chiudiModal(); apriLivello(prossimo.id); });
      riga.appendChild(bNext);
    }
    box.appendChild(riga);
    $('#modal').classList.remove('nascosta');
    coriandoli();
  }

  function coriandoli() {
    const wrap = $('#coriandoli');
    const colori = ['#e5383b', '#ffd60a', '#57cc99', '#4cc9f0', '#9d4edd', '#ff8fab'];
    for (let i = 0; i < 80; i++) {
      const p = document.createElement('span');
      p.className = 'pezzo';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.background = colori[i % colori.length];
      p.style.animationDelay = (Math.random() * 1.2) + 's';
      p.style.animationDuration = (2.6 + Math.random() * 1.6) + 's';
      wrap.appendChild(p);
      setTimeout(() => p.remove(), 5000);
    }
  }

  function chiudiModal() {
    $('#modal').classList.add('nascosta');
  }

  function apriAiuto() {
    if (state.disegno.libero) return;
    if (!state.scelto || state.scelto === 'gomma') {
      messaggio('Scegli un colore, poi usa l\'aiutino! 💡', 'aiuto');
      return;
    }
    const sym = state.scelto;
    const bersagli = [];
    document.querySelectorAll('#griglia .cell').forEach((cella) => {
      if (cella.dataset.sym === sym && !cella.dataset.fill) bersagli.push(cella);
    });
    if (!bersagli.length) {
      messaggio('Tutte le caselle "' + sym + '" (' + state.disegno.simboli[sym].nome + ') sono già a posto! 🎉', 'ok');
      return;
    }
    bersagli.forEach((c) => c.classList.add('aiuto'));
    setTimeout(() => bersagli.forEach((c) => c.classList.remove('aiuto')), 2500);
    messaggio('Fai brillare le caselle "' + sym + '" per 3 secondi: colorale con il ' + state.disegno.simboli[sym].nome + '! 💡', 'aiuto');
  }

  function apriModello() {
    const d = state.disegno;
    if (d.libero) return;
    const box = $('#modal-box');
    box.innerHTML = '';
    const chiudi = document.createElement('button');
    chiudi.type = 'button';
    chiudi.className = 'chiudi';
    chiudi.textContent = '✕';
    chiudi.addEventListener('click', chiudiModal);
    box.appendChild(chiudi);
    const h2 = document.createElement('h2');
    h2.textContent = '👀 Il modello';
    box.appendChild(h2);
    box.appendChild(creaAnteprima(d, state.livello.mistero));
    const p = document.createElement('p');
    p.className = 'legenda';
    p.textContent = state.livello.mistero
      ? '🤫 Il disegno è un mistero! Le caselle vuote (punteggiate) restano bianche: le altre andranno colorate.'
      : 'Guarda bene i colori, poi torna al gioco. Rivedilo quando vuoi! 🙂';
    box.appendChild(p);
    $('#modal').classList.remove('nascosta');
  }

  function salvaPNG() {
    const d = state.disegno;
    const cols = d.griglia[0].length;
    const righe = d.griglia.length;
    const s = 32;
    const cv = document.createElement('canvas');
    cv.width = cols * s;
    cv.height = righe * s;
    const cx = cv.getContext('2d');
    cx.fillStyle = '#ffffff';
    cx.fillRect(0, 0, cv.width, cv.height);
    for (let r = 0; r < righe; r++) {
      for (let c = 0; c < cols; c++) {
        const cella = cellaIn(r, c);
        if (cella && cella.dataset.fill) {
          cx.fillStyle = d.simboli[cella.dataset.fill].hex;
          cx.fillRect(c * s, r * s, s, s);
        }
      }
    }
    const a = document.createElement('a');
    a.href = cv.toDataURL('image/png');
    a.download = 'pixel-art.png';
    a.click();
  }

  $('#btn-home').addEventListener('click', () => { renderHome(); mostra('home'); });
  $('#btn-disegni').addEventListener('click', () => apriLivello(state.livello.id));
  $('#btn-aiuto').addEventListener('click', apriAiuto);
  $('#btn-modello').addEventListener('click', apriModello);
  $('#btn-salva').addEventListener('click', salvaPNG);
  $('#btn-sound').addEventListener('click', () => {
    state.muto = !state.muto;
    localStorage.setItem('pixelkids-muto', state.muto ? '1' : '0');
    $('#btn-sound').textContent = state.muto ? '🔇' : '🔊';
    if (!state.muto) sfx.doppio();
  });
  $('#modal').addEventListener('click', (e) => {
    if (e.target === $('#modal')) chiudiModal();
  });
  $('#btn-sound').textContent = state.muto ? '🔇' : '🔊';

  renderHome();
  mostra('home');
})();
