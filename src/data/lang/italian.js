export default {
  id: 'italian',
  title: 'Italiano',
  kind: 'lang',
  icon: '🇮🇹',
  flag: 'it',
  color: '#15803D',
  lang: 'it-IT',
  desc: 'El idioma de nuestros nonos: ¡ideal para la ciudadanía!',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'El italiano es primo hermano del español. "Ciao" sirve para hola y chau entre amigos. Con desconocidos usá "Buongiorno".', points: ['Ciao = Hola / Chau', 'Buongiorno = Buen día', 'Mi chiamo... = Me llamo...', 'Piacere = Mucho gusto'] },
      words: [['hola', 'ciao'], ['gracias', 'grazie'], ['por favor', 'per favore'], ['sí', 'sì'], ['buenas noches', 'buonanotte'], ['amigo', 'amico'], ['señor', 'signore'], ['agua', 'acqua']],
      phrases: [['Buen día', 'Buongiorno'], ['Me llamo Aki', 'Mi chiamo Aki'], ['Soy argentino', 'Sono argentino'], ['Mucho gusto', 'Piacere'], ['¿Cómo estás?', 'Come stai?'], ['Estoy bien, gracias', 'Sto bene, grazie']],
    },
    {
      title: 'Comida italiana', level: 'Básico',
      guide: { intro: 'En Argentina comemos casi como en Italia: pasta, pizza, ñoquis del 29. ¡Vas a reconocer muchas palabras!', points: ['Vorrei... = Quisiera...', 'Il conto, per favore = La cuenta, por favor', 'Buonissimo = Riquísimo'] },
      words: [['pan', 'pane'], ['queso', 'formaggio'], ['tenedor', 'forchetta'], ['helado', 'gelato'], ['manteca', 'burro'], ['pescado', 'pesce'], ['café', 'caffè'], ['cuenta', 'conto']],
      phrases: [['Quisiera una pizza', 'Vorrei una pizza'], ['La cuenta, por favor', 'Il conto, per favore'], ['El helado está riquísimo', 'Il gelato è buonissimo'], ['Tengo hambre', 'Ho fame'], ['Me gusta la pasta', 'Mi piace la pasta']],
    },
    {
      title: 'La familia', level: 'Básico',
      guide: { intro: 'En italiano el posesivo lleva artículo: "la mia casa" (mi casa), salvo con familiares en singular: "mia madre".', points: ['madre / padre', 'nonno / nonna = abuelo / abuela', 'fratello / sorella = hermano / hermana'] },
      words: [['tío', 'zio'], ['primo', 'cugino'], ['abuelo', 'nonno'], ['abuela', 'nonna'], ['hermano', 'fratello'], ['hermana', 'sorella'], ['hijo', 'figlio'], ['nieto', 'nipote']],
      phrases: [['Mi abuela es italiana', 'Mia nonna è italiana'], ['Tengo dos hermanos', 'Ho due fratelli'], ['Mi padre trabaja mucho', 'Mio padre lavora molto'], ['Vivimos en Buenos Aires', 'Viviamo a Buenos Aires'], ['Mi hermana es médica', 'Mia sorella è medico']],
    },
    {
      title: 'De viaje por Italia', level: 'Intermedio',
      guide: { intro: 'Para preguntar dónde queda algo: "Dov\'è...?". Para el pasado se usa mucho el "passato prossimo": "ho visitato" (visité).', points: ["Dov'è la stazione? = ¿Dónde está la estación?", 'Ho visitato Roma = Visité Roma', 'biglietto = boleto'] },
      words: [['estación', 'stazione'], ['boleto', 'biglietto'], ['calle', 'strada'], ['ciudad', 'città'], ['mar', 'mare'], ['tren', 'treno'], ['pasaporte', 'passaporto'], ['hoy', 'oggi']],
      phrases: [['¿Dónde está la estación?', "Dov'è la stazione?"], ['Visité Roma', 'Ho visitato Roma'], ['Necesito un boleto', 'Ho bisogno di un biglietto'], ['El tren sale hoy', 'Il treno parte oggi'], ['Quiero ver el mar', 'Voglio vedere il mare']],
    },
    {
      title: 'Ciudadanía y trámites', level: 'Avanzado',
      guide: { intro: 'Si estás tramitando la ciudadanía, vas a necesitar vocabulario formal. Con desconocidos se usa "Lei" (usted).', points: ['Lei = usted', 'documento, certificato, comune', 'Potrebbe aiutarmi? = ¿Podría ayudarme?'] },
      words: [['sello', 'timbro'], ['certificado', 'certificato'], ['municipio', 'comune'], ['cita', 'appuntamento'], ['ciudadanía', 'cittadinanza'], ['bisabuelo', 'bisnonno'], ['apellido', 'cognome'], ['oficina', 'ufficio']],
      phrases: [['¿Podría ayudarme?', 'Potrebbe aiutarmi?'], ['Tengo una cita', 'Ho un appuntamento'], ['Mi bisabuelo nació en Italia', 'Il mio bisnonno è nato in Italia'], ['Necesito un certificado', 'Ho bisogno di un certificato'], ['¿Dónde está la oficina?', "Dov'è l'ufficio?"]],
    },
  ],
}
