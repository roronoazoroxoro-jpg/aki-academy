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
    unit('Claves e índices', 'Intermedio', {
      intro: 'La clave primaria identifica cada fila. La clave foránea relaciona tablas. Un índice acelera las búsquedas, como el índice de un libro.',
      points: ['PRIMARY KEY: única y no nula', 'FOREIGN KEY: apunta a otra tabla', 'INDEX acelera WHERE y JOIN', 'UNIQUE no permite repetidos'],
      code: 'CREATE TABLE jugadores (\n  id INTEGER PRIMARY KEY,\n  equipo_id INTEGER,\n  email TEXT UNIQUE,\n  FOREIGN KEY (equipo_id) REFERENCES equipos(id)\n);',
    }, [
      c('¿Qué garantiza una PRIMARY KEY?', ['Que cada fila tenga un id único', 'Que la tabla esté vacía', 'Que se ordene por nombre', 'Que se borre sola']),
      c('¿Para qué sirve una FOREIGN KEY?', ['Relacionar una fila con otra tabla', 'Hacer backups', 'Cambiar el tipo de dato', 'Ocultar columnas']),
      t('Completá: un índice se crea con la palabra...', ['INDEX', 'CREATE INDEX']),
      c('¿Qué pasa si insertás dos emails iguales en una columna UNIQUE?', ['Da error', 'Se pisan', 'Se duplica la tabla', 'No pasa nada']),
      c('¿Cuándo conviene un índice?', ['Cuando buscás o filtrás mucho por esa columna', 'En todas las columnas siempre', 'Solo en textos largos', 'Nunca, atrasan todo']),
      m('Uní cada restricción', [['PRIMARY KEY', 'Identificador único'], ['FOREIGN KEY', 'Relación entre tablas'], ['UNIQUE', 'Sin repetidos'], ['NOT NULL', 'Obligatorio']]),
    ]),
    unit('Subconsultas y vistas', 'Avanzado', {
      intro: 'Una subconsulta es un SELECT adentro de otro. Una vista (VIEW) es una consulta guardada con nombre, como una tabla virtual.',
      points: ['WHERE id IN (SELECT ...)', 'Una vista no guarda los datos, los calcula', 'CREATE VIEW nombre AS SELECT ...', 'EXISTS pregunta si hay al menos una fila'],
      code: 'CREATE VIEW goleadores AS\nSELECT nombre FROM jugadores WHERE goles > 10;\n\nSELECT * FROM goleadores;',
    }, [
      c('¿Qué es una vista?', ['Una consulta guardada que se usa como tabla', 'Una copia física de toda la base', 'Un usuario admin', 'Un backup']),
      t('Completá para crear una vista:', ['VIEW'], 'CREATE ___ goleadores AS SELECT nombre FROM jugadores;'),
      c('¿Qué hace WHERE id IN (SELECT id FROM ...)?', ['Filtra con los ids que devuelve la subconsulta', 'Borra esos ids', 'Crea una tabla nueva', 'Ordena al revés']),
      c('¿EXISTS devuelve verdadero cuando...?', ['La subconsulta trae al menos una fila', 'La tabla está vacía', 'Hay un error', 'El id es nulo']),
      c('¿La vista se actualiza si cambian los datos originales?', ['Sí, porque no guarda una copia fija', 'No, nunca más', 'Solo los domingos', 'Solo si hay PRIMARY KEY']),
      o('Ordená la vista', ['CREATE VIEW top AS', 'SELECT nombre, goles', 'FROM jugadores', 'WHERE goles > 5;']),
    ]),
    unit('Transacciones', 'Avanzado', {
      intro: 'Una transacción agrupa varios cambios: o se guardan todos (COMMIT) o no se guarda ninguno (ROLLBACK). Así no queda la base a medias si algo falla.',
      points: ['BEGIN / START TRANSACTION', 'COMMIT confirma', 'ROLLBACK deshace', 'ACID: atómica, consistente, aislada, duradera'],
      code: 'BEGIN;\nUPDATE cuentas SET saldo = saldo - 1000 WHERE id = 1;\nUPDATE cuentas SET saldo = saldo + 1000 WHERE id = 2;\nCOMMIT;',
    }, [
      c('¿Qué hace COMMIT?', ['Confirma y guarda los cambios', 'Los cancela', 'Borra la tabla', 'Cierra el programa']),
      c('¿Qué hace ROLLBACK?', ['Deshace los cambios de la transacción', 'Crea un backup en la nube', 'Ordena las filas', 'Suma 1 al id']),
      t('Completá para confirmar:', ['COMMIT'], 'BEGIN;\nUPDATE ...;\n___;'),
      c('¿Por qué usar una transacción al transferir plata?', ['Para que no quede un saldo mal si falla a mitad', 'Para que sea más lenta', 'Porque es obligatorio en SELECT', 'Para cambiar el nombre de la tabla']),
      c('En ACID, ¿qué significa atómica?', ['Todo o nada: no queda a medias', 'Que usa átomos', 'Que es muy rápida', 'Que es pública']),
      m('Uní cada comando', [['BEGIN', 'Empieza'], ['COMMIT', 'Confirma'], ['ROLLBACK', 'Cancela'], ['SELECT', 'Lee']]),
    ]),
    unit('Diseño de una base', 'Avanzado', {
      intro: 'Normalizar es no repetir datos: una tabla de equipos y otra de jugadores, no el nombre del equipo copiado en cada jugador. Los tipos de dato correctos evitan basura.',
      points: ['1FN: un valor por celda', 'Relacioná, no copies', 'INTEGER, TEXT, REAL, DATE', 'NULL significa "no hay dato"'],
      code: '-- Mal: jugador + nombre_equipo repetido\n-- Bien:\n-- equipos(id, nombre)\n-- jugadores(id, nombre, equipo_id)',
    }, [
      c('¿Por qué no conviene copiar el nombre del equipo en cada jugador?', ['Si cambia el nombre hay que editar mil filas', 'Ocupa menos así', 'SQL no permite otra tabla', 'Es más rápido siempre']),
      c('¿Qué significa NULL?', ['Que no hay valor', 'Que vale 0', 'Que vale ""', 'Que es un error']),
      t('¿Cómo se llama organizar tablas para no repetir datos?', ['normalizar', 'normalización']),
      c('¿Qué tipo usarías para un precio con centavos?', ['REAL o DECIMAL', 'INTEGER nomas', 'BOOLEAN', 'BLOB']),
      c('¿Una celda debería guardar varios valores separados por coma?', ['No, eso rompe la primera forma normal', 'Sí, siempre', 'Solo si son nombres', 'Solo en SQLite']),
      c('¿Qué columna usás para unir jugadores con su equipo?', ['equipo_id (clave foránea)', 'el nombre del técnico', 'la fecha de hoy', 'un comentario']),
    ]),
    unit('SQL en el mundo real', 'Avanzado', {
      intro: 'En la vida real combinás SQL con un programa (Python, una API). Nunca armes un SQL pegando texto del usuario: usá parámetros para evitar inyección SQL.',
      points: ['Consultas parametrizadas', 'Nunca concatenes input del usuario', 'EXPLAIN analiza si la consulta es lenta', 'Backups: dump de la base'],
      code: '# Bien: parámetro\ncur.execute("SELECT * FROM users WHERE email = ?", (email,))\n# Mal: f"SELECT * FROM users WHERE email = \'{email}\'"',
    }, [
      c('¿Por qué está mal armar SQL con f-strings del usuario?', ['Permite inyección SQL', 'Es más lento siempre', 'SQL no entiende comillas', 'Rompe el disco']),
      c('¿Qué herramienta te dice cómo va a ejecutar una consulta?', ['EXPLAIN', 'PRINT', 'DEBUG TABLE', 'SHOW ME']),
      t('¿Cómo se llama el ataque de meter SQL en un formulario?', ['inyección sql', 'sql injection', 'inyeccion sql']),
      c('¿Qué es un dump?', ['Una copia de la base en un archivo', 'Borrar todo', 'Un índice', 'Un usuario invitado']),
      c('¿ORM significa...?', ['Hablar con la base desde objetos del lenguaje', 'Un tipo de JOIN', 'Una clave primaria', 'Un motor gráfico']),
      m('Uní cada idea', [['Parámetro ?', 'Consulta segura'], ['f-string con input', 'Peligroso'], ['EXPLAIN', 'Analizar'], ['DUMP', 'Backup']]),
    ]),
  ],
}
