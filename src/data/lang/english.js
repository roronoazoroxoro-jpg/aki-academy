export default {
  id: 'english',
  title: 'Inglés',
  kind: 'lang',
  icon: '🇬🇧',
  flag: 'gb',
  color: '#1D4ED8',
  lang: 'en-US',
  desc: 'El idioma de internet, la tecnología y los viajes.',
  units: [
    {
      title: 'Saludos y presentaciones', level: 'Básico',
      guide: { intro: 'En inglés, "you" sirve para vos, tú y usted. "I am" se acorta como "I\'m".', points: ['Hello / Hi = Hola', 'Good morning = Buen día', 'My name is... = Me llamo...', 'Nice to meet you = Encantado/a'] },
      words: [['hola', 'hello'], ['adiós', 'goodbye'], ['gracias', 'thank you'], ['por favor', 'please'], ['sí', 'yes'], ['de nada', "you're welcome"], ['amigo', 'friend'], ['nombre', 'name']],
      phrases: [['Buen día', 'Good morning'], ['Me llamo Aki', 'My name is Aki'], ['Soy de Argentina', 'I am from Argentina'], ['Mucho gusto', 'Nice to meet you'], ['¿Cómo estás?', 'How are you?'], ['Estoy bien, gracias', 'I am fine, thank you']],
    },
    {
      title: 'Comida y mate', level: 'Básico',
      guide: { intro: 'Para pedir algo amablemente usá "I would like" o "Can I have". El mate no tiene traducción: ¡es "mate"!', points: ['I like... = Me gusta...', 'I would like... = Quisiera...', 'Delicious = Riquísimo'] },
      words: [['agua', 'water'], ['pan', 'bread'], ['carne', 'meat'], ['café', 'coffee'], ['leche', 'milk'], ['manzana', 'apple'], ['desayuno', 'breakfast'], ['cena', 'dinner']],
      phrases: [['Me gusta el mate', 'I like mate'], ['Quisiera un café', 'I would like a coffee'], ['El asado está riquísimo', 'The barbecue is delicious'], ['Tengo hambre', 'I am hungry'], ['¿Puedo tomar agua?', 'Can I have water?']],
    },
    {
      title: 'Familia y personas', level: 'Básico',
      guide: { intro: 'Los adjetivos en inglés van ANTES del sustantivo y no cambian por género: "a tall man", "a tall woman".', points: ['mother / father', 'brother / sister', 'He is = Él es', 'She is = Ella es'] },
      words: [['madre', 'mother'], ['padre', 'father'], ['hermano', 'brother'], ['hermana', 'sister'], ['hijo', 'son'], ['abuela', 'grandmother'], ['perro', 'dog'], ['casa', 'house']],
      phrases: [['Mi hermana es alta', 'My sister is tall'], ['Él es mi padre', 'He is my father'], ['Tengo un perro', 'I have a dog'], ['Mi abuela cocina bien', 'My grandmother cooks well'], ['Vivimos en una casa grande', 'We live in a big house']],
    },
    {
      title: 'Viajes y ciudad', level: 'Intermedio',
      guide: { intro: 'Para preguntar dónde está algo: "Where is...?". Para el futuro cercano usá "I am going to...".', points: ['Where is the station? = ¿Dónde está la estación?', 'Turn left / right = Doblá a la izquierda / derecha', 'I am going to travel = Voy a viajar'] },
      words: [['aeropuerto', 'airport'], ['boleto', 'ticket'], ['calle', 'street'], ['valija', 'suitcase'], ['playa', 'beach'], ['tren', 'train'], ['izquierda', 'left'], ['derecha', 'right']],
      phrases: [['¿Dónde está el hotel?', 'Where is the hotel?'], ['Voy a viajar a Londres', 'I am going to travel to London'], ['Necesito un boleto', 'I need a ticket'], ['Doblá a la izquierda', 'Turn left'], ['La playa está cerca', 'The beach is near']],
    },
    {
      title: 'Trabajo y tecnología', level: 'Avanzado',
      guide: { intro: 'El "present perfect" (have + participio) habla de experiencias o cosas recientes: "I have worked", "She has finished".', points: ['I have learned = Aprendí / He aprendido', 'meeting = reunión', 'deadline = fecha límite', 'to deploy = publicar (una app)'] },
      words: [['reunión', 'meeting'], ['computadora', 'computer'], ['trabajo', 'job'], ['equipo', 'team'], ['habilidad', 'skill'], ['fecha límite', 'deadline'], ['jefe', 'boss'], ['sueldo', 'salary']],
      phrases: [['Aprendí a programar', 'I have learned to code'], ['Tenemos una reunión hoy', 'We have a meeting today'], ['Ella terminó el proyecto', 'She has finished the project'], ['Trabajo en equipo', 'I work in a team'], ['Publicamos la app ayer', 'We deployed the app yesterday']],
    },
  ],
}
