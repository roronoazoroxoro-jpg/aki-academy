export default {
  id: 'ukrainian',
  title: 'Ucraniano',
  kind: 'lang',
  icon: '🇺🇦',
  flag: 'ua',
  color: '#2563EB',
  lang: 'uk-UA',
  desc: 'La lengua de Ucrania, con alfabeto cirílico propio y una comunidad grande en Argentina.',
  units: [
    {
      title: 'Saludos y cirílico', level: 'Básico',
      guide: { intro: 'El ucraniano se escribe en cirílico. "Привіт" (pryvit) es hola informal. La "и" suena distinta a la rusa: más como "i" cerrada.', points: ['Привіт = Hola (pryvit)', 'Дякую = Gracias (diakuyu)', 'Так / Ні = Sí / No', 'Мене звати... = Me llamo...'] },
      words: [['hola', 'привіт', 'pryvit'], ['gracias', 'дякую', 'diakuyu'], ['sí', 'так', 'tak'], ['no', 'ні', 'ni'], ['por favor', 'будь ласка', 'bud laska'], ['adiós', 'бувай', 'buvai'], ['amigo', 'друг', 'druh'], ['agua', 'вода', 'voda']],
      phrases: [['Me llamo Aki', 'Мене  звати  Акі', 'mene zvaty Aki'], ['Soy de Argentina', 'Я  з  Аргентини', 'ya z Arhentyny'], ['¿Cómo estás?', 'Як  справи', 'yak spravy'], ['Bien, gracias', 'Добре  дякую', 'dobre diakuyu'], ['Mucho gusto', 'Приємно  познайомитися', 'pryiemno poznaiomytysia']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'El borscht (борщ) es la sopa nacional. Para pedir: "Прошу..." (proshu).', points: ['Вода = agua', 'Смачно = rico', 'Рахунок = cuenta'] },
      words: [['agua', 'вода', 'voda'], ['pan', 'хліб', 'khlib'], ['sopa', 'борщ', 'borshch'], ['carne', 'м’ясо', 'miaso'], ['té', 'чай', 'chai'], ['rico', 'смачно', 'smachno'], ['cuenta', 'рахунок', 'rakhunok'], ['leche', 'молоко', 'moloko']],
      phrases: [['Agua, por favor', 'Воду  будь  ласка', 'vodu bud laska'], ['La cuenta, por favor', 'Рахунок  будь  ласка', 'rakhunok bud laska'], ['Está rico', 'Дуже  смачно', 'duzhe smachno'], ['Tengo hambre', 'Я  голодний', 'ya holodnyi']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: '"Я маю" o "У мене є" significan "tengo". "Мій / моя" = mi.', points: ['Мама / Тато', 'Брат / Сестра', 'У мене є = Tengo'] },
      words: [['mamá', 'мама', 'mama'], ['papá', 'тато', 'tato'], ['hermano', 'брат', 'brat'], ['hermana', 'сестра', 'sestra'], ['hijo', 'син', 'syn'], ['hija', 'донька', 'donka'], ['perro', 'собака', 'sobaka'], ['casa', 'дім', 'dim']],
      phrases: [['Tengo un hermano', 'У  мене  є  брат', 'u mene ye brat'], ['Mi mamá en casa', 'Моя  мама  вдома', 'moia mama vdoma'], ['El perro es grande', 'Собака  велика', 'sobaka velyka'], ['Mi casa es chica', 'Мій  дім  малий', 'mii dim malyi']],
    },
    {
      title: 'Viaje', level: 'Avanzado',
      guide: { intro: '"Де...?" pregunta dónde. El tren es "поїзд" y la estación "вокзал".', points: ['Де вокзал?', 'Сьогодні / завтра = hoy / mañana'] },
      words: [['estación', 'вокзал', 'vokzal'], ['tren', 'поїзд', 'poizd'], ['calle', 'вулиця', 'vulytsia'], ['ciudad', 'місто', 'misto'], ['hoy', 'сьогодні', 'sohodni'], ['mañana', 'завтра', 'zavtra'], ['hotel', 'готель', 'hotel'], ['baño', 'туалет', 'tualet']],
      phrases: [['¿Dónde está la estación?', 'Де  вокзал', 'de vokzal'], ['Viajo mañana', 'Я  їду  завтра', 'ya yidu zavtra'], ['El tren llega hoy', 'Поїзд  приїжджає  сьогодні', 'poizd pryizdzhaie sohodni'], ['¿Dónde está el baño?', 'Де  туалет', 'de tualet']],
    },
  ],
}
