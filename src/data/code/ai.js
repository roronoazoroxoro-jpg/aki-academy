import { c, t, o, m, unit } from '../helpers'

export default {
  id: 'ai',
  title: 'Inteligencia Artificial',
  kind: 'code',
  icon: '🤖',
  color: '#8B5CF6',
  desc: 'Entendé y usá la IA: prompts, modelos, agentes y APIs.',
  units: [
    unit('Qué es la IA', 'Básico', {
      intro: 'La Inteligencia Artificial son sistemas que aprenden patrones de los datos. Los modelos de lenguaje (LLM) como los que usan los chatbots predicen texto a partir de enormes cantidades de ejemplos.',
      points: ['Machine Learning: aprender de datos', 'LLM: modelo grande de lenguaje', 'Entrenamiento vs. inferencia', 'La IA puede equivocarse ("alucinar")'],
      code: '# Entrenar: el modelo aprende de ejemplos\n# Inferir: el modelo responde algo nuevo',
    }, [
      c('¿Qué significa LLM?', ['Large Language Model', 'Long Learning Machine', 'Logic Language Module', 'Linear Loop Model']),
      c('¿Qué es una "alucinación" de la IA?', ['Una respuesta inventada que parece cierta', 'Un error de internet', 'Un virus', 'Una imagen']),
      c('¿De qué aprende un modelo de Machine Learning?', ['De datos y ejemplos', 'De reglas escritas a mano únicamente', 'De la electricidad', 'De nada']),
      c('¿Qué es la inferencia?', ['Usar el modelo ya entrenado para responder', 'Entrenar el modelo', 'Borrar datos', 'Comprar GPUs']),
      m('Uní cada término', [['Dataset', 'Conjunto de datos'], ['Modelo', 'Lo que aprende'], ['Token', 'Pedacito de texto'], ['GPU', 'Hardware para entrenar']]),
      t('Completá: los modelos de lenguaje procesan el texto en pedacitos llamados...', ['tokens', 'token']),
    ]),
    unit('Prompts que funcionan', 'Intermedio', {
      intro: 'Un prompt es la instrucción que le das a la IA. Cuanto más claro el contexto, el rol, el formato y los ejemplos, mejor la respuesta.',
      points: ['Dale un rol: "Sos un profe de Python"', 'Dá contexto y objetivo', 'Pedí un formato: lista, tabla, JSON', 'Mostrá ejemplos (few-shot)'],
      code: 'Sos un profe de Python paciente.\nExplicame qué es una lista a alguien de 12 años,\ncon un ejemplo de fútbol, en menos de 5 líneas.',
    }, [
      c('¿Cuál prompt es mejor?', ['"Explicame listas de Python con un ejemplo de fútbol en 5 líneas"', '"listas"', '"hola"', '"python?"']),
      c('¿Qué es "few-shot prompting"?', ['Dar algunos ejemplos en el prompt', 'Hacer pocas preguntas', 'Usar un modelo chico', 'Prompt en otro idioma']),
      c('¿Por qué conviene pedir un formato (ej: JSON)?', ['Para poder usar la respuesta en un programa', 'Porque es obligatorio', 'Para que tarde menos', 'No conviene']),
      o('Ordená un buen prompt', ['Rol: Sos un experto en marketing.', 'Contexto: Tengo una panadería en Córdoba.', 'Tarea: Escribí 3 posts para Instagram.', 'Formato: Lista numerada con emojis.']),
      c('¿Qué tenés que hacer siempre con la respuesta de una IA?', ['Verificarla', 'Copiarla sin leer', 'Ignorarla', 'Imprimirla']),
      m('Uní cada parte del prompt con su función', [['Rol', 'Quién actúa'], ['Contexto', 'Tu situación'], ['Tarea', 'Qué querés'], ['Formato', 'Cómo lo querés']]),
      t('¿Cómo se llama la técnica de darle ejemplos dentro del prompt? (dos palabras, en inglés)', ['few-shot', 'few shot', 'fewshot']),
    ]),
    unit('IA con código', 'Avanzado', {
      intro: 'Los desarrolladores usan modelos de IA mediante APIs: mandan mensajes desde su código y reciben respuestas. Así se construyen chatbots, asistentes y agentes.',
      points: ['Una API key identifica tu cuenta (¡nunca la publiques!)', 'Mensajes con roles: system, user, assistant', 'RAG: darle a la IA tus propios documentos', 'Agentes: IA que usa herramientas para cumplir tareas'],
      code: 'respuesta = cliente.chat(\n    modelo="un-modelo",\n    mensajes=[\n        {"role": "system", "content": "Sos AKI, un profe argentino"},\n        {"role": "user", "content": "¿Qué es una variable?"},\n    ],\n)',
    }, [
      c('¿Dónde NO tenés que poner tu API key?', ['En código público de GitHub', 'En variables de entorno', 'En un gestor de secretos', 'En el servidor']),
      c('¿Qué rol define el comportamiento general del asistente?', ['system', 'user', 'admin', 'root']),
      c('¿Qué es RAG?', ['Dar documentos propios como contexto a la IA', 'Un lenguaje de programación', 'Un tipo de GPU', 'Un formato de imagen']),
      c('¿Qué es un agente de IA?', ['Una IA que usa herramientas para lograr un objetivo', 'Un antivirus', 'Un empleado de soporte', 'Una base de datos']),
      t('Completá: el mensaje de la persona tiene el rol...', ['user'], '{"role": "___", "content": "Hola"}'),
      m('Uní cada concepto', [['API', 'Conexión entre programas'], ['Embedding', 'Texto convertido a números'], ['Fine-tuning', 'Ajustar un modelo'], ['Prompt', 'Instrucción']]),
    ]),
    unit('Límites y ética', 'Intermedio', {
      intro: 'La IA no “sabe”: predice. Puede copiar sesgos de los datos, inventar fuentes y usarse mal. Un buen uso es como copiloto: vos decidís, ella sugiere.',
      points: ['Sesgo: el modelo copia prejuicios de los datos', 'Privacidad: no le mandes DNI ni claves', 'Copyright: no publiques lo que no es tuyo', 'Vos sos responsable de lo que entregás'],
      code: '# Regla de oro\n# 1. No subas secretos al chat\n# 2. Verificá datos y fuentes\n# 3. Contá si usaste IA cuando importa',
    }, [
      c('¿La IA entiende de verdad como una persona?', ['No: predice texto a partir de patrones', 'Sí, tiene conciencia', 'Solo los sábados', 'Solo en inglés']),
      c('¿Qué es un sesgo en un modelo?', ['Que copia prejuicios de los datos de entrenamiento', 'Que va lento', 'Que gasta luz', 'Que no tiene API']),
      t('¿Cómo se llama inventar una fuente que parece real?', ['alucinación', 'alucinacion']),
      c('¿Qué NO le deberías pegar a un chatbot público?', ['Tu contraseña o DNI', 'Una receta de mate', 'Una duda de Python', 'Un poema']),
      c('Si usás IA para un trabajo de la facultad, lo más honesto es...', ['Decirlo y revisar el contenido', 'Entregarlo sin leer', 'Negarlo siempre', 'Traducirlo y listo']),
      m('Uní cada riesgo', [['Sesgo', 'Prejuicios copiados'], ['Alucinación', 'Dato inventado'], ['Privacidad', 'Datos sensibles'], ['Copyright', 'Obra de otro']]),
    ]),
    unit('IA para programar', 'Intermedio', {
      intro: 'Hoy se programa con un copiloto: le pedís una función, un test o una explicación de un error. El truco es dar contexto (archivo, error, lo que ya probaste) y después leer el código como si lo hubiera escrito un compañero nuevo.',
      points: ['Pedí una cosa por vez', 'Pegá el error completo', 'Pedí tests junto con el código', 'Si no lo entendés, no lo pegues en producción'],
      code: 'Prompt útil:\n"Tengo este error en Python 3.12:\n[traceback]\nQuiero una función que reciba una lista y devuelva el promedio.\nIncluí 3 tests."',
    }, [
      c('¿Cuál es mejor pedido a un copiloto?', ['“Esta función falla con listas vacías, arreglala y agregá un test”', '“código”', '“hacé la app”', '“python?”']),
      c('¿Qué tenés que hacer con el código que te sugiere la IA?', ['Leerlo y entenderlo', 'Subirlo sin mirar', 'Borrarlo siempre', 'Traducirlo a mayúsculas']),
      t('Completá: si no entendés el código, no lo pongas en...', ['producción', 'produccion']),
      c('¿Para qué sirve pedirle tests a la IA?', ['Para comprobar que la función hace lo que promete', 'Para que el programa sea más lento', 'Para borrar Git', 'No sirve']),
      c('Si el copiloto se inventa una librería que no existe, ¿qué hacés?', ['Lo verificás e instalás solo lo real', 'La instalás igual', 'Reinstalás Windows', 'Le creés']),
      o('Ordená un buen pedido', ['Contexto: Python 3.12, lista de números', 'Problema: da ZeroDivisionError si está vacía', 'Pedido: devolver 0 en ese caso', 'Extra: escribí 2 tests']),
    ]),
    unit('Imágenes y multimodal', 'Avanzado', {
      intro: 'Los modelos multimodales entienden texto, imagen y a veces audio. Un prompt de imagen también se beneficia de ser concreto: sujeto, estilo, luz, lo que no querés.',
      points: ['Multimodal: más de un tipo de dato', 'Prompt de imagen: sujeto + estilo + detalles', 'Un negative prompt dice qué evitar', 'La IA no reemplaza el criterio estético'],
      code: 'Una foto 3D de un robot blanco con gorra celeste\ntomando mate, luz de estudio, fondo blanco,\nestilo Pixar, sin texto extra',
    }, [
      c('¿Qué significa multimodal?', ['Que entiende varios tipos de dato (texto, imagen, audio)', 'Que tiene muchos usuarios', 'Que corre en varios celulares', 'Que habla solo inglés']),
      c('¿Qué hace más útil un prompt de imagen?', ['Sujeto, estilo, luz y lo que no querés', 'Una sola palabra', 'Solo el color', 'Repetir “lindo” 20 veces']),
      t('¿Cómo se llama la instrucción de lo que NO querés en la imagen?', ['negative prompt', 'prompt negativo']),
      c('¿Un modelo de imagen “fotografía” el mundo real en vivo?', ['No: genera a partir de lo que aprendió', 'Sí, entra a tu cámara siempre', 'Solo de noche', 'Solo con WiFi']),
      c('¿Para qué sirve describir el fondo y la luz?', ['Para que el resultado se parezca a lo que imaginás', 'Para que pese menos', 'Es obligatorio por ley', 'No cambia nada']),
      m('Uní cada parte', [['Sujeto', 'Qué hay'], ['Estilo', 'Cómo se ve'], ['Luz', 'Clima visual'], ['Negative', 'Qué evitar']]),
    ]),
    unit('El futuro cercano', 'Avanzado', {
      intro: 'Los agentes encadenan pasos: buscan, llaman herramientas, vuelven a pensar. Eso potencia y también multiplica errores. La habilidad nueva no es “saber el atajo”: es dirigir, verificar y diseñar el flujo.',
      points: ['Agente = modelo + herramientas + objetivo', 'Evaluá resultados, no solo el proceso', 'Human in the loop: una persona decide lo importante', 'El diferencial sos vos: criterio y contexto local'],
      code: 'objetivo → plan → herramienta → resultado → ¿sirve? → seguir o parar',
    }, [
      c('¿Qué le falta a un modelo para ser un agente?', ['Herramientas y un objetivo que perseguir', 'Más emojis', 'Una GPU más linda', 'Hablar más fuerte']),
      c('¿Qué es “human in the loop”?', ['Que una persona revise o decida los pasos clave', 'Que no se use IA', 'Que el modelo se entrene solo', 'Que no haya internet']),
      t('¿Cómo se llama una IA que usa herramientas para cumplir una meta?', ['agente', 'agente de ia']),
      c('¿Por qué un agente puede equivocarse más?', ['Porque encadena pasos y un error se arrastra', 'Porque es más honesto', 'Porque no tiene tokens', 'Porque no usa herramientas']),
      c('En un producto argentino, ¿qué no puede reemplazar la IA?', ['Tu criterio y el contexto local', 'El corrector de tipeo', 'Buscar una fecha', 'Formatear una lista']),
      c('¿Cuál es el mejor uso de la IA para aprender?', ['Que te explique y después lo practiques vos', 'Que haga toda la tarea', 'Que memorice por vos', 'Que apagues el cerebro']),
    ]),
    unit('Datos, sesgo y calidad', 'Avanzado', {
      intro: 'Un modelo es tan bueno (y tan sesgado) como los datos con los que se entrenó. Si el dataset ignora el español rioplatense, va a “corregirte” el vos. Basura entra, basura sale.',
      points: ['Dataset: la materia prima', 'Sesgo: el modelo copia desigualdades', 'Evaluar con ejemplos locales', 'Más datos ≠ siempre mejor: hace falta calidad'],
      code: 'datos sucios → modelo sucio\nejemplos locales → respuestas más útiles acá',
    }, [
      c('Si entrenás solo con inglés de EE.UU., el modelo en Argentina suele...', ['Fallar con vos, lunfardo y contexto local', 'Hablar perfecto rioplatense', 'Dejar de usar tokens', 'Volverse más barato nomas']),
      c('¿Qué es un sesgo en un modelo?', ['Un patrón injusto o torcido que copió de los datos', 'Un virus', 'Un tipo de GPU', 'Una licencia open source']),
      t('¿Cómo se llama el conjunto de ejemplos con los que se entrena?', ['dataset', 'datos', 'conjunto de datos']),
      c('¿Más datos siempre da un modelo mejor?', ['No: si son malos, el modelo empeora', 'Sí, siempre', 'Solo si son tweets', 'Solo de noche']),
      m('Uní', [['Dataset', 'Ejemplos de entrenamiento'], ['Sesgo', 'Torcedura heredada'], ['Evaluación', 'Medir si sirve'], ['Calidad', 'Más importante que el volumen']]),
    ]),
    unit('Privacidad y lo que no le pases', 'Intermedio', {
      intro: 'Lo que pegás en un chat puede quedar en un servidor. DNI, claves, historias clínicas y código secreto de la empresa no van. Tratá al chat como un colectivo lleno: no grites tu contraseña.',
      points: ['No pegues secretos ni claves', 'Ojo con fotos de documentos', 'Hay modos que no entrenan con tus chats: leé la config', 'Si es sensible, usá un entorno controlado'],
      code: 'NO: contraseñas, DNI, tokens, historias clínicas\nSÍ: ideas, borradores, ejercicios, código no secreto',
    }, [
      c('¿Qué no deberías pegar en un chat público de IA?', ['Contraseñas, DNI y datos de pacientes', 'Una receta de panqueques', 'Un poema', 'Una duda de mate']),
      c('Si la empresa te da un asistente interno, ¿por qué a veces es mejor?', ['Porque los datos no salen a un servicio genérico', 'Porque es más lento siempre', 'Porque no tiene internet nunca', 'Porque no entiende español']),
      t('¿Cómo se llama proteger tus datos personales?', ['privacidad', 'privacidad.']),
      c('Un token de API en el chat es...', ['Un secreto: no lo compartas', 'Un emoji', 'Un tipo de prompt', 'Una imagen']),
      c('La regla práctica: si no se lo dirías a un desconocido en el bondi...', ['No se lo pegues a un modelo', 'Pegalo en mayúsculas', 'Sumale más contexto médico', 'Pedile que lo publique']),
    ]),
  ],
}
