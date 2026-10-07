import { c, t, m, o, unit } from './helpers'

const U = (title, level, intro, points, code, xs) => unit(title, level, { intro, points, code }, xs)

export default {
  python: [
    U('pytest de verdad', 'Avanzado', 'Un test no es print. assert espera algo concreto. pytest descubre test_*.py. Si el test es frágil, el código también.', ['test_ al inicio', 'assert igualdad', 'un test = un comportamiento', 'si falla, el mensaje tiene que servir'], 'def test_suma():\n    assert 1 + 1 == 2', [
      c('¿pytest cómo encuentra los tests?', ['Archivos y funciones que empiezan con test_', 'Solo si se llaman main', 'Los comentarios', 'Los prints']),
      t('Completá la palabra de chequeo:', ['assert'], '___ 2 + 2 == 4'),
      c('Un buen test...', ['Falla si el comportamiento se rompe, y solo entonces', 'Pasa siempre', 'Usa random sin seed', 'Toca la red sí o sí']),
      m('Uní', [['assert', 'Esperar un valor'], ['pytest', 'Corredor de tests'], ['fixture', 'Setup reutilizable'], ['test_', 'Convención de nombre']]),
      o('Ordená', ['escribir la función', 'escribir el test', 'correrlo', 'arreglar si falla']),
    ]),
    U('Paquetes y entornos', 'Intermedio', 'venv aísla dependencias. requirements.txt las lista. No instales todo en el Python del sistema: después no sabés qué rompiste.', ['venv', 'pip install', 'requirements.txt', 'un entorno por proyecto'], 'python -m venv .venv\n.venv\\Scripts\\activate\npip install -r requirements.txt', [
      c('¿venv para qué?', ['Aislar las librerías de este proyecto', 'Hacer más rápido el for', 'Reemplazar a Git', 'Minificar']),
      t('Completá el archivo de dependencias:', ['requirements.txt', 'requirements']),
      c('Instalar paquetes en el Python global...', ['Mezcla proyectos y después duele', 'Es la mejor práctica', 'Es más seguro', 'Reemplaza al venv']),
      c('pip freeze sirve para...', ['Listar lo instalado y armar requirements', 'Borrar el venv', 'Correr tests', 'Formatear']),
    ]),
    U('Excepciones con clase', 'Intermedio', 'try / except / finally. No captures Exception a lo loco: agarrá lo que sabés manejar. raise para avisar. El finally corre sí o sí.', ['except específico', 'raise', 'finally cierra recursos', 'no silencies errores'], 'try:\n    n = int(texto)\nexcept ValueError:\n    print("no es un número")', [
      c('¿Por qué no except Exception siempre?', ['Traga errores que no entendés y esconde bugs', 'Es más rápido', 'Es obligatorio', 'Solo funciona en Windows']),
      t('Completá el tipo de error de int("hola"):', ['ValueError']),
      c('finally se ejecuta...', ['Siempre, haya error o no', 'Solo si hay error', 'Solo los lunes', 'Nunca']),
      m('Uní', [['try', 'Intentar'], ['except', 'Atrapar'], ['finally', 'Siempre'], ['raise', 'Lanzar']]),
    ]),
    U('Comprensiones ninja', 'Avanzado', '[x for x in xs if x] es un filtro + mapa. {k: v for ...} un dict. No anides tres for: se vuelve ilegible. Generadores (x for x) no cargan todo en RAM.', ['lista / set / dict comp', 'if al final filtra', 'generador ahorra memoria', 'si no entra en una línea, usá un for'], 'pares = [n for n in range(10) if n % 2 == 0]', [
      c('¿[x for x in xs if x > 0] qué hace?', ['Filtra positivos y arma una lista nueva', 'Borra xs', 'Ordena', 'Imprime']),
      t('Completá el filtro:', ['if'], '[n for n in nums ___ n > 0]'),
      c('¿(x for x in xs) es...?', ['Un generador: no arma la lista entera', 'Una tupla', 'Un error', 'Un set']),
      c('Tres for anidados en una comprensión...', ['Suele ser más claro como fors normales', 'Siempre es mejor', 'Es más rápido siempre', 'Está prohibido por Python']),
    ]),
  ],
  javascript: [
    U('Promise.all y allSettled', 'Avanzado', 'Promise.all falla si UNA falla. allSettled espera a todas y te dice cuáles anduvieron. No dispares 200 fetch a la vez sin control.', ['all = todo o nada', 'allSettled = informe', 'race = la primera', 'cuidá el paralelismo'], 'const r = await Promise.allSettled([fetch(a), fetch(b)])', [
      c('Si una de tres promesas en Promise.all rechaza...', ['Se rechaza todo', 'Las otras siguen y ganás igual', 'Se convierte en allSettled', 'Se ignora']),
      t('Completá la que espera a todas aunque fallen:', ['allSettled'], 'Promise.___([...])'),
      c('Promise.race sirve para...', ['Quedarte con la que termina primero', 'Sumar números', 'Minificar', 'Cerrar el modal']),
      o('Ordená', ['disparar las promesas', 'esperar allSettled', 'mirar status fulfilled/rejected', 'mostrar el resultado']),
    ]),
    U('localStorage con cuidado', 'Intermedio', 'localStorage es un string por clave, en este origen, síncrono. JSON.stringify / parse. No guardes secretos. Puede no estar (Safari privado).', ['setItem / getItem', 'JSON', 'mismo origen', 'no es una base de datos'], 'localStorage.setItem("nombre", JSON.stringify({ n: "AKI" }))', [
      c('localStorage guarda...', ['Strings (por eso JSON)', 'Objetos nativos siempre', 'Solo números', 'Archivos binarios']),
      t('Completá para leer:', ['getItem'], 'localStorage.___("nombre")'),
      c('¿Es un lugar para tokens de admin?', ['No: cualquiera con JS en esa página lo lee', 'Sí, es un vault', 'Solo si es HTTPS', 'Solo en Chrome']),
      c('Si el usuario está en modo privado, a veces...', ['localStorage tira error o está vacío', 'Anda mejor', 'Se vuelve SQL', 'Se cifra solo']),
    ]),
    U('Eventos que no se te escapan', 'Intermedio', 'addEventListener. El objeto event: preventDefault, stopPropagation, currentTarget. Delegá en un padre si hay mil botones.', ['addEventListener', 'preventDefault', 'delegación', 'sacá el listener si desmontás'], 'btn.addEventListener("click", (e) => e.preventDefault())', [
      c('preventDefault sirve para...', ['Cancelar lo que el browser haría (submit, link)', 'Borrar el DOM', 'Minificar', 'Cerrar Python']),
      t('Completá el método para escuchar:', ['addEventListener'], 'el.___("click", fn)'),
      c('Delegar el click en el padre sirve cuando...', ['Hay muchos hijos y no querés mil listeners', 'Hay un solo botón estático', 'No hay JS', 'Usás innerHTML nomas']),
      m('Uní', [['target', 'Quién disparó'], ['currentTarget', 'Quién escucha'], ['preventDefault', 'Cancelar default'], ['stopPropagation', 'No subir']]),
    ]),
    U('Fetch que no miente', 'Avanzado', 'fetch no tira si el server responde 500: mirá res.ok. Después res.json(). try/catch para red caída. AbortController para cancelar.', ['res.ok', 'json()', 'AbortController', 'no asumas 200'], 'const res = await fetch("/api")\nif (!res.ok) throw new Error(res.status)', [
      c('fetch a una URL que responde 404...', ['No tira: tenés que mirar res.ok', 'Tira siempre', 'Devuelve null', 'Cierra la pestaña']),
      t('Completá el chequeo:', ['ok'], 'if (!res.___) throw new Error()'),
      c('AbortController para qué?', ['Cancelar un fetch que ya no hace falta', 'Minificar', 'Cifrar', 'Reemplazar a JSON']),
      c('res.json() si el cuerpo no es JSON...', ['Rechaza la promesa', 'Devuelve 0', 'Cierra el modal', 'Es más rápido']),
    ]),
  ],
  web: [
    U('CSS Grid con nombre', 'Intermedio', 'grid-template-areas le pone nombre a las zonas: header, main, aside. En mobile reordenás sin pelearte con floats. gap en vez de margin mágico.', ['template-areas', 'fr y minmax', 'gap', 'una sola regla de layout'], '.layout { display: grid; grid-template-areas: "nav nav" "main side"; }', [
      c('grid-template-areas sirve para...', ['Nombrar zonas y reordenarlas fácil', 'Animar', 'Cifrar CSS', 'Reemplazar a HTML']),
      t('Completá display:', ['grid'], '.caja { display: ___; }'),
      c('minmax(200px, 1fr) significa...', ['Como mínimo 200px, el resto se reparte', 'Siempre 200px', 'Un error', 'Solo en print']),
      o('Ordená', ['armar el HTML semántico', 'definir áreas', 'poner gap', 'ajustar el mobile']),
    ]),
    U('HTML con sentido', 'Básico', 'header, nav, main, article, footer. Un botón es button, un link es a. El lector de pantalla y el SEO te lo agradecen. h1 una vez por página.', ['semántica', 'un h1', 'button vs a', 'label en forms'], '<main>\n  <article><h1>Título</h1></article>\n</main>', [
      c('Un click que va a otra URL es...', ['<a href>', '<button>', '<div onclick>', '<span>']),
      t('Completá la etiqueta del contenido principal:', ['main'], '<___>...</___>'),
      c('¿Cuántos h1 conviene por página?', ['Uno, el tema de esta página', 'Veinte', 'Cero', 'Solo en el footer']),
      c('Un div con onclick y role improvisado...', ['Pierde teclado y semántica: preferí button', 'Es más accesible', 'Es obligatorio', 'Reemplaza a CSS']),
    ]),
    U('SEO sin humo', 'Intermedio', 'title único, meta description honesta, headings de verdad, alt en fotos, URL clara. Google no te premia el keyword stuffing. El contenido bueno gana.', ['title único', 'description', 'headings reales', 'nada de texto escondido'], '<title>Python desde cero · AKI-Academy</title>', [
      c('El <title> tiene que ser...', ['Único y decir de qué va la página', 'Igual en todo el sitio', 'Vacío', 'Solo emojis']),
      t('Completá la etiqueta del título de pestaña:', ['title'], '<___>AKI</___>'),
      c('Keyword stuffing es...', ['Repetir la palabra mil veces: hoy no sirve y queda feo', 'La mejor técnica 2026', 'Un tipo de CSS', 'Un protocolo']),
      c('Una URL /curso/python es mejor que /p?id=12 porque...', ['Se entiende y se comparte', 'Es más corta siempre', 'Cifra', 'Reemplaza al title']),
    ]),
    U('Oscuro sin romper los ojos', 'Intermedio', 'prefers-color-scheme o un data-theme. Variables CSS. El contraste tiene que seguir alcanzando. No inviertas fotos a lo bruto.', ['variables', 'prefers-color-scheme', 'contraste', 'un token por color'], ':root { --bg: #fff; }\n[data-theme="dark"] { --bg: #122; }', [
      c('La forma limpia de theming es...', ['Variables CSS que cambian en un atributo', 'Duplicar todo el HTML', 'Filtro invert en el body', 'Un gif']),
      t('Completá la media query de sistema:', ['prefers-color-scheme'], '@media (___: dark)'),
      c('Invertir toda la página con filter...', ['Rompe fotos y logos: no es un tema', 'Es perfecto', 'Mejora el SEO', 'Cifra']),
      c('El texto gris claro sobre fondo gris oscuro...', ['Puede fallar contraste: medilo', 'Siempre es elegante y listo', 'Es obligatorio', 'Reemplaza al focus']),
    ]),
  ],
  react: [
    U('useReducer cuando el useState se enreda', 'Avanzado', 'Si tenés 6 setState que se pisan, un reducer junta las transiciones: dispatch({ type: "add" }). El estado siguiente sale de una función pura.', ['un estado, muchas acciones', 'función pura', 'dispatch', 'no mutes el state'], 'const [s, dispatch] = useReducer(reducer, { n: 0 })', [
      c('useReducer conviene cuando...', ['El estado tiene varias transiciones claras', 'Hay un solo booleano', 'No hay eventos', 'Es HTML estático']),
      t('Completá para mandar una acción:', ['dispatch'], '___( { type: "add" } )'),
      c('El reducer tiene que...', ['Devolver un estado nuevo, no mutar el viejo', 'Hacer fetch adentro siempre', 'Usar document', 'Ser async sí o sí']),
      m('Uní', [['state', 'Datos'], ['action', 'Qué pasó'], ['dispatch', 'Avisar'], ['reducer', 'Cómo cambia']]),
    ]),
    U('Context sin convertirlo en un basurero', 'Intermedio', 'createContext + Provider. Sirve para tema, usuario, idioma. Si metés todo, cada click re-renderiza el universo. Separá contextos.', ['Provider envuelve', 'useContext lee', 'separá lo que cambia mucho', 'no reemplaza a props siempre'], 'const Tema = createContext("claro")', [
      c('Context sirve sobre todo para...', ['Datos que muchos componentes lejanos necesitan', 'Reemplazar a CSS', 'Minificar', 'SQL']),
      t('Completá el hook para leer:', ['useContext'], 'const tema = ___(Tema)'),
      c('Meter el carrito, el usuario y el mouse en un solo context...', ['Re-renderiza de más: separalos', 'Es más rápido', 'Es obligatorio', 'Cifra']),
      c('Si el dato solo lo usa el hijo directo...', ['Una prop alcanza', 'Siempre context', 'Siempre Redux', 'Un global window']),
    ]),
    U('Listas y keys que no mienten', 'Intermedio', 'key tiene que identificar al ítem, no ser el índice si la lista se reordena. React usa la key para reciclar el DOM. key={i} en una lista que se mueve = bugs raros.', ['key estable', 'id > índice', 'map devuelve elementos', 'no uses random de key'], '{tareas.map(t => <li key={t.id}>{t.texto}</li>)}', [
      c('¿Por qué no key={i} si reordenás?', ['React recicla mal el DOM y se mezclan estados', 'Es más lento de tipeo', 'Está prohibido por CSS', 'No existe i']),
      t('Completá el identificador:', ['key'], '<li ___={t.id}>'),
      c('Una key random en cada render...', ['Desmonta todo siempre: pésimo', 'Es más seguro', 'Ayuda al SEO', 'Cifra']),
      o('Ordená', ['tener un id', 'mapear la lista', 'poner key={id}', 'renderizar el ítem']),
    ]),
    U('Hooks a medida', 'Avanzado', 'function useMate() { ... } junta estado + efecto que se repiten. Empiezan con use. No los llames dentro de if. Devuelven lo que el componente necesita, no un objeto gigante.', ['use + Nombre', 'mismas reglas que los hooks', 'un hook = una idea', 'testeable'], 'function useToggle(ini = false) {\n  const [on, set] = useState(ini)\n  return [on, () => set(v => !v)]\n}', [
      c('Un custom hook es...', ['Una función que usa otros hooks y arranca con use', 'Un componente con mayúscula', 'Un archivo CSS', 'Un SQL']),
      t('Completá el prefijo obligatorio:', ['use'], 'function ___Mate() {}'),
      c('Llamar un hook dentro de un if...', ['Rompe las reglas: el orden tiene que ser fijo', 'Es más rápido', 'Es recomendado', 'Solo en StrictMode']),
      c('Un hook useTodoAppCompletaConTodoAdentro...', ['Hace demasiado: partilo', 'Es el patrón oficial', 'Reemplaza a React', 'Cifra']),
    ]),
  ],
  typescript: [
    U('Uniones y narrowing', 'Intermedio', 'string | number. TypeScript se estrecha con typeof, in, discriminantes. if (x.kind === "ok") ya sabés el resto.', ['A | B', 'typeof / in', 'discriminated unions', 'nunca as unknown a lo loco'], 'type Res = { ok: true, data: string } | { ok: false, error: string }', [
      c('Después de if (typeof x === "string") x es...', ['string, no la unión', 'any', 'never', 'void']),
      t('Completá el operador de unión:', ['|'], 'type Id = string ___ number'),
      c('Una unión discriminada usa...', ['Un campo común (kind, type, ok) que parte los casos', 'Solo any', 'Solo enums numéricos', 'CSS']),
      c('as any para callar al compilador...', ['Esconde el problema', 'Es la solución profesional', 'Mejora el runtime', 'Cifra']),
    ]),
    U('Genéricos que se entienden', 'Avanzado', 'function primero<T>(xs: T[]): T. El T lo infiere el llamado. No pongas 4 letras misteriosas: T ya está bien, o Nombralo Item.', ['<T>', 'se infiere', 'constraints extends', 'un genérico = reutilizar forma'], 'function primero<T>(xs: T[]): T { return xs[0] }', [
      c('En primero([1, 2]) T queda...', ['number', 'string', 'any', 'never']),
      t('Completá el parámetro de tipo:', ['T'], 'function id<___>(x: ___): ___ { return x }'),
      c('T extends { id: string } significa...', ['T tiene que tener al menos id string', 'T es solo string', 'T es any', 'T es un CSS']),
      m('Uní', [['T', 'Parámetro de tipo'], ['extends', 'Restricción'], ['inferencia', 'Lo adivina'], ['any', 'Rendirse']]),
    ]),
    U('Utility types', 'Intermedio', 'Partial<T>, Pick<T, "a">, Omit<T, "b">, Record<K, V>. No reescribas a mano la misma forma tres veces.', ['Partial / Pick / Omit', 'Record', 'Readonly', 'componelos'], 'type Patch = Partial<Usuario>', [
      c('Partial<Usuario> hace...', ['Todas las props opcionales', 'Todas required', 'Borra el tipo', 'Lo convierte en any']),
      t('Completá para sacar una clave:', ['Omit'], 'type SinMail = ___<User, "mail">'),
      c('Pick<User, "id" | "name"> deja...', ['Solo esas dos props', 'Todas menos esas', 'Un array', 'Un CSS']),
      c('Record<string, number> es...', ['Un objeto con claves string y valores number', 'Un array', 'Una función', 'Un enum']),
    ]),
    U('unknown > any', 'Avanzado', 'unknown obliga a estrechar antes de usar. any apaga el chequeo. En bordes (JSON.parse) unknown y después un type guard.', ['unknown hay que estrechar', 'any calla', 'type guard', 'JSON.parse es unknown'], 'function esStr(x: unknown): x is string { return typeof x === "string" }', [
      c('¿Por qué unknown y no any para JSON.parse?', ['Te obliga a validar la forma', 'Es más rápido en runtime', 'Es más corto de escribir', 'Reemplaza a fetch']),
      t('Completá el predicado:', ['is'], 'function esN(x: unknown): x ___ number'),
      c('any se contagia porque...', ['Se lleva el chequeo a todos los que lo tocan', 'Cifra', 'Mejora el SEO', 'Es un genérico']),
      o('Ordená', ['recibir unknown', 'type guard', 'usar el valor', 'confiar en el tipo']),
    ]),
  ],
  sql: [
    U('JOINs sin marearte', 'Intermedio', 'INNER = solo coinciden. LEFT = todos los de la izquierda, aunque la derecha sea NULL. ON dice cómo se encuentran. No hagas cartesianas de casualidad.', ['INNER / LEFT / RIGHT', 'ON', 'NULL es “no hubo match”', 'no cruzar sin ON'], 'SELECT u.nombre, p.titulo\nFROM usuarios u LEFT JOIN posts p ON p.user_id = u.id', [
      c('LEFT JOIN conserva...', ['Todas las filas de la izquierda', 'Solo las que matchean', 'Solo la derecha', 'Ninguna']),
      t('Completá la cláusula de unión:', ['ON'], 'LEFT JOIN posts p ___ p.user_id = u.id'),
      c('Un JOIN sin ON (o con ON 1=1)...', ['Multiplica filas: producto cartesiano', 'Es más rápido siempre', 'Borra la tabla', 'Cifra']),
      m('Uní', [['INNER', 'Solo match'], ['LEFT', 'Todos los de la izq'], ['ON', 'Condición'], ['NULL', 'Sin pareja']]),
    ]),
    U('GROUP BY y HAVING', 'Intermedio', 'GROUP BY junta. COUNT/SUM/AVG resumen. WHERE filtra filas ANTES. HAVING filtra grupos DESPUÉS. No mezcles.', ['GROUP BY', 'agregados', 'WHERE vs HAVING', 'toda columna no agregada va al GROUP'], 'SELECT pais, COUNT(*) FROM fans GROUP BY pais HAVING COUNT(*) > 10', [
      c('HAVING filtra...', ['Grupos, después de agregar', 'Filas crudas, como WHERE', 'Solo fechas', 'Solo NULLs']),
      t('Completá el agrupado:', ['GROUP BY', 'GROUP BY pais'], 'SELECT pais, COUNT(*) FROM t ___ pais'),
      c('WHERE COUNT(*) > 10...', ['No: eso es HAVING', 'Es lo mismo', 'Es más rápido', 'Borra el índice']),
      c('Si seleccionás pais y COUNT(*), tenés que...', ['GROUP BY pais', 'ORDER BY nomas', 'DELETE', 'Usar UNION']),
    ]),
    U('Índices: el atajo', 'Avanzado', 'Un índice es un atajo para WHERE y JOIN. Acelera lecturas, encarece escrituras. No indexes todo: el disco y el INSERT sufren.', ['CREATE INDEX', 'ayuda al WHERE', 'cuesta en INSERT/UPDATE', 'mirá EXPLAIN'], 'CREATE INDEX idx_mail ON usuarios(mail);', [
      c('Un índice sirve sobre todo para...', ['Encontrar filas sin barrer la tabla', 'Hacer más lindo el SQL', 'Cifrar', 'Reemplazar a JOIN']),
      t('Completá la creación:', ['INDEX'], 'CREATE ___ idx_mail ON usuarios(mail)'),
      c('Indexar todas las columnas...', ['Ralentiza escrituras y ocupa disco', 'Siempre es mejor', 'Borra NULLs', 'Es obligatorio']),
      c('EXPLAIN (o equivalente) sirve para...', ['Ver si usa el índice o barre todo', 'Minificar', 'Hacer backup', 'Cambiar el collation']),
    ]),
    U('Transacciones', 'Avanzado', 'BEGIN ... COMMIT. Si algo falla, ROLLBACK. O todo se guarda o nada. Dos personas no pueden vender el último asiento las dos: isolation.', ['atómica', 'COMMIT / ROLLBACK', 'isolation', 'no dejes un BEGIN abierto'], 'BEGIN;\nUPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;\nCOMMIT;', [
      c('Una transacción es atómica significa...', ['O pasan todos los cambios o ninguno', 'Es más rápida siempre', 'No usa disco', 'Es un SELECT']),
      t('Completá para deshacer:', ['ROLLBACK'], 'BEGIN; ... ___ ;'),
      c('COMMIT hace...', ['Confirma los cambios', 'Borra la tabla', 'Crea el índice', 'Cierra PostgreSQL']),
      o('Ordená', ['BEGIN', 'hacer los UPDATEs', 'si ok COMMIT', 'si falla ROLLBACK']),
    ]),
  ],
  git: [
    U('merge vs rebase', 'Avanzado', 'merge crea un commit de unión y conserva la historia tal cual. rebase reescribe encima de otra base: historial lineal, pero no lo hagas en ramas públicas que otros ya usaron.', ['merge = unión', 'rebase = reescribir', 'no rebasees main compartido', 'conflictos iguales de fondo'], 'git switch feat\ngit rebase main', [
      c('Rebasear una rama que ya empujaron y usan otros...', ['Reescribe historia y les rompe el pull', 'Es más seguro siempre', 'Borra GitHub', 'Cifra']),
      t('Completá el comando lineal:', ['rebase'], 'git ___ main'),
      c('merge conserva...', ['Los commits tal cual, más uno de unión', 'Solo el último', 'Nada', 'Solo tags']),
      c('Si hay conflicto, en ambos casos...', ['Lo resolvés y seguís (commit o rebase --continue)', 'Se borra el repo', 'Hay que usar SVN', 'Se ignora']),
    ]),
    U('stash, el bolsillo', 'Intermedio', 'git stash guarda cambios sucios para cambiar de rama limpio. stash pop los devuelve. No es un backup eterno: es un bolsillo.', ['stash', 'pop / apply', 'incluye unstaged', 'no lo uses como rama'], 'git stash push -m "wip login"\ngit switch main', [
      c('stash sirve para...', ['Guardar el trabajo sucio un rato y cambiar de rama', 'Borrar el repo', 'Reemplazar a commit', 'Subir a producción']),
      t('Completá para recuperar:', ['pop'], 'git stash ___'),
      c('stash pop vs apply...', ['pop saca del bolsillo, apply deja copia', 'Son idénticos siempre', 'pop borra el remoto', 'apply hace merge de main']),
      c('Diez stash viejos sin nombre...', ['Son un basurero: nombrelos o commiteá', 'Es una buena práctica', 'Reemplazan a tags', 'Cifran']),
    ]),
    U('cherry-pick', 'Intermedio', 'Trae UN commit de otra rama. Útil para un hotfix puntual. Si el commit depende de otros, duele. No es un merge.', ['un commit', 'nuevo hash', 'puede conflictuar', 'no es magia de features enteros'], 'git cherry-pick abc123', [
      c('cherry-pick copia...', ['Los cambios de ese commit a tu HEAD', 'Toda la rama', 'El remoto', 'El stash']),
      t('Completá el comando:', ['cherry-pick'], 'git ___ abc123'),
      c('El commit nuevo tiene...', ['Otro hash (es una copia, no el mismo objeto)', 'El mismo hash siempre', 'Hash vacío', 'El de main']),
      o('Ordená', ['estar en la rama destino', 'cherry-pick el hash', 'resolver si hay conflicto', 'seguir laburando']),
    ]),
    U('.gitignore que sirve', 'Básico', 'node_modules, .env, dist, .venv no van al repo. El patrón es por línea. Un .env commiteado es un incidente, no un detalle.', ['.env fuera', 'node_modules fuera', 'no ignores el código', 'secrets ≠ git'], 'node_modules/\n.env\ndist/\n.venv/', [
      c('¿Por qué no commitear node_modules?', ['Se regenera con el lockfile y pesa un muerto', 'Git lo prohíbe por ley', 'Rompe JavaScript', 'Es más lento el runtime']),
      t('Completá el archivo de exclusiones:', ['.gitignore', 'gitignore']),
      c('Un .env con claves en el repo...', ['Es un secreto publicado: rotá y sacalo de la historia', 'Está bien si es de prueba', 'Git lo cifra solo', 'Es más seguro']),
      c('Ignorar src/ entero...', ['Te deja sin el código: no', 'Es recomendado', 'Acelera clone', 'Cifra']),
    ]),
  ],
  ai: [
    U('Overfitting, el alumno que de memoria', 'Intermedio', 'Si el modelo se clava el set de entrenamiento y en datos nuevos se cae, overfitteó. Regularización, más datos, modelo más simple. El test set no se toca para “afinar”.', ['train ≠ test', 'overfit = memoria', 'regularizar', 'el test es sagrado'], 'buen modelo: error train ≈ error test (los dos bajos)', [
      c('Overfitting es, en criollo...', ['Se aprendió de memoria el examen de práctica y en el real se traba', 'Anda mejor en datos nuevos', 'Es un tipo de SQL', 'Es más datos siempre']),
      t('Completá el conjunto que no se usa para entrenar:', ['test', 'test set']),
      c('Si subís epochs hasta error train = 0 y test explota...', ['Overfitting', 'Perfecto', 'Underfitting', 'Un bug de CSS']),
      m('Uní', [['train', 'Aprender'], ['val', 'Ajustar'], ['test', 'Juzgar al final'], ['overfit', 'Memoria']]),
    ]),
    U('Train, val, test', 'Básico', 'Separamos datos: entrenar, ajustar hiperparámetros (val), y un examen final (test). Si mirás el test 40 veces, ya no es examen.', ['tres tajos', 'val para tunear', 'test una vez', 'shuffle con semilla'], '60% train / 20% val / 20% test (orientativo)', [
      c('El set de validación sirve para...', ['Elegir hiperparámetros sin tocar el test', 'Entrenar los pesos', 'Producción', 'Borrar outliers nomas']),
      t('Completá el examen final:', ['test']),
      c('Mirar el test cada epoch para “ver si ya está”...', ['Lo contamina: deja de ser independiente', 'Es la mejor práctica', 'Acelera', 'Cifra']),
      o('Ordená', ['separar train/val/test', 'entrenar con train', 'tunear con val', 'medir una vez con test']),
    ]),
    U('Prompts que no son magia', 'Intermedio', 'Un buen prompt: rol, contexto, formato de salida, ejemplos. No le pidas 40 cosas. Si alucina, pedí fuentes o restringí. La temperatura alta = más creativo, menos fiable.', ['rol + tarea', 'formato', 'ejemplos', 'temperatura'], 'Sos un tutor. Explicá X en 5 viñetas. Si no sabés, decí que no sabés.', [
      c('Pedir formato (JSON, viñetas) sirve para...', ['Que la respuesta se pueda usar después', 'Hacer más creativo el modelo', 'Cifrar', 'Bajar la temperatura a 2']),
      t('Completá el parámetro de aleatoriedad:', ['temperatura', 'temperature']),
      c('Si el modelo inventa una cita...', ['Alucinó: verificá, no copies', 'Siempre es verdad', 'Es un JOIN', 'Es overfitting de SQL']),
      c('Un prompt de 4 páginas con 30 tareas...', ['Se diluye: partí en pasos', 'Es más preciso siempre', 'Reemplaza al dataset', 'Cifra']),
    ]),
    U('Ética de patio', 'Básico', 'Un modelo copia sesgos de los datos. No es oráculo. Privacidad: no le pegues DNI ajenos. Crédito: si te ayudó a codear, revisá igual. No automatices un despido con un score opaco.', ['sesgo', 'privacidad', 'revisión humana', 'no es magia'], 'dato de entrenamiento sesgado → salida sesgada', [
      c('Si el dataset tiene sesgo, el modelo...', ['Lo reproduce (o lo amplifica)', 'Lo corrige solo', 'Se niega a entrenar', 'Cifra']),
      t('Completá lo que no hay que pegarle a un chat público:', ['DNI', 'contraseñas', 'claves', 'secretos']),
      c('Usar un score opaco para decidir un crédito...', ['Puede discriminar sin que se note: hay que auditar', 'Es más justo siempre', 'Es obligatorio', 'Reemplaza a la ley']),
      c('La IA te escribió un código...', ['Lo revisás: sigue siendo tuyo el bug en prod', 'Es infalible', 'No hace falta test', 'Cifra el repo']),
    ]),
  ],
  cyber: [
    U('Hash de contraseñas', 'Intermedio', 'Nunca guardes la clave en texto. Hash + salt (bcrypt, argon2). Un hash no se “descifra”: se compara. SHA-256 solito para passwords no alcanza.', ['hash + salt', 'bcrypt / argon2', 'no SHA solo', 'nunca en logs'], 'password_hash("secreto", PASSWORD_ARGON2ID)', [
      c('¿Por qué salt?', ['Dos iguales no quedan con el mismo hash', 'Hace más corta la clave', 'Reemplaza al HTTPS', 'Minifica']),
      t('Completá lo que se guarda:', ['hash', 'el hash'], 'se guarda el ___ de la clave, no la clave'),
      c('SHA-256 sin salt ni iteraciones para passwords...', ['Es demasiado rápido de atacar', 'Es el estándar de 2026', 'Cifra el disco', 'Reemplaza a bcrypt']),
      c('Loguear la password en claro...', ['Es un incidente', 'Ayuda al debug y está bien', 'Es más seguro', 'Es un hash']),
    ]),
    U('El segundo factor', 'Básico', '2FA: algo que sabés + algo que tenés (app, llave). SMS es mejor que nada, peor que una app. El backup code se guarda offline. No lo dejes en el mismo mail.', ['algo que sabés + tenés', 'app > SMS', 'códigos de backup', 'no en el mismo inbox'], 'clave + TOTP de la app', [
      c('2FA significa, en criollo...', ['Dos barreras distintas para entrar', 'Dos passwords iguales', 'Dos mails', 'Dos hashes SHA']),
      t('Completá un método de app (letras):', ['TOTP', 'totp', 'app']),
      c('SMS como segundo factor...', ['Es vulnerable a SIM swap: mejor una app o llave', 'Es lo más seguro del mundo', 'Reemplaza a la clave', 'Cifra el disco']),
      o('Ordená', ['activar 2FA', 'guardar códigos de backup offline', 'entrar con clave + app', 'no compartir el teléfono desbloqueado']),
    ]),
    U('Phishing de patio', 'Básico', 'Un mail “tu banco” con link raro. Mirá el dominio, no el logo. Nadie te pide la clave por WhatsApp. Si duda, entrá vos escribiendo la URL.', ['dominio > logo', 'no claves por chat', 'urgencia falsa', 'escribí vos la URL'], 'soporte@banc0.com ≠ banco.com', [
      c('El truco clásico del phishing es...', ['Urgencia + logo lindo + link que no es el de verdad', 'Un virus en el mate', 'Un JOIN de SQL', 'Un certificado válido siempre']),
      t('Completá qué mirar del link:', ['dominio', 'la url', 'url']),
      c('Si el “banco” te pide la clave por WhatsApp...', ['Es trucho: el banco no hace eso', 'Hay que pasarla rápido', 'Es 2FA', 'Es más seguro']),
      c('La mejor defensa cotidiana...', ['Entrar vos tipeando la dirección que ya conocés', 'Clickear todos los mails', 'Desactivar 2FA', 'Mandar el DNI al chat']),
    ]),
    U('HTTPS y el candadito', 'Intermedio', 'TLS cifra el camino. El candado no dice que el sitio sea honesto: dice que el camino está cifrado con ese dominio. HTTP en un form de login es un no.', ['TLS', 'certificado del dominio', 'candado ≠ confianza total', 'HSTS'], 'https://aki-academy.vercel.app', [
      c('HTTPS cifra...', ['El tráfico entre tu browser y ese servidor', 'El disco del servidor siempre', 'Las fotos de tu carrete', 'El SQL']),
      t('Completá el protocolo cifrado:', ['https', 'HTTPS']),
      c('Un candado en un sitio trucho...', ['Puede existir: el dominio es el de ellos, cifrado igual', 'Es imposible', 'Google lo borra solo', 'Cifra tu casa']),
      c('Un login por HTTP...', ['Viaja en claro: no', 'Es más rápido y listo', 'Es 2FA', 'Es un hash']),
    ]),
  ],
  robotica: [
    U('PWM, el pulso', 'Intermedio', 'PWM enciende y apaga muy rápido: el motor “ve” un promedio. Duty cycle 50% ≈ mitad de potencia. El servo entiende anchos de pulso, no voltaje analógico lineal.', ['duty cycle', 'frecuencia', 'servo ≠ PWM de motor nomas', 'no pases el límite del pin'], 'analogWrite(pin, 128); // ~50% en 8 bits', [
      c('Un duty cycle de 50% significa...', ['Mitad del tiempo encendido', '50 volts', 'Mitad de la frecuencia de radio', 'Un error']),
      t('Completá la sigla de modulación por ancho de pulso:', ['PWM', 'pwm']),
      c('Un servo de hobby suele obedecer...', ['El ancho del pulso (1–2 ms), no un “voltaje de 50%” a ojo', 'Solo I2C', 'Solo WiFi', 'Solo Python']),
      m('Uní', [['duty', 'Porcentaje on'], ['frecuencia', 'Qué tan rápido pulsa'], ['servo', 'Ángulo'], ['motor DC', 'Velocidad aprox']]),
    ]),
    U('Sensores analógicos', 'Intermedio', 'analogRead te da 0–1023 (10 bits típicos). Hay ruido: promediá. El divisor resistivo baja voltaje. No conectes 12V al pin de 5V.', ['ADC', 'promediar', 'divisor', 'límites de voltaje'], 'int v = analogRead(A0);', [
      c('analogRead en un Arduino UNO clásico va...', ['De 0 a 1023 aprox', 'De 0 a 1', 'De 0 a 255 siempre', 'Es un float']),
      t('Completá la lectura:', ['analogRead'], 'int v = ___(A0);'),
      c('Si el sensor tiene ruido...', ['Promediá varias lecturas', 'Subí a 12V', 'Sacá el GND', 'Usá delay(10000) nomas']),
      c('Meter 12V en un pin de 5V...', ['Quema el micro', 'Lo hace más preciso', 'Es PWM', 'Cifra']),
    ]),
    U('PID en criollo', 'Avanzado', 'P reacciona al error ahora, I acumula el error chico que no muere, D frena si vas muy rápido al setpoint. Tunear es un arte: empezá por P.', ['P presente', 'I pasado', 'D futuro (pendiente)', 'un término a la vez'], 'salida = Kp*e + Ki*sum + Kd*(e - e_ant)', [
      c('La P de PID actúa sobre...', ['El error de ahora', 'Solo el pasado', 'Solo la derivada', 'El voltaje de la pared']),
      t('Completá el término que acumula error chico:', ['I', 'integral']),
      c('Si el sistema oscila como loco, suele faltar...', ['Bajar P o sumar D con cuidado', 'Subir P a 1000', 'Sacar el sensor', '12V extra']),
      o('Ordená', ['definir setpoint', 'medir', 'calcular error', 'aplicar P (y después I/D)']),
    ]),
    U('Seguridad del taller', 'Básico', 'Desconectá antes de soldar cables. No dejes el robot con ruedas a full sin tope. Las baterías LiPo no se pinchan ni se dejan infladas. Gafas si hay viruta.', ['cortá alimentación', 'topes', 'LiPo con respeto', 'ojos'], 'POWER OFF → cablear → revisar polaridad → POWER ON', [
      c('Antes de cambiar un cable en un robot con batería...', ['Desconectá la alimentación', 'Subí PWM a 255', 'Cerrá los ojos', 'Inviertas VCC y GND a propósito']),
      t('Completá la familia de baterías que no se pinchan:', ['LiPo', 'lipo', 'litio']),
      c('Un robot con ruedas sin tope de corriente...', ['Puede irse contra la pared o un pie', 'Es más seguro', 'Es un PID', 'Cifra']),
      c('Gafas en el taller cuando hay viruta o soldadura...', ['No son de adorno', 'Están prohibidas', 'Reemplazan al GND', 'Son PWM']),
    ]),
  ],
  matematica: [
    U('Funciones, la máquina', 'Básico', 'Una función f(x) toma un número y devuelve otro. Dominio = lo que podés meter. Imagen = lo que sale. f(x) = 2x duplica.', ['entrada → salida', 'dominio', 'no todo vale (dividir por 0)', 'gráfica = dibujo de pares'], 'f(x) = 2x + 1  →  f(3) = 7', [
      c('f(x) = 2x + 1, f(3) vale...', ['7', '6', '5', '3']),
      t('Completá el nombre del conjunto de entradas:', ['dominio']),
      c('f(x) = 1/x no acepta x = 0 porque...', ['No se puede dividir por cero', 'Cero no es número', 'Es un número complejo', 'Es un ángulo']),
      m('Uní', [['dominio', 'Entradas válidas'], ['imagen', 'Salidas'], ['f(x)', 'La regla'], ['gráfica', 'Pares dibujados']]),
    ]),
    U('Porcentajes de asado', 'Básico', 'El 21% de IVA: multiplicás por 1.21 para sumarlo. “Bajó 50% y subió 50%” NO vuelve al precio: 100 → 50 → 75. El porcentaje es de una base.', ['% de una base', '×1.21 suma 21%', 'bajar y subir no se cancelan', 'descuento sobre el precio de lista'], 'precio_con_iva = precio * 1.21', [
      c('Sumar 21% de IVA es...', ['Multiplicar por 1.21', 'Sumar 21 pesos siempre', 'Dividir por 21', 'Restar 0.21']),
      t('Completá el factor del 21%:', ['1.21', '1,21']),
      c('Un jean de 100 que baja 50% y sube 50% queda en...', ['75, no 100', '100', '50', '150']),
      c('“El 10% de descuento” es 10% de...', ['El precio de lista, no un número mágico suelto', '1000 siempre', 'El IVA nomas', 'El sueldo mínimo']),
    ]),
    U('Probabilidad de patio', 'Intermedio', 'P = casos favorables / posibles, si todos son igual de posibles. Independiente: el dado no tiene memoria. 0 = imposible, 1 = seguro.', ['favorable / posible', 'sin memoria el dado', '0 a 1', 'no confundir con “me tiene que tocar”'], 'P(as) = 1/12 en un dado justo (si hay 12 caras... en uno de 6, 1/6)', [
      c('En un dado justo de 6, P(sacar 5) es...', ['1/6', '5/6', '1/2', '0']),
      t('Completá el rango de una probabilidad:', ['0 y 1', '0 a 1', 'entre 0 y 1']),
      c('Si salió 6 cinco veces, la sexta...', ['Sigue siendo 1/6 si el dado es justo', 'Tiene que ser otro número', 'Es 1', 'Es 0']),
      o('Ordená', ['definir el experimento', 'contar casos posibles', 'contar favorables', 'dividir']),
    ]),
    U('Leer un gráfico', 'Básico', 'Ejes, unidades, escala. Un gráfico cortado en el eje Y puede dramatizar una pavada. Barras vs líneas: categorías vs tiempo. Leé la fuente.', ['ejes', 'escala', 'no te dejes mentir por el zoom', 'fuente'], 'eje X tiempo, eje Y cantidad — mirá si arranca en 0', [
      c('Si el eje Y no arranca en 0, una suba chica...', ['Se ve enorme: mirá los números', 'Es más honesta', 'Es un porcentaje', 'Cifra']),
      t('Completá lo que tiene que decir cada eje:', ['unidades', 'qué mide', 'unidad']),
      c('Un gráfico de barras sirve mejor para...', ['Comparar categorías', 'Una función continua nomas', 'Un mapa', 'Un PID']),
      c('Sin fuente ni fecha, un gráfico lindo...', ['Puede ser humo: preguntá de dónde sale', 'Es ciencia cerrada', 'Reemplaza a la tabla', 'Es un índice SQL']),
    ]),
  ],
  fisica: [
    U('Energía que se transforma', 'Básico', 'No se crea ni se destruye: se transforma. Cinética (movimiento), potencial (altura, resorte), térmica (desorden). El mate se enfría: esa energía se fue al aire.', ['conservación', 'cinética / potencial', 'calor es energía en tránsito', 'rendimiento < 100%'], 'mgh + (1/2)mv² ≈ constante si no hay fricción', [
      c('Al caer, la potencial gravitatoria se vuelve sobre todo...', ['Cinética (y un poco de calor por aire)', 'Más potencial', 'Luz siempre', 'Sonido nomas']),
      t('Completá: la energía no se crea ni se...', ['destruye', 'se destruye']),
      c('Un motor “200% eficiente”...', ['Viola la conservación: humo', 'Es el futuro', 'Es un PID', 'Es PWM']),
      m('Uní', [['cinética', 'Movimiento'], ['potencial', 'Posición / resorte'], ['térmica', 'Agitación'], ['trabajo', 'Energía transferida']]),
    ]),
    U('Ondas en el patio', 'Intermedio', 'Una onda transporta energía, no (necesariamente) materia. v = f · λ. Sonido = longitudinal en el aire. Luz = electromagnética, no necesita aire.', ['v = f λ', 'longitudinal / transversal', 'sonido ≠ luz', 'frecuencia = tono'], 'v = f * lambda', [
      c('El sonido en el espacio (vacío)...', ['No se propaga: no hay medio', 'Viaja más rápido', 'Es luz', 'Es PWM']),
      t('Completá la relación:', ['f'], 'v = ___ · λ'),
      c('Una λ más corta con misma v significa...', ['Mayor frecuencia', 'Menor frecuencia', 'Más volumen', 'Más masa']),
      c('La luz visible es...', ['Una onda electromagnética (y fotones)', 'Un sonido agudo', 'Un viento', 'Un JOIN']),
    ]),
    U('Circuitos de una pila', 'Intermedio', 'V = I R. En serie la corriente es la misma, en paralelo el voltaje. Un cortocircuito es casi 0 Ω: la corriente se va al diablo. Polaridad en el LED.', ['Ohm', 'serie / paralelo', 'corto = peligro', 'LED polarizado'], 'I = V / R', [
      c('Si subís la resistencia y V es constante, I...', ['Baja', 'Sube', 'Se vuelve luz', 'Se vuelve sonido']),
      t('Completá la ley de Ohm:', ['V = I R', 'V=IR', 'V = IR']),
      c('Dos pilas en serie...', ['Suman voltaje', 'Suman resistencia nomas', 'Se cancelan', 'Hacen PWM']),
      c('Un cable directo de positivo a negativo de la batería...', ['Cortocircuito: peligro de calor/fuego', 'Es un LED', 'Es un capacitor', 'Cifra']),
    ]),
    U('Relatividad para el asado', 'Avanzado', 'c es tope de velocidad. A velocidades enormes el tiempo se dilata (GPS lo corrige). No vas a notar nada en el colectivo. E = mc² dice que masa y energía se hablan.', ['c tope', 'GPS usa relatividad', 'no es ciencia ficción nomas', 'E = mc²'], 'los relojes en satélite no marcan igual que en Tierra', [
      c('El GPS corrige relatividad porque...', ['Los relojes en órbita no marcan igual que acá', 'Los satélites van a c', 'La Tierra es plana', 'Es un JOIN']),
      t('Completá la velocidad tope en el vacío:', ['c', 'la luz', 'velocidad de la luz']),
      c('En el bondi a 40 km/h la dilatación temporal...', ['Es ridículamente chica', 'Te hace viajar al futuro visible', 'Apaga el celular', 'Cifra']),
      c('E = mc² resume que...', ['Un poquito de masa es muchísima energía', 'La luz es sonido', 'c es 40 km/h', 'La masa se borra']),
    ]),
  ],
  quimica: [
    U('Enlaces: cómo se agarran', 'Intermedio', 'Iónico: se prestan electrones (NaCl). Covalente: se comparten (H2O). Metálico: mar de electrones. El tipo de enlace explica si funde fácil o conduce.', ['iónico / covalente / metálico', 'electrones', 'propiedades', 'no es “amor entre átomos” nomas'], 'Na+ Cl-  vs  H–O–H', [
      c('La sal de mesa es sobre todo enlace...', ['Iónico', 'Metálico', 'Covalente puro de diamante', 'Un PWM']),
      t('Completá el enlace del agua:', ['covalente']),
      c('Los metales conducen porque...', ['Tienen electrones que se pueden mover', 'Son iónicos puros', 'Son gases', 'Tienen PWM']),
      m('Uní', [['iónico', 'Préstamo'], ['covalente', 'Compartir'], ['metálico', 'Mar de e-'], ['molécula', 'Átomos covalentes']]),
    ]),
    U('pH del mate y el limón', 'Básico', 'pH 7 neutro, menos = ácido, más = básico. El limón es ácido, la lavandina es básica (y no se mezclan). El pH es logarítmico: 2 es 10 veces más ácido que 3.', ['7 neutro', 'ácido < 7', 'logarítmico', 'no mezcles lavandina y ácido'], 'pH 2 es mucho más ácido que pH 5', [
      c('Un pH 2 comparado con 5 es...', ['Mucho más ácido (escala log)', 'Un poquito más', 'Más básico', 'Neutro']),
      t('Completá el pH del agua pura (aprox):', ['7']),
      c('Lavandina + ácido (ej. vinagre, inodoro)...', ['Puede liberar gases feos: no mezclar', 'Hace un jabón rico', 'Neutraliza el mate', 'Es pH 7 seguro']),
      c('El jugo de limón es...', ['Ácido', 'Básico fuerte', 'pH 14', 'Un metal']),
    ]),
    U('Redox, el trueque de electrones', 'Intermedio', 'Oxidación pierde electrones, reducción los gana. Una no va sin la otra. La pila es redox controlado. El hierro se oxida: se come electrones el oxígeno.', ['oxi pierde e-', 'red gana e-', 'siempre juntos', 'pila = redox útil'], 'Zn → Zn2+ + 2e-  (se oxida)', [
      c('Si una especie se oxida, otra tiene que...', ['Reducirse (ganar esos electrones)', 'Evaporarse', 'Volverse pH 7', 'Hacer PWM']),
      t('Completá: oxidación es perder...', ['electrones', 'e-']),
      c('El óxido del clavo es, en criollo...', ['El hierro perdiendo electrones (con ayuda del O2 y agua)', 'Un iónico de NaCl', 'Un gas noble', 'Un JOIN']),
      o('Ordená', ['hay un reductor', 'suelta electrones', 'un oxidante los toma', 'ambos cambian de número de ox']),
    ]),
    U('Orgánica de almacén', 'Intermedio', 'El carbono hace 4 enlaces y se encadena. Hidrocarburos: C e H. El alcohol tiene –OH. El aceite y el agua no se mezclan: polar vs no polar.', ['C tetravalente', 'cadenas', 'grupos funcionales', 'polar / no polar'], 'metano CH4 · etanol CH3CH2OH', [
      c('El carbono forma hasta...', ['4 enlaces', '1', '8', '12']),
      t('Completá el grupo del alcohol:', ['OH', '-OH']),
      c('Aceite y agua no se mezclan porque...', ['Uno es muy polar y el otro no', 'Tienen el mismo pH', 'El aceite es un metal', 'Cifran']),
      c('CH4 es...', ['Metano, el más simple', 'Etanol', 'Sal', 'Un cristal iónico de NaCl']),
    ]),
  ],
  biologia: [
    U('ADN, la receta', 'Intermedio', 'ADN: A-T, C-G. El gen es un tramo que se transcribe a ARN y a veces a proteína. No es destino único: ambiente también cuenta. Mutar no es siempre “malo”.', ['doble hélice', 'codón → aminoácido', 'gen ≠ persona entera', 'mutación = cambio'], 'ADN → ARN → proteína (dogma central, con excepciones)', [
      c('En el ADN, la A se empareja con...', ['T', 'C', 'G', 'U siempre']),
      t('Completá la molécula de la receta:', ['ADN', 'DNA', 'adn']),
      c('Un gen es, en criollo...', ['Un tramo de ADN con información para algo (a menudo una proteína)', 'Toda la persona', 'Un órgano', 'Un pH']),
      c('Todas las mutaciones...', ['No: algunas no hacen nada, pocas ayudan, algunas joden', 'Son cáncer', 'Son mejoras', 'Borran el cromosoma']),
    ]),
    U('Evolución sin dibujito de mono', 'Intermedio', 'Selección natural: los que se reproducen más dejan más copias. No es “el más fuerte del gym”. No tiene meta. El fósil y el ADN cuentan la misma historia a groso modo.', ['variación + herencia + diferencia reproductiva', 'sin meta', 'población, no individuo heroico', 'evidencia múltiple'], 'variación heredable + ambiente → cambio de frecuencias', [
      c('La selección natural favorece...', ['Rasgos que, en ese ambiente, dejan más descendencia', 'Al más alto siempre', 'Al más agresivo siempre', 'Al que va al gym']),
      t('Completá: evoluciona la...', ['poblacion', 'población', 'especie']),
      c('La evolución “quiere” hacernos mejores...', ['No: no tiene plan', 'Sí, hacia el humano', 'Sí, hacia el más grande', 'Solo en islas']),
      m('Uní', [['variación', 'No somos clones'], ['herencia', 'Se pasa'], ['selección', 'Dejan más crías'], ['tiempo', 'Se acumula']]),
    ]),
    U('Ecosistema de baldío', 'Básico', 'Productores (plantas), consumidores, descomponedores. Energía entra (sol) y se pierde en calor en cada eslabón. La materia recicla. Sacar un depredador puede descontrolar todo.', ['red, no cadena linda', 'sol entra', 'materia cicla', 'todo conectado'], 'sol → planta → bicho → depredador → hongos', [
      c('En cada eslabón de la cadena se pierde sobre todo...', ['Energía (calor)', 'Átomos de carbono que desaparecen', 'Agua del planeta', 'ADN']),
      t('Completá quién captura el sol:', ['plantas', 'productores', 'fotosintesis']),
      c('Los descomponedores sirven para...', ['Devolver nutrientes a la tierra', 'Hacer PWM', 'Subir el pH a 14', 'Cifrar']),
      c('Extinguir un depredador tope a veces...', ['Descontrola a las presas y todo el baldío', 'No hace nada', 'Mejora el pasto siempre', 'Cifra el río']),
    ]),
    U('Inmunidad de bolsillo', 'Intermedio', 'Barreras (piel, mucosas). Inespecífica (inflamación). Específica (anticuerpos, memoria). La vacuna entrena memoria sin que te enfermes fuerte. Antibiótico ≠ virus.', ['barreras', 'memoria', 'vacuna', 'antibiótico vs virus'], 'vacuna → memoria → respuesta rápida después', [
      c('Una vacuna lo que busca es...', ['Entrenar la memoria inmunal sin la enfermedad fuerte', 'Darte el virus entero siempre', 'Un antibiótico', 'Subir el pH']),
      t('Completá lo que NO mata un antibiótico típico:', ['virus', 'los virus']),
      c('La piel es...', ['Una barrera: el primer no', 'Un anticuerpo', 'Una vacuna', 'Un gen']),
      o('Ordená', ['barrera', 'respuesta inespecífica', 'respuesta específica', 'memoria']),
    ]),
  ],
  astronomia: [
    U('Exoplanetas', 'Intermedio', 'Planetas de otras estrellas. Tránsito: la estrella se atenúa un poquito. Velocidad radial: la estrella se tambalea. Habitable ≠ hay hamsters: es zona de agua líquida posible.', ['tránsito', 'radial', 'zona habitable ≠ vida segura', 'miles ya'], 'baja de luz periódica → candidato a tránsito', [
      c('El método del tránsito mira...', ['Bajitas periódicas de luz de la estrella', 'El color del mate', 'El pH', 'El JOIN']),
      t('Completá el nombre de planeta fuera del Sistema Solar:', ['exoplaneta', 'exoplanetas']),
      c('Zona habitable significa sobre todo...', ['Donde podría haber agua líquida, no que haya vida', 'Que hay ciudades', 'Que hay oxígeno seguro', 'Que es como la Tierra 1 a 1']),
      c('Ya se confirmaron...', ['Miles de exoplanetas', 'Dos nomas', 'Cero', 'Solo gaseosos gigantes y nada más jamás']),
    ]),
    U('La Vía Láctea', 'Básico', 'Somos un brazo de una galaxia espiral de ~100 mil años luz. El centro tiene un agujero negro supermasivo (Sagitario A*). Lo “lechoso” del cielo es nuestro disco de canto.', ['espiral', 'brazo', 'Sgr A*', 'no somos el centro'], 'Sol ≠ centro de la galaxia', [
      c('El Sol está...', ['En un brazo, no en el centro', 'En Sagitario A*', 'Fuera de la Vía Láctea', 'En Andrómeda']),
      t('Completá el agujero del centro:', ['Sagitario A*', 'Sgr A*', 'Sagitario A']),
      c('La franja lechosa del cielo es...', ['El disco de nuestra galaxia visto de canto', 'Un cloud', 'La atmósfera de Marte', 'Un satélite']),
      m('Uní', [['galaxia', 'Isla de estrellas'], ['brazo', 'Donde estamos'], ['centro', 'Sgr A*'], ['año luz', 'Distancia']]),
    ]),
    U('Telescopios', 'Intermedio', 'Juntar luz > “zoom”. Espejo grande = más fotones. Atmósfera distorsiona: por eso Hubble/JWST arriba. Radio telescopios ven otras longitudes de onda.', ['apertura', 'resolución', 'espacio vs suelo', 'no solo visible'], 'más diámetro → más luz y más detalle (óptica mediante)', [
      c('Lo más importante de un telescopio suele ser...', ['El diámetro (cuánta luz junta)', 'El color del tubo', 'El zoom del eyepiece nomas', 'El pH']),
      t('Completá un telescopio espacial famoso de infrarrojo:', ['JWST', 'James Webb', 'Webb']),
      c('Se ponen telescopios en órbita sobre todo para...', ['Evitar la atmósfera (y ver otros rangos)', 'Estar más cerca de las estrellas (en km sirve)', 'Pagar menos luz', 'Hacer PWM']),
      c('Un radiotelescopio “ve”...', ['Ondas de radio, no el color verde', 'Solo Marte', 'Solo la Luna', 'pH']),
    ]),
    U('El Big Bang en criollo', 'Avanzado', 'No es una bomba en un living vacío: es el universo (espacio incluido) expandiéndose desde un estado caliente y denso. El fondo cósmico de microondas es la foto bebé. No responde “qué había antes” de forma simple.', ['expansión del espacio', 'CMB', 'no es una granada en un cuarto', 'evidencia: redshift + CMB'], 'galaxias se alejan → universo en expansión', [
      c('El Big Bang describe sobre todo...', ['Un universo que se expande desde un pasado caliente y denso', 'Una explosión en el centro de la Vía Láctea', 'El origen del mate', 'Un agujero negro local']),
      t('Completá las siglas del fondo cósmico de microondas:', ['CMB', 'cmb']),
      c('El corrimiento al rojo de galaxias lejanas sugiere...', ['El espacio se estira', 'Todas se caen a la Tierra', 'La luz se cansa nomas y listo', 'Un JOIN']),
      c('“¿Qué había antes?”...', ['La física del BB no es un cuento fácil de “antes”: cuidado con el marketing', 'Había un living', 'Había Marte', 'Había SQL']),
    ]),
  ],
  economia: [
    U('Oferta y demanda', 'Básico', 'Si mucha gente quiere algo escaso, el precio tiende a subir. Si hay de más, baja. No es una ley moral: es un mecanismo. El techo de precio puede crear falta; el piso, excedente.', ['escasez', 'precio como señal', 'techos y pisos', 'no es “codicia nomas” siempre'], 'demanda ↑ + oferta fija → precio ↑', [
      c('Si de golpe todos quieren el mismo cargador y hay pocos...', ['El precio tiende a subir', 'Baja siempre', 'El IVA desaparece', 'El CFT es 0']),
      t('Completá la curva de los que quieren comprar:', ['demanda']),
      c('Un techo de precio muy por debajo del de mercado suele...', ['Generar faltante (colas, negro)', 'Crear abundancia mágica', 'Bajar el CFT a 0', 'Eliminar el IVA']),
      m('Uní', [['demanda', 'Querer comprar'], ['oferta', 'Querer vender'], ['escasez', 'No alcanza'], ['precio', 'Señal']]),
    ]),
    U('PBI, el termómetro tosco', 'Intermedio', 'PBI = lo producido en el país en un período. No mide felicidad ni distribución. Puede subir con una catástrofe de reconstrucción. Per cápita = dividido habitantes.', ['producción', 'no es bienestar', 'nominal vs real', 'per cápita'], 'PBI real ajusta inflación; el nominal no', [
      c('El PBI mide sobre todo...', ['Producción (bienes y servicios) de un período', 'La felicidad', 'El dólar blue', 'El pH']),
      t('Completá el que ajusta por inflación:', ['real', 'PBI real']),
      c('Si el PBI sube y la desigualdad también...', ['El promedio puede mentir: mirá distribución', 'Todos están mejor seguro', 'El CFT es 0', 'No hay inflación']),
      c('PBI per cápita es...', ['PBI dividido habitantes', 'El sueldo de cada uno', 'El blue', 'El IVA']),
    ]),
    U('Bancos y el multiplicador', 'Intermedio', 'El banco no tiene tu plata en una caja con tu nombre: presta una parte. Reserva fraccionaria. Por eso existen seguros de depósito y corridas. El banco central pone reglas.', ['reserva fraccionaria', 'préstamos', 'corrida', 'BCRA reglas'], 'depósito → reserva + préstamo → más depósitos en el sistema', [
      c('La reserva fraccionaria significa que el banco...', ['Guarda una parte y presta el resto', 'Tiene el 100% en efectivo en tu caja', 'No presta nunca', 'Solo vende dólares']),
      t('Completá el riesgo de todos pidiendo la plata juntos:', ['corrida', 'corrida bancaria']),
      c('Un seguro de depósitos sirve para...', ['Frenar el pánico de “saco todo ya”', 'Subir el blue', 'Bajar el IVA', 'Indexar el asado']),
      o('Ordená', ['depositás', 'el banco reserva una parte', 'presta otra', 'ese préstamo puede depositarse de nuevo']),
    ]),
    U('Impuestos sin grito', 'Básico', 'IVA al consumo, Ganancias al ingreso, bienes personales al patrimonio. Progresivo: paga más el que más tiene. Incidencia: a veces el impuesto lo termina pagando otro.', ['IVA / Ganancias / patrimonio', 'progresivo', 'incidencia', 'no es un palo nomas: financia Estado'], 'IVA 21% en muchos bienes · Ganancias según escala', [
      c('El IVA es un impuesto sobre todo a...', ['El consumo', 'La herencia nomas', 'El PBI nomas', 'El blue']),
      t('Completá el de los ingresos personales:', ['Ganancias', 'ganancias']),
      c('Un impuesto progresivo...', ['La alícuota sube con la capacidad', 'Es igual para todos como el IVA típico', 'Es el CFT', 'Es el IPC']),
      c('Los impuestos, en un Estado, financian...', ['Escuela, salud, justicia, infraestructura… (con más o menos eficiencia)', 'Solo el blue', 'Solo el asado', 'El PWM']),
    ]),
  ],
  historia: [
    U('1853, la Constitución', 'Intermedio', 'Después de Caseros, en Santa Fe se firma la Constitución de 1853 (con el modelo alberdiano, inmigración, federalismo). Buenos Aires al principio no entra: se suma después. Es el armazón jurídico que todavía habitamos, reformado.', ['1853', 'Alberdi', 'federal', 'Buenos Aires se suma después'], '1853 texto · 1860 Buenos Aires · reformas después', [
      c('La Constitución argentina clásica es de...', ['1853', '1810', '1816', '1983']),
      t('Completá el intelectual del “gobernar es poblar” asociado a ese texto:', ['Alberdi']),
      c('Buenos Aires al principio de 1853...', ['Quedó afuera y se incorporó después', 'Redactó todo sola', 'Era el Congreso de Tucumán', 'Declaró la independencia']),
      c('Federalismo en ese texto apunta a...', ['Provincias con autonomía + un gobierno nacional', 'Un rey', 'Solo la Aduana de Bs. As. para siempre', 'El voto femenino de 1947']),
    ]),
    U('Pueblos originarios', 'Básico', 'Antes del Estado nación había mapuches, qom, wichi, diaguitas, guaraníes… Conquista, frontera, Campaña del Desierto: violencia y despojo. Hoy hay lenguas y reclamos vigentes, no un capítulo cerrado.', ['diversidad previa', 'conquista / frontera', 'no desaparecieron', 'lenguas vivas'], 'territorio habitado ≠ “desierto vacío”', [
      c('La Campaña del Desierto, en criollo, fue sobre todo...', ['Expansión militar sobre territorios indígenas', 'Una reforma agraria suave', 'La Revolución de Mayo', 'El voto de 1947']),
      t('Completá un pueblo originario de la Patagonia (el más nombrado):', ['mapuche', 'mapuches']),
      c('Hablar de “desierto” para esas tierras...', ['Niega que ya había pueblos', 'Es un dato geográfico nomas y listo', 'Es 1810', 'Es el PBI']),
      m('Uní', [['mapuche', 'Sur / Patagonia'], ['qom', 'Chaco'], ['guaraní', 'Litoral / NEA'], ['quechua', 'Noroeste / Andes']]),
    ]),
    U('Cordobazo', 'Intermedio', '1969: obreros y estudiantes en Córdoba contra la dictadura de Onganía. No es un pogo: es un hito de protesta urbana. Marca que el “orden” autoritario también se resquebraja desde adentro del país.', ['1969', 'Córdoba', 'obreros + estudiantes', 'Onganía'], '1966 golpe Onganía → 1969 Cordobazo', [
      c('El Cordobazo es del año...', ['1969', '1810', '1983', '1945']),
      t('Completá la ciudad:', ['Cordoba', 'Córdoba']),
      c('Se junta sobre todo...', ['Movimiento obrero y estudiantil', 'Solo el Congreso de Tucumán', 'Solo el campo', 'Solo el blue']),
      c('Onganía era...', ['Un dictador (Revolución Argentina)', 'El presidente de 1983', 'El de Mayo de 1810', 'El de Malvinas 1982 nomas']),
    ]),
    U('Malvinas', 'Intermedio', '1982: la dictadura invade las islas, guerra con el Reino Unido, derrota, miles de conscriptos. Después ayuda a derrumbar al régimen. Soberanía es un reclamo argentino; la guerra fue también una huida hacia adelante de la junta.', ['1982', 'dictadura', 'conscriptos', 'derrota y fin del régimen cerca'], 'abril-junio 1982 · derrota · 1983 democracia', [
      c('La guerra de Malvinas es de...', ['1982', '1810', '1853', '1969']),
      t('Completá quién gobernaba la Argentina entonces:', ['dictadura', 'la junta', 'la dictadura militar']),
      c('Combatieron sobre todo...', ['Conscriptos jóvenes, mal preparados en muchos casos', 'Solo mercenarios', 'Solo la OTAN argentina', 'Solo el Congreso']),
      c('La derrota...', ['Aceleró el final de la dictadura', 'Consolidó a la junta 20 años', 'Declaró la independencia', 'Fue 1816']),
    ]),
  ],
}
