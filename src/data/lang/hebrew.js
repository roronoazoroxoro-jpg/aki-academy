export default {
  id: 'hebrew',
  title: 'Hebreo',
  kind: 'lang',
  icon: '🇮🇱',
  flag: 'il',
  color: '#2563EB',
  lang: 'he-IL',
  desc: 'Se escribe de derecha a izquierda: la lengua de Israel y de milenios de historia.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'El hebreo se lee de derecha a izquierda. "שלום" (shalom) significa hola, chau y paz. No hay mayúsculas.', points: ['שלום = Hola / paz (shalom)', 'תודה = Gracias (todá)', 'כן / לא = Sí / No', 'קוראים לי... = Me llamo...'] },
      words: [['hola', 'שלום', 'shalom'], ['gracias', 'תודה', 'toda'], ['sí', 'כן', 'ken'], ['no', 'לא', 'lo'], ['por favor', 'בבקשה', 'bevakasha'], ['adiós', 'להתראות', 'lehitraot'], ['amigo', 'חבר', 'chaver'], ['agua', 'מים', 'mayim']],
      phrases: [['Me llamo Aki', 'קוראים  לי  אקי', 'korim li Aki'], ['Soy de Argentina', 'אני  מארגנטינה', 'ani me-argentina'], ['¿Cómo estás?', 'מה  שלומך', 'ma shlomcha'], ['Bien, gracias', 'טוב  תודה', 'tov toda'], ['Mucho gusto', 'נעים  מאוד', 'naim meod']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'El hummus y el falafel son clásicos. Para pedir: "... בבקשה" (bevakasha).', points: ['מים = agua', 'טעים = rico', 'חשבון = cuenta'] },
      words: [['agua', 'מים', 'mayim'], ['pan', 'לחם', 'lechem'], ['leche', 'חלב', 'chalav'], ['café', 'קפה', 'kafe'], ['rico', 'טעים', 'taim'], ['cuenta', 'חשבון', 'cheshbon'], ['té', 'תה', 'te'], ['queso', 'גבינה', 'gvina']],
      phrases: [['Agua, por favor', 'מים  בבקשה', 'mayim bevakasha'], ['La cuenta, por favor', 'את  החשבון  בבקשה', 'et hacheshbon bevakasha'], ['Está rico', 'זה  טעים', 'ze taim'], ['Tengo hambre', 'אני  רעב', 'ani raev']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: '"יש לי" = tengo. "של" marca posesión: הבית שלי = mi casa.', points: ['אמא / אבא', 'אח / אחות', 'יש לי = Tengo'] },
      words: [['mamá', 'אמא', 'ima'], ['papá', 'אבא', 'aba'], ['hermano', 'אח', 'ach'], ['hermana', 'אחות', 'achot'], ['hijo', 'בן', 'ben'], ['hija', 'בת', 'bat'], ['perro', 'כלב', 'kelev'], ['casa', 'בית', 'bayit']],
      phrases: [['Tengo un perro', 'יש  לי  כלב', 'yesh li kelev'], ['Mi mamá en casa', 'אמא  שלי  בבית', 'ima sheli babayit'], ['La casa es grande', 'הבית  גדול', 'habayit gadol'], ['Él es mi papá', 'זה  אבא  שלי', 'ze aba sheli']],
    },
    {
      title: 'Viaje', level: 'Avanzado',
      guide: { intro: '"איפה...?" pregunta dónde. El tren es "רכבת" y la estación "תחנה".', points: ['איפה התחנה?', 'היום / מחר = hoy / mañana'] },
      words: [['estación', 'תחנה', 'tachana'], ['tren', 'רכבת', 'rakevet'], ['calle', 'רחוב', 'rechov'], ['ciudad', 'עיר', 'ir'], ['hoy', 'היום', 'hayom'], ['mañana', 'מחר', 'machar'], ['hotel', 'מלון', 'malon'], ['baño', 'שירותים', 'sherutim']],
      phrases: [['¿Dónde está la estación?', 'איפה  התחנה', 'eifo hatachana'], ['Viajo mañana', 'אני  נוסע  מחר', 'ani nosea machar'], ['El tren llega hoy', 'הרכבת  מגיעה  היום', 'harakevet megia hayom'], ['¿Dónde está el baño?', 'איפה  השירותים', 'eifo hasherutim']],
    },
  ],
}
