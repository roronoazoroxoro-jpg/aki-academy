export default {
  id: 'quechua',
  title: 'Quechua',
  kind: 'lang',
  icon: '🏔️',
  flag: 'bo',
  color: '#B45309',
  lang: 'es-PE',
  desc: 'Lengua originaria de los Andes, viva en el norte argentino y la Puna.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'El quechua se habla en el norte argentino (Santiago del Estero, Jujuy, Salta), Bolivia, Perú y Ecuador. Muchas palabras nuestras vienen de ahí: cancha, poncho, vincha, guacho.', points: ['Allillanchu = ¿Cómo estás?', 'Añay / Sulpayki = Gracias', 'Ari = sí, Mana = no', 'Tupananchikkama = Hasta luego'] },
      words: [['hola', 'Napaykullayki'], ['gracias', 'Añay'], ['sí', 'Ari'], ['no', 'Mana'], ['amigo', 'Masi'], ['agua', 'Yaku'], ['sol', 'Inti'], ['luna', 'Killa']],
      phrases: [['¿Cómo estás?', 'Allillanchu'], ['Estoy bien', 'Allillanmi'], ['Me llamo Aki', 'Aki sutiymi'], ['Hasta luego', 'Tupananchikkama'], ['Muchas gracias', 'Ancha añay']],
    },
    {
      title: 'La naturaleza', level: 'Básico',
      guide: { intro: 'El quechua tiene una relación profunda con la naturaleza. Pachamama (madre tierra) es la palabra más conocida en todo el país.', points: ['Pachamama = madre tierra', 'Inti = sol', 'Yaku = agua', 'Urqu = cerro / montaña'] },
      words: [['tierra', 'Pacha'], ['madre', 'Mama'], ['cerro', 'Urqu'], ['río', 'Mayu'], ['viento', 'Wayra'], ['lluvia', 'Para'], ['fuego', 'Nina'], ['piedra', 'Rumi']],
      phrases: [['Madre tierra', 'Pachamama'], ['El sol es grande', 'Inti hatunmi'], ['El agua está fría', 'Yaku chirimi'], ['El cerro es alto', 'Urqu hatunmi'], ['Hay viento', 'Wayra kachkan']],
    },
    {
      title: 'La familia', level: 'Intermedio',
      guide: { intro: 'En quechua el posesivo se agrega al final de la palabra: tayta (padre) → taytay (mi padre). La partícula -y significa "mi".', points: ['Tayta = padre, Mama = madre', 'Wawa = bebé / hijo', '-y al final = mi', 'Wasi = casa'] },
      words: [['padre', 'Tayta'], ['madre', 'Mama'], ['hijo', 'Wawa'], ['hermano', 'Wawqi'], ['abuelo', 'Machu'], ['casa', 'Wasi'], ['perro', 'Allqu'], ['gente', 'Runa']],
      phrases: [['Mi padre', 'Taytay'], ['Mi madre', 'Mamay'], ['Mi casa es grande', 'Wasiy hatunmi'], ['Tengo un perro', 'Allqu kapuwan'], ['La gente es buena', 'Runa allinmi']],
    },
    {
      title: 'Palabras que usamos', level: 'Avanzado',
      guide: { intro: 'Hablás quechua sin saberlo. Cancha, poncho, chaucha, choclo, pucho, vincha, guacho, morocho y ojota son todas de origen quechua.', points: ['Kancha → cancha (espacio cerrado)', 'Chuqllu → choclo', 'Wakcha → guacho (huérfano)', 'Puchu → pucho (sobra)'] },
      words: [['cancha', 'Kancha'], ['choclo', 'Chuqllu'], ['huérfano', 'Wakcha'], ['sobra', 'Puchu'], ['vincha', 'Wincha'], ['trabajo', 'Llamkay'], ['comida', 'Mikuy'], ['camino', 'Ñan']],
      phrases: [['Quiero comer', 'Mikuyta munani'], ['Vamos a trabajar', 'Llamkasunchik'], ['El camino es largo', 'Ñan karumi'], ['Buen trabajo', 'Allin llamkay'], ['La comida está rica', 'Mikuy misk\'imi']],
    },
  ],
}
