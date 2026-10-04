import { c, t, b, o, m, unit } from '../helpers'

export default {
  id: 'typescript',
  title: 'TypeScript',
  kind: 'code',
  icon: '🟦',
  color: '#3178C6',
  desc: 'JavaScript con tipos: menos errores y el estándar de la industria.',
  units: [
    unit('Tipos básicos', 'Intermedio', {
      intro: 'TypeScript es JavaScript con tipos. Le avisás al editor qué tipo de dato esperás y te marca los errores antes de ejecutar el programa.',
      points: ['let nombre: string = "Aki"', 'number, string, boolean', 'Arrays: number[] o Array<number>', 'TypeScript se compila a JavaScript'],
      code: 'let nombre: string = "Aki";\nlet mates: number = 3;\nlet listo: boolean = true;\nlet notas: number[] = [10, 9, 8];',
    }, [
      c('¿Qué es TypeScript?', ['JavaScript con tipos estáticos', 'Un lenguaje totalmente distinto de JS', 'Una base de datos', 'Un framework de CSS']),
      c('¿Cómo se declara una variable de texto?', ['let n: string', 'let n: text', 'string n', 'let n = String']),
      t('Completá el tipo para un número:', ['number'], 'let edad: ___ = 20;'),
      c('¿Cómo se escribe el tipo "array de números"?', ['number[]', 'array<number>', '[number]', 'numbers']),
      c('¿En qué se convierte TypeScript al compilarlo?', ['En JavaScript', 'En código máquina', 'En WebAssembly solamente', 'En Python']),
      c('¿Qué tipo acepta cualquier valor y desactiva el chequeo?', ['any', 'all', 'free', 'void']),
      m('Uní valor y tipo', [['"hola"', 'string'], ['42', 'number'], ['true', 'boolean'], ['[1,2]', 'number[]']]),
    ]),
    unit('Interfaces y objetos', 'Intermedio', {
      intro: 'Con interface o type describís la forma de un objeto. Es lo que más se usa en el día a día: define qué propiedades tiene y de qué tipo son.',
      points: ['interface Usuario { nombre: string }', 'El ? marca propiedad opcional', 'Podés extender interfaces', 'type sirve también para uniones'],
      code: 'interface Alumno {\n  nombre: string;\n  edad: number;\n  curso?: string;   // opcional\n}\n\nconst a: Alumno = { nombre: "Aki", edad: 3 };',
    }, [
      c('¿Qué palabra describe la forma de un objeto?', ['interface', 'object', 'struct', 'shape']),
      c('¿Qué significa curso?: string dentro de una interface?', ['La propiedad es opcional', 'La propiedad es obligatoria', 'La propiedad es privada', 'Es un comentario']),
      t('Completá para marcar la propiedad como opcional:', ['?'], 'interface P { apodo___: string }'),
      c('¿Qué hace "interface Admin extends Usuario"?', ['Admin hereda las propiedades de Usuario', 'Usuario hereda de Admin', 'Las borra', 'Da error']),
      c('¿Qué es un tipo unión?', ['Un valor que puede ser de varios tipos: string | number', 'Dos objetos juntos', 'Un array', 'Una clase abstracta']),
      b('Armá el tipo que acepta texto o número', ['type', 'Id', '=', 'string | number'], ['interface', 'any']),
      c('¿Qué pasa si falta una propiedad obligatoria?', ['TypeScript marca error antes de ejecutar', 'Se completa con null', 'Se ignora', 'Se rompe en producción sin avisar']),
    ]),
    unit('Funciones y genéricos', 'Avanzado', {
      intro: 'En las funciones tipás los parámetros y el valor de retorno. Los genéricos permiten escribir código reutilizable que conserva el tipo original.',
      points: ['function f(x: number): string', 'void: no devuelve nada', 'Genérico: function primero<T>(a: T[]): T', 'unknown es más seguro que any'],
      code: 'function saludar(nombre: string): string {\n  return `Hola ${nombre}`;\n}\n\nfunction primero<T>(lista: T[]): T {\n  return lista[0];\n}',
    }, [
      c('¿Qué indica ": string" después de los paréntesis de una función?', ['El tipo que devuelve', 'El tipo del primer parámetro', 'Que es asíncrona', 'Nada, es decorativo']),
      c('¿Qué tipo de retorno usa una función que no devuelve nada?', ['void', 'null', 'empty', 'none']),
      t('Completá el genérico:', ['T'], 'function primero<___>(lista: ___[]): ___ { return lista[0] }'),
      c('¿Para qué sirven los genéricos?', ['Para escribir código reutilizable que conserva los tipos', 'Para desactivar los tipos', 'Para crear clases', 'Para importar módulos']),
      c('¿Cuál es más seguro que any?', ['unknown', 'object', 'never', 'void']),
      c('¿Qué significa el tipo never?', ['Un valor que nunca ocurre (ej: función que siempre lanza error)', 'Cualquier valor', 'Un valor nulo', 'Un array vacío']),
      o('Ordená la función tipada', ['function sumar(a: number, b: number): number {', '  return a + b;', '}']),
    ]),
    unit('TypeScript en proyectos reales', 'Avanzado', {
      intro: 'En un proyecto real usás tsconfig.json para configurar el compilador, strict para máxima seguridad y tipás las respuestas de las APIs.',
      points: ['tsconfig.json configura el compilador', 'strict: true activa todos los chequeos', 'as hace una conversión de tipo (type assertion)', 'Los tipos desaparecen al compilar'],
      code: '// tsconfig.json\n{ "compilerOptions": { "strict": true } }\n\nconst datos = await res.json() as Alumno[];',
    }, [
      c('¿Qué archivo configura el compilador de TypeScript?', ['tsconfig.json', 'package.json', 'ts.config.js', 'types.json']),
      c('¿Qué hace "strict": true?', ['Activa todos los chequeos de tipos', 'Desactiva los errores', 'Acelera la compilación', 'Permite usar any libremente']),
      c('¿Qué hace la palabra "as" en "valor as string"?', ['Le afirma al compilador que el valor es de ese tipo', 'Convierte el valor en texto al ejecutar', 'Crea una variable nueva', 'Comprueba el tipo en tiempo real']),
      c('¿Existen los tipos de TypeScript cuando el código ya está corriendo?', ['No, se borran al compilar', 'Sí, siempre', 'Solo en Node.js', 'Solo en el navegador']),
      t('¿Qué comando compila un proyecto de TypeScript? (dos palabras)', ['npx tsc', 'tsc']),
      c('¿Por qué conviene TypeScript en un equipo grande?', ['Documenta el código y evita errores antes de ejecutar', 'Hace la app más rápida al correr', 'Reemplaza las pruebas', 'Ocupa menos espacio']),
    ]),
  ],
}
