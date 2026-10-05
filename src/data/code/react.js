import { c, t, b, o, m, unit } from '../helpers'

export default {
  id: 'react',
  title: 'Apps con React',
  kind: 'code',
  icon: '⚛️',
  color: '#149ECA',
  desc: 'Creá apps web modernas como las de las grandes empresas y publicalas.',
  units: [
    unit('Componentes y JSX', 'Intermedio', {
      intro: 'React arma interfaces con componentes: funciones que devuelven JSX, una mezcla de JavaScript y HTML. Cada componente es una pieza reutilizable.',
      points: ['function Saludo() { return <h1>Hola</h1> }', 'Los componentes empiezan con mayúscula', 'En JSX se usa className en vez de class', '{ } mete JavaScript dentro del JSX'],
      code: 'function Tarjeta({ nombre }) {\n  return <div className="card">Hola {nombre}</div>;\n}\n\nexport default function App() {\n  return <Tarjeta nombre="Aki" />;\n}',
    }, [
      c('¿Qué devuelve un componente de React?', ['JSX', 'Un número', 'Un archivo CSS', 'Nada']),
      c('En JSX, ¿cómo se escribe el atributo class?', ['className', 'class', 'cssClass', 'klass']),
      c('¿Con qué metés JavaScript dentro del JSX?', ['Llaves { }', 'Corchetes [ ]', 'Paréntesis ( )', 'Comillas " "'], '<h1>Hola {nombre}</h1>'),
      c('¿Por qué Tarjeta empieza con mayúscula?', ['React la reconoce como componente', 'Es más lindo', 'Es obligatorio en JS', 'Por SEO']),
      c('¿Cómo se le pasan datos a un componente?', ['Con props', 'Con CSS', 'Con imports', 'Con alert']),
      b('Armá el uso del componente con la prop nombre', ['<Tarjeta', 'nombre="Lio"', '/>'], ['<tarjeta>', 'class=']),
    ]),
    unit('Estado y eventos', 'Intermedio', {
      intro: 'El estado es la memoria de un componente. Con useState guardás valores que, al cambiar, vuelven a dibujar la pantalla.',
      points: ['const [n, setN] = useState(0)', 'setN(n + 1) actualiza', 'onClick={() => ...} maneja clics', 'Nunca modifiques el estado directo'],
      code: 'import { useState } from "react";\n\nfunction Contador() {\n  const [mates, setMates] = useState(0);\n  return (\n    <button onClick={() => setMates(mates + 1)}>\n      Mates: {mates}\n    </button>\n  );\n}',
    }, [
      c('¿Qué hook guarda estado?', ['useState', 'useEffect', 'useMemo', 'useFetch']),
      t('Completá para manejar el clic:', ['onClick'], '<button ___={sumar}>+1</button>'),
      c('¿Qué pasa cuando cambia el estado?', ['El componente se vuelve a renderizar', 'Se recarga la página', 'No pasa nada', 'Se borra el componente']),
      c('¿Cuál es la forma correcta de actualizar?', ['setMates(mates + 1)', 'mates = mates + 1', 'mates++', 'useState(mates + 1)']),
      o('Ordená el contador', ['const [n, setN] = useState(0);', 'const sumar = () => setN(n + 1);', 'return <button onClick={sumar}>{n}</button>;']),
      c('¿Qué devuelve useState?', ['Un array con el valor y su función para cambiarlo', 'Solo el valor', 'Una promesa', 'Un objeto vacío']),
    ]),
    unit('Efectos, listas y datos', 'Avanzado', {
      intro: 'useEffect ejecuta código después de renderizar, ideal para pedir datos. Para mostrar listas usás map() y cada elemento necesita una key única.',
      points: ['useEffect(() => {...}, []) corre una vez', 'lista.map(item => <li key={item.id}>…</li>)', 'Las keys ayudan a React a identificar elementos'],
      code: 'useEffect(() => {\n  fetch("/api/cursos")\n    .then(r => r.json())\n    .then(setCursos);\n}, []);\n\nreturn <ul>{cursos.map(c => <li key={c.id}>{c.nombre}</li>)}</ul>;',
    }, [
      c('¿Qué hace el [] vacío en useEffect?', ['Se ejecuta solo al montar', 'Se ejecuta siempre', 'Nunca se ejecuta', 'Da error']),
      t('Completá: cada elemento de una lista necesita una...', ['key'], '<li ___={item.id}>{item.nombre}</li>'),
      c('¿Qué método se usa para renderizar listas?', ['map', 'forEach', 'filter', 'loop']),
      c('¿Para qué se usa useEffect típicamente?', ['Pedir datos o suscribirse a cosas', 'Dar estilos', 'Crear componentes', 'Escribir CSS']),
      c('¿Qué hook memoriza un valor calculado costoso?', ['useMemo', 'useState', 'useRef', 'useKey']),
      m('Uní cada hook', [['useState', 'Estado'], ['useEffect', 'Efectos secundarios'], ['useRef', 'Referencia mutable'], ['useContext', 'Datos globales']]),
    ]),
    unit('Del código a producción', 'Avanzado', {
      intro: 'Una app real usa herramientas: Vite o Next.js para crear el proyecto, Git y GitHub para versionar, y Vercel para publicarla en internet gratis.',
      points: ['npm create vite@latest crea un proyecto', 'git commit guarda cambios', 'git push sube a GitHub', 'Vercel publica tu app con cada push'],
      code: 'npm create vite@latest mi-app -- --template react\ncd mi-app\nnpm install\nnpm run dev\n\ngit add .\ngit commit -m "Mi primera app"\ngit push',
    }, [
      c('¿Qué comando instala las dependencias de un proyecto?', ['npm install', 'npm run', 'git install', 'node start']),
      c('¿Para qué sirve Git?', ['Controlar versiones del código', 'Diseñar logos', 'Alojar dominios', 'Probar en celular']),
      t('Completá para subir tus cambios a GitHub:', ['push'], 'git ___'),
      c('¿Qué hace Vercel?', ['Publica tu app en internet', 'Escribe el código por vos', 'Es un editor', 'Es una base de datos']),
      o('Ordená el flujo de Git', ['git add .', 'git commit -m "cambios"', 'git push']),
      c('¿Qué framework de React sirve para apps con servidor y SEO?', ['Next.js', 'jQuery', 'Bootstrap', 'Django']),
    ]),
    unit('Formularios controlados', 'Intermedio', {
      intro: 'En React un input es controlado cuando su value viene del estado. Así el componente es la única fuente de verdad: sabés qué hay escrito y podés validar.',
      points: ['value={texto} + onChange', 'e.target.value es lo que tipeó', 'Un form con onSubmit y preventDefault', 'Validá antes de mandar'],
      code: 'const [mail, setMail] = useState("");\n<form onSubmit={(e) => { e.preventDefault(); enviar(mail); }}>\n  <input value={mail} onChange={(e) => setMail(e.target.value)} />\n</form>',
    }, [
      c('¿Qué hace un input controlado?', ['El value viene del estado de React', 'El DOM manda solo', 'No se puede tipear', 'Guarda en CSS']),
      t('Completá: el texto nuevo está en e.target.___', ['value']),
      c('¿Por qué e.preventDefault() en el submit?', ['Para que la página no se recargue', 'Para borrar el input', 'Para validar emails', 'Para crear el estado']),
      c('¿Dónde validarías que el mail tenga @?', ['Antes de llamar a enviar()', 'En el CSS', 'En el nombre del componente', 'En useRef nomas']),
      o('Ordená el input controlado', ['const [n, setN] = useState("");', '<input value={n}', 'onChange={(e) => setN(e.target.value)} />']),
      m('Uní cada pieza', [['value', 'Lo que se ve'], ['onChange', 'Cuando tipeás'], ['onSubmit', 'Cuando mandás'], ['useState', 'La memoria']]),
    ]),
    unit('Rutas en la app', 'Intermedio', {
      intro: 'React Router (o el router de Next) muestra una pantalla distinta según la URL. Así /cursos y /perfil son páginas de la misma app, sin recargar todo.',
      points: ['Una ruta = un path + un componente', 'Link cambia la URL sin recargar', 'useParams lee /curso/:id', 'Una ruta * atrapa el 404'],
      code: '<Routes>\n  <Route path="/" element={<Home />} />\n  <Route path="/curso/:id" element={<Curso />} />\n  <Route path="*" element={<NoExiste />} />\n</Routes>',
    }, [
      c('¿Qué hace un Link de React Router?', ['Cambia la URL sin recargar la página', 'Abre Google', 'Borra el historial', 'Recarga siempre']),
      c('¿Cómo leés el :id de /curso/:id?', ['useParams()', 'useState()', 'document.title', 'fetch(id)']),
      t('Completá la ruta que atrapa cualquier URL desconocida:', ['*'], '<Route path="___" element={<NoExiste />} />'),
      c('¿Qué pasa si no tenés una ruta *?', ['Una URL rara puede quedar en blanco', 'Se crea sola', 'Redirige a Google', 'Tira el servidor']),
      c('¿Por qué usar rutas y no un if gigante?', ['Cada pantalla tiene URL propia y se puede compartir', 'Es más lento', 'React lo obliga', 'Porque CSS no existe']),
      c('¿Qué es una ruta anidada?', ['Una página adentro de otra, con su propio outlet', 'Dos servidores', 'Un iframe', 'Un CSS module']),
    ]),
    unit('Contexto y estado global', 'Avanzado', {
      intro: 'Cuando muchos componentes necesitan lo mismo (el usuario, el tema), en vez de pasarlo por 10 props usás Context o una store. useContext lee ese valor desde cualquier nieto.',
      points: ['createContext + Provider', 'useContext(Contexto)', 'No pongas TODO en contexto', 'Una store (como la de AKI) también sirve'],
      code: 'const Tema = createContext("claro");\n\nfunction App() {\n  return <Tema.Provider value="oscuro"><Pagina /></Tema.Provider>;\n}\nfunction Boton() {\n  const tema = useContext(Tema);\n}',
    }, [
      c('¿Para qué sirve Context?', ['Compartir datos sin pasar props por todos lados', 'Dar estilos', 'Hacer fetch más rápido', 'Compilar TypeScript']),
      t('Completá el hook para leer el contexto:', ['useContext'], 'const tema = ___(Tema);'),
      c('¿Quién tiene que envolver a los que leen el contexto?', ['El Provider', 'El CSS', 'window', 'localStorage solo']),
      c('¿Conviene poner cada tecla del teclado en Context?', ['No: solo datos que muchos necesitan', 'Sí, siempre', 'Solo los viernes', 'React lo exige']),
      m('Uní cada idea', [['props', 'De padre a hijo'], ['Context', 'A varios nietos'], ['useState', 'Local'], ['localStorage', 'Entre visitas']]),
    ]),
    unit('Rendimiento y buenas prácticas', 'Avanzado', {
      intro: 'React re-renderiza cuando cambia el estado. Si una lista es enorme, useMemo / useCallback y keys estables evitan trabajo de más. La regla de oro: medí primero, no optimices a ciegas.',
      points: ['key estable (id, no el índice si la lista cambia)', 'useMemo para cálculos caros', 'No crees objetos nuevos en cada render si duelen', 'Un componente chico es más fácil de testear'],
      code: 'const total = useMemo(() => items.reduce((a, i) => a + i.precio, 0), [items]);',
    }, [
      c('¿Cuándo se vuelve a dibujar un componente?', ['Cuando cambia su estado o sus props', 'Cada segundo siempre', 'Nunca', 'Solo al recargar']),
      c('¿Por qué no usar el índice como key si la lista se reordena?', ['React confunde qué ítem es cuál', 'Es más lento de tipear', 'No compila', 'Rompe CSS']),
      t('Completá el hook de memoizar:', ['useMemo'], 'const t = ___(() => calc(items), [items]);'),
      c('¿Qué tenés que hacer antes de optimizar?', ['Medir si de verdad va lento', 'Meter 20 useMemo', 'Borrar componentes', 'Pasar a jQuery']),
      c('¿Un componente que hace muchas cosas es...?', ['Más difícil de testear y reutilizar', 'Siempre más rápido', 'Obligatorio', 'Más lindo']),
    ]),
  ],
}
