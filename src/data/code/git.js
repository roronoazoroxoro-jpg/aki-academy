import { c, t, b, o, m, unit } from '../helpers'

export default {
  id: 'git',
  title: 'Git y GitHub',
  kind: 'code',
  icon: '🐙',
  color: '#F05032',
  desc: 'Guardá versiones de tu código y trabajá en equipo como un profesional.',
  units: [
    unit('Primeros comandos', 'Básico', {
      intro: 'Git guarda la historia de tu proyecto. Cada "commit" es una foto de tu código en un momento dado, y podés volver a cualquiera de esas fotos.',
      points: ['git init empieza a versionar una carpeta', 'git status muestra qué cambió', 'git add prepara los cambios', 'git commit guarda la foto'],
      code: 'git init\ngit add .\ngit commit -m "Mi primer commit"\ngit log --oneline',
    }, [
      c('¿Qué comando empieza a versionar una carpeta?', ['git init', 'git start', 'git new', 'git create']),
      c('¿Qué comando muestra qué archivos cambiaron?', ['git status', 'git log', 'git diff --all', 'git show']),
      t('Completá para guardar los cambios con un mensaje:', ['commit'], 'git ___ -m "Arreglé el login"'),
      c('¿Qué hace git add .?', ['Prepara todos los cambios para el próximo commit', 'Sube los cambios a GitHub', 'Borra los cambios', 'Crea una rama']),
      c('¿Qué es un commit?', ['Una foto guardada del estado del proyecto', 'Una copia en la nube', 'Un archivo de texto', 'Una rama nueva']),
      o('Ordená el flujo básico de Git', ['git init', 'git add .', 'git commit -m "mensaje"', 'git push']),
      c('¿Qué comando muestra el historial de commits?', ['git log', 'git history', 'git list', 'git past']),
    ]),
    unit('Ramas y fusiones', 'Intermedio', {
      intro: 'Una rama es una línea de trabajo paralela. Te permite probar algo nuevo sin tocar la versión principal, y después fusionarlo si funciona.',
      points: ['git branch lista las ramas', 'git switch -c nueva crea y cambia', 'git merge trae los cambios de otra rama', 'main es la rama principal'],
      code: 'git switch -c login-nuevo\n# ... trabajás y commiteás ...\ngit switch main\ngit merge login-nuevo',
    }, [
      c('¿Para qué sirve una rama (branch)?', ['Para trabajar en paralelo sin tocar la versión principal', 'Para borrar commits', 'Para guardar en la nube', 'Para comprimir archivos']),
      c('¿Qué comando crea una rama y se cambia a ella?', ['git switch -c nombre', 'git branch only', 'git merge nombre', 'git checkout --delete']),
      t('Completá para fusionar la rama "arreglo" en la actual:', ['merge'], 'git ___ arreglo'),
      c('¿Cómo se llama habitualmente la rama principal?', ['main', 'master-dev', 'root', 'origin']),
      c('¿Qué es un conflicto de merge?', ['Dos ramas cambiaron la misma línea y Git no sabe cuál usar', 'Un error de conexión', 'Un commit sin mensaje', 'Una rama vacía']),
      c('¿Qué hay que hacer ante un conflicto?', ['Editar el archivo, elegir el código correcto y commitear', 'Borrar el repositorio', 'Reiniciar la compu', 'Ignorarlo']),
      m('Uní comando y acción', [['git branch', 'Listar ramas'], ['git merge', 'Fusionar'], ['git switch', 'Cambiar de rama'], ['git log', 'Ver historial']]),
    ]),
    unit('GitHub y trabajo en equipo', 'Intermedio', {
      intro: 'GitHub guarda tu repositorio en internet. Te permite colaborar: cada persona trabaja en su rama y propone cambios con un Pull Request.',
      points: ['git clone descarga un repositorio', 'git push sube tus commits', 'git pull trae los cambios de otros', 'Pull Request: propuesta de cambios para revisar'],
      code: 'git clone https://github.com/usuario/proyecto.git\ngit pull\ngit push origin mi-rama',
    }, [
      c('¿Qué comando descarga un repositorio por primera vez?', ['git clone', 'git download', 'git pull', 'git fetch --new']),
      c('¿Qué comando sube tus commits a GitHub?', ['git push', 'git send', 'git upload', 'git commit --remote']),
      t('Completá para traer los cambios de tus compañeros:', ['pull'], 'git ___'),
      c('¿Qué es un Pull Request?', ['Una propuesta de cambios para que el equipo la revise', 'Una descarga del repositorio', 'Un commit urgente', 'Un borrado de rama']),
      c('¿Cómo se llama por defecto el repositorio remoto?', ['origin', 'remote', 'github', 'main']),
      c('¿Para qué sirve el archivo .gitignore?', ['Para que Git no versione ciertos archivos', 'Para ignorar errores', 'Para listar colaboradores', 'Para configurar ramas']),
      b('Armá el comando para subir la rama mi-rama', ['git', 'push', 'origin', 'mi-rama'], ['pull', 'clone']),
    ]),
    unit('Arreglar problemas', 'Avanzado', {
      intro: 'Todos nos equivocamos. Git tiene herramientas para deshacer cambios, guardarlos temporalmente o revertir un commit sin perder el historial.',
      points: ['git restore descarta cambios de un archivo', 'git stash guarda cambios aparte', 'git revert crea un commit que deshace otro', 'git reset mueve la rama (¡cuidado!)'],
      code: 'git stash          # guardo lo que estaba haciendo\ngit stash pop      # lo recupero\ngit revert abc123  # deshago un commit publicado',
    }, [
      c('¿Qué comando guarda temporalmente tus cambios sin commitear?', ['git stash', 'git save', 'git hold', 'git pause']),
      c('¿Qué comando conviene para deshacer un commit YA publicado?', ['git revert', 'git reset --hard', 'git delete', 'git clean']),
      t('Completá para recuperar lo guardado con stash:', ['pop'], 'git stash ___'),
      c('¿Por qué es riesgoso git reset --hard?', ['Borra cambios sin posibilidad fácil de recuperarlos', 'Crea muchas ramas', 'Sube todo a GitHub', 'Renombra archivos']),
      c('¿Qué hace git diff?', ['Muestra exactamente qué líneas cambiaron', 'Crea una rama', 'Borra el historial', 'Compara repositorios remotos']),
      c('Si querés volver un archivo a como estaba en el último commit, usás...', ['git restore archivo', 'git delete archivo', 'git add archivo', 'git branch archivo']),
    ]),
  ],
}
