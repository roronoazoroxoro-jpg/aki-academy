export default {
  id: 'german',
  title: 'Alemán',
  kind: 'lang',
  icon: '🇩🇪',
  flag: 'de',
  color: '#B45309',
  lang: 'de-DE',
  desc: 'Ingeniería, oportunidades y la economía más grande de Europa.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'En alemán todos los sustantivos se escriben con mayúscula. "Hallo" es hola y "Danke" es gracias.', points: ['Hallo = Hola', 'Guten Morgen = Buen día', 'Ich heiße... = Me llamo...', 'Danke = Gracias'] },
      words: [['hola', 'hallo'], ['gracias', 'danke'], ['por favor', 'bitte'], ['sí', 'ja'], ['no', 'nein'], ['chau', 'tschüss'], ['amigo', 'Freund'], ['buen día', 'guten Morgen']],
      phrases: [['Me llamo Aki', 'Ich heiße Aki'], ['Soy de Argentina', 'Ich komme aus Argentinien'], ['¿Cómo estás?', 'Wie geht es dir?'], ['Muy bien, gracias', 'Sehr gut, danke'], ['Mucho gusto', 'Freut mich']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'Para pedir: "Ich möchte..." (quisiera). Los artículos son der, die, das según el género.', points: ['Ich möchte ein Wasser = Quisiera un agua', 'Die Rechnung, bitte = La cuenta', 'Lecker = Rico'] },
      words: [['agua', 'Wasser'], ['pan', 'Brot'], ['cerveza', 'Bier'], ['queso', 'Käse'], ['carne', 'Fleisch'], ['café', 'Kaffee'], ['rico', 'lecker'], ['cuenta', 'Rechnung']],
      phrases: [['Quisiera un agua', 'Ich möchte ein Wasser'], ['La cuenta, por favor', 'Die Rechnung, bitte'], ['El pan es rico', 'Das Brot ist lecker'], ['Tengo hambre', 'Ich habe Hunger']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: '"Ich habe" significa "tengo". Mutter, Vater, Bruder, Schwester se parecen al inglés.', points: ['Mutter / Vater', 'Bruder / Schwester', 'Ich habe = Tengo'] },
      words: [['madre', 'Mutter'], ['padre', 'Vater'], ['hermano', 'Bruder'], ['hermana', 'Schwester'], ['hijo', 'Sohn'], ['hija', 'Tochter'], ['perro', 'Hund'], ['casa', 'Haus']],
      phrases: [['Tengo una hermana', 'Ich habe eine Schwester'], ['Mi padre es ingeniero', 'Mein Vater ist Ingenieur'], ['El perro es grande', 'Der Hund ist groß'], ['Mi casa es chica', 'Mein Haus ist klein']],
    },
    {
      title: 'Viaje y trabajo', level: 'Avanzado',
      guide: { intro: 'En alemán el verbo va en segundo lugar en la oración. "Wo ist...?" pregunta dónde está algo.', points: ['Wo ist der Bahnhof? = ¿Dónde está la estación?', 'Ich arbeite = Trabajo', 'Die Arbeit = El trabajo'] },
      words: [['estación', 'Bahnhof'], ['trabajo', 'Arbeit'], ['ciudad', 'Stadt'], ['calle', 'Straße'], ['tren', 'Zug'], ['hoy', 'heute'], ['mañana', 'morgen'], ['empresa', 'Firma']],
      phrases: [['¿Dónde está la estación?', 'Wo ist der Bahnhof?'], ['Trabajo en Berlín', 'Ich arbeite in Berlin'], ['El tren llega hoy', 'Der Zug kommt heute'], ['Mañana viajo', 'Morgen reise ich']],
    },
  ],
}
