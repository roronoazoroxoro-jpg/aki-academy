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
    {
      title: 'Colores y ropa', level: 'Básico',
      guide: { intro: 'Los colores suelen terminar en い: あかい (rojo), あおい (azul). Para ropa: きています (estoy usando).', points: ['あか / あお / みどり', 'シャツ / くつ', 'きています = estoy usando', 'おおきい / ちいさい'] },
      words: [['rojo', 'あか', 'aka'], ['azul', 'あお', 'ao'], ['verde', 'みどり', 'midori'], ['amarillo', 'きいろ', 'kiiro'], ['negro', 'くろ', 'kuro'], ['blanco', 'しろ', 'shiro'], ['remera', 'シャツ', 'shatsu'], ['zapatos', 'くつ', 'kutsu']],
      phrases: [['Uso una remera azul', 'あおい シャツ を きています', 'aoi shatsu wo kiteimasu'], ['Me gustan los zapatos negros', 'くろい くつ が すき です', 'kuroi kutsu ga suki desu'], ['Es grande', 'おおきい です', 'ookii desu'], ['¿De qué color es?', 'なんいろ ですか', 'naniro desu ka'], ['Quiero algo verde', 'みどり が ほしい です', 'midori ga hoshii desu']],
    },
    {
      title: 'La hora', level: 'Básico',
      guide: { intro: '¿Qué hora es? = いま なんじ ですか. Las 3 = さんじ. Y media = はん.', points: ['なんじ ですか = ¿qué hora es?', 'じ = hora', 'ふん / ぷん = minutos', 'はん = y media'] },
      words: [['una', 'いちじ', 'ichiji'], ['dos', 'にじ', 'niji'], ['tres', 'さんじ', 'sanji'], ['cinco', 'ごじ', 'goji'], ['diez', 'じゅうじ', 'juuji'], ['hora', 'じ', 'ji'], ['minuto', 'ふん', 'fun'], ['reloj', 'とけい', 'tokei']],
      phrases: [['¿Qué hora es?', 'いま なんじ ですか', 'ima nanji desu ka'], ['Son las tres', 'さんじ です', 'sanji desu'], ['Es la una y media', 'いちじはん です', 'ichijihan desu'], ['Nos vemos a las diez', 'じゅうじ に あいましょう', 'juuji ni aimashou'], ['Tengo cinco minutos', 'ごふん あります', 'gofun arimasu']],
    },
    {
      title: 'Clima y sentimientos', level: 'Intermedio',
      guide: { intro: 'Clima: あめ です (llueve), さむい です (hace frío). Sentimientos: うれしい, つかれた.', points: ['あめ / はれ / さむい', 'うれしい / つかれた / かなしい', 'きぶん = ánimo'] },
      words: [['lluvia', 'あめ', 'ame'], ['sol', 'はれ', 'hare'], ['frío', 'さむい', 'samui'], ['calor', 'あつい', 'atsui'], ['feliz', 'うれしい', 'ureshii'], ['cansado', 'つかれた', 'tsukareta'], ['triste', 'かなしい', 'kanashii'], ['viento', 'かぜ', 'kaze']],
      phrases: [['Está lloviendo', 'あめ です', 'ame desu'], ['Hace frío hoy', 'きょう は さむい です', 'kyou wa samui desu'], ['Estoy feliz', 'うれしい です', 'ureshii desu'], ['Estoy cansado', 'つかれました', 'tsukaremashita'], ['Me siento bien', 'きぶん が いい です', 'kibun ga ii desu']],
    },
    {
      title: 'La rutina diaria', level: 'Intermedio',
      guide: { intro: 'Hábitos: おきます (me levanto), べんきょう します (estudio). Con ます es formal.', points: ['おきます = me levanto', 'まいにち = todos los días', 'あさ / よる', 'はたらきます = trabaja'] },
      words: [['despertarse', 'おきます', 'okimasu'], ['desayunar', 'あさごはん', 'asagohan'], ['estudiar', 'べんきょう', 'benkyou'], ['dormir', 'ねます', 'nemasu'], ['cocinar', 'りょうり', 'ryouri'], ['limpiar', 'そうじ', 'souji'], ['mañana', 'あさ', 'asa'], ['noche', 'よる', 'yoru']],
      phrases: [['Me despierto temprano', 'はやく おきます', 'hayaku okimasu'], ['Desayuno a las ocho', 'はちじ に あさごはん を たべます', 'hachiji ni asagohan wo tabemasu'], ['Estudio todas las noches', 'まいばん べんきょう します', 'maiban benkyou shimasu'], ['Ella trabaja en casa', 'かのじょ は いえ で はたらきます', 'kanojo wa ie de hatarakimasu'], ['Me duermo tarde', 'おそく ねます', 'osoku nemasu']],
    },
  ],
}
