// Japanese phrases are space-separated by word so they can be split into tiles.
export default {
  id: 'japanese',
  title: 'Japonés',
  kind: 'lang',
  icon: '🇯🇵',
  flag: 'jp',
  color: '#DC2626',
  lang: 'ja-JP',
  desc: 'Del anime a Tokio: hiragana, frases y cultura japonesa.',
  units: [
    {
      title: 'Hiragana: las vocales', level: 'Básico',
      guide: { intro: 'El japonés usa tres escrituras: hiragana, katakana y kanji. Arrancamos por el hiragana. Las vocales son a, i, u, e, o: あ い う え お.', points: ['あ = a', 'い = i', 'う = u', 'え = e', 'お = o'] },
      words: [['a', 'あ', 'a'], ['i', 'い', 'i'], ['u', 'う', 'u'], ['e', 'え', 'e'], ['o', 'お', 'o'], ['ka', 'か', 'ka'], ['ki', 'き', 'ki'], ['ko', 'こ', 'ko']],
      phrases: [['amor', 'あい', 'ai'], ['casa (ie)', 'いえ', 'ie'], ['azul', 'あお', 'ao'], ['cara', 'かお', 'kao'], ['árbol', 'き', 'ki']],
    },
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'En Japón el saludo cambia según la hora. "San" (さん) se agrega al nombre de otra persona por respeto, nunca al propio.', points: ['おはよう = Buen día (ohayou)', 'こんにちは = Hola (konnichiwa)', 'こんばんは = Buenas noches (konbanwa)', 'ありがとう = Gracias (arigatou)'] },
      words: [['hola', 'こんにちは', 'konnichiwa'], ['gracias', 'ありがとう', 'arigatou'], ['buen día', 'おはよう', 'ohayou'], ['buenas noches', 'こんばんは', 'konbanwa'], ['perdón', 'すみません', 'sumimasen'], ['sí', 'はい', 'hai'], ['no', 'いいえ', 'iie'], ['chau', 'さようなら', 'sayounara']],
      phrases: [['Me llamo Aki', 'わたし は アキ です', 'watashi wa Aki desu'], ['Mucho gusto', 'はじめまして', 'hajimemashite'], ['Soy argentino', 'わたし は アルゼンチンじん です', 'watashi wa aruzenchinjin desu'], ['Muchas gracias', 'どうも ありがとう', 'doumo arigatou'], ['Encantado de conocerte', 'よろしく おねがいします', 'yoroshiku onegaishimasu']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'Antes de comer se dice いただきます (itadakimasu) y al terminar ごちそうさま (gochisousama). Para pedir algo: "... を ください" (... wo kudasai).', points: ['すし = sushi', 'みず = agua', '... を ください = ... por favor (dame)', 'おいしい = rico'] },
      words: [['agua', 'みず', 'mizu'], ['arroz', 'ごはん', 'gohan'], ['té', 'おちゃ', 'ocha'], ['pescado', 'さかな', 'sakana'], ['carne', 'にく', 'niku'], ['rico', 'おいしい', 'oishii'], ['sushi', 'すし', 'sushi'], ['ramen', 'ラーメン', 'raamen']],
      phrases: [['Agua, por favor', 'みず を ください', 'mizu wo kudasai'], ['Está rico', 'おいしい です', 'oishii desu'], ['Me gusta el sushi', 'すし が すき です', 'sushi ga suki desu'], ['Té, por favor', 'おちゃ を ください', 'ocha wo kudasai'], ['Buen provecho', 'いただきます', 'itadakimasu']],
    },
    {
      title: 'Números y compras', level: 'Intermedio',
      guide: { intro: 'Los números del 1 al 5: いち (ichi), に (ni), さん (san), よん (yon), ご (go). Para preguntar el precio: いくら ですか (ikura desu ka).', points: ['いち、に、さん = 1, 2, 3', 'いくら ですか = ¿Cuánto cuesta?', 'えん = yen'] },
      words: [['uno', 'いち', 'ichi'], ['dos', 'に', 'ni'], ['tres', 'さん', 'san'], ['cuatro', 'よん', 'yon'], ['cinco', 'ご', 'go'], ['diez', 'じゅう', 'juu'], ['yen', 'えん', 'en'], ['negocio', 'みせ', 'mise']],
      phrases: [['¿Cuánto cuesta?', 'いくら ですか', 'ikura desu ka'], ['Son diez yenes', 'じゅう えん です', 'juu en desu'], ['Esto, por favor', 'これ を ください', 'kore wo kudasai'], ['¿Dónde está el negocio?', 'みせ は どこ ですか', 'mise wa doko desu ka'], ['Es barato', 'やすい です', 'yasui desu']],
    },
    {
      title: 'Viaje a Tokio', level: 'Avanzado',
      guide: { intro: 'どこ (doko) significa "dónde" y か (ka) al final convierte la frase en pregunta. Los verbos formales terminan en ます (masu).', points: ['えき = estación (eki)', '... は どこ ですか = ¿Dónde está...?', 'いきます = voy (ikimasu)', 'わかりません = no entiendo'] },
      words: [['estación', 'えき', 'eki'], ['tren', 'でんしゃ', 'densha'], ['baño', 'トイレ', 'toire'], ['hotel', 'ホテル', 'hoteru'], ['dónde', 'どこ', 'doko'], ['hoy', 'きょう', 'kyou'], ['mañana', 'あした', 'ashita'], ['Japón', 'にほん', 'nihon']],
      phrases: [['¿Dónde está la estación?', 'えき は どこ ですか', 'eki wa doko desu ka'], ['Voy a Japón', 'にほん に いきます', 'nihon ni ikimasu'], ['No entiendo', 'わかりません', 'wakarimasen'], ['¿Dónde está el baño?', 'トイレ は どこ ですか', 'toire wa doko desu ka'], ['Mañana voy al hotel', 'あした ホテル に いきます', 'ashita hoteru ni ikimasu']],
    },
  ],
}
