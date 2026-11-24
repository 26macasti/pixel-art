const COL = {
  rosso: { nome: 'Rosso', hex: '#e5383b' },
  rosa: { nome: 'Rosa', hex: '#ff8fab' },
  giallo: { nome: 'Giallo', hex: '#ffd60a' },
  verde: { nome: 'Verde', hex: '#57cc99' },
  azzurro: { nome: 'Azzurro', hex: '#4cc9f0' },
  azzurrochiaro: { nome: 'Azzurro chiaro', hex: '#89d2f4' },
  viola: { nome: 'Viola', hex: '#9d4edd' },
  arancio: { nome: 'Arancio', hex: '#ff8500' },
  marrone: { nome: 'Marrone', hex: '#8d5524' },
  grigio: { nome: 'Grigio', hex: '#adb5bd' },
  nero: { nome: 'Nero', hex: '#212529' },
  bianco: { nome: 'Bianco', hex: '#eceff4' },
  blu: { nome: 'Blu', hex: '#3a86ff' },
  pelle: { nome: 'Pelle', hex: '#f1c27d' }
};

const LEVELS = [
  {
    id: 'cl1',
    classe: 'Classe 1ª',
    difficolta: 'Facile',
    emoji: '🌱',
    colore: '#57cc99',
    desc: 'Griglie piccole e pochi colori. Segui i numeri: ogni numero ha il suo colore!',
    mistero: false,
    disegni: [
      {
        nome: 'Il Cuore',
        simboli: { '1': COL.rosso, '2': COL.rosa },
        griglia: [
          '.2..2.',
          '222222',
          '221122',
          '.2222.',
          '..22..',
          '......'
        ]
      },
      {
        nome: 'Il Fiore',
        simboli: { '1': COL.viola, '2': COL.giallo, '3': COL.verde },
        griglia: [
          '..111..',
          '.11111.',
          '.11211.',
          '1122211',
          '.11211.',
          '..111..',
          '.3.3.3.'
        ]
      },
      {
        nome: 'Il Sole',
        stagione: '☀️ Estate',
        simboli: { '1': COL.giallo },
        griglia: [
          '...1...',
          '..111..',
          '1111111',
          '1111111',
          '1111111',
          '..111..',
          '...1...'
        ]
      },
      {
        nome: 'La Foglia',
        stagione: '🍂 Autunno',
        simboli: { '1': COL.arancio, '2': COL.verde },
        griglia: [
          '....1..',
          '...111.',
          '..11111',
          '1111111',
          '.11111.',
          '..111..',
          '...2...'
        ]
      },
      {
        nome: 'La Zucca',
        festa: '🎃 Halloween',
        simboli: { '1': COL.arancio, '2': COL.verde, '3': COL.nero },
        griglia: [
          '...2...',
          '.11111.',
          '1111111',
          '1311131',
          '1111111',
          '1333331',
          '.11111.'
        ]
      },
      {
        nome: 'La Mela',
        stagioneTag: '🍂 Autunno',
        simboli: { '1': COL.rosso, '2': COL.verde },
        griglia: [
          '....2...',
          '..1111..',
          '.111111.',
          '11111111',
          '11111111',
          '.111111.',
          '..1111..'
        ]
      },
      {
        nome: 'Il Pesce',
        stagioneTag: '🌊 Estate',
        simboli: { '1': COL.azzurro, '2': COL.giallo, '3': COL.nero, '4': COL.rosa },
        griglia: [
          '.....4..',
          '..1111..',
          '.11111.2',
          '13111122',
          '1111112.',
          '.11111..',
          '.....4..'
        ]
      },
    ]
  },
  {
    id: 'cl2',
    classe: 'Classe 2ª',
    difficolta: 'Facile +',
    emoji: '🚀',
    colore: '#4cc9f0',
    desc: "La griglia diventa più grande (8 caselle) e arrivano più colori. Osserva bene la legenda!",
    mistero: false,
    disegni: [
      {
        nome: 'La Casetta',
        simboli: { '1': COL.rosso, '2': COL.marrone, '3': COL.giallo, '4': COL.azzurro, '5': COL.verde },
        griglia: [
          '...11...',
          '..1111..',
          '.111111.',
          '11111111',
          '.333333.',
          '.344322.',
          '.344322.',
          '55555555'
        ]
      },
      {
        nome: 'Il Razzo',
        simboli: { '1': COL.rosso, '2': COL.grigio, '3': COL.azzurro, '4': COL.arancio },
        griglia: [
          '...11...',
          '...11...',
          '..2222..',
          '..2332..',
          '..2332..',
          '..2222..',
          '.1.22.1.',
          '44.44.44'
        ]
      },
      {
        nome: "L'Albero di Natale",
        festa: '🎄 Natale',
        simboli: { '1': COL.verde, '2': COL.giallo, '3': COL.marrone },
        griglia: [
          '....2...',
          '..1111..',
          '..1111..',
          '.111111.',
          '.111111.',
          '11111111',
          '...11...',
          '..3333..'
        ]
      },
      {
        nome: 'Il Pupazzo di Neve',
        stagione: '❄️ Inverno',
        simboli: { '1': COL.rosso, '2': COL.bianco, '3': COL.nero, '4': COL.arancio },
        griglia: [
          '..1111..',
          '.111111.',
          '.222222.',
          '.232232.',
          '.224422.',
          '.111111.',
          '22322322',
          '.222222.'
        ]
      },
      {
        nome: 'La Fragola',
        stagioneTag: '🌸 Primavera',
        simboli: { '1': COL.rosso, '2': COL.verde, '3': COL.giallo },
        griglia: [
          '..2222..',
          '.222222.',
          '..1111..',
          '.131131.',
          '11311311',
          '.131131.',
          '..1111..',
          '...11...'
        ]
      },
    ]
  },
  {
    id: 'cl3',
    classe: 'Classe 3ª',
    difficolta: 'Medio',
    emoji: '🐾',
    colore: '#ffd60a',
    desc: 'Griglia da 10 caselle e fino a 5 colori. Serve tanto occhio!',
    mistero: false,
    disegni: [
      {
        nome: 'Il Gatto',
        simboli: { '1': COL.arancio, '2': COL.verde, '3': COL.rosa },
        griglia: [
          '11......11',
          '1111..1111',
          '1111111111',
          '1122112211',
          '1122112211',
          '1111331111',
          '1111111111',
          '1111111111',
          '.11111111.',
          '..111111..'
        ]
      },
      {
        nome: 'La Barca',
        simboli: { '1': COL.marrone, '2': COL.giallo, '3': COL.rosso, '4': COL.azzurro },
        griglia: [
          '....1.....',
          '....13....',
          '....133...',
          '....1333..',
          '....133333',
          '....1.....',
          '.2222222..',
          '..222222..',
          '4444444444',
          '4444444444'
        ]
      },
      {
        nome: 'Il Gelato',
        stagione: '☀️ Estate',
        simboli: { '1': COL.rosa, '2': COL.giallo, '3': COL.marrone, '4': COL.rosso },
        griglia: [
          '....4....',
          '...111...',
          '..11111..',
          '.1111111.',
          '..22222..',
          '.2222222.',
          '.3333333.',
          '..33333..',
          '...333...',
          '....3....'
        ]
      },
      {
        nome: "L'Uovo di Pasqua",
        festa: '🐣 Pasqua',
        simboli: { '1': COL.viola, '2': COL.giallo, '3': COL.rosa },
        griglia: [
          '....1....',
          '...131...',
          '..11211..',
          '.1122211.',
          '112222211',
          '112323211',
          '112222211',
          '.1122211.',
          '..11211..',
          '...111...',
          '....1....'
        ]
      },
      {
        nome: 'Il Sottomarino',
        stagioneTag: '🌊 Estate',
        simboli: { '1': COL.giallo, '2': COL.rosso, '3': COL.azzurro, '4': COL.grigio },
        griglia: [
          '.....22...',
          '..222222..',
          '4111111114',
          '4133113314',
          '1111111111',
          '.11111111.',
          '....4.....',
          '.4......4.'
        ]
      },
      {
        nome: 'Il Girasole',
        stagioneTag: '🍂 Autunno',
        simboli: { '1': COL.giallo, '2': COL.marrone, '3': COL.verde },
        griglia: [
          '..111111..',
          '.11111111.',
          '1111111111',
          '1112222111',
          '1112222111',
          '1111111111',
          '.11111111.',
          '..111111..',
          '.....3....',
          '..3.3.3...'
        ]
      },
    ]
  },
  {
    id: 'cl4',
    classe: 'Classe 4ª',
    difficolta: 'Impegnativo',
    emoji: '🏰',
    colore: '#9d4edd',
    desc: 'Ora i simboli sono LETTERE! Griglia da 12 caselle e 5 colori: la legenda è la tua amica.',
    mistero: false,
    disegni: [
      {
        nome: 'Il Castello',
        simboli: { A: COL.grigio, B: COL.marrone, C: COL.verde, D: COL.giallo },
        griglia: [
          'AA.AA..AA.AA',
          'AA.AAAAAA.AA',
          'AAAAAAAAAAAA',
          'ADAAAAAAAAAD',
          'AAAAAAAAAAAA',
          'AAAAABBAAAAA',
          'AAAAABBAAAAA',
          'AAAAABBAAAAA',
          'AAAAAAAAAAAA',
          'CCCCCCCCCCCC',
          'CCCCCCCCCCCC',
          'CCCCCCCCCCCC'
        ]
      },
      {
        nome: 'La Farfalla',
        simboli: { A: COL.viola, B: COL.giallo, C: COL.nero, D: COL.azzurro, E: COL.rosa },
        griglia: [
          'AA........AA',
          'AAAA....AAAA',
          'ABAA....AABA',
          'AAAAACCAAAAA',
          'AADAACCAADAA',
          'EAAAACCAAAAE',
          'AAAAACCAAAAA',
          'AAAD.CC.DAAA',
          'AAAA.CC.AAAA',
          'AA...CC...AA',
          '.....CC.....',
          '..C......C..'
        ]
      },
      {
        nome: 'Il Pagliaccio',
        festa: '🎉 Carnevale',
        simboli: { A: COL.rosso, B: COL.blu, C: COL.bianco, D: COL.giallo, E: COL.nero },
        griglia: [
          '.B........B.',
          '.BB......BB.',
          'BBBBBBBBBBBB',
          'CCCCCCCCCCCC',
          'CCCECCCCCECC',
          'CCCCCCCCCCCC',
          'CCCCCAACCCCC',
          'CCCCEEEECCCC',
          'CCCCCCCCCCCC',
          '.DDDDDDDDDD.',
          'DDDDDDDDDDDD',
          '.D.DD..DD.D.'
        ]
      },
      {
        nome: 'Il Cuore Grande',
        festa: '💘 S. Valentino',
        simboli: { A: COL.rosso, B: COL.rosa, C: COL.bianco },
        griglia: [
          '..AA....AA..',
          '.ACAAAAAAAA.',
          'AAAABBBBAAAA',
          'AAAABBBBAAAA',
          'AAAABBBBAAAA',
          'AAAAAAAAAAAA',
          'AAAAAAAAAAAA',
          'AAAAAAAAAAAA',
          '.AAAAAAAAAA.',
          '..AAAAAAAA..',
          '...AAAAAA...',
          '....AAAA....'
        ]
      },
      {
        nome: 'La Corona',
        festaTag: '👑 Epifania',
        simboli: { A: COL.giallo, B: COL.rosso, C: COL.azzurro, D: COL.verde, E: COL.rosa },
        griglia: [
          '.A...AA...A.',
          'A.A..AA..A.A',
          'AAEAAAAAAEAA',
          'AABAAAAAABAA',
          'AADAAAAAADAA',
          'AACAAAAAACAA',
          'AAAAAAAAAAAA',
          'AAAAAAAAAAAA',
          '.AAAAAAAAAA.'
        ]
      },
      {
        nome: 'Il Fungo',
        stagioneTag: '🍄 Autunno',
        simboli: { A: COL.rosso, B: COL.bianco, C: COL.pelle, D: COL.verde },
        griglia: [
          '....AAAA....',
          '..AAAAAAAA..',
          '.AAAAAAAAAA.',
          'AABAABBAABAA',
          'AAAAAAAAAAAA',
          '.AAAAAAAAAA.',
          '..CCCCCCCC..',
          '..CCCCCCCC..',
          '..CCCCCCCC..',
          '..DDDDDDDD..',
          '.DDDDDDDDDD.',
          'DDDDDDDDDDDD'
        ]
      },
    ]
  },
  {
    id: 'cl5',
    classe: 'Classe 5ª',
    difficolta: 'Esperto',
    emoji: '❓',
    colore: '#e5383b',
    desc: 'Attenzione: MISTERO! Griglia grande e lettere come gli esperti, ma il disegno si rivela solo alla fine!',
    mistero: true,
    disegni: [
      {
        nome: 'Il Delfino',
        simboli: { A: COL.azzurro, B: COL.azzurrochiaro, C: COL.nero },
        griglia: [
          '............AA',
          '..........AAAA',
          '.........AAAAA',
          '....AAAAAAAAAA',
          '..AAAAAAAAAAAA',
          '..AAAAAAAACAAA',
          '.ABBBBBBBBBAAA',
          '.ABBBBBBBBAAA.',
          'A.BBBBBB..AA..',
          'AA...BB....A..',
          'A.............'
        ]
      },
      {
        nome: 'Il Pinguino',
        simboli: { A: COL.nero, B: COL.bianco, C: COL.arancio },
        griglia: [
          '....AAAA....',
          '...AAAAAA...',
          '..AAAAAAAA..',
          '..AAAAAAAA..',
          '..AABAABAA..',
          '..AAACCAAA..',
          '..ABBBBBBA..',
          '.ABBBBBBBBA.',
          '.ABBBBBBBBA.',
          '.ABBBBBBBBA.',
          '..AAAAAAAA..',
          '...CC..CC...'
        ]
      },
      {
        nome: 'Babbo Natale',
        festa: '🎅 Natale',
        simboli: { A: COL.rosso, B: COL.bianco, C: COL.pelle, D: COL.nero },
        griglia: [
          '...AAAAAA...',
          '..AAAAAAAA..',
          '.BBBBBBBBBB.',
          '...CCCCCC...',
          '...CDCCDC...',
          '...CCAACC...',
          '.BBBBBBBBBB.',
          'BBBBBBBBBBBB',
          'BBBBBBBBBBBB',
          '.AAAAAAAAAA.',
          'AAAAAAAAAAAA',
          'AAADDDDDDAAA'
        ]
      },
      {
        nome: 'La Zucca Grande',
        festa: '🎃 Halloween',
        simboli: { A: COL.arancio, B: COL.verde, C: COL.nero },
        griglia: [
          '......BB......',
          '......BB......',
          '..AAAAAAAAAA..',
          '.AAAAAAAAAAAA.',
          'AAAAAAAAAAAAAA',
          'AACCAAAAAACCAA',
          'AAAAAACCAAAAAA',
          'ACCCCCCCCCCCCA',
          'AAAAAAAAAAAAAA',
          '.AAAAAAAAAAAA.',
          '..AAAAAAAAAA..'
        ]
      },
      {
        nome: 'La Montagna',
        stagioneTag: '❄️ Inverno',
        simboli: { A: COL.grigio, B: COL.azzurro, C: COL.verde },
        griglia: [
          '......AA......',
          '.....AAAA.....',
          '....AAAAAA....',
          '...AAAAAAAA...',
          '..AAAAAAAAAA..',
          '.AAAAAAAAAAAA.',
          'AAAAAAAAAAAAAA',
          'CC..CC..CC..CC',
          'CC..CC..CC..CC',
          'CCCCCCCCCCCCCC',
          'BBBBBBBBBBBBBB'
        ]
      },
      {
        nome: 'Il Tramonto',
        stagioneTag: '☀️ Estate',
        simboli: { A: COL.giallo, B: COL.azzurro, C: COL.marrone },
        griglia: [
          '..............',
          '..............',
          '.....AAA......',
          '....AAAAA.....',
          '....AAAAA.....',
          '.....AAA......',
          'BBBBBBBBBBBBBB',
          'BBBBBBBBBBBBBB',
          'BBBBBBBBBBBBBB',
          '......CC......',
          'AAAAAAAAAAAAAA',
          'AAAAAAAAAAAAAA'
        ]
      },
    ]
  }
];

if (typeof module !== 'undefined') module.exports = { LEVELS };
