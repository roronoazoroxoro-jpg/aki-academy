# AKI-Academy 🧉

Plataforma argentina para aprender a programar, idiomas y ciencia. Gratis, en español,
con un robot que toma mate y te acompaña de cero a avanzado.

![AKI](public/img/aki-mascot.webp)

## Qué tiene

**28 cursos** repartidos en tres categorías:

| Categoría | Cursos |
| --- | --- |
| Programación y tecnología | Python, JavaScript, HTML/CSS, React, TypeScript, SQL, Git y GitHub, Inteligencia Artificial, Robótica y Arduino, Ciberseguridad |
| Ciencia y matemáticas | Matemáticas, Física, Química, Biología |
| Idiomas | Inglés, italiano, portugués, francés, alemán, japonés, chino mandarín, coreano, ruso, árabe, hindi, griego, latín y quechua |

Y la parte que engancha:

- **Racha diaria** con calendario, protectores de racha y meta de XP configurable.
- **Vidas** que se recargan solas, medialunas 🥐 como moneda y tienda para gastarlas.
- **Liga semanal** con tablas de posiciones: del Potrero hasta Campeón del Mundo.
- **Misiones diarias**, **cofres** y **logros**.
- **Cinco tipos de ejercicio**: elegir, escribir, armar frases con fichas, ordenar líneas
  de código y unir pares.
- **Audio real** en los idiomas vía `SpeechSynthesis`, con alfabeto propio y romanización
  para japonés, chino, coreano, ruso, árabe, hindi y griego.
- **Laboratorio**: Python de verdad en el navegador (Pyodide), desafíos con corrección
  automática, editor web con vista previa en vivo y consola de JavaScript.
- **Modo oscuro**, diseño responsive y todo el progreso guardado en el dispositivo
  (exportable e importable como JSON).

## Correr el proyecto

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview
```

No necesita backend ni variables de entorno: es una SPA estática.

## Cómo está armado

```
src/
  data/
    courses.js      registro de cursos y generación de lecciones
    helpers.js      constructores de ejercicios (c, t, b, bw, o, m, unit)
    code/           cursos de programación y tecnología
    sci/            ciencia y matemáticas
    lang/           idiomas (vocabulario + frases, lecciones generadas)
    lab.js          ejemplos y desafíos del Laboratorio
  components/
    exercises.jsx   los cinco tipos de ejercicio
    Layout.jsx      navegación, stats, racha, vidas
    ui.jsx          mascota, modales, barras, anillos, confeti
  pages/            Landing, Onboarding, Learn, Lesson, Lab, Pages
  store.js          estado global (useSyncExternalStore + localStorage)
  league.js         ligas y rivales semanales
  router.js         ruteo por hash
scripts/cutout.py   recorta el fondo blanco de los renders de AKI
```

El estado global no usa librerías: un `Set` de listeners más `useSyncExternalStore`,
persistido en `localStorage` bajo la clave `aki-academy-v1`.

Las lecciones no están escritas una por una. Cada unidad declara su contenido y
`buildLesson()` arma tres lecciones distintas (primera mitad, segunda mitad y repaso
mezclado con la unidad anterior), barajando opciones en cada intento. Los cursos de
idiomas generan sus ejercicios a partir de las listas de palabras y frases.

## Licencia

MIT
