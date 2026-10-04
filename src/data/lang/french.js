export default {
  id: 'french',
  title: 'Francés',
  kind: 'lang',
  icon: '🇫🇷',
  flag: 'fr',
  color: '#2563EB',
  lang: 'fr-FR',
  desc: 'El idioma de la cultura, la cocina y la diplomacia.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'En francés muchas letras finales no se pronuncian. "Bonjour" sirve todo el día, "Bonsoir" a la noche.', points: ['Bonjour = Buen día / Hola', 'Merci = Gracias', "Je m'appelle... = Me llamo...", 'Enchanté = Encantado'] },
      words: [['hola', 'bonjour'], ['gracias', 'merci'], ['por favor', "s'il vous plaît"], ['sí', 'oui'], ['no', 'non'], ['chau', 'au revoir'], ['amigo', 'ami'], ['buenas noches', 'bonsoir']],
      phrases: [['Me llamo Aki', "Je m'appelle Aki"], ['Soy argentino', 'Je suis argentin'], ['¿Cómo estás?', 'Comment ça va?'], ['Muy bien, gracias', 'Très bien, merci'], ['Encantado', 'Enchanté']],
    },
    {
      title: 'En el café', level: 'Básico',
      guide: { intro: 'Para pedir: "Je voudrais..." (quisiera). El croissant es la medialuna francesa.', points: ['Je voudrais un café = Quisiera un café', "L'addition = La cuenta", 'Délicieux = Riquísimo'] },
      words: [['vino', 'vin'], ['pan', 'pain'], ['queso', 'fromage'], ['agua', 'eau'], ['leche', 'lait'], ['medialuna', 'croissant'], ['manteca', 'beurre'], ['cuenta', 'addition']],
      phrases: [['Quisiera un café', 'Je voudrais un café'], ['La cuenta, por favor', "L'addition, s'il vous plaît"], ['Me gusta el queso', "J'aime le fromage"], ['Tengo hambre', "J'ai faim"], ['Es riquísimo', "C'est délicieux"]],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: 'Los posesivos cambian por género: "mon père" (mi papá), "ma mère" (mi mamá), "mes parents" (mis padres).', points: ['mère / père', 'frère / sœur', "J'ai = Tengo"] },
      words: [['madre', 'mère'], ['padre', 'père'], ['hermano', 'frère'], ['hermana', 'sœur'], ['hijo', 'fils'], ['abuela', 'grand-mère'], ['perro', 'chien'], ['gato', 'chat']],
      phrases: [['Tengo un hermano', "J'ai un frère"], ['Mi madre es médica', 'Ma mère est médecin'], ['Mi gato es negro', 'Mon chat est noir'], ['Mi abuela vive en París', 'Ma grand-mère habite à Paris']],
    },
    {
      title: 'Viaje a París', level: 'Avanzado',
      guide: { intro: '"Où est...?" pregunta dónde está algo. El pasado más usado es el "passé composé": "J\'ai visité" (visité).', points: ['Où est la gare? = ¿Dónde está la estación?', "J'ai visité Paris = Visité París", 'Le métro = el subte'] },
      words: [['estación', 'gare'], ['subte', 'métro'], ['calle', 'rue'], ['museo', 'musée'], ['boleto', 'billet'], ['hoy', "aujourd'hui"], ['mañana', 'demain'], ['ciudad', 'ville']],
      phrases: [['¿Dónde está la estación?', 'Où est la gare?'], ['Visité París', "J'ai visité Paris"], ['Necesito un boleto', "J'ai besoin d'un billet"], ['El museo está cerca', 'Le musée est près']],
    },
  ],
}
