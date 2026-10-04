export default {
  id: 'turkish',
  title: 'Turco',
  kind: 'lang',
  icon: '🇹🇷',
  flag: 'tr',
  color: '#E11D48',
  lang: 'tr-TR',
  desc: 'El puente entre Europa y Asia: Estambul, café y una gramática aglutinante.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: '"Merhaba" es hola. En turco no hay género: "o" significa él y ella. Los sufijos se pegan a las palabras para cambiar el sentido.', points: ['Merhaba = Hola', 'Teşekkürler = Gracias', 'Evet / Hayır = Sí / No', 'Benim adım... = Me llamo...'] },
      words: [['hola', 'merhaba'], ['gracias', 'teşekkürler'], ['sí', 'evet'], ['no', 'hayır'], ['por favor', 'lütfen'], ['adiós', 'güle güle'], ['amigo', 'arkadaş'], ['agua', 'su']],
      phrases: [['Me llamo Aki', 'Benim adım Aki'], ['Soy de Argentina', 'Arjantinliyim'], ['¿Cómo estás?', 'Nasılsın?'], ['Estoy bien, gracias', 'İyiyim, teşekkürler'], ['Mucho gusto', 'Memnun oldum']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'Para pedir: "... lütfen" o "İsterim" (quiero). El té turco (çay) se toma en vasos chiquitos todo el día.', points: ['Su lütfen = Agua, por favor', 'Lezzetli = Rico', 'Hesap = Cuenta'] },
      words: [['agua', 'su'], ['té', 'çay'], ['pan', 'ekmek'], ['carne', 'et'], ['queso', 'peynir'], ['rico', 'lezzetli'], ['cuenta', 'hesap'], ['café', 'kahve']],
      phrases: [['Agua, por favor', 'Su lütfen'], ['La cuenta, por favor', 'Hesap lütfen'], ['Está rico', 'Çok lezzetli'], ['Tengo hambre', 'Açım'], ['Quiero té', 'Çay isterim']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: '"Benim" = mi. "Var" significa "hay / tengo": "Bir köpeğim var" = tengo un perro.', points: ['Anne / Baba', 'Abi / Abla = hermano / hermana mayor', 'Var = hay / tengo'] },
      words: [['madre', 'anne'], ['padre', 'baba'], ['hermano', 'kardeş'], ['hermana', 'kız kardeş'], ['hijo', 'oğul'], ['hija', 'kız'], ['perro', 'köpek'], ['casa', 'ev']],
      phrases: [['Tengo un perro', 'Bir köpeğim var'], ['Mi madre está en casa', 'Annem evde'], ['Mi casa es grande', 'Evim büyük'], ['Él es mi padre', 'O benim babam']],
    },
    {
      title: 'Estambul', level: 'Avanzado',
      guide: { intro: '"Nerede?" pregunta dónde. El tren es "tren" y la estación "istasyon".', points: ['İstasyon nerede?', 'Bugün / yarın = hoy / mañana'] },
      words: [['estación', 'istasyon'], ['tren', 'tren'], ['calle', 'sokak'], ['ciudad', 'şehir'], ['hoy', 'bugün'], ['mañana', 'yarın'], ['hotel', 'otel'], ['baño', 'tuvalet']],
      phrases: [['¿Dónde está la estación?', 'İstasyon nerede?'], ['Voy mañana', 'Yarın gidiyorum'], ['El tren llega hoy', 'Tren bugün geliyor'], ['¿Dónde está el baño?', 'Tuvalet nerede?']],
    },
  ],
}
