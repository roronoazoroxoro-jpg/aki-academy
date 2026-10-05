import { c, t, o, m, unit } from '../helpers'

export default {
  id: 'fisica',
  title: 'Física',
  kind: 'sci',
  icon: '🪐',
  color: '#6366F1',
  desc: 'Movimiento, fuerzas, energía, electricidad y los secretos del universo.',
  units: [
    unit('Movimiento', 'Básico', {
      intro: 'La física describe cómo se mueven las cosas. La velocidad es la distancia recorrida dividida por el tiempo, y la aceleración es cuánto cambia esa velocidad.',
      points: ['Velocidad = distancia ÷ tiempo', 'Se mide en metros por segundo (m/s)', 'Aceleración: cambio de velocidad en el tiempo', 'Todo movimiento es relativo a algo'],
      code: '120 km en 2 h  →  v = 60 km/h\nDe 0 a 10 m/s en 5 s  →  a = 2 m/s²',
    }, [
      c('Si recorrés 120 km en 2 horas, ¿cuál es tu velocidad promedio?', ['60 km/h', '240 km/h', '122 km/h', '30 km/h']),
      c('¿Cuál es la unidad de velocidad en el Sistema Internacional?', ['m/s', 'km/h', 'kg', 'N']),
      t('Si un auto va a 80 km/h durante 3 horas, ¿cuántos km recorre?', ['240']),
      c('¿Qué es la aceleración?', ['El cambio de velocidad en el tiempo', 'La distancia total', 'La fuerza aplicada', 'El peso del objeto']),
      c('Un objeto que va a velocidad constante tiene aceleración...', ['Cero', 'Positiva', 'Negativa', 'Infinita']),
      c('¿Cuánto vale aproximadamente la aceleración de la gravedad en la Tierra?', ['9,8 m/s²', '1 m/s²', '100 m/s²', '0 m/s²']),
    ]),
    unit('Fuerzas y leyes de Newton', 'Intermedio', {
      intro: 'Una fuerza es todo lo que puede cambiar el movimiento de un objeto. Newton lo resumió en tres leyes que explican casi todo el movimiento cotidiano.',
      points: ['1ª ley: sin fuerza neta, el movimiento no cambia (inercia)', '2ª ley: F = m × a', '3ª ley: a toda acción, una reacción igual y opuesta', 'La fuerza se mide en newtons (N)'],
      code: 'F = m × a\nm = 10 kg, a = 2 m/s²  →  F = 20 N',
    }, [
      c('¿Cuál es la fórmula de la segunda ley de Newton?', ['F = m × a', 'F = m ÷ a', 'F = v × t', 'F = m × v']),
      c('Si empujás una masa de 10 kg con 20 N, ¿cuál es su aceleración?', ['2 m/s²', '200 m/s²', '30 m/s²', '0,5 m/s²']),
      c('¿Qué dice la tercera ley de Newton?', ['A toda acción le corresponde una reacción igual y opuesta', 'Los cuerpos caen con igual velocidad', 'La energía se conserva', 'La fuerza es masa por velocidad']),
      t('¿En qué unidad se mide la fuerza? (una palabra)', ['newton', 'newtons', 'N']),
      c('¿Cómo se llama la tendencia de un cuerpo a mantener su estado de movimiento?', ['Inercia', 'Gravedad', 'Fricción', 'Potencia']),
      c('¿Cuál es la diferencia entre masa y peso?', ['La masa es la cantidad de materia; el peso es la fuerza de gravedad sobre ella', 'Son lo mismo', 'El peso se mide en kg y la masa en N', 'La masa cambia según el planeta']),
      m('Uní magnitud y unidad', [['Fuerza', 'Newton'], ['Masa', 'Kilogramo'], ['Energía', 'Joule'], ['Potencia', 'Watt']]),
    ]),
    unit('Energía y trabajo', 'Intermedio', {
      intro: 'La energía es la capacidad de producir cambios. No se crea ni se destruye: solo se transforma. Es uno de los principios más poderosos de la física.',
      points: ['Energía cinética: la del movimiento', 'Energía potencial: la acumulada por la posición', 'La energía se conserva, solo se transforma', 'Potencia: energía usada por unidad de tiempo'],
      code: 'Ec = ½ × m × v²\nEp = m × g × h',
    }, [
      c('¿Qué tipo de energía tiene un objeto en movimiento?', ['Cinética', 'Potencial', 'Química', 'Nuclear']),
      c('¿Qué energía tiene una maceta en un balcón alto?', ['Potencial gravitatoria', 'Cinética', 'Térmica', 'Eléctrica']),
      c('¿Qué dice el principio de conservación de la energía?', ['No se crea ni se destruye, se transforma', 'Siempre aumenta', 'Siempre se pierde', 'Depende del observador']),
      t('¿En qué unidad se mide la energía? (una palabra)', ['joule', 'joules', 'J']),
      c('Cuando frenás una bici, la energía cinética se transforma principalmente en...', ['Calor', 'Luz', 'Sonido puro', 'Masa']),
      c('¿Qué es la potencia?', ['La energía usada por unidad de tiempo', 'La fuerza total', 'La velocidad máxima', 'La masa por la altura']),
      o('Ordená las transformaciones al encender una lámpara', ['Energía química en la central', 'Energía eléctrica por los cables', 'Energía luminosa y calor en la lámpara']),
    ]),
    unit('Electricidad', 'Intermedio', {
      intro: 'La electricidad es el movimiento de cargas. En un circuito, la corriente necesita un camino cerrado. La Ley de Ohm relaciona voltaje, corriente y resistencia.',
      points: ['V = I × R (Ley de Ohm)', 'Voltaje en voltios, corriente en amperios, resistencia en ohmios', 'Serie: una sola vía; paralelo: varias vías', 'Los metales conducen, el plástico aísla'],
      code: 'V = I × R\nV = 12 V, R = 4 Ω  →  I = 3 A',
    }, [
      c('¿Cuál es la Ley de Ohm?', ['V = I × R', 'V = I ÷ R', 'I = V × R', 'R = V × I']),
      c('Con 12 voltios y 4 ohmios de resistencia, ¿cuánta corriente circula?', ['3 A', '48 A', '0,33 A', '16 A']),
      t('¿En qué unidad se mide la corriente eléctrica? (una palabra)', ['amperio', 'amperios', 'ampere', 'amper', 'A']),
      c('¿Qué material es un buen aislante?', ['El plástico', 'El cobre', 'El aluminio', 'El agua salada']),
      c('En un circuito en serie, si se corta un componente...', ['Se corta toda la corriente', 'Los demás siguen funcionando', 'Aumenta el voltaje', 'No pasa nada']),
      c('¿Qué partícula transporta la corriente en un cable de cobre?', ['El electrón', 'El protón', 'El neutrón', 'El fotón']),
      m('Uní magnitud eléctrica y unidad', [['Voltaje', 'Voltio'], ['Corriente', 'Amperio'], ['Resistencia', 'Ohmio'], ['Potencia', 'Watt']]),
    ]),
    unit('El universo', 'Avanzado', {
      intro: 'La astronomía estudia todo lo que hay más allá de la Tierra. La luz tarda tiempo en llegar, así que mirar el cielo es mirar el pasado.',
      points: ['Un año luz es una distancia, no un tiempo', 'El Sol es una estrella de tamaño medio', 'La Vía Láctea es nuestra galaxia', 'El universo se está expandiendo'],
      code: 'Luz: 300.000 km/s\nSol → Tierra: unos 8 minutos',
    }, [
      c('¿Qué es un año luz?', ['La distancia que recorre la luz en un año', 'El tiempo que tarda la luz en llegar', 'La edad de una estrella', 'Una unidad de masa']),
      c('¿Cuánto tarda la luz del Sol en llegar a la Tierra?', ['Unos 8 minutos', 'Un segundo', 'Un año', 'Un día']),
      c('¿Cómo se llama nuestra galaxia?', ['La Vía Láctea', 'Andrómeda', 'El Sistema Solar', 'La Nebulosa de Orión']),
      t('¿Cuál es la velocidad de la luz en km/s? (solo el número, sin puntos)', ['300000']),
      c('¿Qué es un agujero negro?', ['Una región con gravedad tan intensa que la luz no escapa', 'Un planeta oscuro', 'Una estrella apagada', 'Un espacio vacío']),
      c('¿Qué describe la teoría del Big Bang?', ['El origen y la expansión del universo', 'La formación de la Luna', 'La muerte del Sol', 'El movimiento de las mareas']),
      c('¿Por qué en el espacio los astronautas flotan?', ['Están en caída libre junto con la nave', 'No hay gravedad en el espacio', 'Pesan menos', 'Los trajes son livianos']),
    ]),
    unit('Ondas y sonido', 'Intermedio', {
      intro: 'Una onda transporta energía sin transportar materia. El sonido es una onda mecánica: necesita un medio. En el vacío no se oye.',
      points: ['Frecuencia: agudo o grave', 'Amplitud: volumen', 'El eco es un rebote', 'La luz también es onda (y partícula)'],
      code: 'v = f × λ   (velocidad = frecuencia × longitud de onda)',
    }, [
      c('¿Por qué no se oye en el espacio?', ['No hay aire (ni medio) para la onda', 'Los oídos no funcionan sin gravedad', 'El sonido es muy lento', 'Las naves aíslan todo siempre']),
      c('Un sonido más agudo tiene...', ['Más frecuencia', 'Menos frecuencia', 'Más amplitud nomas', 'Menos velocidad siempre']),
      t('¿Cómo se llama el rebote del sonido?', ['eco']),
      c('¿Qué es la amplitud en el sonido?', ['Qué tan fuerte se oye', 'Qué tan agudo es', 'La dirección', 'El color']),
      m('Uní', [['Frecuencia', 'Agudo/grave'], ['Amplitud', 'Volumen'], ['Eco', 'Rebote'], ['Vacío', 'Sin sonido']]),
    ]),
    unit('Calor y temperatura', 'Básico', {
      intro: 'Temperatura no es lo mismo que calor. Temperatura mide qué tan agitado está el movimiento de las partículas. Calor es energía que se transfiere.',
      points: ['°C: agua hierve a 100 (a 1 atm)', 'Conducción, convección, radiación', 'El metal se siente “más frío” porque conduce mejor', 'Dilatar: al calentar, se agranda'],
      code: '0 °C hielo  ·  100 °C vapor (a nivel del mar)',
    }, [
      c('¿A cuántos °C hierve el agua a nivel del mar?', ['100', '0', '37', '212']),
      c('¿El calor es...?', ['Energía en tránsito', 'Lo mismo que temperatura', 'Solo fuego', 'Un gas']),
      t('¿A cuántos °C se congela el agua pura?', ['0', '0°', '0 c']),
      c('¿Por qué el metal de la mesa se siente más frío que la madera a la misma temperatura?', ['Conduce mejor el calor de tu mano', 'Está más frío de verdad', 'La madera tiene más energía', 'El metal es más oscuro']),
      c('El sol nos calienta principalmente por...', ['Radiación', 'Convección del espacio', 'Conducción del aire nomas', 'Fricción']),
    ]),
    unit('Óptica', 'Intermedio', {
      intro: 'La luz se refleja (espejo) y se refracta (cambia de medio: el lápiz “quebrado” en el vaso). Un lente concentra o abre el rayo.',
      points: ['Ángulo de incidencia = ángulo de reflexión', 'Refracción: cambia la dirección', 'Lente convergente: lupa', 'El arcoíris: dispersión'],
      code: 'aire → agua  =  el rayo se quiebra (refracción)',
    }, [
      c('¿Por qué el lápiz se ve quebrado en el vaso?', ['La luz se refracta al pasar al agua', 'El vidrio lo achica', 'El agua está caliente', 'Es un espejo']),
      c('En un espejo plano, el ángulo de incidencia...', ['Es igual al de reflexión', 'Es el doble', 'Es cero', 'No existe']),
      t('¿Cómo se llama el cambio de dirección al cambiar de medio?', ['refracción', 'refraccion']),
      c('Una lupa es un lente...', ['Convergente', 'Divergente', 'Plano nomas', 'Opaco']),
      c('El arcoíris se forma por...', ['Dispersión de la luz en gotas de agua', 'Pintura en el cielo', 'El sol más cerca', 'El viento']),
    ]),
  ],
}
