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
  ],
}
