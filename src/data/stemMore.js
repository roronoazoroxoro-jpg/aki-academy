import { c, t, m, o, unit } from './helpers'

const U = (title, level, intro, points, code, xs) => unit(title, level, { intro, points, code }, xs)

export default {
  python: [
    U('Decoradores', 'Avanzado', 'Un decorador es una función que envuelve otra: @cache, @property, @dataclass. Sirve para no repetir el mismo wrapping a mano.', ['@nombre arriba de la def', 'recibe una función y devuelve otra', '@property para getters', 'No decores por deporte: tiene que valer la pena'], '@property\ndef edad(self):\n    return self._edad', [
      c('¿Qué es un decorador?', ['Una función que envuelve otra función', 'Un tipo de for', 'Un archivo .pyc', 'Un error de indentación']),
      t('Completá el símbolo de decorador:', ['@'], '___property'),
      c('¿@property para qué?', ['Exponer un método como si fuera un atributo', 'Borrar la clase', 'Instalar pip', 'Abrir un archivo']),
      c('¿Cuándo NO usar un decorador?', ['Cuando oscurece más de lo que ahorra', 'Nunca, siempre van', 'Solo los lunes', 'Solo en print']),
      m('Uní', [['@', 'Decorador'], ['property', 'Atributo calculado'], ['wraps', 'Conservar el nombre'], ['dataclass', 'Clase de datos']]),
    ]),
    U('Contexto with', 'Intermedio', 'with open(...) as f: cierra el archivo aunque explote. El protocolo es __enter__ / __exit__. Usalo para locks, conexiones y archivos.', ['with abre y cierra', 'as f le pone nombre', 'aunque haya error, sale limpio', 'No dejes archivos abiertos a mano'], 'with open("notas.txt", encoding="utf-8") as f:\n    print(f.read())', [
      c('¿Por qué with open es mejor que open a pelo?', ['Cierra el archivo aunque falle el código', 'Lee más rápido siempre', 'Crea el archivo dos veces', 'Reemplaza a print']),
      t('Completá para abrir y nombrar el archivo:', ['as'], 'with open("a.txt") ___ f:'),
      c('¿encoding="utf-8" para qué en Argentina?', ['Para que la ñ y los acentos no se rompan', 'Para ir más rápido', 'Es un tipo de for', 'Solo para Windows 95']),
      c('¿Podés hacer tu propio with?', ['Sí: __enter__ y __exit__', 'No, solo open', 'Solo con Java', 'Solo si es un int']),
      o('Ordená', ['with open(...) as f', 'leer o escribir', 'sale el bloque', 'el archivo se cierra solo']),
    ]),
    U('Tipado opcional', 'Avanzado', 'def saludar(nombre: str) -> str no obliga a Python, pero el editor y mypy te avisan. En un proyecto grande, es oro.', [': tipo después del argumento', '-> tipo de retorno', 'list[int], dict[str, int]', 'No es obligatorio en runtime'], 'def promedio(notas: list[float]) -> float:\n    return sum(notas) / len(notas)', [
      c('¿El tipado de Python se chequea al correr?', ['No: es una pista para vos y las herramientas', 'Sí, siempre tira error', 'Solo los fines de semana', 'Solo con print']),
      t('Completá el retorno:', ['float'], 'def pi() -> ___: return 3.14'),
      c('¿list[int] significa?', ['Una lista de enteros', 'Un entero que es lista', 'Un error', 'Un import']),
      c('¿mypy para qué?', ['Chequea tipos sin ejecutar el programa', 'Instala paquetes', 'Minifica', 'Abre el navegador']),
      m('Uní', [['str', 'Texto'], ['int', 'Entero'], ['list[str]', 'Lista de textos'], ['->', 'Retorno']]),
    ]),
    U('Scripts de la vida real', 'Intermedio', 'Un script útil: leer un CSV, limpiar, guardar. argparse para flags. if __name__ == "__main__" para no ejecutar al importar.', ['argparse', '__name__ == "__main__"', 'pathlib > strings a pelo', 'Un script = un problema concreto'], 'from pathlib import Path\nif __name__ == "__main__":\n    print(Path("datos.csv").exists())', [
      c('¿if __name__ == "__main__" evita...?', ['Que el script se ejecute al importarlo', 'Que Python instale pip', 'Los comentarios', 'Los floats']),
      t('Completá el chequeo del módulo principal:', ['__main__'], 'if __name__ == "___":'),
      c('¿pathlib Path para qué?', ['Manejar rutas sin pelearte con / y \\\\', 'Dibujar', 'Entrenar IA', 'Cifrar']),
      c('Un buen script de la vida real...', ['Hace una cosa y la hace bien', 'Tiene 40 flags innecesarios', 'No tiene main', 'Imprime solo emojis']),
      c('¿argparse sirve para...?', ['Leer flags de la terminal', 'Pintar HTML', 'Abrir Excel', 'Reemplazar a Git']),
    ]),
  ],
  javascript: [
    U('Maps y Sets', 'Intermedio', 'Map guarda pares clave-valor (la clave puede ser un objeto). Set es un conjunto sin duplicados. Mejor que Object cuando las claves no son strings.', ['new Map / new Set', 'set.has / map.get', 'No hay claves repetidas en Set', 'Map recuerda el orden de inserción'], 'const vistos = new Set()\nvistos.add("aki")\nconsole.log(vistos.has("aki"))', [
      c('¿Set para qué?', ['Guardar valores únicos', 'Ordenar el DOM', 'Minificar CSS', 'Reemplazar a fetch']),
      t('Completá para preguntar si está:', ['has'], 'vistos.___("aki")'),
      c('¿Una clave de Map puede ser un objeto?', ['Sí', 'No, solo strings', 'Solo números', 'Solo null']),
      c('¿Object.keys en un Map sirve?', ['No: usá map.keys() o map.entries()', 'Sí, es lo mismo', 'Solo en Firefox', 'Solo si está vacío']),
      m('Uní', [['Set', 'Únicos'], ['Map', 'Clave → valor'], ['has', '¿Está?'], ['add', 'Meter']]),
    ]),
    U('Módulos y tree shaking', 'Avanzado', 'export default vs export nombrado. El bundler tira lo que no usás (tree shaking) si importás por nombre. Evitá el import * si no hace falta.', ['export { f }', 'import { f } from', 'default = uno por archivo', 'sideEffects en package.json'], 'export function sumar(a, b) { return a + b }\nimport { sumar } from "./mates.js"', [
      c('¿Qué es tree shaking?', ['Tirar el código que no se importa', 'Minificar imágenes', 'Borrar node_modules', 'Un tipo de CSS']),
      t('Completá el import nombrado:', ['sumar'], 'import { ___ } from "./mates.js"'),
      c('¿export default cuántos por archivo?', ['Uno', 'Los que quieras', 'Cero siempre', 'Solo en HTML']),
      c('¿import * as todo por qué a veces estorba?', ['El bundler no puede sacudir tan fácil', 'Es más rápido', 'Está prohibido', 'No existe']),
      o('Ordená', ['export function sumar', 'import { sumar }', 'usar sumar(1, 2)', 'el bundler tira lo demás']),
    ]),
    U('Fechas sin drama', 'Intermedio', 'new Date() es el ahora. toISOString() viaja bien. Intl.DateTimeFormat("es-AR") pone 6 de octubre como un argentino. Cuidado: el mes en Date es 0-11.', ['mes 0 = enero', 'Intl es-AR', 'ISO para APIs', 'No restes fechas a ojo: usá diferencia de ms'], 'new Intl.DateTimeFormat("es-AR").format(new Date())', [
      c('En new Date(2026, 9, 6) el 9 es...', ['Octubre (los meses empiezan en 0)', 'Septiembre', 'Un error', 'El día']),
      t('Completá el locale argentino:', ['es-AR'], 'new Intl.DateTimeFormat("___")'),
      c('¿toISOString para qué?', ['Un formato estable para APIs', 'Poner mate', 'Minificar', 'Reemplazar a CSS']),
      c('Restar dos Date te da...', ['Milisegundos de diferencia', 'Un string de fecha', 'Un booleano', 'Un error siempre']),
      c('¿Date.now() qué devuelve?', ['El timestamp en ms', 'Un objeto Date', 'Un ISO', 'La hora de Londres nomas']),
    ]),
    U('Accesibilidad en JS', 'Avanzado', 'Un click de mouse no alcanza: teclado, aria-live, focus. Si armás un modal, trampolineá el foco adentro y devolvelo al salir.', ['focus() al abrir', 'Escape cierra', 'aria-live para avisos', 'No robes el scroll del body y te olvides'], 'dialog.showModal()\nbtn.addEventListener("click", () => dialog.close())', [
      c('Al abrir un modal, ¿adónde va el foco?', ['Al primer control del modal', 'Al logo', 'Al footer', 'A ningún lado']),
      t('Completá para cerrar con teclado mentalmente: la tecla es', ['Escape', 'Esc', 'escape']),
      c('¿aria-live="polite" para qué?', ['Avisar un cambio a lectores de pantalla', 'Pintar de verde', 'SEO', 'Minificar']),
      c('Un menú que solo funciona con hover...', ['Deja afuera teclado y táctil', 'Es más accesible', 'Es obligatorio', 'Reemplaza a button']),
      m('Uní', [['focus', 'Dónde está el teclado'], ['Escape', 'Cerrar'], ['aria-live', 'Anunciar'], ['dialog', 'Modal nativo']]),
    ]),
  ],
  web: [
    U('Formularios que no mienten', 'Intermedio', 'required, type="email", minlength. El navegador valida, pero el servidor SIEMPRE vuelve a validar. autocomplete ayuda al usuario.', ['required / type', 'el server manda', 'label asociado al input', 'no desactives zoom en mobile'], '<label>Mail <input type="email" required autocomplete="email"></label>', [
      c('¿Validar solo en el navegador alcanza?', ['No: el server también tiene que validar', 'Sí, es ley', 'Solo en Chrome', 'Solo con required']),
      t('Completá el tipo de mail:', ['email'], '<input type="___">'),
      c('¿Un label para qué?', ['El click en el texto enfoca el input (y lee el nombre)', 'Es decoración', 'Reemplaza a CSS', 'Minifica']),
      c('¿autocomplete="email" ayuda a...?', ['Que el navegador sugiera el mail', 'Cifrar', 'SEO mágico', 'Ocultar el campo']),
      o('Ordená', ['label + input', 'validar en el browser', 'mandar el form', 'validar de nuevo en el server']),
    ]),
    U('Imágenes que no pesan un muerto', 'Intermedio', 'width/height para que no salte el layout. srcset para 1x y 2x. loading="lazy" debajo del fold. WebP o AVIF si podés.', ['width y height reservan espacio', 'srcset', 'lazy para abajo', 'alt descriptivo'], '<img src="aki.jpg" width="320" height="320" alt="AKI con el mate" loading="lazy">', [
      c('¿Por qué width y height en el img?', ['Reservan el hueco y evitan que salte la página', 'Obligan PNG', 'Reemplazan a CSS', 'Sirven solo en print']),
      t('Completá para no cargar hasta que se vea:', ['lazy'], 'loading="___"'),
      c('¿alt vacío alt="" cuándo?', ['Cuando la imagen es decorativa', 'Nunca', 'Siempre', 'Solo en logos']),
      c('¿srcset para qué?', ['Distinto archivo según la densidad de pantalla', 'Un tipo de JS', 'Cifrar la foto', 'SEO de Google Maps']),
      c('Una foto de 4K en un icono de 40px es...', ['Un desperdicio de datos', 'Más nítido siempre y listo', 'Obligatorio', 'Más accesible']),
    ]),
    U('Contenedores y @media', 'Avanzado', 'Además de @media (width), ahora hay @container: el componente se adapta a SU caja, no a la ventana. Ideal para cards reutilizables.', ['container-type: inline-size', '@container (min-width: 400px)', 'media = ventana', 'container = padre'], '.card { container-type: inline-size; }\n@container (min-width: 360px) { .card { display: grid; } }', [
      c('¿@container mira...?', ['El tamaño del padre contenedor', 'Solo la ventana', 'El mouse', 'El servidor']),
      t('Completá para marcar el contenedor:', ['inline-size'], 'container-type: ___;'),
      c('¿@media (max-width: 600px) es...?', ['Cuando la ventana es chica', 'Cuando el padre es chico', 'Un color', 'Un import']),
      c('Una card en sidebar y en el main...', ['Con @container se adapta sola en los dos lados', 'Necesita dos HTML', 'No se puede', 'Solo con tablas']),
      m('Uní', [['@media', 'Ventana'], ['@container', 'Padre'], ['inline-size', 'Ancho del contenedor'], ['card', 'Componente']]),
    ]),
    U('Microinteracciones', 'Intermedio', 'Un botón que se hunde, un nodo que late, un toast que entra. transition en 150–250ms. prefers-reduced-motion: si el usuario pide menos, obedecé.', ['transition corta', 'transform > left', 'reduced-motion', 'no animes todo'], '@media (prefers-reduced-motion: reduce) {\n  * { animation: none !important; }\n}', [
      c('¿prefers-reduced-motion pide...?', ['Menos o nada de animación', 'Más confetti', 'Un tema oscuro', 'Más sombras']),
      t('Completá la media query:', ['reduce'], 'prefers-reduced-motion: ___'),
      c('¿Por qué animar transform y no top?', ['Es más barato para la GPU', 'No se puede animar transform', 'Es más lento', 'Solo en Safari']),
      c('Una animación de 2 segundos en cada hover...', ['Cansa y se siente lenta', 'Es más premium', 'Es accesible', 'Es ley']),
      c('El botón de AKI se hunde al click para...', ['Dar feedback de que se apretó', 'El SEO', 'Cargar Python', 'Cambiar el idioma']),
    ]),
  ],
  react: [
    U('Keys que no mienten', 'Intermedio', 'key={i} en una lista que se reordena es una trampa: React reusa mal el estado. Usá un id estable. key no es prop.', ['id estable', 'no index si se mueve', 'key no llega a props', 'misma lista = mismo tipo de key'], 'tareas.map((t) => <Item key={t.id} tarea={t} />)', [
      c('¿Por qué no key={i} si reordenás?', ['React mezcla el estado de los ítems', 'Es más lento de tipear', 'Prohibido por ley', 'No existe i']),
      t('Completá una key decente:', ['id'], 'key={t.___}'),
      c('¿key se lee en props?', ['No: es para React, no para tu componente', 'Sí, siempre', 'Solo en StrictMode', 'Solo en listas de 1']),
    ]),
    U('Custom hooks', 'Avanzado', 'useLoTuyo() comparte lógica, no JSX. Empieza con use. Adentro podés usar otros hooks. Un hook = una historia (useMate, useCurso).', ['useX()', 'lógica compartida', 'no JSX adentro (en general)', 'mismas reglas de hooks'], 'function useToggle(ini = false) {\n  const [on, setOn] = useState(ini)\n  return [on, () => setOn((v) => !v)]\n}', [
      c('Un custom hook sirve para...', ['Reusar lógica con estado entre componentes', 'Reemplazar a CSS', 'Minificar', 'Hablar con SQL directo']),
      t('Completá el prefijo obligatorio:', ['use'], 'function ___Toggle() {}'),
      c('¿Podés poner un hook dentro de un if?', ['No: siempre el mismo orden', 'Sí, si hace frío', 'Sí, en el return', 'Solo en useEffect']),
      m('Uní', [['useState', 'Estado'], ['useEffect', 'Efecto'], ['useToggle', 'Hook tuyo'], ['reglas', 'Mismo orden']]),
    ]),
    U('Errores en la UI', 'Avanzado', 'Un error en un render tumba el árbol. Error Boundary (componentDidCatch / getDerivedStateFromError) muestra un fallback. En eventos, try/catch a mano.', ['boundary = clase (por ahora)', 'fallback amable', 'loggear el error', 'no tragues el error en silencio'], 'if (this.state.error) return <p>AKI se mandó un moco</p>', [
      c('¿Qué atrapa un Error Boundary?', ['Errores de render en los hijos', 'Errores de red siempre', 'Errores de CSS', 'El 404 del server']),
      t('Completá el estado de error típico:', ['error'], 'if (this.state.___) return <Fallback />'),
      c('Un click handler que tira, ¿lo atrapa el boundary?', ['No: los eventos van aparte', 'Sí, siempre', 'Solo en Firefox', 'Solo con Suspense']),
      c('El fallback tiene que...', ['Dejar volver y no asustar', 'Borrar localStorage', 'Recargar en loop', 'Esconder el logo']),
    ]),
    U('Suspense y datos', 'Avanzado', 'Suspense muestra un fallback mientras un hijo “espera”. Con frameworks modernos (y el futuro de React) los datos se piden cerca del componente. No spamees spinners.', ['fallback', 'un límite de espera', 'no un spinner por cada letra', 'el padre no tiene que saber el fetch'], '<Suspense fallback={<p>Cargando el mate…</p>}>\n  <Perfil />\n</Suspense>', [
      c('Suspense muestra el fallback cuando...', ['Un hijo todavía no está listo', 'Hay un error de CSS', 'El user está offline siempre', 'Se apaga la PC']),
      t('Completá la prop del placeholder:', ['fallback'], '<Suspense ___={<Spinner />} />'),
      c('¿Un spinner en cada tecla es buena idea?', ['No: mareás', 'Sí, es moderno', 'Es obligatorio', 'Solo en mobile']),
      o('Ordená', ['envolver con Suspense', 'el hijo pide datos', 'mientras, fallback', 'cuando llega, se ve el hijo']),
    ]),
  ],
  typescript: [
    U('Unknown vs any', 'Intermedio', 'any apaga el chequeo. unknown obliga a estrechar (typeof, in, as). Si no sabés el tipo, unknown es el adulto en la sala.', ['any = me rindo', 'unknown = freno', 'narrowing', 'as es el último recurso'], 'function parse(x: unknown) {\n  if (typeof x === "string") return x.trim()\n}', [
      c('¿Cuál es más seguro para un JSON que no conocés?', ['unknown', 'any', 'never', 'void']),
      t('Completá el narrowing:', ['string'], 'if (typeof x === "___")'),
      c('¿as Usuario sin chequear es...?', ['Una apuesta: TypeScript te cree', 'Un parse runtime', 'Un import', 'Un decorador']),
      c('any en un archivo chico...', ['Se contagia a todo lo que toca', 'Es más rápido de correr', 'Borra bugs', 'Es obligatorio']),
    ]),
    U('Genéricos que se entienden', 'Avanzado', 'function primero<T>(xs: T[]): T. T es “el tipo de esta llamada”. No pongas T, U, V si podés poner TItem.', ['<T>', 'inferencia', 'nombres que se leen', 'no abuses de 4 genéricos'], 'function primero<T>(xs: T[]): T | undefined {\n  return xs[0]\n}', [
      c('En primero([1, 2]) T queda...', ['number', 'string', 'any', 'never']),
      t('Completá el genérico:', ['T'], 'function wrap<___>(x: T): T[] { return [x] }'),
      c('¿Un genérico sirve para...?', ['Reusar la función con tipos distintos', 'Minificar', 'Correr más rápido el CPU', 'Reemplazar a CSS']),
      m('Uní', [['T', 'Parámetro de tipo'], ['extends', 'Restricción'], ['inferencia', 'TS adivina'], ['TItem', 'Nombre claro']]),
    ]),
    U('Utility types', 'Intermedio', 'Partial<T>, Pick<T, "id">, Omit, Record<string, X>. No reinventes el helper: TypeScript ya lo trae.', ['Partial pone todo opcional', 'Pick elige keys', 'Omit saca keys', 'Readonly para no mutar'], 'type Parche = Partial<Usuario>\ntype Mini = Pick<Usuario, "id" | "nombre">', [
      c('Partial<Usuario> hace que...', ['Todas las props sean opcionales', 'Sea un array', 'Borre el tipo', 'Lo vuelva any']),
      t('Completá para elegir campos:', ['Pick'], 'type Mini = ___<Usuario, "id">'),
      c('Omit<Usuario, "password"> saca...', ['La prop password', 'Todas las props', 'El archivo', 'Los imports']),
      c('Record<string, number> es...', ['Un objeto de string a number', 'Un array', 'Una clase', 'Un enum']),
    ]),
    U('tsconfig que no duele', 'Avanzado', 'strict: true. noUncheckedIndexedAccess si te animás. moduleResolution bundler en Vite. paths para no tener ../../../.', ['strict', 'bundler + Vite', 'paths', 'skipLibCheck para libs pesadas'], '"compilerOptions": { "strict": true, "moduleResolution": "bundler" }', [
      c('¿strict: true activa...?', ['Un paquete de chequeos serios', 'El minificado', 'El dark mode', 'Git']),
      t('Completá el resolution de Vite:', ['bundler'], '"moduleResolution": "___"'),
      c('paths en tsconfig sirve para...', ['Importar @/components sin subir 8 carpetas', 'Cifrar', 'Correr Python', 'Pintar CSS']),
      c('¿skipLibCheck por qué a veces?', ['Para no pelearte con tipos de una lib vieja', 'Para apagar TypeScript', 'Es obligatorio', 'Borra node_modules']),
    ]),
  ],
  sql: [
    U('NULL no es cero', 'Intermedio', 'NULL significa “no sé”. NULL = NULL da UNKNOWN, no true. Usá IS NULL. COALESCE(x, 0) pone un default.', ['IS NULL / IS NOT NULL', 'COALESCE', 'NULL contagia el AND', 'COUNT(col) ignora NULL'], 'SELECT COALESCE(telefono, "sin dato") FROM alumnos;', [
      c('¿NULL = NULL da true?', ['No: da UNKNOWN', 'Sí', 'Solo en SQLite', 'Solo con JOIN']),
      t('Completá el chequeo correcto:', ['NULL'], 'WHERE telefono IS ___'),
      c('COUNT(telefono) vs COUNT(*)', ['El primero no cuenta filas con telefono NULL', 'Son iguales siempre', 'El primero suma plata', 'El segundo borra']),
      c('COALESCE(a, b) devuelve...', ['a si no es NULL, si no b', 'la suma', 'un JOIN', 'un índice']),
    ]),
    U('EXPLAIN y lentitud', 'Avanzado', 'Si una consulta tarda, EXPLAIN (o EXPLAIN ANALYZE) te muestra si usa índice o barre la tabla. Un LIKE "%foo" no usa índice; foo% a veces sí.', ['EXPLAIN', 'índice en WHERE / JOIN', 'SELECT * es perezoso', 'medí antes de adivinar'], 'EXPLAIN SELECT * FROM ventas WHERE cliente_id = 9;', [
      c('EXPLAIN sirve para...', ['Ver el plan de ejecución', 'Borrar la tabla', 'Crear un usuario', 'Minificar']),
      t('Completá para ver el plan:', ['EXPLAIN'], '___ SELECT * FROM ventas;'),
      c('LIKE "%mate" suele ser lento porque...', ['No puede usar el índice desde el medio', 'SQL no tiene LIKE', 'Es un JOIN', 'Borra filas']),
      o('Ordená', ['escribir la consulta', 'medir con EXPLAIN', 'agregar índice si barre', 'volver a medir']),
    ]),
    U('Migraciones', 'Intermedio', 'El esquema cambia: una migración es un archivo versionado (up/down). No edites la base a mano en producción “porque es más rápido”.', ['una migración = un cambio', 'up / down', 'nunca a mano en prod', 'backup antes de lo destructivo'], '-- 0014_add_racha.sql\nALTER TABLE usuarios ADD COLUMN racha INT DEFAULT 0;', [
      c('Una migración es...', ['Un cambio de esquema versionado', 'Un SELECT', 'Un usuario admin', 'Un índice invisible']),
      t('Completá para agregar columna:', ['ADD'], 'ALTER TABLE u ___ COLUMN racha INT'),
      c('¿Por qué no ALTER a mano en prod?', ['No queda historia ni se puede repetir en otro ambiente', 'Es más lento de tipear', 'SQL lo prohíbe', 'Borra Git']),
      c('Un down de migración sirve para...', ['Deshacer el cambio si salió mal', 'Hacer backup de fotos', 'Minificar', 'Abrir Excel']),
    ]),
    U('Permisos y secretos', 'Avanzado', 'La app no entra como root. Un usuario con lo mínimo: SELECT/INSERT en sus tablas. El connection string no va al repo.', ['least privilege', 'no root', '.env fuera de Git', 'rotá si se filtró'], 'GRANT SELECT, INSERT ON aki.* TO "akiapp"@"%";', [
      c('La app debería entrar como...', ['Un usuario con los permisos justos', 'root siempre', 'invitado sin clave', 'el DBA de madrugada']),
      t('Completá el comando de permisos:', ['GRANT'], '___ SELECT ON t TO app;'),
      c('¿El connection string en GitHub público?', ['No: es un secreto', 'Sí, da igual', 'Solo si es localhost escrito feo', 'Sí, para el SEO']),
      m('Uní', [['GRANT', 'Dar permiso'], ['REVOKE', 'Sacar'], ['.env', 'Secretos'], ['root', 'Demasiado poder']]),
    ]),
  ],
  git: [
    U('Stash y trabajo a medias', 'Intermedio', 'git stash guarda lo sucio para cambiar de rama. stash pop lo saca. No es un commit: si se pierde el stash, se perdió.', ['stash / pop / list', 'no reemplaza un commit', 'stash -u incluye untracked', 'mirá stash list'], 'git stash -u\ngit switch main\ngit stash pop', [
      c('stash sirve para...', ['Guardar cambios temporales y cambiar de rama', 'Borrar el repo', 'Pushear a main', 'Crear un tag']),
      t('Completá para recuperar el stash:', ['pop'], 'git stash ___'),
      c('¿stash es tan seguro como un commit?', ['No: es más fácil de perder', 'Sí, es lo mismo', 'Más seguro que origin', 'Se sube solo']),
      c('stash -u incluye...', ['Archivos nuevos sin trackear', 'Solo commits', 'Solo tags', 'El remoto']),
    ]),
    U('Rebase con cuidado', 'Avanzado', 'rebase replayea tus commits arriba de otra base. El historial queda lineal. NUNCA rebasees una rama que ya pushearon otros y están usando.', ['rebase = reescribir', 'no rebase de ramas públicas', 'conflictos commit a commit', 'force push solo si el equipo sabe'], 'git fetch\ngit rebase origin/main', [
      c('¿Rebase de una rama compartida?', ['No, reescribe historia que otros ya tienen', 'Sí, siempre', 'Solo los viernes', 'Solo con tags']),
      t('Completá para rebasear sobre main remoto:', ['rebase'], 'git ___ origin/main'),
      c('Un conflicto en rebase aparece...', ['En cada commit que se replayea', 'Una sola vez al final siempre', 'Nunca', 'Solo en merge']),
      o('Ordená', ['fetch', 'rebase origin/main', 'resolver conflictos', 'borra los .orig y seguí']),
    ]),
    U('Hooks locales', 'Intermedio', 'pre-commit puede lintar. prepare-commit-msg puede templatear. Los hooks viven en .git/hooks o con husky/lefthook para compartirlos.', ['pre-commit', 'no sustituyen CI', 'compartilos con una tool', 'no pongas un hook de 2 minutos'], '# .husky/pre-commit\nnpm test -- --bail', [
      c('Un hook pre-commit corre...', ['Antes de crear el commit', 'Después del push', 'En el server de GitHub nomas', 'Al clonar']),
      t('Completá el nombre del gancho previo:', ['pre-commit'], '___'),
      c('¿El hook local reemplaza al CI?', ['No: el CI corre en otro lado, limpio', 'Sí', 'Solo en Windows', 'Solo con Python']),
      c('Un hook de 3 minutos en cada commit...', ['Lo van a saltear con --no-verify', 'Mejora el ánimo', 'Es ley', 'Pushea solo']),
    ]),
    U('Issues y PRs que se entienden', 'Avanzado', 'Un PR chico se reviewa. El título dice el porqué. El body: qué cambió y cómo probarlo. No mezcles refactor + feature + fmt en uno.', ['PRs chicos', 'cómo probar', 'un tema por PR', 'cerrá el issue'], '## Por qué\nEl camino se sentía corto.\n## Cómo probar\nnpm run dev → Cursos', [
      c('Un buen PR...', ['Se puede reviewar en un café', 'Tiene 80 archivos de fmt', 'No tiene descripción', 'Mezcla 4 features']),
      t('Completá lo que pedís en el body:', ['probar', 'test', 'cómo probar']),
      c('¿Cerrar el issue desde el PR?', ['Sí: Closes #12 en el body', 'No se puede', 'Solo con email', 'Borra el repo']),
      m('Uní', [['título', 'El porqué corto'], ['body', 'Contexto + prueba'], ['review', 'Otra mirada'], ['chico', 'Menos miedo']]),
    ]),
  ],
  ai: [
    U('RAG en criollo', 'Avanzado', 'RAG: recuperás trozos de tus documentos y se los pasás al modelo. No “entrena” el modelo: le das contexto fresco. La calidad del chunk importa más que el modelo de moda.', ['retrieve + generate', 'chunks', 'citas', 'basura entra, basura sale'], 'pregunta → buscar 4 párrafos → prompt con esos párrafos → respuesta', [
      c('RAG significa, en criollo...', ['Buscar textos tuyos y generar con eso', 'Reentrenar GPT de cero', 'Un tipo de GPU', 'Borrar la memoria']),
      t('Completá el primer paso:', ['buscar', 'retrieve', 'recuperar']),
      c('Si los chunks son basura, la respuesta...', ['También: el modelo no inventa tus PDFs bien', 'Sale perfecta igual', 'Se vuelve más creativa', 'Apaga el server']),
      c('¿RAG reemplaza citar fuentes?', ['No: pedile que cite el trozo', 'Sí', 'Solo en imágenes', 'Solo offline']),
    ]),
    U('Evaluar un modelo', 'Avanzado', 'Una demo linda no es una métrica. Set de prueba, casos borde, alucinaciones. En producto: ¿el usuario pudo terminar la tarea?', ['set de prueba fijo', 'casos borde', 'tarea del usuario', 'no te fíes del vibe'], '20 preguntas fijas + 5 casos malditos + revisión humana', [
      c('¿Cómo sabés si mejoró el modelo?', ['Contra un set fijo que no cambiaste', 'Porque la demo emocionó', 'Porque es más grande', 'Porque es más caro']),
      t('Completá qué medís al final:', ['tarea', 'la tarea', 'si el usuario terminó']),
      c('Un caso borde es...', ['Lo raro que rompe el camino feliz', 'El ejemplo de marketing', 'Un GPU', 'Un prompt vacío nomas']),
      m('Uní', [['set fijo', 'Comparar'], ['borde', 'Romper'], ['humano', 'Revisar'], ['vibe', 'No alcanza']]),
    ]),
    U('Agentes con límites', 'Avanzado', 'Un agente que llama herramientas puede ser útil (buscar, calcular) y peligroso (borrar, pagar). Allowlist, confirmación humana, logs.', ['herramientas acotadas', 'humano en el loop', 'logs', 'no acceso total al disco'], 'puede: buscar, calcular\nno puede: transferir plata ni borrar', [
      c('Un agente sin límites es...', ['Un riesgo: puede hacer de más', 'Más productivo siempre', 'Obligatorio', 'Más barato']),
      t('Completá lo que pedís antes de pagar o borrar:', ['confirmación', 'un humano', 'permiso']),
      c('¿Allowlist de herramientas?', ['Solo las funciones que definiste', 'Todas las APIs del mundo', 'Solo print', 'Ninguna']),
      c('Los logs sirven para...', ['Entender qué hizo y auditar', 'Minificar', 'Entrenar fútbol', 'Ocultar errores']),
    ]),
    U('IA y derechos de autor', 'Intermedio', 'Un modelo puede regurgitar texto o estilo ajeno. No publiques como propio lo que no revisarías si lo hubiera escrito un humano. En el laburo: política de la empresa.', ['revisá antes de publicar', 'no copies estilo a ciegas', 'datos sensibles no van', 'la responsabilidad es tuya'], 'generar → revisar → editar → firmar vos', [
      c('Si el modelo te largó un párrafo de un libro...', ['No lo publiques como tuyo', 'Da igual, es IA', 'Es dominio público siempre', 'Hay que minificarlo']),
      t('Completá el paso que no se saltea:', ['revisar', 'editar', 'chequear']),
      c('¿Datos de alumnos o pacientes al chatbot público?', ['No', 'Sí, para que aprenda', 'Solo los nombres', 'Solo de noche']),
      o('Ordená', ['escribir el pedido', 'generar', 'revisar con cabeza', 'publicar si sirve']),
    ]),
  ],
  cyber: [
    U('Phishing de barrio', 'Básico', 'Un mail que parece del banco, un WhatsApp del “jefe” pidiendo gift cards. Mirá el remitente, no el logo. Si apura, es sospechoso.', ['urgencia = alerta', 'mirá la URL', 'el banco no pide la clave por mail', 'verificá por otro canal'], 'Mail: "tu cuenta se cierra hoy, click acá" → no', [
      c('Un mail urgente del banco pidiendo la clave es...', ['Phishing hasta que se demuestre lo contrario', 'Normal', 'Un favor', 'Un 2FA']),
      t('Completá qué mirás además del logo:', ['url', 'remitente', 'la url', 'el remitente']),
      c('Si el “jefe” pide gift cards por WhatsApp...', ['Confirmá por otro canal (llamada, presencial)', 'Mandá al toque', 'Es un beneficio', 'Es 2FA']),
      c('Una URL parecida (b4nco.com) es...', ['Una trampa clásica', 'Más segura', 'Un CDN', 'IPv6']),
    ]),
    U('Gestores de contraseñas', 'Básico', 'Una clave distinta por sitio. Un gestor las guarda. 2FA (app, no SMS si podés). No las reutilices: un leak las quema todas.', ['únicas', 'gestor', '2FA', 'no las anotes en el mail'], 'clave larga + 2FA + gestor', [
      c('Reusar la misma clave en todos lados...', ['Si filtran una, entran a todas', 'Es más seguro', 'Es más rápido de auditar', 'Reemplaza al 2FA']),
      t('Completá el segundo factor más sano que SMS:', ['app', 'aplicacion', 'totp', 'aplicación']),
      c('Un gestor de contraseñas sirve para...', ['Tener una distinta en cada sitio sin memorizarlas', 'Pushear a Git', 'Minificar', 'Apagar el firewall']),
      m('Uní', [['única', 'Por sitio'], ['gestor', 'Las guarda'], ['2FA', 'Segundo paso'], ['SMS', 'Más débil']]),
    ]),
    U('HTTPS y certificados', 'Intermedio', 'El candadito dice que el canal va cifrado hasta ese dominio, no que el sitio es honesto. Un cert vencido o autofirmado es una alerta, no un “avanzar igual”.', ['candado ≠ confianza total', 'cert vencido = parar', 'HSTS', 'no ignores el warning a lo loco'], 'https://aki-academy.vercel.app → canal cifrado', [
      c('El candadito garantiza...', ['Cifrado hasta ese dominio, no la honestidad del negocio', 'Que no hay phishing nunca', 'Que el HTML es lindo', 'Que hay 2FA']),
      t('Completá el protocolo cifrado:', ['https'], '___://'),
      c('“Avanzar igual” en un cert vencido...', ['Es una mala idea en un banco o mail', 'Es más rápido', 'Es obligatorio', 'Instala antivirus']),
      c('HSTS le dice al navegador...', ['Que vuelva siempre por HTTPS', 'Que borre cookies', 'Que apague JS', 'Que use FTP']),
    ]),
    U('Backups 3-2-1', 'Intermedio', '3 copias, 2 medios, 1 afuera (otra casa / la nube). Un ransomware que cifra el disco no te mata si hay backup offline. Probá restaurar, no solo “hice el zip”.', ['3-2-1', 'offline / offsite', 'probar el restore', 'el backup también se cifra (con clave tuya)'], 'disco + pendrive + nube = dormís', [
      c('La regla 3-2-1 es...', ['3 copias, 2 medios, 1 afuera', '3 claves, 2 users, 1 root', 'Un hash', 'Un firewall']),
      t('Completá lo que tenés que probar de vez en cuando:', ['restaurar', 'restore', 'el restore']),
      c('Un backup en el mismo disco que los datos...', ['Se quema con el disco', 'Alcanza', 'Es offsite', 'Es 2FA']),
      o('Ordená', ['copiar', 'llevar una copia afuera', 'probar restaurar', 'dormir más tranquilo']),
    ]),
  ],
  robotica: [
    U('PWM y motores', 'Intermedio', 'PWM es prender y apagar muy rápido: el motor “ve” un voltaje promedio. Duty cycle 0–100%. Un driver (L298, TB6612) porque el pin no da la corriente.', ['PWM = promedio', 'duty cycle', 'driver de motor', 'no conectes el motor directo al pin'], 'analogWrite(pin, 180); // ~70% en 8 bits', [
      c('PWM en un motor controla sobre todo...', ['La velocidad (potencia promedio)', 'El color del LED nomas', 'El WiFi', 'El ID del bus']),
      t('Completá lo que varía el PWM:', ['duty', 'duty cycle', 'ciclo']),
      c('¿Por qué un driver?', ['El pin no bancá la corriente del motor', 'Es más lindo', 'Arduino lo exige por ley', 'Reemplaza a USB']),
      c('Duty 0% significa...', ['Apagado', 'Full speed', 'Marcha atrás', 'Un error']),
    ]),
    U('I2C y SPI', 'Intermedio', 'I2C: dos cables (SDA, SCL), muchas direcciones. SPI: más rápido, más cables (MOSI, MISO, SCK, CS). Elegí según el sensor.', ['I2C = pocos cables', 'SPI = velocidad', 'dirección 7 bit en I2C', 'pull-ups en I2C'], 'Wire.begin();\nWire.requestFrom(0x68, 6);', [
      c('I2C usa, en criollo...', ['Dos cables compartidos y una dirección', 'Un cable por sensor siempre', 'Solo Bluetooth', 'PWM']),
      t('Completá los dos pines clásicos de I2C:', ['SDA', 'sda']),
      c('SPI suele ser...', ['Más rápido, con más cables', 'Más lento que I2C siempre', 'Inalámbrico', 'Un tipo de servo']),
      m('Uní', [['SDA/SCL', 'I2C'], ['MOSI/MISO', 'SPI'], ['CS', 'Elegir el chip'], ['0x68', 'Dirección']]),
    ]),
    U('Filtros y ruido', 'Avanzado', 'Un sensor salta. Media móvil, mediana, o un Kalman simple. No tomes decisiones con una sola lectura sucia.', ['promedio de N', 'mediana vs picos', 'calibrar en reposo', 'no creas el primer sample'], 'promedio = (v1+v2+v3+v4+v5)/5', [
      c('Una media móvil sirve para...', ['Suavizar ruido de un sensor', 'Acelerar el PWM', 'Cifrar I2C', 'Reemplazar al driver']),
      t('Completá una idea de filtro simple:', ['promedio', 'media', 'mediana']),
      c('La mediana aguanta mejor...', ['Picos locos (un valor disparatado)', 'El PWM', 'El WiFi', 'El servo center']),
      c('Calibrar en reposo es...', ['Medir el “cero” de ese sensor en tu mesa', 'Un flash de firmware', 'Un baud rate', 'Un shield']),
    ]),
    U('Seguridad del robot', 'Intermedio', 'Un brazo o un auto no “prueba” contra una mano. Parada de emergencia, límites de corriente, no dejes seriales abiertos en una red.', ['E-stop', 'límites', 'no USB eterno sin cuidado', 'pruebas a baja potencia'], 'si (corriente > max) apagar();', [
      c('Una parada de emergencia tiene que...', ['Cortar la potencia ya, sin menú', 'Pedir confirmación en 4 pantallas', 'Mandar un mail', 'Reiniciar Windows']),
      t('Completá qué cortás si se pasa:', ['potencia', 'corriente', 'el motor']),
      c('Probar un motor a full la primera vez...', ['Es una mala idea: empeza suave', 'Es más científico', 'Calibra solo', 'Reemplaza al driver']),
      c('Un robot en red con serial abierto...', ['Es un riesgo: cualquiera le manda comandos', 'Es más rápido de debuggear y ya', 'Es 2FA', 'Es I2C']),
    ]),
  ],
  matematica: [
    U('Regla de tres y escalas', 'Básico', 'Si 3 medialunas son $1800, 5 son… (1800/3)*5. La escala de un mapa es otra regla de tres. Unidades: no mezcles cm con km a lo loco.', ['directa vs inversa', 'misma unidad', 'mapa = escala', 'estimá si da un disparate'], '3 → 1800\n5 → 1800 * 5 / 3 = 3000', [
      c('Si 3 valen 1800, 5 valen...', ['3000', '1800', '900', '15']),
      t('Completá la cuenta de regla de tres directa:', ['5'], '(1800 / 3) * ___'),
      c('Una escala 1:100.000 significa...', ['1 cm en el mapa son 100.000 cm en el terreno', 'El mapa es más grande', 'Un porcentaje', 'Una raíz']),
      c('Si te da que un colectivo tarda 0.002 segundos...', ['Te equivocaste de unidad o de cuenta', 'Es un récord', 'Es π', 'Es una potencia']),
    ]),
    U('Porcentajes de la vida', 'Básico', 'IVA 21%: precio * 1.21. “20% off” es * 0.80. Un aumento del 10% y un descuento del 10% NO vuelven al mismo número.', ['* 1.21 IVA', '* 0.8 es -20%', 'no se cancelan +10 -10', 'base 100 ayuda'], '100 → +10% = 110 → -10% = 99', [
      c('Un 10% de aumento y 10% de descuento sobre 100 deja...', ['99', '100', '110', '90']),
      t('Completá el factor del IVA 21%:', ['1.21'], 'precio * ___'),
      c('“20% off” equivale a multiplicar por...', ['0.8', '1.2', '20', '0.2 nomas y listo siempre']),
      m('Uní', [['IVA 21%', '* 1.21'], ['-20%', '* 0.8'], ['+10% luego -10%', 'No vuelve'], ['base 100', 'Pensar fácil']]),
    ]),
    U('Pitágoras en la calle', 'Intermedio', 'a² + b² = c² en un triángulo rectángulo. La diagonal de una cancha, un cable de esquina a esquina, la distancia en un plano.', ['catetos y hipotenusa', 'solo rectángulo', '√ de la suma', 'estimá 3-4-5'], '3² + 4² = 5² → 9+16=25', [
      c('En un rectángulo 3 y 4, la diagonal es...', ['5', '7', '12', '1']),
      t('Completá Pitágoras:', ['c'], 'a² + b² = ___²'),
      c('¿Sirve Pitágoras en un triángulo que no es rectángulo?', ['No, esa fórmula no', 'Sí, siempre', 'Solo si es isósceles', 'Solo en 3D']),
      c('El trío 3-4-5 es...', ['Un triángulo rectángulo entero famoso', 'Una fracción', 'Un porcentaje', 'Un logaritmo']),
    ]),
    U('Interés simple y compuesto', 'Intermedio', 'Simple: solo sobre el capital. Compuesto: interés sobre interés (el de la vida real de un plazo, más o menos). Un 5% mensual no es 60% anual si se capitaliza: es más.', ['simple vs compuesto', 'tasa y período', 'no anualices a lo loco', 'leé la letra chica'], 'compuesto: C * (1 + r)^n', [
      c('El interés compuesto...', ['Se calcula también sobre intereses anteriores', 'Solo sobre el capital original siempre', 'Es un descuento', 'Es IVA']),
      t('Completá la base del compuesto:', ['1'], 'C * (___ + r)^n'),
      c('12 veces 5% mensual, si se capitaliza, vs 60% anual simple...', ['El compuesto da más', 'Da igual', 'Da menos', 'Da cero']),
      o('Ordená', ['definir capital', 'definir tasa y período', 'elegir simple o compuesto', 'calcular y chequear si es creíble']),
    ]),
  ],
  fisica: [
    U('Presión y mate', 'Básico', 'Presión = fuerza / área. El taco fino hunde más que la zapatilla. En un fluido, a más profundidad, más presión. El mate no implosiona porque la diferencia es chica.', ['P = F / A', 'menos área, más presión', 'profundidad', 'atmósfera ~ 101 kPa'], 'misma fuerza, taco = más pasto hundido', [
      c('A misma fuerza, menos área significa...', ['Más presión', 'Menos presión', 'Misma presión siempre', 'Cero presión']),
      t('Completá la fórmula:', ['F'], 'P = ___ / A'),
      c('Bajo el agua, a más profundidad...', ['Hay más presión', 'Hay menos', 'Hay vacío', 'Hay menos gravedad']),
      c('Un cuchillo corta mejor que una cuchara porque...', ['Concentra la fuerza en menos área', 'Es más pesado siempre', 'Tiene más presión atmosférica', 'Es un aislante']),
    ]),
    U('Imanes y brújula', 'Básico', 'Polos opuestos se atraen. La brújula apunta al norte magnético, que no es exactamente el geográfico. Un imán cerca de una brújula la vuelve loca.', ['N-S se atraen', 'norte magnético ≠ geográfico', 'campo', 'no todas las metales son imán'], 'N cerca de S → se pegan', [
      c('Dos polos norte...', ['Se repelen', 'Se atraen', 'Se anulan la gravedad', 'Hacen luz']),
      t('Completá qué apunta la brújula:', ['norte', 'norte magnetico', 'norte magnético']),
      c('¿Todo metal se imanta igual?', ['No: el aluminio casi no, el hierro sí', 'Sí, todos', 'Solo el oro', 'Solo el cobre']),
      c('El norte magnético y el geográfico...', ['No coinciden del todo', 'Son el mismo punto', 'Están en el Ecuador', 'Cambian cada minuto a 0']),
    ]),
    U('Caída libre (sin aire)', 'Intermedio', 'Sin aire, una pluma y una bola caen igual: misma aceleración g ≈ 9,8 m/s². El aire frena más a lo liviano y ancho. En la Luna, la demo es clara.', ['g ~ 9.8', 'aire ≠ vacío', 'masa no cambia g (en este modelo)', 'velocidad crece lineal si g es constante'], 'v = g * t  (partiendo del reposo, sin aire)', [
      c('En el vacío, pluma y martillo...', ['Caen juntos', 'La pluma flota', 'El martillo tarda más', 'No caen']),
      t('Completá g aproximada en m/s²:', ['9.8', '10', '9,8']),
      c('El paracaídas funciona porque...', ['El aire genera una fuerza hacia arriba (arrastre)', 'Baja g a 0', 'Cambia la masa a 0', 'Apaga la Tierra']),
      m('Uní', [['g', 'Aceleración'], ['aire', 'Arrastre'], ['vacío', 'Caen igual'], ['paracaídas', 'Más área']]),
    ]),
    U('Circuitos en serie y paralelo', 'Intermedio', 'Serie: una sola fila, si se corta una lámpara se apagan todas. Paralelo: cada una tiene su camino (la casa). La resistencia equivalente baja en paralelo.', ['serie = un camino', 'paralelo = varios', 'la casa es paralelo', 'cuidado con cortocircuitos'], 'paralelo: si se quema una, las otras siguen', [
      c('En tu casa las lámparas están, en criollo...', ['En paralelo: una puede fallar y las otras siguen', 'En serie estricta', 'Sin circuito', 'Solo a pila']),
      t('Completá el arreglo de un solo camino:', ['serie']),
      c('Meter un cable directo de polo a polo sin carga es...', ['Un cortocircuito: peligra', 'Un paralelo sano', 'Un aislante', 'g']),
      c('En paralelo, agregar una lámpara igual...', ['Baja la resistencia equivalente (pide más corriente)', 'La sube siempre', 'No cambia nada', 'Apaga g']),
    ]),
  ],
  quimica: [
    U('Ácidos y bases en la cocina', 'Básico', 'El limón es ácido (pH bajo), la lavandina es básica (¡peligro!). El vinagre + bicarbonato hace burbujas (CO₂). pH 7 es neutro (agua pura).', ['pH < 7 ácido', 'pH > 7 base', '7 neutro', 'no mezcles limpieza a lo loco'], 'vinagre + bicarbonato → gas + sal + agua', [
      c('Un pH 2 es...', ['Muy ácido', 'Muy básico', 'Neutro', 'Un metal']),
      t('Completá el pH del agua pura (aprox):', ['7']),
      c('Vinagre + bicarbonato suelta...', ['Dióxido de carbono (burbujas)', 'Oro', 'Helio', 'Ozono puro']),
      c('Mezclar lavandina con ácidos de limpieza...', ['Puede largar gases peligrosos: no lo hagas', 'Hace perfume', 'Neutraliza siempre a agua', 'Es un buffer']),
    ]),
    U('La tabla periódica sin miedo', 'Básico', 'Filas = períodos, columnas = grupos. Los alcalinos (Li, Na, K) reaccionan. Los gases nobles casi no. El número atómico = protones.', ['Z = protones', 'grupo = familia', 'metales a la izquierda', 'nobles a la derecha'], 'Na y K están en la misma familia: se parecen', [
      c('El número atómico cuenta...', ['Protones', 'Neutrones nomas', 'Electrones de valencia nomas', 'Neutrinos']),
      t('Completá cómo se llama una columna:', ['grupo', 'familia', 'grupo o familia']),
      c('Los gases nobles suelen...', ['Reaccionar poco', 'Explotar con agua', 'Ser metales', 'Tener pH 0']),
      c('Na y K se parecen porque...', ['Están en el mismo grupo', 'Tienen el mismo Z', 'Son nobles', 'Son ácidos']),
    ]),
    U('Estequiometría criolla', 'Intermedio', 'La receta química: 2 H₂ + O₂ → 2 H₂O. Si tenés 4 H₂, necesitás 2 O₂. El limitante es el que se acaba primero.', ['coeficientes = receta', 'reactivo limitante', 'conservación de átomos', 'gramos ↔ moles'], '2 medialunas + 1 café → 1 desayuno (si falta café, sobran medialunas)', [
      c('El reactivo limitante es...', ['El que se acaba primero y frena la receta', 'El que sobra', 'El producto', 'El catalizador']),
      t('Completá: 2 H₂ + O₂ →', ['2 H2O', '2 H₂O', '2H2O']),
      c('Los coeficientes de una ecuación balanceada...', ['Dicen la proporción de moles', 'Son el pH', 'Son el Z', 'Son la temperatura']),
      o('Ordená', ['balancear la ecuación', 'pasar a moles', 'ver quién limita', 'calcular producto']),
    ]),
    U('Química del agua dura', 'Intermedio', 'El agua “dura” tiene Ca²⁺ y Mg²⁺: deja sarro en la pava. Un filtro o un ablandador los saca. No es sucia sí o sí: es mineral.', ['Ca y Mg', 'sarro = carbonatos', 'ablandar', 'no es lo mismo que contaminada'], 'pava blanca por dentro → agua dura típica', [
      c('El sarro de la pava suele ser...', ['Carbonatos de calcio (y magnesio)', 'Sal de mesa nomas', 'Azúcar', 'Óxido de hierro puro siempre']),
      t('Completá un ion típico del agua dura:', ['Ca', 'calcio', 'Mg', 'magnesio']),
      c('Agua dura vs agua contaminada...', ['No es lo mismo: dura es mineral, contaminada es otra historia', 'Son sinónimos', 'Dura = bacteria', 'Dura = pH 1']),
      c('Hervir a veces...', ['Deposita más sarro (sale CO₂ y precipita)', 'La vuelve destilada', 'Saca todo el Ca a la nube', 'La vuelve básica a pH 14']),
    ]),
  ],
  biologia: [
    U('ADN en criollo', 'Intermedio', 'El ADN es una receta en 4 letras (A, T, C, G). Un gen es un tramo que suele codear una proteína. No es destino: ambiente y azar también pesan.', ['4 bases', 'gen ≠ persona entera', 'doble hélice', 'mutación = cambio'], 'A-T y C-G se aparean', [
      c('Las cuatro letras del ADN son...', ['A, T, C, G', 'A, B, C, D', 'X, Y, Z, W', 'pH, Z, g, N']),
      t('Completá la pareja de A:', ['T', 't']),
      c('Un gen es, en criollo...', ['Un tramo de receta, no “toda tu vida”', 'Un órgano', 'Un virus siempre', 'Un hueso']),
      c('Una mutación es...', ['Un cambio en la secuencia', 'Un músculo', 'Un pH', 'Un fósil']),
    ]),
    U('Inmunidad básica', 'Intermedio', 'Barreras (piel), respuesta innata (rápida y genérica) y adaptativa (anticuerpos, memoria). Una vacuna entrena la memoria sin que pases la enfermedad fuerte.', ['piel', 'innata vs adaptativa', 'memoria', 'vacuna = ensayo seguro'], 'primera vez: lento; segunda: el cuerpo ya tiene el apunte', [
      c('Una vacuna busca...', ['Entrenar la memoria del sistema inmune', 'Reemplazar la piel', 'Subir el pH de la sangre', 'Borrar el ADN']),
      t('Completá la primera barrera clásica:', ['piel']),
      c('La respuesta adaptativa es...', ['Específica y con memoria', 'Solo fiebre', 'Solo la piel', 'Un hueso']),
      m('Uní', [['piel', 'Barrera'], ['innata', 'Rápida'], ['anticuerpo', 'Específico'], ['vacuna', 'Memoria']]),
    ]),
    U('Ecosistemas argentinos', 'Básico', 'Pampa, yungas, patagonia, delta, mar argentino. Un ecosistema es seres + ambiente. Si sacás un eslabón (yaguareté, pastizal), se desarma el resto.', ['seres + ambiente', 'cadenas', 'endemismo', 'un cambio pega en cadena'], 'pastizal → vizcacha → ave de rapiña', [
      c('Un ecosistema incluye...', ['Seres vivos y su ambiente', 'Solo los animales grandes', 'Solo el clima', 'Solo el ADN']),
      t('Completá un bioma clásico argentino:', ['pampa', 'patagonia', 'yungas', 'delta']),
      c('Si desaparece un depredador tope, a veces...', ['Descontrola a las presas y cambia el paisaje', 'No pasa nada nunca', 'Sube g', 'Baja el pH del mar ya']),
      c('Endémico significa...', ['Que vive ahí y en pocos lados más (o solo ahí)', 'Que es invasor', 'Que es fósil', 'Que es un virus']),
    ]),
    U('Salud: sueño y movimiento', 'Básico', 'Dormir no es “perder tiempo”: es limpieza y memoria. Moverse no es solo “quemar”: es ánimo, huesos, azúcar en sangre. No hay pastilla que reemplace las dos.', ['sueño = proceso', 'moverse = señal al cuerpo', 'no es moralina: es fisiología', 'el mate no reemplaza dormir'], '7–9 h en adultos suele ser la franja (hay excepciones)', [
      c('Dormir sirve, entre otras cosas, para...', ['Consolidar memoria y recuperar', 'Gastar más azúcar nomas', 'Bajar g', 'Cambiar el ADN a voluntad']),
      t('Completá lo que no reemplaza al sueño:', ['mate', 'el mate', 'cafeina', 'cafeína']),
      c('Moverse ayuda a...', ['Huesos, ánimo y control de glucosa (entre otras)', 'Solo “quemar el asado”', 'Dejar de necesitar agua', 'Apagar el inmune']),
      o('Ordená', ['moverse un rato', 'comer con algo de criterio', 'dormir', 'el cuerpo agradece']),
    ]),
  ],
  astronomia: [
    U('Fases de la Luna', 'Básico', 'No es la sombra de la Tierra (eso es un eclipse). Es cuánto del lado iluminado por el Sol vemos. Nueva, creciente, llena, menguante.', ['lado iluminado', 'no es la sombra terrestre', 'ciclo ~ 29.5 días', 'llena ≠ eclipse'], 'Sol ilumina la Luna; nosotros vemos un “cacho”', [
      c('Las fases se deben a...', ['Qué parte iluminada vemos desde acá', 'La sombra de la Tierra siempre', 'Nubes', 'El pH de la Luna']),
      t('Completá la fase más brillante:', ['llena', 'luna llena']),
      c('Un eclipse lunar es cuando...', ['La Tierra se mete entre Sol y Luna', 'Es luna nueva nomas', 'Es un cometa', 'Es un satélite Starlink']),
      c('El ciclo de fases dura más o menos...', ['29 días y un poco', '24 horas', '1 año', '8 minutos']),
    ]),
    U('Por qué hay estaciones', 'Intermedio', 'NO es “más cerca del Sol en verano”. Es la inclinación del eje (≈23.5°): un hemisferio recibe rayos más directos. Cuando acá es verano, en el norte es invierno.', ['eje inclinado', 'no es la distancia', 'hemisferios opuestos', 'solsticio / equinoccio'], 'eje 23.5° → en enero el sur “mira” más al Sol', [
      c('Las estaciones se deben sobre todo a...', ['La inclinación del eje', 'Estar más cerca del Sol en enero', 'La Luna', 'El pH del aire']),
      t('Completá los grados aprox. del eje:', ['23.5', '23', '23,5']),
      c('En enero, en Argentina suele ser...', ['Verano (y en Canadá invierno)', 'Invierno también', 'Equinoccio siempre', 'Eclipse mensual']),
      m('Uní', [['solsticio', 'Día más largo/corto'], ['equinoccio', 'Día ≈ noche'], ['eje', 'Inclinación'], ['distancia', 'No es la causa principal']]),
    ]),
    U('Espectro y de qué está hecho', 'Avanzado', 'Cada elemento absorbe/emite colores propios (líneas). Por eso sabemos que el Sol tiene hidrógeno sin ir a buscar un frasco. Un corrimiento al rojo: se aleja.', ['líneas espectrales', 'huella del elemento', 'redshift', 'no hace falta ir'], 'luz → prisma / red → líneas → “es hidrógeno”', [
      c('Las líneas del espectro sirven para...', ['Saber de qué está hecha una estrella', 'Medir el pH de la Luna', 'Contar cráteres', 'Apagar el Sol']),
      t('Completá el gas más abundante del Sol:', ['hidrogeno', 'hidrógeno', 'H']),
      c('Un corrimiento al rojo suele indicar...', ['Que se aleja', 'Que está más caliente siempre', 'Que es una luna', 'Que hay eclipse']),
      c('¿Hace falta una sonda para saber la química de una estrella?', ['No: la luz ya trae la firma', 'Sí, siempre', 'Solo con radio', 'Solo de noche']),
    ]),
    U('Basura espacial', 'Intermedio', 'Satélites muertos, etapas de cohetes, tornillos. A 7–8 km/s un tornillo es un misil. Hay catálogos y normas para no dejar más lío. El cielo no es infinito para basura.', ['velocidad enorme', 'colisión en cadena (Kessler)', 'catálogos', 'diseñar para reentrar'], 'un tornillo a 8 km/s ≠ un tornillo en el patio', [
      c('La basura espacial es peligrosa sobre todo por...', ['La velocidad (poca masa, mucha energía)', 'El óxido', 'El pH', 'El color']),
      t('Completá el riesgo de colisiones que generan más pedazos:', ['Kessler', 'cascada', 'cadena']),
      c('Un satélite “bueno ciudadano”...', ['Tiene plan de reentrada o órbita cementerio', 'Se queda para siempre', 'Tira tornillos a propósito', 'Apaga el GPS de todos']),
      c('¿El cielo aguanta basura infinita?', ['No: las órbitas útiles se saturan', 'Sí', 'Solo la GEO', 'Solo de noche']),
    ]),
  ],
  economia: [
    U('Inflación en la vida real', 'Intermedio', 'La inflación es que la misma plata compra menos. No es “los comercios avaros” nomas: hay emisión, costos, expectativas, puja. El índice (IPC) mide una canasta, no tu carrito exacto.', ['IPC = canasta', 'no es tu carrito', 'expectativas importan', 'sueldo vs precios'], 'si los precios suben 10% y tu sueldo 4%, perdiste poder de compra', [
      c('Inflación significa, en criollo...', ['La misma plata compra menos', 'Que hay más productos', 'Que el dólar es 1', 'Que no hay impuestos']),
      t('Completá el índice de precios al consumidor:', ['IPC', 'ipc']),
      c('El IPC mide...', ['Una canasta promedio, no exactamente tu super', 'Solo el asado', 'Solo el dólar blue', 'El PBI']),
      c('Si los precios suben más que tu sueldo...', ['Pierde poder de compra', 'Ganás siempre', 'Da igual', 'Baja el IVA solo']),
    ]),
    U('Interés y cuotas', 'Intermedio', 'Una cuota “sin interés” a veces mete el interés en el precio de lista. El CFT (costo financiero total) es el número que hay que mirar, no el aviso lindo.', ['CFT', 'precio de contado vs cuota', 'interés compuesto en deudas', 'leé la letra chica'], 'CFT 80% anual ≠ “12 cuotas sin interés” de folleto', [
      c('El número que más importa en un préstamo es...', ['El CFT (costo financiero total)', 'El color de la tarjeta', 'El logo del banco', 'La cantidad de cuotas nomas']),
      t('Completá la sigla del costo total:', ['CFT', 'cft']),
      c('“Sin interés” a 12 cuotas a veces...', ['Ya metió el interés en el precio de lista', 'Es un regalo del BCRA', 'Baja la inflación', 'Es IVA 0']),
      o('Ordená', ['mirar el precio de contado', 'mirar el CFT', 'comparar con otro lado', 'decidir si te cierra']),
    ]),
    U('Tipo de cambio', 'Avanzado', 'Un peso más débil encarece lo importado y puede ayudar a exportar. Hay oficial, MEP, blue… El spread es la diferencia. No hay un solo “el dólar”.', ['varios dólares', 'spread', 'importar se encarece si devalúa', 'exportar puede ganar competitividad'], 'devalúa el peso → el celular importado sube', [
      c('Si el peso se devalúa, un celular importado suele...', ['Encarecerse', 'Regalizarse', 'Desaparecer el IVA', 'Bajar el CFT a 0']),
      t('Completá cómo se llama la diferencia entre dólares:', ['spread', 'brecha']),
      c('¿Hay un solo dólar en Argentina?', ['No: oficial, MEP, blue y otros', 'Sí, siempre uno', 'Solo el blue es legal', 'Solo el de Disney']),
      m('Uní', [['devaluar', 'El peso compra menos dólares'], ['exportar', 'Puede ayudar'], ['importar', 'Se encarece'], ['spread', 'Brecha']]),
    ]),
    U('Laburo, monotributo y recibo', 'Intermedio', 'En relación de dependencia hay recibo, aportes, vacaciones. El monotributo es otra lógica: categoría, pago mensual, factura. Leé el recibo: no es un papel decorativo.', ['recibo = derechos', 'monotributo ≠ en blanco “más simple” nomas', 'categoría', 'consultá si no entendés'], 'bruto - descuentos = neto (el que te deposita)', [
      c('El sueldo neto es...', ['Lo que llega a la cuenta, después de descuentos', 'El bruto', 'El aguinaldo nomas', 'El CFT']),
      t('Completá: bruto menos descuentos =', ['neto']),
      c('El monotributo es...', ['Un régimen simplificado para facturar, con categorías', 'Un impuesto al asado', 'El recibo de sueldo', 'El blue']),
      c('Si no entendés una línea del recibo...', ['Preguntá (sindicato, contador, HR): es tu plata', 'Da igual', 'Es secreto de Estado', 'Hay que minificarlo']),
    ]),
  ],
  historia: [
    U('Mayo y el primer grito', 'Básico', '1810: la Semana de Mayo. No es “la independencia” todavía (eso es 1816), es el primer gobierno criollo en Buenos Aires mientras España está patas para arriba con Napoleón.', ['1810 ≠ 1816', 'Primera Junta', 'contexto napoleónico', 'Buenos Aires no es “el país” todavía'], '1810 Junta → 1816 Independencia', [
      c('La Revolución de Mayo es del año...', ['1810', '1816', '1853', '1983']),
      t('Completá el año de la Independencia:', ['1816']),
      c('1810 y 1816 no son lo mismo porque...', ['Uno es el primer gobierno criollo, el otro declara la independencia', 'Son dos nombres del mismo día', '1816 es Mayo', '1810 es la Constitución']),
      c('La Primera Junta se arma en...', ['Buenos Aires', 'Tucumán nomas', 'Londres', 'Lima']),
    ]),
    U('Inmigración y conventillo', 'Intermedio', 'A fines del XIX y principios del XX llegan italianos, españoles, judíos, árabes… El conventillo, el lunfardo, el tango, el sindicato. El país se mezcla en el puerto.', ['oleadas', 'conventillo', 'lunfardo / tango', 'trabajo y huelga'], 'barco → hotel de inmigrantes → conventillo → barrio', [
      c('El conventillo era, en criollo...', ['Una casa colectiva llena de inmigrantes y laburantes', 'Una estancia', 'El Congreso', 'Un fuerte colonial']),
      t('Completá un idioma que nació en esa mezcla urbana:', ['lunfardo']),
      c('Muchos apellidos italianos en Argentina se explican por...', ['La inmigración de esos años', 'El Inca', 'El ferrocarril inglés nomas', 'El voto de 1947 nomas']),
      m('Uní', [['conventillo', 'Vivienda colectiva'], ['tango', 'Cultura del puerto'], ['sindicato', 'Organizarse'], ['puerto', 'Puerta de entrada']]),
    ]),
    U('Perón, Evita y el 17 de octubre', 'Intermedio', '1945: el 17 de octubre, una movilización pide a Perón. Después: voto femenino (1947), derechos laborales, polarización que dura décadas. Historia, no hinchada.', ['17 de octubre 1945', 'voto femenino 1947', 'derechos laborales', 'no es un clásico de fútbol'], '1945 17 de octubre → 1946 elecciones → 1947 voto de las mujeres', [
      c('El 17 de octubre de 1945 es famoso por...', ['La movilización que pide la libertad de Perón', 'La Revolución de Mayo', 'Malvinas', 'la Constitución del 53']),
      t('Completá el año del voto femenino nacional:', ['1947']),
      c('Estudiar el peronismo sirve para...', ['Entender media Argentina del siglo XX, a favor o en contra', 'Elegir un club', 'Fijar el dólar', 'Declarar la independencia']),
      c('El voto femenino de 1947...', ['Incorpora a las mujeres al padrón nacional', 'Es la ley Sáenz Peña', 'Es 1810', 'Es el Cordobazo']),
    ]),
    U('1983 y la democracia que hay que cuidar', 'Básico', '1983: Alfonsín, fin de la dictadura. La democracia no es un objeto que se guarda: se usa, se discute, se vota, se controla. El Nunca Más es un programa, no un adorno.', ['1983', 'Alfonsín', 'Nunca más', 'cuidar la democracia'], '1983 elecciones → Juicio a las Juntas → Nunca más', [
      c('1983 marca, en criollo...', ['El regreso de la democracia después de la dictadura', 'Mayo de 1810', 'El 1 a 1', 'El Cordobazo']),
      t('Completá el presidente electo en 1983:', ['Alfonsin', 'Alfonsín', 'Raul Alfonsin', 'Raúl Alfonsín']),
      c('“Nunca más” nombra sobre todo...', ['El rechazo al terrorismo de Estado', 'Un plan económico', 'Un club', 'Una yerba']),
      o('Ordená', ['dictadura 1976-1983', 'elecciones 1983', 'juicio a las juntas', 'cuidar lo que costó']),
    ]),
  ],
}

