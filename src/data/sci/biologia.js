import { c, t, o, m, unit } from '../helpers'

export default {
  id: 'biologia',
  title: 'Biología',
  kind: 'sci',
  icon: '🧬',
  color: '#16A34A',
  desc: 'La vida explicada: células, ADN, cuerpo humano, evolución y ecología.',
  units: [
    unit('La célula', 'Básico', {
      intro: 'Todos los seres vivos están hechos de células, la unidad más chica con vida. Hay células sin núcleo (procariotas, como las bacterias) y con núcleo (eucariotas, como las nuestras).',
      points: ['Núcleo: guarda el ADN', 'Mitocondria: genera la energía', 'Membrana: controla qué entra y sale', 'Las plantas tienen cloroplastos y pared celular'],
      code: 'Procariota → sin núcleo (bacteria)\nEucariota → con núcleo (animal, planta, hongo)',
    }, [
      c('¿Cuál es la unidad más pequeña con vida?', ['La célula', 'El átomo', 'La molécula', 'El tejido']),
      c('¿Qué organelo produce la energía de la célula?', ['La mitocondria', 'El núcleo', 'El ribosoma', 'La vacuola'], undefined, 'Por eso se la llama "la central energética".'),
      c('¿Dónde está guardado el ADN en una célula eucariota?', ['En el núcleo', 'En la membrana', 'En el citoplasma libre', 'En la mitocondria solamente']),
      t('¿Cómo se llaman las células SIN núcleo? (una palabra)', ['procariotas', 'procariota']),
      c('¿Qué estructura tienen las células vegetales y NO las animales?', ['Cloroplastos', 'Mitocondrias', 'Núcleo', 'Membrana']),
      c('¿Qué hace la membrana celular?', ['Controla qué entra y sale', 'Produce energía', 'Guarda el ADN', 'Fabrica cloroplastos']),
      m('Uní cada parte con su función', [['Núcleo', 'Guarda el ADN'], ['Mitocondria', 'Produce energía'], ['Ribosoma', 'Fabrica proteínas'], ['Cloroplasto', 'Hace fotosíntesis']]),
    ]),
    unit('ADN y genética', 'Intermedio', {
      intro: 'El ADN es el manual de instrucciones de cada ser vivo. Tiene forma de doble hélice y se lee con cuatro letras: A, T, C y G. Un gen es un fragmento que codifica una característica.',
      points: ['A se une con T, y C con G', 'Gen: fragmento de ADN con una instrucción', 'Los humanos tenemos 23 pares de cromosomas', 'Mutación: un cambio en el ADN'],
      code: 'Cadena:      A T G C C A\nComplementaria: T A C G G T',
    }, [
      c('¿Qué forma tiene la molécula de ADN?', ['Doble hélice', 'Cubo', 'Espiral simple', 'Triángulo']),
      c('En el ADN, ¿con qué letra se une la A?', ['T', 'C', 'G', 'A']),
      c('¿Con qué letra se une la C?', ['G', 'A', 'T', 'C']),
      t('¿Cómo se llama el fragmento de ADN que codifica una característica? (una palabra)', ['gen']),
      c('¿Cuántos pares de cromosomas tiene una persona?', ['23', '46', '12', '64'], undefined, '23 pares, o sea 46 cromosomas en total.'),
      c('¿Qué es una mutación?', ['Un cambio en la secuencia del ADN', 'Una enfermedad contagiosa', 'Una célula sin núcleo', 'Un tipo de proteína']),
      c('Si la cadena es A-T-G-C, ¿cuál es su complementaria?', ['T-A-C-G', 'A-T-G-C', 'G-C-A-T', 'C-G-T-A']),
    ]),
    unit('El cuerpo humano', 'Básico', {
      intro: 'Nuestro cuerpo funciona con sistemas que trabajan juntos: circulatorio, respiratorio, digestivo, nervioso y más. Cada uno tiene órganos con tareas específicas.',
      points: ['Corazón: bombea la sangre', 'Pulmones: intercambian oxígeno', 'Cerebro: controla todo el cuerpo', 'Riñones: filtran la sangre'],
      code: 'Respiratorio → pulmones\nCirculatorio → corazón y vasos\nNervioso → cerebro y nervios',
    }, [
      c('¿Qué órgano bombea la sangre?', ['El corazón', 'El pulmón', 'El hígado', 'El riñón']),
      c('¿En qué órgano entra el oxígeno a la sangre?', ['Los pulmones', 'El estómago', 'El corazón', 'El intestino']),
      c('¿Qué órgano filtra la sangre y forma la orina?', ['Los riñones', 'El hígado', 'El bazo', 'El páncreas']),
      t('¿Cuántas cámaras tiene el corazón humano?', ['4', 'cuatro']),
      c('¿Qué célula de la sangre transporta el oxígeno?', ['El glóbulo rojo', 'El glóbulo blanco', 'La plaqueta', 'La neurona']),
      c('¿Qué hacen los glóbulos blancos?', ['Defienden del contagio', 'Llevan oxígeno', 'Cierran heridas', 'Digieren comida']),
      m('Uní órgano y sistema', [['Pulmón', 'Respiratorio'], ['Estómago', 'Digestivo'], ['Cerebro', 'Nervioso'], ['Corazón', 'Circulatorio']]),
    ]),
    unit('Plantas y fotosíntesis', 'Básico', {
      intro: 'Las plantas fabrican su propio alimento con luz solar, agua y dióxido de carbono. En ese proceso liberan el oxígeno que respiramos.',
      points: ['Fotosíntesis: luz + agua + CO₂ → glucosa + oxígeno', 'Ocurre en los cloroplastos, gracias a la clorofila', 'Las raíces absorben agua y minerales', 'Las plantas también respiran'],
      code: '6 CO₂ + 6 H₂O + luz  →  glucosa + 6 O₂',
    }, [
      c('¿Qué gas liberan las plantas en la fotosíntesis?', ['Oxígeno', 'Dióxido de carbono', 'Nitrógeno', 'Hidrógeno']),
      c('¿Qué pigmento da el color verde y capta la luz?', ['La clorofila', 'La hemoglobina', 'La melanina', 'El caroteno']),
      c('¿Qué gas absorben las plantas del aire para la fotosíntesis?', ['Dióxido de carbono', 'Oxígeno', 'Helio', 'Ozono']),
      t('¿En qué organelo ocurre la fotosíntesis?', ['cloroplasto', 'cloroplastos']),
      c('¿Qué parte de la planta absorbe el agua del suelo?', ['Las raíces', 'Las hojas', 'Las flores', 'El tallo']),
      o('Ordená la fotosíntesis', ['La raíz absorbe agua', 'La hoja capta luz y CO₂', 'El cloroplasto produce glucosa', 'La planta libera oxígeno']),
    ]),
    unit('Ecosistemas', 'Intermedio', {
      intro: 'Un ecosistema son los seres vivos de un lugar más su ambiente. La energía circula en cadenas alimentarias que empiezan siempre en los productores.',
      points: ['Productores: plantas (hacen su alimento)', 'Consumidores: herbívoros y carnívoros', 'Descomponedores: hongos y bacterias', 'Biodiversidad: variedad de especies'],
      code: 'Pasto → vaca → puma → descomponedores',
    }, [
      c('En una cadena alimentaria, ¿quiénes son los productores?', ['Las plantas', 'Los carnívoros', 'Los hongos', 'Los herbívoros']),
      c('¿Qué come un animal herbívoro?', ['Plantas', 'Carne', 'Hongos', 'Minerales']),
      c('¿Qué hacen los descomponedores?', ['Reciclan la materia de los muertos', 'Hacen fotosíntesis', 'Cazan herbívoros', 'Producen oxígeno']),
      t('¿Cómo se llama la variedad de especies de un lugar? (una palabra)', ['biodiversidad']),
      c('¿Qué es un animal omnívoro?', ['Come plantas y animales', 'Come solo plantas', 'Come solo carne', 'No come nada']),
      c('¿Cuál es una causa principal del cambio climático?', ['La quema de combustibles fósiles', 'La fotosíntesis', 'La lluvia', 'Los volcanes apagados']),
      m('Uní cada rol', [['Pasto', 'Productor'], ['Vaca', 'Herbívoro'], ['Puma', 'Carnívoro'], ['Hongo', 'Descomponedor']]),
    ]),
    unit('Evolución', 'Avanzado', {
      intro: 'Las especies cambian a lo largo de muchísimas generaciones. Darwin explicó el mecanismo: la selección natural. Los individuos mejor adaptados dejan más descendencia.',
      points: ['Selección natural: sobrevive quien mejor se adapta', 'La variación viene de las mutaciones', 'Las especies comparten antepasados comunes', 'La evolución no tiene un objetivo ni una meta'],
      code: 'Variación → selección → más descendencia → cambio en la especie',
    }, [
      c('¿Quién propuso la teoría de la selección natural?', ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Albert Einstein']),
      c('¿Qué significa que un individuo está "mejor adaptado"?', ['Deja más descendencia en su ambiente', 'Es más grande', 'Vive más años siempre', 'Es más inteligente']),
      c('¿De dónde viene la variación genética?', ['De mutaciones y la reproducción sexual', 'De la voluntad del animal', 'Del clima únicamente', 'De la alimentación']),
      t('¿Cómo se llaman los restos de seres vivos antiguos conservados en rocas?', ['fósiles', 'fosiles', 'fósil']),
      c('¿Es correcto decir que "el hombre viene del mono"?', ['No: compartimos un antepasado común', 'Sí, de los chimpancés actuales', 'Sí, de los gorilas', 'No, no hay relación alguna']),
      c('¿Qué estudió Gregor Mendel?', ['Las leyes de la herencia', 'Los fósiles', 'Las vacunas', 'La fotosíntesis']),
    ]),
  ],
}
