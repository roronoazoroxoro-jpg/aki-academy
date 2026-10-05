import { c, t, b, o, m, unit } from '../helpers'

export default {
  id: 'web',
  title: 'Webs con HTML y CSS',
  kind: 'code',
  icon: '🌐',
  color: '#E44D26',
  desc: 'Armá tus propias páginas web, lindas y adaptadas al celular.',
  units: [
    unit('Estructura HTML', 'Básico', {
      intro: 'HTML define la estructura de una página con etiquetas. Casi todas se abren <p> y se cierran </p>.',
      points: ['<h1> título principal', '<p> párrafo', '<a href="..."> enlace', '<img src="..." alt="..."> imagen'],
      code: '<!DOCTYPE html>\n<html lang="es">\n  <head><title>Mi web</title></head>\n  <body>\n    <h1>¡Hola, che!</h1>\n    <p>Mi primera página.</p>\n  </body>\n</html>',
    }, [
      c('¿Qué significa HTML?', ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlink Text Machine Language']),
      c('¿Qué etiqueta es el título más importante?', ['<h1>', '<h6>', '<title>', '<head>']),
      t('Completá la etiqueta de cierre del párrafo:', ['</p>'], '<p>Hola___'),
      c('¿Qué atributo indica a dónde va un enlace?', ['href', 'src', 'link', 'to']),
      c('¿Para qué sirve el atributo alt en una imagen?', ['Describe la imagen (accesibilidad)', 'Cambia el tamaño', 'Pone un borde', 'Es el link']),
      b('Armá un enlace a Google', ['<a', 'href="https://google.com">', 'Google', '</a>'], ['<img', 'src=']),
      m('Uní cada etiqueta', [['<p>', 'Párrafo'], ['<ul>', 'Lista'], ['<img>', 'Imagen'], ['<a>', 'Enlace']]),
    ]),
    unit('HTML semántico y formularios', 'Básico', {
      intro: 'Las etiquetas semánticas dicen qué es cada parte: header, nav, main, section, footer. Los formularios recolectan datos con input, label y button.',
      points: ['<header>, <nav>, <main>, <footer>', '<form> agrupa campos', '<input type="email">', '<label for="id">'],
      code: '<form>\n  <label for="mail">Email</label>\n  <input id="mail" type="email" required>\n  <button>Enviar</button>\n</form>',
    }, [
      c('¿Qué etiqueta envuelve el contenido principal?', ['<main>', '<body>', '<div>', '<center>']),
      c('¿Qué tipo de input valida emails?', ['type="email"', 'type="mail"', 'type="text"', 'type="@"']),
      t('Completá la etiqueta del pie de página:', ['footer'], '<___>© 2026 AKI-Academy</___>'),
      c('¿Qué atributo hace obligatorio un campo?', ['required', 'must', 'needed', 'obligatory']),
      c('¿Por qué usar etiquetas semánticas?', ['Accesibilidad y SEO', 'Son más rápidas', 'Tienen colores', 'Son obligatorias']),
      o('Ordená la estructura de la página', ['<header>Logo</header>', '<main>Contenido</main>', '<footer>Contacto</footer>']),
    ]),
    unit('CSS: estilos', 'Básico', {
      intro: 'CSS le da estilo a tu HTML: colores, tamaños, fuentes y espacios. Se escribe selector { propiedad: valor; }.',
      points: ['color cambia el texto', 'background cambia el fondo', '.clase y #id son selectores', 'margin afuera, padding adentro'],
      code: 'h1 {\n  color: #74ACDF;\n  font-size: 40px;\n}\n.boton {\n  background: gold;\n  padding: 12px 20px;\n  border-radius: 12px;\n}',
    }, [
      c('¿Qué propiedad cambia el color del texto?', ['color', 'font-color', 'text-color', 'background']),
      c('¿Qué selector apunta a la clase "boton"?', ['.boton', '#boton', 'boton', '*boton']),
      t('Completá para redondear las esquinas:', ['border-radius'], '.card {\n  ___: 16px;\n}'),
      c('¿Cuál es el espacio INTERNO de un elemento?', ['padding', 'margin', 'border', 'gap']),
      c('¿Qué selector apunta al id "menu"?', ['#menu', '.menu', 'menu', '@menu']),
      b('Armá la regla para fondo celeste', ['body', '{', 'background:', '#74ACDF;', '}'], ['color:', '(']),
      m('Uní propiedad y efecto', [['font-size', 'Tamaño de letra'], ['margin', 'Espacio externo'], ['opacity', 'Transparencia'], ['font-weight', 'Grosor de letra']]),
    ]),
    unit('Flexbox', 'Intermedio', {
      intro: 'Flexbox acomoda elementos en fila o columna y los alinea fácil. Se activa con display: flex en el contenedor.',
      points: ['display: flex', 'justify-content alinea en el eje principal', 'align-items alinea en el eje cruzado', 'gap separa los hijos'],
      code: '.menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}',
    }, [
      t('Completá para activar flexbox:', ['flex'], '.contenedor {\n  display: ___;\n}'),
      c('¿Qué propiedad centra horizontalmente en una fila flex?', ['justify-content: center', 'align-items: center', 'text-align: center', 'margin: center']),
      c('¿Qué hace flex-direction: column?', ['Pone los hijos uno abajo del otro', 'Los pone en fila', 'Los oculta', 'Los invierte']),
      c('¿Qué propiedad separa los elementos flex?', ['gap', 'space', 'margin-flex', 'separate']),
      c('¿Qué hace flex-wrap: wrap?', ['Permite saltar de línea', 'Envuelve con un borde', 'Achica todo', 'Nada']),
      o('Ordená la regla para centrar todo', ['.centro {', '  display: flex;', '  justify-content: center;', '  align-items: center;', '}']),
    ]),
    unit('Grid y diseño responsive', 'Intermedio', {
      intro: 'CSS Grid arma diseños en filas y columnas. Las media queries cambian estilos según el tamaño de pantalla para que tu web se vea bien en el celu.',
      points: ['display: grid', 'grid-template-columns: repeat(3, 1fr)', '@media (max-width: 600px) { ... }', 'Mobile first: diseñá primero para celular'],
      code: '.galeria {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n}\n@media (max-width: 600px) {\n  h1 { font-size: 28px; }\n}',
    }, [
      c('¿Qué hace repeat(3, 1fr)?', ['3 columnas iguales', '3 filas fijas', '1 columna de 3px', 'Repite el texto 3 veces']),
      c('¿Qué significa "fr" en grid?', ['Fracción del espacio libre', 'Frame', 'Font ratio', 'Fila']),
      t('Completá la media query:', ['@media'], '___ (max-width: 600px) {\n  .menu { display: none; }\n}'),
      c('¿Qué es "mobile first"?', ['Diseñar primero para celular', 'Hacer solo apps', 'Usar solo móviles', 'Un framework']),
      c('¿Qué meta etiqueta es clave para responsive?', ['<meta name="viewport" ...>', '<meta charset>', '<meta mobile>', '<meta responsive>']),
      m('Uní cada concepto', [['grid', 'Filas y columnas'], ['flex', 'Una dimensión'], ['@media', 'Según pantalla'], ['rem', 'Unidad relativa']]),
    ]),
    unit('CSS moderno', 'Avanzado', {
      intro: 'CSS evolucionó muchísimo: variables (custom properties), anidamiento nativo, :has(), container queries y animaciones con @keyframes.',
      points: ['--celeste: #74ACDF; y var(--celeste)', '.card:has(img) selecciona padres', '@container para componentes', '@keyframes para animar'],
      code: ':root { --celeste: #74ACDF; --oro: #F6B40E; }\n.card {\n  background: var(--celeste);\n  &:hover { transform: scale(1.05); }\n}\n@keyframes latir { 50% { transform: scale(1.1); } }',
    }, [
      c('¿Cómo se usa una variable CSS llamada --oro?', ['var(--oro)', '$oro', '@oro', '--oro()']),
      c('¿Qué selecciona .card:has(img)?', ['Las .card que contienen una imagen', 'Las imágenes dentro de .card', 'Todas las imágenes', 'Nada']),
      t('Completá para definir una animación:', ['@keyframes'], '___ girar {\n  to { transform: rotate(360deg); }\n}'),
      c('¿Qué permiten las container queries?', ['Estilos según el tamaño del contenedor', 'Estilos según la hora', 'Consultar una base de datos', 'Cargar fuentes']),
      c('¿Dónde se suelen declarar las variables globales?', [':root', 'body', 'html', '*']),
      c('¿Qué propiedad hace una transición suave?', ['transition', 'animation-smooth', 'ease', 'motion']),
    ]),
    unit('Accesibilidad', 'Intermedio', {
      intro: 'Una web accesible la puede usar alguien con lector de pantalla, teclado o poca visión. Semántica + contraste + labels son el 80% del trabajo.',
      points: ['Un botón es <button>, no un div clickeable', 'alt describe la imagen', 'label + input van juntos', 'Contraste alto entre texto y fondo'],
      code: '<button type="submit">Enviar</button>\n<label for="mail">Email</label>\n<input id="mail" type="email" />\n<img src="aki.jpg" alt="AKI tomando mate" />',
    }, [
      c('¿Por qué no usar un div como botón?', ['El teclado y el lector no lo tratan como botón', 'Es más lento', 'CSS no puede', 'Google lo prohíbe']),
      t('Completá el atributo que describe la imagen:', ['alt'], '<img src="a.jpg" ___="Robot AKI">'),
      c('¿Qué hace el contraste alto?', ['Se lee mejor, también al sol o con poca visión', 'Carga más rápido', 'Usa menos CSS', 'Es solo moda']),
      c('¿Cómo asociás un label a un input?', ['for del label = id del input', 'Con CSS nomas', 'Poniendo el label abajo siempre', 'No hace falta']),
      m('Uní cada práctica', [['<button>', 'Acción'], ['alt', 'Imagen'], ['label', 'Campo'], ['contraste', 'Lectura']]),
    ]),
    unit('Tipografía y espacio', 'Intermedio', {
      intro: 'El diseño se siente pro cuando hay una escala clara: pocos tamaños de letra, mucho aire y alineación. line-height cómodo (1.4–1.6) cansa menos la vista.',
      points: ['Una fuente para títulos, otra opcional para texto', 'line-height: 1.5', 'max-width en párrafos (~65 caracteres)', 'El espacio vacío también diseña'],
      code: 'body { font-family: Nunito, sans-serif; line-height: 1.5; }\nh1 { font-size: 2.4rem; }\n.prosa { max-width: 40rem; }',
    }, [
      c('¿Por qué limitar el ancho de un párrafo?', ['Se lee más cómodo', 'Google lo exige', 'CSS no puede más', 'Para usar menos RAM']),
      c('¿Qué es rem?', ['Unidad relativa al tamaño de fuente raíz', 'Un pixel fijo', 'Un porcentaje del viewport nomas', 'Un color']),
      t('Completá una altura de línea cómoda:', ['1.5', '1.4', '1.6'], 'line-height: ___;'),
      c('¿Conviene tener 12 fuentes distintas?', ['No: dos o tres alcanzan', 'Sí, una por palabra', 'Solo serif', 'Solo monospace']),
      c('¿Qué hace más “pro” una tarjeta?', ['Aire (padding) y alineación', 'Más bordes punteados', 'Texto justificado extremo', 'Parpadeo']),
    ]),
    unit('Publicar tu web', 'Avanzado', {
      intro: 'Para que alguien entre desde el celu: un host estático (GitHub Pages, Netlify, Vercel), un dominio opcional y HTTPS. El archivo principal se llama index.html.',
      points: ['index.html es la home', 'npm run build genera la carpeta dist', 'HTTPS cifra el viaje', 'Un dominio es el nombre (aki-academy.vercel.app)'],
      code: 'npm run build\n# subís la carpeta dist\n# o conectás el repo a Vercel',
    }, [
      c('¿Qué archivo se abre si alguien entra a tu dominio?', ['index.html', 'app.exe', 'secret.env', 'node_modules']),
      c('¿Qué es HTTPS?', ['HTTP con conexión cifrada', 'Un tipo de CSS', 'Un host de imágenes', 'Un framework']),
      t('Completá el comando para generar la web lista:', ['build'], 'npm run ___'),
      c('¿Vercel para qué sirve acá?', ['Publicar el sitio con cada push', 'Escribir HTML', 'Diseñar logos', 'Cobrar impuestos']),
      c('¿Por qué no subir node_modules?', ['Es enorme y se instala con npm install', 'Es ilegal', 'No tiene JS', 'Rompe HTTPS']),
    ]),
  ],
}
