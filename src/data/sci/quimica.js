import { c, t, o, m, unit } from '../helpers'

export default {
  id: 'quimica',
  title: 'Química',
  kind: 'sci',
  icon: '🧪',
  color: '#DB2777',
  desc: 'Átomos, tabla periódica, reacciones y la química de todos los días.',
  units: [
    unit('La materia', 'Básico', {
      intro: 'Todo lo que te rodea es materia. Se presenta en estados (sólido, líquido, gas) y puede ser una sustancia pura o una mezcla.',
      points: ['Sólido, líquido y gaseoso', 'Fusión: sólido → líquido', 'Evaporación: líquido → gas', 'Mezcla homogénea: no se distinguen los componentes'],
      code: 'Hielo → (fusión) → agua → (evaporación) → vapor',
    }, [
      c('¿Cómo se llama el cambio de sólido a líquido?', ['Fusión', 'Evaporación', 'Condensación', 'Sublimación']),
      c('¿Cómo se llama el cambio de gas a líquido?', ['Condensación', 'Fusión', 'Evaporación', 'Solidificación']),
      c('¿A qué temperatura hierve el agua a nivel del mar?', ['100 °C', '0 °C', '50 °C', '212 °C']),
      t('¿A qué temperatura en °C se congela el agua?', ['0']),
      c('El agua con sal disuelta es una mezcla...', ['Homogénea', 'Heterogénea', 'Sustancia pura', 'Compuesta'], undefined, 'No se distinguen los componentes a simple vista.'),
      c('¿Cuál de estos es una sustancia pura?', ['El agua destilada', 'El aire', 'La ensalada', 'El agua de mar']),
      m('Uní el cambio de estado', [['Fusión', 'Sólido a líquido'], ['Evaporación', 'Líquido a gas'], ['Condensación', 'Gas a líquido'], ['Solidificación', 'Líquido a sólido']]),
    ]),
    unit('El átomo', 'Intermedio', {
      intro: 'El átomo es la unidad básica de la materia. Tiene un núcleo con protones y neutrones, rodeado de electrones. El número de protones define de qué elemento se trata.',
      points: ['Protón: carga positiva, en el núcleo', 'Neutrón: sin carga, en el núcleo', 'Electrón: carga negativa, alrededor', 'Número atómico = cantidad de protones'],
      code: 'Carbono: 6 protones, 6 neutrones, 6 electrones\nNúmero atómico = 6',
    }, [
      c('¿Qué partícula del átomo tiene carga negativa?', ['El electrón', 'El protón', 'El neutrón', 'El núcleo']),
      c('¿Dónde están los protones y neutrones?', ['En el núcleo', 'Orbitando afuera', 'En la corteza electrónica', 'Fuera del átomo']),
      c('¿Qué define el número atómico de un elemento?', ['La cantidad de protones', 'La cantidad de neutrones', 'La masa total', 'La cantidad de enlaces']),
      t('¿Cuántos protones tiene el hidrógeno?', ['1']),
      c('¿Qué partícula no tiene carga eléctrica?', ['El neutrón', 'El protón', 'El electrón', 'El ion']),
      c('¿Qué es un ion?', ['Un átomo que ganó o perdió electrones', 'Un átomo sin núcleo', 'Dos átomos unidos', 'Un átomo radioactivo']),
    ]),
    unit('Tabla periódica', 'Intermedio', {
      intro: 'La tabla periódica ordena todos los elementos por su número atómico. Los elementos de una misma columna (grupo) tienen propiedades parecidas.',
      points: ['H es hidrógeno, O oxígeno, C carbono', 'Los grupos son las columnas', 'Los metales están a la izquierda', 'Los gases nobles son muy poco reactivos'],
      code: 'H₂O → 2 hidrógenos + 1 oxígeno\nCO₂ → 1 carbono + 2 oxígenos',
    }, [
      c('¿Qué elemento representa el símbolo O?', ['Oxígeno', 'Oro', 'Osmio', 'Ozono']),
      c('¿Qué elemento es el símbolo Fe?', ['Hierro', 'Flúor', 'Fósforo', 'Fermio']),
      c('¿Cuántos átomos de hidrógeno tiene una molécula de agua (H₂O)?', ['2', '1', '3', '0']),
      t('¿Qué símbolo tiene el carbono?', ['C']),
      c('¿Por qué los gases nobles casi no reaccionan?', ['Tienen su última capa de electrones completa', 'Son muy pesados', 'No tienen electrones', 'Están siempre fríos']),
      c('¿Qué elemento es el más abundante del universo?', ['Hidrógeno', 'Oxígeno', 'Carbono', 'Hierro']),
      m('Uní símbolo y elemento', [['Na', 'Sodio'], ['Cl', 'Cloro'], ['Au', 'Oro'], ['N', 'Nitrógeno']]),
    ]),
    unit('Reacciones químicas', 'Avanzado', {
      intro: 'En una reacción química, unas sustancias se transforman en otras. La masa total se conserva, así que las ecuaciones deben quedar balanceadas.',
      points: ['Reactivos → productos', 'La masa se conserva (Lavoisier)', 'Balancear: igual cantidad de átomos a cada lado', 'Exotérmica libera calor, endotérmica lo absorbe'],
      code: '2 H₂ + O₂  →  2 H₂O\nIzquierda: 4 H y 2 O · Derecha: 4 H y 2 O ✔',
    }, [
      c('En una reacción química, ¿cómo se llaman las sustancias iniciales?', ['Reactivos', 'Productos', 'Catalizadores', 'Residuos']),
      c('¿Por qué hay que balancear una ecuación química?', ['Porque la masa se conserva', 'Para que quede más corta', 'Para cambiar los elementos', 'Por costumbre']),
      c('¿Qué tipo de reacción libera calor?', ['Exotérmica', 'Endotérmica', 'Neutra', 'Reversible']),
      t('¿Qué gas se produce al quemar un combustible con carbono? Escribí su fórmula', ['CO2', 'CO₂']),
      c('¿Qué hace un catalizador?', ['Acelera la reacción sin consumirse', 'Frena la reacción', 'Se transforma en producto', 'Agrega masa']),
      c('¿Qué mide la escala de pH?', ['Si algo es ácido o básico', 'La temperatura', 'La masa', 'La densidad']),
      c('Un pH de 2 indica que la sustancia es...', ['Muy ácida', 'Neutra', 'Muy básica', 'Un gas noble']),
    ]),
    unit('Química de todos los días', 'Básico', {
      intro: 'La química está en la cocina, la limpieza y tu propio cuerpo. Entenderla te ayuda a cuidarte y a no mezclar lo que no se debe.',
      points: ['El bicarbonato es básico; el vinagre, ácido', 'Nunca mezcles lavandina con amoníaco', 'El jabón arrastra la grasa', 'Cocinar es provocar reacciones químicas'],
      code: 'Bicarbonato + vinagre → CO₂ (las burbujas)',
    }, [
      c('¿Por qué burbujea el bicarbonato con vinagre?', ['Se libera dióxido de carbono', 'Se evapora el agua', 'Se forma oxígeno puro', 'Se genera electricidad']),
      c('¿Qué mezcla es peligrosa y nunca hay que hacer en casa?', ['Lavandina con amoníaco', 'Agua con sal', 'Vinagre con aceite', 'Azúcar con agua']),
      c('El vinagre es una sustancia...', ['Ácida', 'Básica', 'Neutra', 'Gaseosa']),
      c('¿Por qué el jabón limpia la grasa?', ['Tiene moléculas que atrapan grasa y agua a la vez', 'Porque es ácido', 'Porque calienta', 'Porque evapora la grasa']),
      t('¿Cómo se llama el proceso que da color y sabor a la carne dorada? (apellido del químico)', ['maillard']),
      c('¿Por qué se oxida el hierro?', ['Reacciona con el oxígeno y la humedad', 'Por el calor del sol', 'Porque pierde protones', 'Por la presión del aire']),
    ]),
  ],
}
