export default {
  id: 'greek',
  title: 'Griego',
  kind: 'lang',
  icon: '🏺',
  flag: 'gr',
  color: '#0284C7',
  lang: 'el-GR',
  desc: 'El idioma de la filosofía, la democracia y media ciencia moderna.',
  units: [
    {
      title: 'Alfabeto y saludos', level: 'Básico',
      guide: { intro: 'El alfabeto griego te va a resultar familiar por las matemáticas: alfa, beta, pi, delta. Γεια σου es el "hola" informal de todos los días.', points: ['Γεια σου = Hola (ya su)', 'Ευχαριστώ = Gracias (efjaristó)', 'Ναι = sí, Όχι = no', 'Καλημέρα = buen día'] },
      words: [['hola', 'Γεια σου', 'ya su'], ['gracias', 'Ευχαριστώ', 'efjaristó'], ['sí', 'Ναι', 'ne'], ['no', 'Όχι', 'óji'], ['buen día', 'Καλημέρα', 'kaliméra'], ['adiós', 'Αντίο', 'andío'], ['amigo', 'Φίλος', 'fílos'], ['por favor', 'Παρακαλώ', 'parakaló']],
      phrases: [['Me llamo Aki', 'Με λένε Άκι', 'me léne Aki'], ['¿Cómo estás?', 'Τι κάνεις', 'ti kánis'], ['Estoy bien', 'Είμαι καλά', 'íme kalá'], ['Soy de Argentina', 'Είμαι από την Αργεντινή', 'íme apó tin Aryentiní'], ['Mucho gusto', 'Χάρηκα', 'járika']],
    },
    {
      title: 'Comida griega', level: 'Básico',
      guide: { intro: 'Souvlaki, tzatziki, feta: la comida griega es un clásico. Θέλω (thélo) significa "quiero" y Νόστιμο (nóstimo) es "rico".', points: ['Νερό = agua (neró)', 'Ψωμί = pan (psomí)', 'Θέλω = quiero', 'Νόστιμο = rico'] },
      words: [['agua', 'Νερό', 'neró'], ['pan', 'Ψωμί', 'psomí'], ['queso', 'Τυρί', 'tirí'], ['vino', 'Κρασί', 'krasí'], ['café', 'Καφές', 'kafés'], ['pescado', 'Ψάρι', 'psári'], ['rico', 'Νόστιμο', 'nóstimo'], ['cuenta', 'Λογαριασμός', 'logariasmós']],
      phrases: [['Quiero agua', 'Θέλω νερό', 'thélo neró'], ['Está muy rico', 'Πολύ νόστιμο', 'polí nóstimo'], ['La cuenta, por favor', 'Τον λογαριασμό παρακαλώ', 'ton logariasmó parakaló'], ['Tengo hambre', 'Πεινάω', 'pináo']],
    },
    {
      title: 'Familia y números', level: 'Intermedio',
      guide: { intro: 'Los números griegos están en todas las palabras técnicas: mono, di, tri, tetra. Έχω (ékho) significa "yo tengo".', points: ['Μητέρα = madre', 'Πατέρας = padre', 'Ένα, δύο, τρία = 1, 2, 3', 'Έχω = yo tengo'] },
      words: [['madre', 'Μητέρα', 'mitéra'], ['padre', 'Πατέρας', 'patéras'], ['hermano', 'Αδελφός', 'adelfós'], ['hermana', 'Αδελφή', 'adelfí'], ['uno', 'Ένα', 'éna'], ['dos', 'Δύο', 'dío'], ['tres', 'Τρία', 'tría'], ['casa', 'Σπίτι', 'spíti']],
      phrases: [['Esta es mi madre', 'Αυτή είναι η μητέρα μου', 'aftí íne i mitéra mu'], ['Tengo un hermano', 'Έχω έναν αδελφό', 'ékho énan adelfó'], ['Mi casa es grande', 'Το σπίτι μου είναι μεγάλο', 'to spíti mu íne megálo'], ['¿Cuánto cuesta?', 'Πόσο κάνει', 'póso káni']],
    },
    {
      title: 'Viaje a Grecia', level: 'Avanzado',
      guide: { intro: 'Πού είναι (pu íne) pregunta dónde está algo. Δεν καταλαβαίνω (den katalavéno) significa "no entiendo". Imprescindibles para las islas.', points: ['Πού είναι = ¿dónde está?', 'Δεν καταλαβαίνω = no entiendo', 'Θάλασσα = mar', 'Νησί = isla'] },
      words: [['mar', 'Θάλασσα', 'thálasa'], ['isla', 'Νησί', 'nisí'], ['hotel', 'Ξενοδοχείο', 'xenodhojío'], ['playa', 'Παραλία', 'paralía'], ['dónde', 'Πού', 'pu'], ['hoy', 'Σήμερα', 'símera'], ['mañana', 'Αύριο', 'ávrio'], ['barco', 'Πλοίο', 'plío']],
      phrases: [['¿Dónde está el hotel?', 'Πού είναι το ξενοδοχείο', 'pu íne to xenodhojío'], ['No entiendo', 'Δεν καταλαβαίνω', 'den katalavéno'], ['Quiero ir a la playa', 'Θέλω να πάω στην παραλία', 'thélo na páo stin paralía'], ['¿Hablás inglés?', 'Μιλάτε αγγλικά', 'miláte angliká']],
    },
  ],
}
