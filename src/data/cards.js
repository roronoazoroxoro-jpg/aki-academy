export const RARITY = {
  comun: { id: 'comun', label: 'Común', color: '#6b7c8f' },
  rara: { id: 'rara', label: 'Rara', color: '#2E7FC2' },
  epica: { id: 'epica', label: 'Épica', color: '#7c3aed' },
  leyenda: { id: 'leyenda', label: 'Leyenda', color: '#c98912' },
}

const card = (id, n, name, set, rarity, cost, extra) => ({ id, n, name, set, rarity, cost, ...extra })

export const CARDS = [
  card('futbol', 1, 'Futbolista', 'disfraz', 'rara', 80, {
    img: '/img/cards/card-futbol.jpg',
    desc: 'Camiseta 10, pelota bajo el brazo y mate listo. Un golazo de esquina.',
  }),
  card('chef', 2, 'Chef', 'disfraz', 'rara', 80, {
    img: '/img/cards/card-chef.jpg',
    desc: 'Toque blanco, cuchara de palo y el mate como puchero. Cocina a la criolla.',
  }),
  card('soldado', 3, 'Soldado', 'disfraz', 'epica', 140, {
    img: '/img/cards/card-soldado.jpg',
    desc: 'Granadero de desfile, sol de oro y el pecho bien hinchado. ¡Presente!',
  }),
  card('skater', 4, 'Skater', 'disfraz', 'rara', 80, {
    img: '/img/cards/card-skater.jpg',
    desc: 'Hoodie, tabla y un ollie en el patio. AKI no se cae… casi nunca.',
  }),
  card('astro', 5, 'Astronauta', 'disfraz', 'leyenda', 200, {
    img: '/img/cards/card-astro.jpg',
    desc: 'Mate en gravedad cero. De la Terraza al espacio, che.',
  }),
  card('medico', 6, 'Médico', 'disfraz', 'rara', 80, {
    img: '/img/cards/card-medico.jpg',
    desc: 'Guardapolvo, estetoscopio y receta: dos mates y a seguir estudiando.',
  }),
  card('heroe', 7, 'Héroe', 'disfraz', 'epica', 140, {
    img: '/img/cards/card-heroe.jpg',
    desc: 'Capa celeste, sol de oro y el mate de compañero. El héroe del barrio.',
  }),
  card('gaucho', 8, 'Gaucho', 'disfraz', 'leyenda', 200, {
    img: '/img/cards/card-gaucho.jpg',
    desc: 'Poncho, pampa y un mate que no se apura. Esta es la carta más criolla.',
  }),
  card('dj', 9, 'DJ AKI', 'disfraz', 'rara', 80, {
    img: '/img/cards/card-dj.jpg',
    desc: 'Auriculares, decks de oro y el mate en la mesa de mezclas.',
  }),
  card('bombero', 10, 'Bombero', 'disfraz', 'epica', 140, {
    img: '/img/cards/card-bombero.jpg',
    desc: 'Casco, manguera y coraje. Apaga el incendio y después toma unos sorbos.',
  }),
  card('original', 11, 'AKI original', 'clasico', 'comun', 0, {
    pose: 'mascot', free: true,
    desc: 'El de siempre: gorra AKI, visor celeste y mate. Ya está en tu mazo.',
  }),
  card('matecito', 12, 'Mate listo', 'clasico', 'comun', 40, {
    pose: 'streak',
    desc: 'Cuando la racha está prendida, el termo no se enfría.',
  }),
  card('coder', 13, 'Programador', 'clasico', 'comun', 40, {
    pose: 'code',
    desc: 'Notebook, visor brillando y un bug que no pasa de acá.',
  }),
  card('poly', 14, 'Políglota', 'clasico', 'comun', 40, {
    pose: 'languages',
    desc: '25 idiomas, un solo robot. Hola, hello, ciao, 你好.',
  }),
  card('festejo', 15, 'Festejo', 'clasico', 'rara', 70, {
    pose: 'celebrate',
    desc: 'Lección perfecta. Brazos al cielo, como en la Bombonera.',
  }),
  card('campeon', 16, 'Campeón', 'clasico', 'rara', 70, {
    pose: 'victory',
    desc: 'Copa, confeti y esa cara de «la rompí».',
  }),
  card('celeste', 17, 'Bandera', 'clasico', 'rara', 70, {
    pose: 'flag',
    desc: 'Celeste y blanco. Hecho en un patio argentino.',
  }),
  card('energia', 18, 'A full', 'clasico', 'epica', 120, {
    pose: 'power',
    desc: 'Cuando el combo pasa de 8, AKI se prende fuego.',
  }),
  card('profe', 19, 'Profe', 'clasico', 'comun', 40, {
    pose: 'teach',
    desc: 'Pizarra, paciencia y «mirá, es más fácil de lo que parece».',
  }),
  card('patio', 20, 'En el patio', 'clasico', 'leyenda', 180, {
    pose: 'patio',
    desc: 'El retrato de oro: sol, mate y la siesta más productiva del país.',
  }),
]

export const SETS = [
  { id: 'disfraz', title: 'Edición disfraces', sub: '10 estilos de AKI vestido. Esta es la colección estrella.' },
  { id: 'clasico', title: 'Edición clásica', sub: 'Las caras de siempre, ahora en figurita.' },
]

export const figusForLesson = (perfect, practice) => (practice ? 6 : perfect ? 20 : 12)

export const copiesOf = (deck, id) => deck?.owned?.[id] || 0
export const hasCard = (deck, id) => copiesOf(deck, id) > 0
export const ownedCount = (deck) => CARDS.filter((c) => hasCard(deck, c.id)).length
export const setOwned = (deck, setId) => CARDS.filter((c) => c.set === setId && hasCard(deck, c.id)).length
