export default {
  id: 'catalan',
  title: 'Catalán',
  kind: 'lang',
  icon: '🟡',
  flag: 'es-ct',
  color: '#EAB308',
  lang: 'ca-ES',
  desc: 'La lengua de Cataluña, Valencia, Baleares y Andorra. Prima hermana del español.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'El catalán se parece al español pero suena distinto: la "a" átona se acerca a una "e". "Hola" es igual. "Si us plau" es por favor.', points: ['Hola = Hola', 'Gràcies = Gracias', 'Sí / No', 'Em dic... = Me llamo...'] },
      words: [['hola', 'hola'], ['gracias', 'gràcies'], ['sí', 'sí'], ['no', 'no'], ['por favor', 'si us plau'], ['adiós', 'adéu'], ['amigo', 'amic'], ['agua', 'aigua']],
      phrases: [['Me llamo Aki', 'Em dic Aki'], ['Soy de Argentina', 'Sóc de l\'Argentina'], ['¿Cómo estás?', 'Com estàs?'], ['Estoy bien, gracias', 'Estic bé, gràcies'], ['Mucho gusto', 'Encantat']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'El pa amb tomàquet es el clásico. Para pedir: "Voldria..." (quisiera).', points: ['Voldria aigua = Quisiera agua', 'Bonic / bo = Rico', 'El compte = La cuenta'] },
      words: [['agua', 'aigua'], ['pan', 'pa'], ['queso', 'formatge'], ['vino', 'vi'], ['café', 'cafè'], ['rico', 'bo'], ['cuenta', 'compte'], ['pescado', 'peix']],
      phrases: [['Quisiera agua', 'Voldria aigua'], ['La cuenta, por favor', 'El compte, si us plau'], ['Está rico', 'És molt bo'], ['Tengo hambre', 'Tinc gana']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: '"Tinc" = tengo. "El meu / la meva" = mi.', points: ['Mare / Pare', 'Germà / Germana', 'Tinc = Tengo'] },
      words: [['madre', 'mare'], ['padre', 'pare'], ['hermano', 'germà'], ['hermana', 'germana'], ['hijo', 'fill'], ['hija', 'filla'], ['perro', 'gos'], ['casa', 'casa']],
      phrases: [['Tengo un hermano', 'Tinc un germà'], ['Mi madre está en casa', 'La meva mare és a casa'], ['El perro es grande', 'El gos és gran'], ['Mi casa es chica', 'Casa meva és petita']],
    },
    {
      title: 'Viaje a Barcelona', level: 'Avanzado',
      guide: { intro: '"On és...?" pregunta dónde. El tren es "tren" y la estación "estació".', points: ['On és l\'estació?', 'Avui / demà = hoy / mañana'] },
      words: [['estación', 'estació'], ['tren', 'tren'], ['calle', 'carrer'], ['ciudad', 'ciutat'], ['hoy', 'avui'], ['mañana', 'demà'], ['hotel', 'hotel'], ['baño', 'bany']],
      phrases: [['¿Dónde está la estación?', 'On és l\'estació?'], ['Viajo mañana', 'Viatjo demà'], ['El tren llega hoy', 'El tren arriba avui'], ['¿Dónde está el baño?', 'On és el bany?']],
    },
  ],
}
