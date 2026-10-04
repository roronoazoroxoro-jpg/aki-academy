export default {
  id: 'russian',
  title: 'Ruso',
  kind: 'lang',
  icon: '🪆',
  flag: 'ru',
  color: '#1E40AF',
  lang: 'ru-RU',
  desc: 'El alfabeto cirílico, literatura, ciencia y 250 millones de hablantes.',
  units: [
    {
      title: 'Cirílico y saludos', level: 'Básico',
      guide: { intro: 'El ruso usa el alfabeto cirílico. Algunas letras te van a confundir: Р suena "R", С suena "S" y Н suena "N". Привет es "hola" informal.', points: ['Привет = Hola (privet)', 'Спасибо = Gracias (spasiba)', 'Да = sí, Нет = no', 'Здравствуйте = hola formal'] },
      words: [['hola', 'Привет', 'privet'], ['gracias', 'Спасибо', 'spasiba'], ['sí', 'Да', 'da'], ['no', 'Нет', 'nyet'], ['por favor', 'Пожалуйста', 'pazhalusta'], ['adiós', 'До свидания', 'da svidania'], ['amigo', 'Друг', 'drug'], ['perdón', 'Извините', 'izvinite']],
      phrases: [['Me llamo Aki', 'Меня зовут Аки', 'menya zavut Aki'], ['Soy de Argentina', 'Я из Аргентины', 'ya iz Argentiny'], ['¿Cómo estás?', 'Как дела', 'kak dela'], ['Todo bien', 'Всё хорошо', 'vsyo kharasho'], ['Mucho gusto', 'Приятно познакомиться', 'priyatna paznakomitsa']],
    },
    {
      title: 'Comida y bebida', level: 'Básico',
      guide: { intro: 'Para pedir algo: Я хочу… (ya khachu = yo quiero). Вкусно (vkusna) significa "rico". El té (чай) es casi una institución en Rusia.', points: ['Вода = agua (vada)', 'Чай = té (chai)', 'Хлеб = pan (khleb)', 'Вкусно = rico'] },
      words: [['agua', 'Вода', 'vada'], ['té', 'Чай', 'chai'], ['pan', 'Хлеб', 'khleb'], ['carne', 'Мясо', 'myasa'], ['leche', 'Молоко', 'malako'], ['rico', 'Вкусно', 'vkusna'], ['café', 'Кофе', 'kofe'], ['comer', 'Есть', 'yest']],
      phrases: [['Quiero agua', 'Я хочу воду', 'ya khachu vodu'], ['Está muy rico', 'Очень вкусно', 'ochen vkusna'], ['Un té, por favor', 'Чай, пожалуйста', 'chai pazhalusta'], ['Tengo hambre', 'Я голоден', 'ya goladen']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: 'En ruso casi no se usa el verbo "ser" en presente: "Esto es mi mamá" se dice literalmente "Esto mi mamá". У меня есть… significa "yo tengo".', points: ['Мама = mamá', 'Папа = papá', 'У меня есть = yo tengo', 'Мой / моя = mi (según género)'] },
      words: [['mamá', 'Мама', 'mama'], ['papá', 'Папа', 'papa'], ['hermano', 'Брат', 'brat'], ['hermana', 'Сестра', 'sestra'], ['hijo', 'Сын', 'syn'], ['hija', 'Дочь', 'doch'], ['casa', 'Дом', 'dom'], ['perro', 'Собака', 'sabaka']],
      phrases: [['Esta es mi mamá', 'Это моя мама', 'eta maya mama'], ['Tengo un hermano', 'У меня есть брат', 'u menya yest brat'], ['Mi casa es grande', 'Мой дом большой', 'moy dom balshoy'], ['Tengo un perro', 'У меня есть собака', 'u menya yest sabaka']],
    },
    {
      title: 'Viaje a Moscú', level: 'Avanzado',
      guide: { intro: 'Где… (gde) pregunta dónde está algo. Я не понимаю (ya ne panimayu) es "no entiendo". El metro de Moscú es famoso por sus estaciones hermosas.', points: ['Где = ¿dónde?', 'Я не понимаю = no entiendo', 'Метро = subte', 'Вокзал = estación de tren'] },
      words: [['subte', 'Метро', 'metro'], ['estación', 'Вокзал', 'vakzal'], ['hotel', 'Гостиница', 'gastinitsa'], ['calle', 'Улица', 'ulitsa'], ['dónde', 'Где', 'gde'], ['hoy', 'Сегодня', 'sevodnya'], ['mañana', 'Завтра', 'zavtra'], ['ciudad', 'Город', 'gorad']],
      phrases: [['¿Dónde está el hotel?', 'Где гостиница', 'gde gastinitsa'], ['No entiendo', 'Я не понимаю', 'ya ne panimayu'], ['¿Hablás inglés?', 'Вы говорите по-английски', 'vy gavarite pa angliski'], ['Mañana voy a Moscú', 'Завтра я в Москву', 'zavtra ya v Maskvu']],
    },
  ],
}
