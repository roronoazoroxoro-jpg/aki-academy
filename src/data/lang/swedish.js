export default {
  id: 'swedish',
  title: 'Sueco',
  kind: 'lang',
  icon: '🇸🇪',
  flag: 'se',
  color: '#0284C7',
  lang: 'sv-SE',
  desc: 'El idioma de Suecia: diseño, igualdad y la puerta a Escandinavia.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'En sueco "hej" sirve para hola y a veces para chau. "Tack" es gracias y se usa todo el tiempo. El tono es más plano que el español.', points: ['Hej = Hola', 'Tack = Gracias', 'Ja / Nej = Sí / No', 'Jag heter... = Me llamo...'] },
      words: [['hola', 'hej'], ['gracias', 'tack'], ['sí', 'ja'], ['no', 'nej'], ['por favor', 'snälla'], ['adiós', 'hej då'], ['amigo', 'vän'], ['agua', 'vatten']],
      phrases: [['Me llamo Aki', 'Jag heter Aki'], ['Soy de Argentina', 'Jag kommer från Argentina'], ['¿Cómo estás?', 'Hur mår du?'], ['Estoy bien, gracias', 'Jag mår bra, tack'], ['Mucho gusto', 'Trevligt att träffas']],
    },
    {
      title: 'Comida y fika', level: 'Básico',
      guide: { intro: 'Fika es el ritual sueco del café con algo dulce. No es solo un break: es cultura. "Kanelbulle" es el rollo de canela nacional.', points: ['Fika = café + pausa social', 'Jag vill ha... = Quiero...', 'Gott = Rico', 'Notan = La cuenta'] },
      words: [['café', 'kaffe'], ['pan', 'bröd'], ['leche', 'mjölk'], ['queso', 'ost'], ['agua', 'vatten'], ['rico', 'gott'], ['cuenta', 'nota'], ['té', 'te']],
      phrases: [['Quiero un café', 'Jag vill ha en kaffe'], ['La cuenta, por favor', 'Notan, tack'], ['Está rico', 'Det är gott'], ['Tengo hambre', 'Jag är hungrig'], ['¿Tomamos un fika?', 'Ska vi fika?']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: '"Jag har" significa "tengo". Los posesivos cambian: min (mi, masculino/neutro en algunos casos), mitt, mina.', points: ['Mamma / Pappa', 'Bror / Syster', 'Jag har = Tengo'] },
      words: [['mamá', 'mamma'], ['papá', 'pappa'], ['hermano', 'bror'], ['hermana', 'syster'], ['hijo', 'son'], ['hija', 'dotter'], ['perro', 'hund'], ['casa', 'hus']],
      phrases: [['Tengo un hermano', 'Jag har en bror'], ['Mi perro es grande', 'Min hund är stor'], ['Mi casa es chica', 'Mitt hus är litet'], ['Ella es mi hermana', 'Hon är min syster']],
    },
    {
      title: 'Viaje a Estocolmo', level: 'Avanzado',
      guide: { intro: '"Var är...?" pregunta dónde está algo. El tren es "tåg" y la estación "station".', points: ['Var är stationen?', 'Jag åker = Yo viajo / voy', 'Idag / imorgon = hoy / mañana'] },
      words: [['estación', 'station'], ['tren', 'tåg'], ['calle', 'gata'], ['ciudad', 'stad'], ['hoy', 'idag'], ['mañana', 'imorgon'], ['hotel', 'hotell'], ['baño', 'toalett']],
      phrases: [['¿Dónde está la estación?', 'Var är stationen?'], ['Viajo mañana', 'Jag åker imorgon'], ['El tren llega hoy', 'Tåget kommer idag'], ['¿Dónde está el baño?', 'Var är toaletten?']],
    },
  ],
}
