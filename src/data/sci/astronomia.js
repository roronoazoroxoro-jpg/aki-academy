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
    unit('Observar el cielo desde Argentina', 'Básico', {
      intro: 'Desde el sur se ve la Cruz del Sur, no la Osa Mayor. En un cielo oscuro (campo, montaña) aparecen la Vía Láctea y las Magallanes. La contaminación lumínica tapa estrellas.',
      points: ['Hemisferio sur ≠ norte', 'Menos luz = más estrellas', 'La Luna llena “apaga” el fondo', 'Una app de cielo ayuda a reconocer'],
      code: 'campo oscuro  →  Vía Láctea visible\nciudad  →  pocas estrellas',
    }, [
      c('¿Qué constelación usamos acá para hallar el sur?', ['Cruz del Sur', 'Osa Mayor', 'Casiopea', 'Polaris']),
      c('¿Por qué en la ciudad se ven menos estrellas?', ['Contaminación lumínica', 'No hay cielo', 'El smog las borra del universo', 'Las estrellas se apagan']),
      t('¿Cómo se llama nuestra galaxia vista de canto en noches oscuras?', ['vía láctea', 'via lactea']),
      c('¿La Estrella Polar se ve desde Buenos Aires?', ['No (está en el norte)', 'Sí, siempre', 'Solo en verano', 'Solo con telescopio']),
      c('¿Las Nubes de Magallanes qué son?', ['Galaxias enanas vecinas, visibles desde el sur', 'Nubes de lluvia', 'Planetas', 'Satélites de Starlink nomas']),
    ]),
    unit('Telescopios y luz', 'Intermedio', {
      intro: 'Un telescopio junta luz. Más diámetro = más detalle. Hay ópticos, radio e infrarrojos. Cada “color” (longitud de onda) cuenta otra historia.',
      points: ['Apertura: tamaño del espejo/lente', 'Hubble: óptico en órbita', 'Webb: infrarrojo', 'Un binocular ya abre el cielo'],
      code: 'más apertura → más fotones → más detalle',
    }, [
      c('¿Qué es más importante en un telescopio de aficionado?', ['El diámetro (apertura)', 'Que sea dorado', 'El zoom del ocular nomas', 'Que tenga Bluetooth']),
      c('James Webb observa sobre todo en...', ['Infrarrojo', 'Sonido', 'Rayos X nomas', 'Ondas de radio AM']),
      t('¿Cómo se llama el telescopio espacial clásico de los 90?', ['hubble']),
      c('¿Por qué poner telescopios en el espacio?', ['Evitan la atmósfera que distorsiona y filtra', 'Están más cerca de las estrellas (mucho)', 'No necesitan energía', 'No hay Luna']),
      c('¿Un binocular sirve para astronomía?', ['Sí: Luna, Júpiter y cúmulos se ven muy bien', 'No, nunca', 'Solo de día', 'Solo en el polo']),
    ]),
    unit('Marte y la exploración', 'Avanzado', {
      intro: 'Robots (Curiosity, Perseverance) recorren Marte. Hay hielo, cauces secos y una atmósfera finísima de CO₂. Ir y volver con personas es un problema de radiación, vida y política.',
      points: ['Rovers: laboratorios con ruedas', 'Marte: un día ≈ 24,6 h', 'Sin campo magnético fuerte como el nuestro', 'El agua líquida estable en superficie hoy casi no existe'],
      code: 'Tierra 1 ua del Sol · Marte ~1,5 ua',
    }, [
      c('¿Qué es un rover?', ['Un robot que se mueve y analiza el suelo', 'Un satélite fijo', 'Un astronauta', 'Un cometa']),
      c('La atmósfera de Marte es principalmente...', ['CO₂ muy delgada', 'Oxígeno como la Tierra', 'Hidrógeno líquido', 'Nitrógeno a 1 atm']),
      t('¿Qué planeta rojo exploran Curiosity y Perseverance?', ['marte']),
      c('¿Por qué es difícil una misión tripulada a Marte?', ['Radiación, duración, vida y volver', 'No se sabe dónde está', 'No hay noches', 'Es más cerca que la Luna']),
      m('Uní', [['Rover', 'Robot móvil'], ['Marte', 'Planeta rojo'], ['CO₂', 'Su aire'], ['Radiación', 'Riesgo humano']]),
    ]),
    unit('Tiempo y calendarios', 'Intermedio', {
      intro: 'El día viene de la rotación, el año de la traslación, el mes (más o menos) de la Luna. Los husos horarios recortan el mundo en franjas. Argentina suele estar en UTC−3.',
      points: ['Rotación → día', 'Traslación → año', 'Año bisiesto: +1 día cada 4 (con excepciones)', 'UTC: reloj de referencia'],
      code: 'Argentina ≈ UTC−3',
    }, [
      c('¿Qué movimiento define el día?', ['Rotación', 'Traslación', 'La Luna nomas', 'Las mareas nomas']),
      c('¿Para qué es el año bisiesto?', ['Para ajustar el calendario al año real (~365,24 días)', 'Para las vacaciones', 'Porque febrero es corto de humor', 'Por la Luna llena']),
      t('¿En qué huso suele estar Argentina? (escribí utc-3 o -3)', ['utc-3', 'utc−3', '-3', '−3']),
      c('¿Un mes del calendario coincide exacto con la Luna?', ['No del todo: por eso hay desfasajes', 'Sí, siempre 28', 'Sí, 31', 'La Luna no tiene período']),
      c('Si en Tokio es de día y acá de noche, es por...', ['La Tierra es redonda y rota (husos)', 'Tokío tiene otro sol', 'Un error del celu', 'Las estaciones invertidas nomas']),
    ]),
  ],
}
