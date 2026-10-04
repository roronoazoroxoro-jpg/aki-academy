import { c, t, m, unit } from '../helpers'

export default {
  id: 'astronomia',
  title: 'Astronomía',
  kind: 'sci',
  icon: '🪐',
  color: '#4F46E5',
  desc: 'Del patio de tu casa al Big Bang: planetas, estrellas y el universo.',
  units: [
    unit('El sistema solar', 'Básico', {
      intro: 'Ocho planetas giran alrededor del Sol. Los rocosos (Mercurio, Venus, Tierra, Marte) están cerca; los gigantes (Júpiter, Saturno, Urano, Neptuno) están lejos.',
      points: ['El Sol es una estrella, no un planeta', 'La Tierra es el tercer planeta', 'La Luna es un satélite', 'Un año es una vuelta alrededor del Sol'],
      code: 'Sol → Mercurio Venus Tierra Marte | Júpiter Saturno Urano Neptuno',
    }, [
      c('¿Cuántos planetas tiene el sistema solar?', ['8', '9', '7', '12']),
      c('¿Qué es el Sol?', ['Una estrella', 'Un planeta', 'Un satélite', 'Un cometa']),
      c('¿Cuál es el planeta más grande?', ['Júpiter', 'Saturno', 'La Tierra', 'Neptuno']),
      t('¿En qué número de planeta está la Tierra, contando desde el Sol?', ['3', 'tercero', 'tercer']),
      c('¿Qué es la Luna respecto de la Tierra?', ['Un satélite natural', 'Un planeta enano', 'Una estrella', 'Un asteroide']),
      c('¿Por qué hay estaciones?', ['Porque el eje de la Tierra está inclinado', 'Porque la Tierra se aleja del Sol en invierno', 'Porque la Luna tapa el Sol', 'Porque cambia la distancia a Júpiter']),
      m('Uní cada cuerpo con lo que es', [['Sol', 'Estrella'], ['Tierra', 'Planeta'], ['Luna', 'Satélite'], ['Halley', 'Cometa']]),
    ]),
    unit('Estrellas y constelaciones', 'Básico', {
      intro: 'Una estrella es una bola de gas que brilla por fusión nuclear. Las constelaciones son dibujos que imaginamos uniendo estrellas. La Cruz del Sur se ve desde Argentina.',
      points: ['Las estrellas nacen en nebulosas', 'Cuando se les acaba el combustible, mueren', 'La Cruz del Sur apunta al sur', 'La luz de una estrella tarda años en llegar'],
      code: 'Hidrógeno → fusión → Helio + luz + calor',
    }, [
      c('¿Qué hace brillar a una estrella?', ['La fusión nuclear', 'Un fuego químico', 'Refleja la luz de la Luna', 'Electricidad']),
      c('¿Qué constelación se usa en el hemisferio sur para orientarse?', ['La Cruz del Sur', 'Orión', 'La Osa Mayor', 'Casiopea']),
      c('¿Qué es un año luz?', ['La distancia que recorre la luz en un año', 'Un año en otra galaxia', 'La edad de una estrella', 'Un calendario espacial']),
      t('¿Cómo se llama nuestra galaxia?', ['Vía Láctea', 'via lactea', 'Via Lactea']),
      c('¿Qué le pasa a una estrella muy masiva al morir?', ['Puede terminar en agujero negro', 'Se convierte en planeta', 'Se apaga de a poco como una vela', 'Se transforma en cometa']),
      c('¿Por qué vemos las estrellas de noche y no de día?', ['El Sol las tapa con su brillo', 'De día no hay estrellas', 'La Tierra gira al revés', 'La atmósfera se apaga']),
    ]),
    unit('La Tierra y la Luna', 'Intermedio', {
      intro: 'La Tierra rota (día y noche) y traslada (año). La Luna tarda ~27 días en dar una vuelta y provoca las mareas. Los eclipses ocurren cuando se alinean Sol, Tierra y Luna.',
      points: ['Rotación: 24 horas', 'Traslación: 365 días', 'Eclipse solar: la Luna tapa al Sol', 'Eclipse lunar: la Tierra tapa a la Luna'],
      code: 'Sol —— Luna —— Tierra  →  eclipse solar\nSol —— Tierra —— Luna  →  eclipse lunar',
    }, [
      c('¿Qué movimiento causa el día y la noche?', ['La rotación', 'La traslación', 'La precesión', 'Las mareas']),
      c('¿Qué movimiento causa las estaciones junto con la inclinación?', ['La traslación', 'Solo la rotación', 'El viento solar', 'Los eclipses']),
      c('¿Qué causa las mareas?', ['La gravedad de la Luna (y un poco del Sol)', 'El viento', 'Los peces', 'El magnetismo de Marte']),
      t('¿Cuántos días tarda, más o menos, un mes lunar?', ['27', '28', '29']),
      c('En un eclipse solar, ¿quién queda en el medio?', ['La Luna', 'La Tierra', 'Marte', 'El Sol']),
      c('¿Por qué no hay eclipse todos los meses?', ['Las órbitas están inclinadas y no siempre se alinean', 'La Luna es demasiado chica siempre', 'El Sol se apaga', 'Porque hay nubes']),
    ]),
    unit('El universo', 'Avanzado', {
      intro: 'El universo se expande desde el Big Bang, hace unos 13.800 millones de años. Hay miles de millones de galaxias. Todavía no sabemos qué son la materia oscura ni la energía oscura.',
      points: ['Big Bang: el origen del universo observable', 'Las galaxias se alejan: el universo se agranda', 'Exoplaneta: planeta que gira alrededor de otra estrella', 'James Webb observa luz muy antigua'],
      code: 'Big Bang → átomos → estrellas → galaxias → nosotros',
    }, [
      c('¿Qué es el Big Bang?', ['El inicio de la expansión del universo', 'Una explosión de una estrella', 'El nacimiento del Sol', 'Un choque de planetas']),
      c('¿Qué observó Hubble que cambió la astronomía?', ['Que las galaxias se alejan', 'Que la Tierra es plana', 'Que Marte tiene anillos', 'Que el Sol es sólido']),
      t('¿Cómo se llama un planeta que gira alrededor de otra estrella?', ['exoplaneta', 'exoplanetas']),
      c('¿Qué telescopio espacial sucesor del Hubble observa en infrarrojo?', ['James Webb', 'Hubble 2', 'Galileo', 'Kepler solo']),
      c('¿Qué porcentaje de la Tierra está cubierto de agua, más o menos?', ['70%', '30%', '10%', '95%']),
      m('Uní cada idea', [['Big Bang', 'Origen del universo'], ['Nebulosa', 'Cuna de estrellas'], ['Agujero negro', 'Gravedad extrema'], ['Exoplaneta', 'Planeta de otra estrella']]),
    ]),
  ],
}
