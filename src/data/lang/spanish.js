export default {
  id: 'spanish',
  title: 'Español argentino',
  kind: 'lang',
  icon: '🧉',
  flag: 'ar',
  color: '#74ACDF',
  lang: 'es-AR',
  desc: 'El español de acá: vos, che, lunfardo y el acento rioplatense.',
  units: [
    {
      title: 'El vos y el che', level: 'Básico',
      guide: { intro: 'En Argentina no decimos "tú": usamos vos. El verbo cambia: "tú tienes" es "vos tenés", "tú comes" es "vos comés". "Che" se usa para llamar a alguien, como "hey".', points: ['Vos tenés / querés / sabés', 'Che = hey, amigo', '¿Todo bien? = saludo de todos los días', 'Dale = ok / adelante'] },
      words: [['tú', 'vos'], ['hey', 'che'], ['ok', 'dale'], ['amigo', 'pibe'], ['chica', 'piba'], ['dinero', 'guita'], ['trabajo', 'laburo'], ['casa', 'rancho']],
      phrases: [['¿Cómo estás?', '¿Todo bien?'], ['Vos tenés razón', 'Tenés razón'], ['Dale, vamos', 'Dale, vamos'], ['Che, ¿venís?', 'Che, ¿venís?'], ['Estoy laburando', 'Estoy laburando']],
    },
    {
      title: 'Comida criolla', level: 'Básico',
      guide: { intro: 'El vocabulario de la mesa argentina es único: asado, mate, facturas, milanesa, locro. Pedir "un café con medialunas" es un deporte nacional.', points: ['Facturas = medialunas y masas', 'Un café con leche', 'El asado se come los domingos', 'Cebar mate = servir el mate'] },
      words: [['medialuna', 'medialuna'], ['asado', 'asado'], ['yerba', 'yerba'], ['milanesa', 'milanesa'], ['empanada', 'empanada'], ['locro', 'locro'], ['dulce de leche', 'dulce de leche'], ['choripán', 'choripán']],
      phrases: [['Cebame un mate', 'Cebame un mate'], ['El asado está de diez', 'El asado está de diez'], ['Quiero una medialuna', 'Quiero una medialuna'], ['¿Hay empanadas?', '¿Hay empanadas?'], ['Esto está riquísimo', 'Esto está de diez']],
    },
    {
      title: 'Lunfardo', level: 'Intermedio',
      guide: { intro: 'El lunfardo nació en el conventillo porteño y se mezcló con el italiano. Muchas palabras que usamos todos los días vienen de ahí: laburo, mina, fiaca, mango.', points: ['Laburo = trabajo (del italiano lavoro)', 'Mina = chica', 'Fiaca = pereza', 'Mango = peso / plata'] },
      words: [['trabajo', 'laburo'], ['chica', 'mina'], ['pereza', 'fiaca'], ['peso', 'mango'], ['cárcel', 'cana'], ['nariz', 'napia'], ['cabeza', 'coco'], ['mentira', 'chamuyo']],
      phrases: [['Tengo fiaca', 'Tengo fiaca'], ['No tengo un mango', 'No tengo un mango'], ['Dejá de chamuyar', 'Dejá de chamuyar'], ['Voy al laburo', 'Voy al laburo'], ['Esa mina es copada', 'Esa mina es copada']],
    },
    {
      title: 'En la calle', level: 'Avanzado',
      guide: { intro: 'Para moverte por Buenos Aires o cualquier ciudad argentina: colectivo (no autobús), subte (no metro), vereda (no acera). Y "¿me hacés una seña?" para pedir que te avisen.', points: ['Colectivo = bus', 'Subte = metro', 'Vereda = acera', 'Bondi = colectivo (más informal)'] },
      words: [['bus', 'colectivo'], ['metro', 'subte'], ['acera', 'vereda'], ['departamento', 'depto'], ['nevera', 'heladera'], ['computadora', 'compu'], ['celular', 'celu'], ['camiseta', 'remera']],
      phrases: [['¿A qué hora pasa el bondi?', '¿A qué hora pasa el bondi?'], ['Bajame en la esquina', 'Bajame en la esquina'], ['Estoy en la vereda', 'Estoy en la vereda'], ['¿Me prestás el celu?', '¿Me prestás el celu?'], ['Vivo en un depto', 'Vivo en un depto']],
    },
  ],
}
