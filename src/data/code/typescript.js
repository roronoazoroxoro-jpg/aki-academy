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
    unit('Uniones y narrowing', 'Intermedio', {
      intro: 'Un tipo unión (string | number) acepta varias formas. El narrowing es estrechar: TypeScript entiende el tipo adentro de un if.',
      points: ['let x: string | null', 'if (x) { ... x es string }', 'typeof x === "number"', 'in y instanceof también estrechan'],
      code: 'function largo(x: string | string[]) {\n  if (typeof x === "string") return x.length;\n  return x.join("").length;\n}',
    }, [
      c('¿Qué acepta string | number?', ['Un texto o un número', 'Solo texto', 'Solo número', 'Cualquier objeto']),
      t('Completá el chequeo de tipo:', ['typeof'], 'if (___ x === "string")'),
      c('Después de if (x !== null), ¿x puede ser null adentro del if?', ['No: TypeScript ya lo descartó', 'Sí, siempre', 'Solo en any', 'Solo en arrays']),
      c('¿Qué es narrowing?', ['Estrechar un tipo unión a uno más preciso', 'Borrar tipos', 'Convertir a any', 'Minificar']),
      m('Uní cada guardia', [['typeof', 'Primitivos'], ['instanceof', 'Clases'], ['in', 'Propiedad'], ['!= null', 'Sacar null']]),
    ]),
    unit('Tipos de objetos avanzados', 'Avanzado', {
      intro: 'Partial vuelve opcionales las props. Pick elige algunas. Readonly las congela. Estos utilities evitan copiar interfaces a mano.',
      points: ['Partial<User>', 'Pick<User, "id" | "nombre">', 'Omit<User, "password">', 'Readonly<User>'],
      code: 'type User = { id: number; nombre: string; password: string };\ntype Publico = Omit<User, "password">;',
    }, [
      c('¿Qué hace Partial<User>?', ['Todas las props pasan a opcionales', 'Borra el tipo', 'Lo hace any', 'Crea una clase']),
      t('Completá para sacar una propiedad:', ['Omit'], 'type P = ___<User, "password">'),
      c('¿Pick para qué sirve?', ['Quedarte solo con algunas props', 'Duplicar el archivo', 'Importar tipos', 'Desactivar strict']),
      c('¿Readonly evita...?', ['Reasignar las props (en tipos)', 'Leer el objeto', 'Compilar', 'Usar JSON']),
      c('¿Estos utilities existen en runtime?', ['No: solo en tipos, se borran al compilar', 'Sí, son funciones', 'Solo en Node', 'Solo con Babel']),
    ]),
    unit('Tipar el DOM y fetch', 'Avanzado', {
      intro: 'document.querySelector puede devolver null. fetch devuelve unknown hasta que lo valides. Tipá las respuestas de la API para no inventar campos.',
      points: ['querySelector<HTMLInputElement>("#mail")', 'Respuesta: Promise<Datos>', 'Validá el JSON', 'null es un caso, no lo ignores'],
      code: 'const input = document.querySelector<HTMLInputElement>("#mail");\nif (!input) throw new Error("falta #mail");\nconst datos: User = await res.json();',
    }, [
      c('¿Por qué querySelector puede ser null?', ['Porque el elemento puede no existir', 'Porque TypeScript está roto', 'Porque el DOM es any', 'Porque HTML no tiene ids']),
      t('Completá el genérico del input:', ['HTMLInputElement'], 'querySelector<___>("#mail")'),
      c('¿Qué hacés si res.json() puede venir mal?', ['Validás la forma antes de usarlo', 'Le pones as any y listo', 'Lo ignorás', 'Lo convertís a CSS']),
      c('¿Tipar la respuesta de una API sirve para...?', ['Que el editor te complete los campos reales', 'Que baje más rápido', 'Que no haga falta fetch', 'Que HTTPS sea opcional']),
    ]),
    unit('Migrar un proyecto JS', 'Avanzado', {
      intro: 'No reescribís todo de un saque. Empezá con allowJs, renombrá archivo por archivo a .ts/.tsx y subí strict de a poco.',
      points: ['allowJs: true para convivir', 'Renombrá .js → .ts de a uno', 'any temporal, después unknown', 'Los tests también se tipan'],
      code: '// tsconfig inicial\n{ "compilerOptions": { "allowJs": true, "checkJs": false, "strict": false } }',
    }, [
      c('¿Cómo migrás un proyecto grande?', ['De a un archivo, sin frenar el equipo', 'Reescribiendo todo el fin de semana', 'Borrando JavaScript', 'Pasando a Python']),
      t('¿Qué opción deja convivir JS y TS?', ['allowJs', 'allowJs: true']),
      c('¿Por qué no prender strict el primer día en un legacy enorme?', ['Hay miles de errores de golpe y nadie avanza', 'TypeScript no tiene strict', 'Rompe el navegador', 'Borra node_modules']),
      c('¿any es el final del camino?', ['No: es un puente, después lo sacás', 'Sí, es lo mejor', 'Es obligatorio', 'Reemplaza a unknown siempre']),
    ]),
  ],
}
