export default {
  id: 'dutch',
  title: 'Neerlandés',
  kind: 'lang',
  icon: '🇳🇱',
  flag: 'nl',
  color: '#EA580C',
  lang: 'nl-NL',
  desc: 'Holandés: bicicletas, diseño y el idioma de Países Bajos y Flandes.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: '"Hallo" es hola y "Dank je wel" es gracias (informal). Con desconocidos usá "Dank u wel". La "g" holandesa suena rasposa, como una jota suave.', points: ['Hallo = Hola', 'Dank je wel = Gracias', 'Ja / Nee = Sí / No', 'Ik heet... = Me llamo...'] },
      words: [['hola', 'hallo'], ['gracias', 'dank je'], ['sí', 'ja'], ['no', 'nee'], ['por favor', 'alsjeblieft'], ['adiós', 'tot ziens'], ['amigo', 'vriend'], ['agua', 'water']],
      phrases: [['Me llamo Aki', 'Ik heet Aki'], ['Soy de Argentina', 'Ik kom uit Argentinië'], ['¿Cómo estás?', 'Hoe gaat het?'], ['Bien, gracias', 'Goed, dank je'], ['Mucho gusto', 'Aangenaam']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'Para pedir: "Ik wil graag..." (quisiera). El queso (kaas) y el stroopwafel son clásicos.', points: ['Ik wil graag = Quisiera', 'De rekening = La cuenta', 'Lekker = Rico'] },
      words: [['pan', 'brood'], ['queso', 'kaas'], ['leche', 'melk'], ['café', 'koffie'], ['cerveza', 'bier'], ['rico', 'lekker'], ['cuenta', 'rekening'], ['agua', 'water']],
      phrases: [['Quisiera un café', 'Ik wil graag een koffie'], ['La cuenta, por favor', 'De rekening, alsjeblieft'], ['Está rico', 'Het is lekker'], ['Tengo hambre', 'Ik heb honger']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: '"Ik heb" = tengo. "Mijn" es mi. Los diminutivos con -je son muy holandeses: huisje (casita).', points: ['Moeder / Vader', 'Broer / Zus', 'Ik heb = Tengo'] },
      words: [['madre', 'moeder'], ['padre', 'vader'], ['hermano', 'broer'], ['hermana', 'zus'], ['hijo', 'zoon'], ['hija', 'dochter'], ['perro', 'hond'], ['casa', 'huis']],
      phrases: [['Tengo una hermana', 'Ik heb een zus'], ['Mi padre trabaja', 'Mijn vader werkt'], ['El perro es chico', 'De hond is klein'], ['Vivo en una casa', 'Ik woon in een huis']],
    },
    {
      title: 'En Ámsterdam', level: 'Avanzado',
      guide: { intro: '"Waar is...?" pregunta dónde. La bici es "fiets": en Holanda es el medio de transporte rey.', points: ['Waar is het station?', 'Fiets = bicicleta', 'Vandaag / morgen'] },
      words: [['estación', 'station'], ['bici', 'fiets'], ['calle', 'straat'], ['canal', 'gracht'], ['hoy', 'vandaag'], ['mañana', 'morgen'], ['tren', 'trein'], ['baño', 'toilet']],
      phrases: [['¿Dónde está la estación?', 'Waar is het station?'], ['Voy en bici', 'Ik ga op de fiets'], ['El tren llega hoy', 'De trein komt vandaag'], ['¿Dónde está el baño?', 'Waar is het toilet?']],
    },
  ],
}
