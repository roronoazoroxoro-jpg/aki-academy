export default {
  id: 'indonesian',
  title: 'Indonesio',
  kind: 'lang',
  icon: '🇮🇩',
  flag: 'id',
  color: '#DC2626',
  lang: 'id-ID',
  desc: 'El idioma de 270 millones de personas: sin conjugaciones y muy lógico.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'El indonesio no conjuga verbos ni tiene género. "Halo" es hola. Es uno de los idiomas más amigables para empezar.', points: ['Halo / Selamat pagi = Hola / Buen día', 'Terima kasih = Gracias', 'Ya / Tidak = Sí / No', 'Nama saya... = Me llamo...'] },
      words: [['hola', 'halo'], ['gracias', 'terima kasih'], ['sí', 'ya'], ['no', 'tidak'], ['por favor', 'tolong'], ['adiós', 'selamat tinggal'], ['amigo', 'teman'], ['agua', 'air']],
      phrases: [['Me llamo Aki', 'Nama saya Aki'], ['Soy de Argentina', 'Saya dari Argentina'], ['¿Cómo estás?', 'Apa kabar?'], ['Estoy bien, gracias', 'Saya baik, terima kasih'], ['Mucho gusto', 'Senang bertemu']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'El nasi goreng (arroz frito) es el plato más famoso. Para pedir: "Saya mau..." (yo quiero).', points: ['Saya mau air = Quiero agua', 'Enak = Rico', 'Bon = Cuenta'] },
      words: [['agua', 'air'], ['arroz', 'nasi'], ['fideos', 'mie'], ['café', 'kopi'], ['té', 'teh'], ['rico', 'enak'], ['cuenta', 'bon'], ['picante', 'pedas']],
      phrases: [['Quiero agua', 'Saya mau air'], ['La cuenta, por favor', 'Minta bon'], ['Está rico', 'Ini enak'], ['Tengo hambre', 'Saya lapar'], ['No picante', 'Tidak pedas']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: '"Saya punya" = tengo. "Ibu / Ayah" = mamá / papá. "Rumah" = casa.', points: ['Ibu / Ayah', 'Kakak / Adik = hermano/a mayor / menor', 'Saya punya = Tengo'] },
      words: [['mamá', 'ibu'], ['papá', 'ayah'], ['hermano mayor', 'kakak'], ['hermano menor', 'adik'], ['hijo', 'anak laki-laki'], ['hija', 'anak perempuan'], ['perro', 'anjing'], ['casa', 'rumah']],
      phrases: [['Tengo un perro', 'Saya punya anjing'], ['Mamá está en casa', 'Ibu di rumah'], ['La casa es grande', 'Rumah ini besar'], ['Él es mi papá', 'Ini ayah saya']],
    },
    {
      title: 'Viaje a Bali', level: 'Avanzado',
      guide: { intro: '"Di mana...?" pregunta dónde. El tren es "kereta" y la estación "stasiun".', points: ['Stasiun di mana?', 'Hari ini / besok = hoy / mañana'] },
      words: [['estación', 'stasiun'], ['tren', 'kereta'], ['calle', 'jalan'], ['ciudad', 'kota'], ['hoy', 'hari ini'], ['mañana', 'besok'], ['hotel', 'hotel'], ['baño', 'toilet']],
      phrases: [['¿Dónde está la estación?', 'Stasiun di mana?'], ['Viajo mañana', 'Besok saya pergi'], ['El tren llega hoy', 'Kereta datang hari ini'], ['¿Dónde está el baño?', 'Toilet di mana?']],
    },
  ],
}
