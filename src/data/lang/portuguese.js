export default {
  id: 'portuguese',
  title: 'Portugués',
  kind: 'lang',
  icon: '🇧🇷',
  flag: 'br',
  color: '#16A34A',
  lang: 'pt-BR',
  desc: 'Para Brasil, el Mercosur y las vacaciones en la playa.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'El portugués de Brasil se parece mucho al español, pero ojo con los "falsos amigos": "exquisito" significa raro y "polvo" es pulpo.', points: ['Oi / Olá = Hola', 'Bom dia = Buen día', 'Obrigado/a = Gracias', 'Tudo bem? = ¿Todo bien?'] },
      words: [['hola', 'oi'], ['gracias', 'obrigado'], ['perdón', 'desculpa'], ['buen día', 'bom dia'], ['chau', 'tchau'], ['chico', 'menino'], ['sí', 'sim'], ['no', 'não']],
      phrases: [['¿Todo bien?', 'Tudo bem?'], ['Me llamo Aki', 'Meu nome é Aki'], ['Soy de Argentina', 'Sou da Argentina'], ['Mucho gusto', 'Prazer em conhecer'], ['Buenas noches', 'Boa noite']],
    },
    {
      title: 'Playa y comida', level: 'Básico',
      guide: { intro: 'En Brasil vas a pedir "água de coco", "pão de queijo" y "caipirinha". "Gostoso" significa rico.', points: ['Eu gostaria de... = Quisiera...', 'A conta, por favor = La cuenta', 'Praia = Playa'] },
      words: [['playa', 'praia'], ['agua', 'água'], ['pan', 'pão'], ['queso', 'queijo'], ['manteca', 'manteiga'], ['jugo', 'suco'], ['rico', 'gostoso'], ['cuenta', 'conta']],
      phrases: [['Quisiera un jugo', 'Eu gostaria de um suco'], ['La cuenta, por favor', 'A conta, por favor'], ['La playa es hermosa', 'A praia é linda'], ['Tengo hambre', 'Estou com fome'], ['El pan de queso es rico', 'O pão de queijo é gostoso']],
    },
    {
      title: 'Familia y amigos', level: 'Básico',
      guide: { intro: 'Para decir "tengo" se usa "tenho". Los posesivos llevan artículo: "a minha mãe" (mi mamá).', points: ['mãe / pai = mamá / papá', 'irmão / irmã = hermano / hermana', 'Eu tenho = Yo tengo'] },
      words: [['mamá', 'mãe'], ['papá', 'pai'], ['hermano', 'irmão'], ['hermana', 'irmã'], ['hijo', 'filho'], ['abuelo', 'avô'], ['novia', 'namorada'], ['perro', 'cachorro']],
      phrases: [['Tengo un hermano', 'Eu tenho um irmão'], ['Mi mamá es profesora', 'Minha mãe é professora'], ['Mi perro es grande', 'Meu cachorro é grande'], ['Ella es mi novia', 'Ela é minha namorada'], ['Mi abuelo vive en Rosario', 'Meu avô mora em Rosário']],
    },
    {
      title: 'Viajes', level: 'Intermedio',
      guide: { intro: '"Onde fica...?" pregunta dónde queda algo. "Vou" es "voy": "Vou viajar" = Voy a viajar.', points: ['Onde fica o hotel? = ¿Dónde queda el hotel?', 'passagem = pasaje', 'ônibus = colectivo'] },
      words: [['colectivo', 'ônibus'], ['pasaje', 'passagem'], ['aeropuerto', 'aeroporto'], ['calle', 'rua'], ['ciudad', 'cidade'], ['hoy', 'hoje'], ['mañana', 'amanhã'], ['cerca', 'perto']],
      phrases: [['¿Dónde queda el hotel?', 'Onde fica o hotel?'], ['Voy a viajar mañana', 'Vou viajar amanhã'], ['Necesito un pasaje', 'Preciso de uma passagem'], ['La playa está cerca', 'A praia está perto'], ['El colectivo llega hoy', 'O ônibus chega hoje']],
    },
    {
      title: 'Trabajo y negocios', level: 'Avanzado',
      guide: { intro: 'En el trabajo se usa "você" o "o senhor / a senhora" para ser formal. "Reunião" es reunión y "empresa" es empresa.', points: ['Reunião = Reunión', 'Trabalho = Trabajo', 'Prazo = Plazo / fecha límite'] },
      words: [['trabajo', 'trabalho'], ['reunión', 'reunião'], ['plazo', 'prazo'], ['equipo', 'equipe'], ['sueldo', 'salário'], ['jefe', 'chefe'], ['oficina', 'escritório'], ['archivo', 'arquivo']],
      phrases: [['Tenemos una reunión hoy', 'Temos uma reunião hoje'], ['Trabajo en una empresa', 'Trabalho numa empresa'], ['El plazo es mañana', 'O prazo é amanhã'], ['El cliente está contento', 'O cliente está contente'], ['Mi oficina es grande', 'Meu escritório é grande']],
    },
  ],
}
