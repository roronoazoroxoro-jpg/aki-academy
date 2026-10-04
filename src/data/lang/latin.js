export default {
  id: 'latin',
  title: 'Latín',
  kind: 'lang',
  icon: '🏛️',
  flag: 'va',
  color: '#A16207',
  lang: 'it-IT',
  desc: 'La raíz del español: entendé de dónde viene cada palabra que decís.',
  units: [
    {
      title: 'Primeras palabras', level: 'Básico',
      guide: { intro: 'El latín es el abuelo del español, el italiano, el francés y el portugués. Aprenderlo te hace entender miles de palabras que ya usás todos los días.', points: ['Salve = Hola', 'Gratias tibi = Gracias', 'Ita = sí, Non = no', 'Vale = Adiós (literalmente "que estés bien")'] },
      words: [['hola', 'Salve'], ['adiós', 'Vale'], ['gracias', 'Gratias'], ['sí', 'Ita'], ['no', 'Non'], ['amigo', 'Amicus'], ['agua', 'Aqua'], ['tierra', 'Terra']],
      phrases: [['Me llamo Aki', 'Nomen mihi Aki est'], ['Soy argentino', 'Argentinus sum'], ['¿Cómo estás?', 'Quid agis'], ['Estoy bien', 'Bene valeo'], ['El amigo es bueno', 'Amicus bonus est']],
    },
    {
      title: 'Palabras que ya conocés', level: 'Básico',
      guide: { intro: 'Muchísimas palabras del español vienen directo del latín. "Agua" viene de aqua, "tierra" de terra, "vida" de vita. Es casi hacer trampa.', points: ['Vita → vida, vital, vitamina', 'Terra → tierra, territorio', 'Aqua → agua, acuático', 'Liber → libro, librería'] },
      words: [['vida', 'Vita'], ['libro', 'Liber'], ['mano', 'Manus'], ['tiempo', 'Tempus'], ['guerra', 'Bellum'], ['rey', 'Rex'], ['madre', 'Mater'], ['padre', 'Pater']],
      phrases: [['La vida es breve', 'Vita brevis est'], ['El libro es nuevo', 'Liber novus est'], ['El tiempo vuela', 'Tempus fugit'], ['La madre ama al hijo', 'Mater filium amat'], ['El rey es grande', 'Rex magnus est']],
    },
    {
      title: 'Frases célebres', level: 'Intermedio',
      guide: { intro: 'Estas frases se siguen usando hoy en el derecho, la ciencia y la cultura. Si las entendés, entendés media biblioteca.', points: ['Carpe diem = Aprovechá el día', 'Cogito ergo sum = Pienso, entonces existo', 'Veni, vidi, vici = Vine, vi, vencí', 'Alea iacta est = La suerte está echada'] },
      words: [['pienso', 'Cogito'], ['vine', 'Veni'], ['vi', 'Vidi'], ['vencí', 'Vici'], ['día', 'Diem'], ['siempre', 'Semper'], ['nada', 'Nihil'], ['todo', 'Omnia']],
      phrases: [['Aprovechá el día', 'Carpe diem'], ['Pienso, entonces existo', 'Cogito ergo sum'], ['Vine, vi, vencí', 'Veni vidi vici'], ['El arte es larga', 'Ars longa est'], ['Siempre fiel', 'Semper fidelis']],
    },
    {
      title: 'Gramática básica', level: 'Avanzado',
      guide: { intro: 'En latín el orden de las palabras es libre: lo que marca la función es la terminación. Mater amat filium y Filium amat mater significan lo mismo.', points: ['Sum = yo soy, Es = tú eres, Est = él es', 'La terminación marca sujeto u objeto', 'El verbo suele ir al final', 'No hay artículos (ni el ni la)'] },
      words: [['yo soy', 'Sum'], ['él es', 'Est'], ['nosotros somos', 'Sumus'], ['ellos son', 'Sunt'], ['grande', 'Magnus'], ['bueno', 'Bonus'], ['nuevo', 'Novus'], ['ama', 'Amat']],
      phrases: [['Yo soy argentino', 'Argentinus sum'], ['Nosotros somos amigos', 'Amici sumus'], ['El libro es bueno', 'Liber bonus est'], ['La madre ama', 'Mater amat'], ['Ellos son grandes', 'Magni sunt']],
    },
  ],
}
