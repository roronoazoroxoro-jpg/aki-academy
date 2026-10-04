export default {
  id: 'hindi',
  title: 'Hindi',
  kind: 'lang',
  icon: '🪔',
  flag: 'in',
  color: '#EA580C',
  lang: 'hi-IN',
  desc: 'Uno de los idiomas más hablados del planeta, con el alfabeto devanagari.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'El hindi se escribe en devanagari. नमस्ते (namaste) sirve para hola y adiós, a cualquier hora y con cualquier persona.', points: ['नमस्ते = Hola / Adiós (namaste)', 'धन्यवाद = Gracias (dhanyavaad)', 'हाँ = sí, नहीं = no', 'El verbo va al final de la oración'] },
      words: [['hola', 'नमस्ते', 'namaste'], ['gracias', 'धन्यवाद', 'dhanyavaad'], ['sí', 'हाँ', 'haan'], ['no', 'नहीं', 'nahin'], ['por favor', 'कृपया', 'kripaya'], ['amigo', 'दोस्त', 'dost'], ['perdón', 'माफ़ कीजिए', 'maaf kijiye'], ['nombre', 'नाम', 'naam']],
      phrases: [['Me llamo Aki', 'मेरा नाम अकी है', 'mera naam Aki hai'], ['¿Cómo estás?', 'आप कैसे हैं', 'aap kaise hain'], ['Estoy bien', 'मैं ठीक हूँ', 'main theek hun'], ['Soy de Argentina', 'मैं अर्जेंटीना से हूँ', 'main Argentina se hun'], ['Mucho gusto', 'आपसे मिलकर खुशी हुई', 'aapse milkar khushi hui']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'La comida india es un mundo: curry, chai, naan. Para pedir: मुझे … चाहिए (mujhe … chahiye = yo quiero). स्वादिष्ट (swadisht) = rico.', points: ['पानी = agua (paani)', 'चाय = té (chai)', 'रोटी = pan (roti)', 'स्वादिष्ट = rico'] },
      words: [['agua', 'पानी', 'paani'], ['té', 'चाय', 'chai'], ['pan', 'रोटी', 'roti'], ['arroz', 'चावल', 'chaawal'], ['leche', 'दूध', 'doodh'], ['rico', 'स्वादिष्ट', 'swadisht'], ['comida', 'खाना', 'khaana'], ['verdura', 'सब्ज़ी', 'sabzi']],
      phrases: [['Quiero agua', 'मुझे पानी चाहिए', 'mujhe paani chahiye'], ['Está muy rico', 'बहुत स्वादिष्ट है', 'bahut swadisht hai'], ['Un té, por favor', 'एक चाय कृपया', 'ek chai kripaya'], ['Tengo hambre', 'मुझे भूख लगी है', 'mujhe bhookh lagi hai']],
    },
    {
      title: 'Familia y números', level: 'Intermedio',
      guide: { intro: 'En hindi el verbo "ser" (है, hai) va siempre al final. Los números del 1 al 5: एक, दो, तीन, चार, पाँच.', points: ['माँ = mamá, पिता = papá', 'है = es / está (va al final)', 'एक दो तीन = 1, 2, 3', 'मेरा / मेरी = mi'] },
      words: [['mamá', 'माँ', 'maa'], ['papá', 'पिता', 'pita'], ['hermano', 'भाई', 'bhai'], ['hermana', 'बहन', 'bahan'], ['uno', 'एक', 'ek'], ['dos', 'दो', 'do'], ['tres', 'तीन', 'teen'], ['casa', 'घर', 'ghar']],
      phrases: [['Esta es mi mamá', 'यह मेरी माँ है', 'yah meri maa hai'], ['Tengo un hermano', 'मेरा एक भाई है', 'mera ek bhai hai'], ['Mi casa es grande', 'मेरा घर बड़ा है', 'mera ghar bada hai'], ['¿Cuánto cuesta?', 'यह कितने का है', 'yah kitne ka hai']],
    },
    {
      title: 'De viaje por India', level: 'Avanzado',
      guide: { intro: 'कहाँ (kahaan) pregunta dónde está algo. मुझे समझ नहीं आया significa "no entendí". El tren es el medio más usado para recorrer India.', points: ['कहाँ है = ¿dónde está?', 'स्टेशन = estación', 'मुझे समझ नहीं आया = no entendí', 'जाना = ir'] },
      words: [['estación', 'स्टेशन', 'station'], ['tren', 'ट्रेन', 'train'], ['hotel', 'होटल', 'hotel'], ['baño', 'शौचालय', 'shauchalay'], ['dónde', 'कहाँ', 'kahaan'], ['hoy', 'आज', 'aaj'], ['mañana', 'कल', 'kal'], ['dinero', 'पैसा', 'paisa']],
      phrases: [['¿Dónde está la estación?', 'स्टेशन कहाँ है', 'station kahaan hai'], ['No entendí', 'मुझे समझ नहीं आया', 'mujhe samajh nahin aaya'], ['¿Hablás inglés?', 'क्या आप अंग्रेज़ी बोलते हैं', 'kya aap angrezi bolte hain'], ['Quiero ir al hotel', 'मुझे होटल जाना है', 'mujhe hotel jaana hai']],
    },
  ],
}
