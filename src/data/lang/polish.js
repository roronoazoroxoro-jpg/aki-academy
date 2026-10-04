export default {
  id: 'polish',
  title: 'Polaco',
  kind: 'lang',
  icon: '🇵🇱',
  flag: 'pl',
  color: '#DC2626',
  lang: 'pl-PL',
  desc: 'El idioma de Polonia: historia, Chopin y una comunidad enorme en Argentina.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'En polaco "Dzień dobry" es buen día (formal) y "Cześć" es hola entre amigos. Hay siete casos gramaticales, pero para arrancar alcanza con memorizar frases.', points: ['Cześć = Hola', 'Dziękuję = Gracias', 'Tak / Nie = Sí / No', 'Nazywam się... = Me llamo...'] },
      words: [['hola', 'cześć'], ['gracias', 'dziękuję'], ['sí', 'tak'], ['no', 'nie'], ['por favor', 'proszę'], ['adiós', 'do widzenia'], ['amigo', 'przyjaciel'], ['agua', 'woda']],
      phrases: [['Me llamo Aki', 'Nazywam się Aki'], ['Soy de Argentina', 'Jestem z Argentyny'], ['¿Cómo estás?', 'Jak się masz?'], ['Bien, gracias', 'Dobrze, dziękuję'], ['Mucho gusto', 'Miło mi']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'Los pierogi son el plato más famoso. Para pedir: "Poproszę..." (quisiera / por favor dame).', points: ['Poproszę wodę = Agua, por favor', 'Pyszny = Rico', 'Rachunek = Cuenta'] },
      words: [['agua', 'woda'], ['pan', 'chleb'], ['queso', 'ser'], ['carne', 'mięso'], ['café', 'kawa'], ['rico', 'pyszny'], ['cuenta', 'rachunek'], ['sopa', 'zupa']],
      phrases: [['Agua, por favor', 'Poproszę wodę'], ['La cuenta, por favor', 'Poproszę rachunek'], ['Está rico', 'To jest pyszne'], ['Tengo hambre', 'Jestem głodny']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: '"Mam" = tengo. Los posesivos: mój (mi, masculino), moja (femenino), moje (neutro).', points: ['Mama / Tata', 'Brat / Siostra', 'Mam = Tengo'] },
      words: [['mamá', 'mama'], ['papá', 'tata'], ['hermano', 'brat'], ['hermana', 'siostra'], ['hijo', 'syn'], ['hija', 'córka'], ['perro', 'pies'], ['casa', 'dom']],
      phrases: [['Tengo un hermano', 'Mam brata'], ['Mi mamá es profesora', 'Moja mama jest nauczycielką'], ['El perro es grande', 'Pies jest duży'], ['Mi casa es chica', 'Mój dom jest mały']],
    },
    {
      title: 'Viaje a Varsovia', level: 'Avanzado',
      guide: { intro: '"Gdzie jest...?" pregunta dónde. El tren es "pociąg" y la estación "dworzec".', points: ['Gdzie jest dworzec?', 'Dzisiaj / jutro = hoy / mañana'] },
      words: [['estación', 'dworzec'], ['tren', 'pociąg'], ['calle', 'ulica'], ['ciudad', 'miasto'], ['hoy', 'dzisiaj'], ['mañana', 'jutro'], ['hotel', 'hotel'], ['baño', 'toaleta']],
      phrases: [['¿Dónde está la estación?', 'Gdzie jest dworzec?'], ['Viajo mañana', 'Jutro podróżuję'], ['El tren llega hoy', 'Pociąg przyjeżdża dzisiaj'], ['¿Dónde está el baño?', 'Gdzie jest toaleta?']],
    },
  ],
}
