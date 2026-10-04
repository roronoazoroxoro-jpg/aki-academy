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
  ],
}
