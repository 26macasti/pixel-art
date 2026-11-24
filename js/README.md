# 🌈 Pixel Art — Primaria di Barrali

Un laboratorio di **pixel art digitali** pensato per i bambini della **scuola primaria (dalla 1ª alla 5ª classe)**: si sceglie il livello della propria classe, si prende un colore dalla tavolozza e si riempiono le caselle seguendo i simboli. Se si sbaglia, l'app **non punisce**: spiega con gentilezza cosa non va e come capire l'errore.

👉 **Gioca subito:** [https://26macasti.github.io/pixel-art/](https://26macasti.github.io/pixel-art/)

Nessuna installazione necessaria: funziona nel browser su **LIM (lavagna interattiva)**, computer e tablet.

## 🎮 Come si gioca

1. Dalla **home**, scegli la scheda della tua classe (o il "Disegno libero").
2. Scegli un disegno: ogni disegno è una griglia di caselle con dentro un **simbolo** (un numero o una lettera).
3. Nella **tavolozza** ogni colore mostra il simbolo a cui corrisponde: clicca il colore e poi le caselle con lo stesso simbolo.
4. Le caselle **punteggiate e vuote** sono bianche: non si colorano!
5. Completa il disegno per ricevere le **stelle** (fino a 3) e scoprire il disegno finito.

### Strumenti a disposizione

| Strumento | A cosa serve |
| --- | --- |
| 🧽 **Gomma** | Cancella un colore sbagliato per rifare la casella |
| 💡 **Aiutino** | Fa lampeggiare per 3 secondi tutte le caselle del colore scelto |
| 👀 **Modello** | Mostra il disegno finito (nel livello mistero mostra solo la forma!) |
| 💾 **Salva** | Nel disegno libero scarica il capolavoro come immagine PNG |
| 🔊 / 🔇 | Attiva o disattiva i suoni |

## 📈 Difficoltà progressiva

| Livello | Griglia | Simboli | Colori | Abilità allenate |
| --- | --- | --- | --- | --- |
| 🌱 **Classe 1ª** — Facile | 6–8 caselle | Numeri | 2–4 + bianco | Cuore, Fiore, Sole ☀️, Foglia 🍂, Zucca 🎃, Mela 🍂, Pesce 🌊 |
| 🚀 **Classe 2ª** — Facile + | 8 caselle | Numeri | 3–5 + bianco | Casetta, Razzo, Albero di Natale 🎄, Pupazzo di Neve ❄️, Fragola 🌸 |
| 🐾 **Classe 3ª** — Medio | 9–11 caselle | Numeri | 3–5 | Gatto, Barca, Gelato ☀️, Uovo di Pasqua 🐣, Sottomarino 🌊, Girasole 🍂 |
| 🏰 **Classe 4ª** — Impegnativo | 9–12 caselle | **Lettere** | 3–5 | Castello, Farfalla, Pagliaccio 🎉, Cuore Grande 💘, Corona 👑, Fungo 🍄 |
| ❓ **Classe 5ª** — Esperto | 11–14 caselle | Lettere | 3–4 + **mistero** | Delfino, Pinguino, Babbo Natale 🎅, Zucca Grande 🎃, Montagna ❄️, Tramonto ☀️ |
| 🎨 **Disegno libero** | 16 caselle | — | 9 colori | Creatività ed espressione libera |

Ogni scheda mostra una **etichetta** con la stagione o la festività: ☀️ Estate, 🍂 Autunno, ❄️ Inverno, 🌸 Primavera, 🌊 Mare, 🍄 Fungo, 🎄/🎅 Natale (mistero!), 🎃 Halloween, 🐣 Pasqua, 🎉 Carnevale, 💘 S. Valentino, 👑 Epifania.

## 🩹 La spiegazione dell'errore

Gli errori sono un'occasione di apprendimento, non una penalità:

- **Casella colorata con il colore sbagliato** → la casella "trema" e appare un messaggio del tipo: *"💡 Quasi! Questa casella ha il numero **3**, che è di colore **Verde**. Tu hai scelto il numero **4** (Azzurro). Guarda la legenda e riprova! 🎯"*
- **Casella bianca colorata per sbaglio** → *"Questa casella è **bianca**: qui non si colora! Cerca le caselle che hanno un simbolo dentro."*
- **Progresso in tempo reale**: una barra verde cresce a ogni casella corretta, con incoraggiamenti ogni 5 caselle.
- **Stelle senza ansia**: 3 stelle con 0–2 errori, 2 stelle con 3–6 errori, 1 stella comunque: il disegno si completa sempre e si festeggia sempre! 🎉

## 💡 Suggerimenti per insegnanti e famiglie

- **Dalla 1ª alla 2ª**: fate leggere a voce alta la legenda insieme ("Trova tutte le caselle col numero 1… quale colore è?"). Potente per la discriminazione visiva e la conta.
- **Sulla LIM**: proiettate l'app e fate venire un bambino alla volta a colorare una casella: il resto della classe guida "più in alto! col rosso!".
- **A coppie**: un bambino legge il simbolo, l'altro verifica il colore: si allenano dialogo e controllo incrociato.
- **Classe 3ª–4ª**: chiedete di stimare prima quante caselle servono per ogni colore (subitizzo e stima di quantità).
- **Classe 5ª (mistero)**: è un vero esercizio di aspettativa e controllo d'impulso: vietato sbirciare il modello… anche all'insegnante! 😄
- **Disegno libero**: perfetto come ricompensa o come attività di conclusione: si può salvare il PNG e stamparlo per un "galleria di classe".
- **Simmetria**: i disegni (cuore, farfalla, castello…) sono quasi tutti simmetrici: fateli osservare e completare i bambini chiedendo "cosa cambierebbe se colorassi solo metà?" .
- I progressi (stelle) restano salvati nel **browser locale** del dispositivo usato.

## 🚀 Come funziona / come pubblicarla

Il progetto è un sito **statico**: HTML + CSS + JavaScript vanilla, senza librerie e senza build.

- In locale: basta aprire `index.html` nel browser.
- In rete (GitHub Pages): il sito è già pubblicato all'indirizzo [https://26macasti.github.io/pixel-art/](https://26macasti.github.io/pixel-art/).
  Per attivarlo di nuovo: `Settings → Pages → Source: Deploy from a branch → main → / (root)`.

### Struttura del progetto

```
pixel-art/
├── index.html      ↳ la pagina dell'app
├── style.css       ↳ lo stile (colori, griglia, animazioni)
└── js/
    ├── levels.js   ↳ i disegni, i livelli e i colori (facile da ampliare!)
    └── app.js      ↳ la logica del gioco
```

### Aggiungere un nuovo disegno

In `js/levels.js` aggiungete un oggetto a `disegni` di un livello: `griglia` è un array di righe di uguale lunghezza (ogni carattere è una casella: `.` = bianco, altri simboli = colori in `simboli`):

```js
{
  nome: 'La Mela',
  simboli: { '1': COL.rosso, '2': COL.verde, '3': COL.marrone },
  griglia: [
    '.....2.', '...222.', '..22222', '..2222.',
    '.11111.', '1111111', '1111111', '.11111.',
    '331111.', '3.111..'
  ]
}
```

## 📄 Licenza

Distribuito con licenza MIT: vedi il file [LICENSE](LICENSE).
