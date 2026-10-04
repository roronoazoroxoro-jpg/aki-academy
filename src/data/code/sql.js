import { c, t, b, o, m, unit } from '../helpers'

export default {
  id: 'sql',
  title: 'SQL y bases de datos',
  kind: 'code',
  icon: '🗄️',
  color: '#336791',
  desc: 'Guardá y consultá datos como lo hacen bancos, apps y empresas.',
  units: [
    unit('Consultas básicas', 'Básico', {
      intro: 'SQL es el idioma para hablar con bases de datos. Los datos viven en tablas con filas y columnas. SELECT trae datos y WHERE filtra.',
      points: ['SELECT * FROM jugadores', 'SELECT nombre FROM jugadores', 'WHERE goles > 10', 'ORDER BY goles DESC'],
      code: 'SELECT nombre, goles\nFROM jugadores\nWHERE pais = \'Argentina\'\nORDER BY goles DESC;',
    }, [
      c('¿Qué palabra trae datos de una tabla?', ['SELECT', 'GET', 'FETCH', 'TAKE']),
      c('¿Qué significa SELECT *?', ['Todas las columnas', 'Todas las tablas', 'Ninguna columna', 'La primera fila']),
      t('Completá para filtrar:', ['WHERE'], "SELECT * FROM jugadores ___ pais = 'Argentina';"),
      c('¿Qué hace ORDER BY goles DESC?', ['Ordena de mayor a menor goles', 'Ordena de menor a mayor', 'Borra goles', 'Cuenta goles']),
      b('Armá la consulta', ['SELECT', 'nombre', 'FROM', 'jugadores', ';'], ['WHERE', 'INSERT']),
      c('¿Qué trae LIMIT 5?', ['Solo 5 filas', '5 columnas', 'Filas con id 5', 'Todas menos 5']),
    ]),
    unit('Modificar datos', 'Básico', {
      intro: 'Además de leer, SQL permite crear tablas, insertar, actualizar y borrar datos. ¡Cuidado con UPDATE y DELETE sin WHERE!',
      points: ['CREATE TABLE crea una tabla', 'INSERT INTO agrega filas', 'UPDATE ... SET modifica', 'DELETE FROM borra'],
      code: "INSERT INTO cursos (nombre, nivel) VALUES ('Python', 'Básico');\nUPDATE cursos SET nivel = 'Avanzado' WHERE id = 1;\nDELETE FROM cursos WHERE id = 99;",
    }, [
      c('¿Qué comando agrega una fila nueva?', ['INSERT INTO', 'ADD ROW', 'PUSH', 'CREATE ROW']),
      t('Completá para modificar datos:', ['SET'], "UPDATE cursos ___ nivel = 'Avanzado' WHERE id = 1;"),
      c('¿Qué pasa con DELETE FROM cursos; sin WHERE?', ['Borra TODAS las filas', 'No hace nada', 'Da error siempre', 'Borra la primera']),
      c('¿Qué comando crea una tabla?', ['CREATE TABLE', 'NEW TABLE', 'MAKE TABLE', 'ADD TABLE']),
      o('Ordená el INSERT', ['INSERT INTO alumnos (nombre)', "VALUES ('Aki');"]),
      m('Uní comando y acción', [['SELECT', 'Leer'], ['INSERT', 'Crear'], ['UPDATE', 'Modificar'], ['DELETE', 'Borrar']]),
    ]),
    unit('Agrupar y unir tablas', 'Intermedio', {
      intro: 'Con funciones como COUNT y SUM resumís datos, GROUP BY agrupa y JOIN combina tablas relacionadas por una clave.',
      points: ['COUNT(*) cuenta filas', 'SUM, AVG, MAX, MIN', 'GROUP BY agrupa', 'JOIN ... ON une tablas'],
      code: 'SELECT e.nombre, COUNT(j.id) AS jugadores\nFROM equipos e\nJOIN jugadores j ON j.equipo_id = e.id\nGROUP BY e.nombre;',
    }, [
      c('¿Qué función cuenta filas?', ['COUNT', 'SUM', 'TOTAL', 'NUM']),
      c('¿Qué hace AVG(goles)?', ['Promedio de goles', 'Suma de goles', 'Máximo de goles', 'Cantidad de goles']),
      t('Completá para unir tablas:', ['JOIN'], 'SELECT * FROM alumnos\n___ cursos ON alumnos.curso_id = cursos.id;'),
      c('¿Qué filtra grupos después de GROUP BY?', ['HAVING', 'WHERE', 'FILTER', 'LIMIT']),
      c('¿Qué es una clave primaria?', ['Un identificador único por fila', 'La primera columna siempre', 'Una contraseña', 'Un índice de texto']),
      c('¿Qué trae un LEFT JOIN?', ['Todas las filas de la izquierda aunque no coincidan', 'Solo coincidencias', 'Solo la derecha', 'Nada']),
    ]),
  ],
}
