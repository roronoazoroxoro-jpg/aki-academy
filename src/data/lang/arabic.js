export default {
  id: 'arabic',
  title: 'Árabe',
  kind: 'lang',
  icon: '🕌',
  flag: 'sa',
  color: '#047857',
  lang: 'ar-SA',
  desc: 'Se escribe de derecha a izquierda y lo hablan más de 400 millones de personas.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'El árabe se escribe y se lee de derecha a izquierda. El saludo más conocido es السلام عليكم (as-salamu alaykum), que significa "la paz sea contigo".', points: ['مرحبا = Hola (marhaban)', 'شكرا = Gracias (shukran)', 'نعم = sí, لا = no', 'Se lee de derecha a izquierda'] },
      words: [['hola', 'مرحبا', 'marhaban'], ['gracias', 'شكرا', 'shukran'], ['sí', 'نعم', 'naam'], ['no', 'لا', 'la'], ['por favor', 'من فضلك', 'min fadlik'], ['adiós', 'مع السلامة', 'maa as-salama'], ['amigo', 'صديق', 'sadiq'], ['perdón', 'عفوا', 'afwan']],
      phrases: [['Me llamo Aki', 'اسمي أكي', 'ismi Aki'], ['¿Cómo estás?', 'كيف حالك', 'kayfa haluk'], ['Estoy bien', 'أنا بخير', 'ana bikhayr'], ['Soy de Argentina', 'أنا من الأرجنتين', 'ana min al-arjentin'], ['Mucho gusto', 'تشرفت بمعرفتك', 'tasharraftu bimaarifatik']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'Para pedir: أريد (ureed = yo quiero). لذيذ (ladheedh) significa "rico". El té y el café son parte central de la hospitalidad árabe.', points: ['ماء = agua (maa)', 'خبز = pan (khubz)', 'شاي = té (shay)', 'لذيذ = rico'] },
      words: [['agua', 'ماء', 'maa'], ['pan', 'خبز', 'khubz'], ['té', 'شاي', 'shay'], ['café', 'قهوة', 'qahwa'], ['carne', 'لحم', 'lahm'], ['arroz', 'أرز', 'aruz'], ['rico', 'لذيذ', 'ladheedh'], ['comer', 'يأكل', 'yaakul']],
      phrases: [['Quiero agua', 'أريد ماء', 'ureed maa'], ['Está muy rico', 'لذيذ جدا', 'ladheedh jiddan'], ['Un café, por favor', 'قهوة من فضلك', 'qahwa min fadlik'], ['Tengo hambre', 'أنا جائع', 'ana jaai']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: 'En árabe el posesivo se agrega al final de la palabra: أمي (ummi) es "mi mamá". La familia es un tema central en la cultura árabe.', points: ['أم = madre (umm)', 'أب = padre (ab)', 'عندي = yo tengo', 'ـي al final significa "mi"'] },
      words: [['madre', 'أم', 'umm'], ['padre', 'أب', 'ab'], ['hermano', 'أخ', 'akh'], ['hermana', 'أخت', 'ukht'], ['hijo', 'ابن', 'ibn'], ['hija', 'بنت', 'bint'], ['casa', 'بيت', 'bayt'], ['ciudad', 'مدينة', 'madina']],
      phrases: [['Esta es mi madre', 'هذه أمي', 'hadhihi ummi'], ['Tengo un hermano', 'عندي أخ', 'indi akh'], ['Mi casa es grande', 'بيتي كبير', 'bayti kabir'], ['Mi padre trabaja', 'أبي يعمل', 'abi yaamal']],
    },
    {
      title: 'En la ciudad', level: 'Avanzado',
      guide: { intro: 'أين (ayna) pregunta dónde está algo. لا أفهم (la afham) significa "no entiendo". Son las dos frases que más vas a usar al viajar.', points: ['أين = ¿dónde?', 'لا أفهم = no entiendo', 'مطار = aeropuerto', 'فندق = hotel'] },
      words: [['aeropuerto', 'مطار', 'matar'], ['hotel', 'فندق', 'funduq'], ['calle', 'شارع', 'shari'], ['mercado', 'سوق', 'suq'], ['dónde', 'أين', 'ayna'], ['hoy', 'اليوم', 'al-yawm'], ['mañana', 'غدا', 'ghadan'], ['dinero', 'نقود', 'nuqud']],
      phrases: [['¿Dónde está el hotel?', 'أين الفندق', 'ayna al-funduq'], ['No entiendo', 'لا أفهم', 'la afham'], ['¿Cuánto cuesta?', 'كم الثمن', 'kam ath-thaman'], ['¿Hablás inglés?', 'هل تتكلم الإنجليزية', 'hal tatakallam al-injliziya']],
    },
  ],
}
