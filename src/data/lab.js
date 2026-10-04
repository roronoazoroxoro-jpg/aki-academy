export const PY_EXAMPLES = [
  {
    name: '👋 Hola mundo',
    code: 'nombre = "Aki"\nprint(f"¡Hola! Soy {nombre} y tomo mate 🧉")\n\nfor i in range(1, 4):\n    print("Mate número", i)',
  },
  {
    name: '💵 Conversor de pesos',
    code: 'dolar = 1200  # cambiá la cotización\npesos = 50000\n\ndolares = pesos / dolar\nprint(f"${pesos:,} pesos son US${dolares:.2f}")',
  },
  {
    name: '⚽ Tabla de goles',
    code: 'goles = {"Messi": 13, "Di María": 3, "Julián": 4, "Enzo": 1}\n\nfor jugador, g in sorted(goles.items(), key=lambda x: -x[1]):\n    print(f"{jugador:<10} {\'⚽\' * g}")\n\nprint("Total:", sum(goles.values()))',
  },
  {
    name: '🎲 Adiviná el número',
    code: 'import random\n\nsecreto = random.randint(1, 10)\nintento = int(input("Adiviná un número del 1 al 10: "))\n\nif intento == secreto:\n    print("¡Golazo! Adivinaste 🎉")\nelse:\n    print(f"Casi, che. Era {secreto}")',
  },
  {
    name: '🧠 Clases y objetos',
    code: 'class Robot:\n    def __init__(self, nombre, gorra):\n        self.nombre = nombre\n        self.gorra = gorra\n        self.mates = 0\n\n    def tomar_mate(self):\n        self.mates += 1\n        return f"{self.nombre} lleva {self.mates} mates"\n\naki = Robot("Aki", "celeste")\nfor _ in range(3):\n    print(aki.tomar_mate())',
  },
]

export const PY_CHALLENGES = [
  {
    id: 'saludo', title: 'Saludo criollo', level: 'Básico',
    desc: 'Escribí una función saludar(nombre) que devuelva "Hola, NOMBRE, ¿todo bien?". Por ejemplo saludar("Lio") devuelve "Hola, Lio, ¿todo bien?".',
    starter: 'def saludar(nombre):\n    # tu código acá\n    pass\n\nprint(saludar("Lio"))',
    test: 'assert saludar("Lio") == "Hola, Lio, ¿todo bien?", "saludar(\'Lio\') no da lo esperado"\nassert saludar("Aki") == "Hola, Aki, ¿todo bien?"',
  },
  {
    id: 'par', title: '¿Par o impar?', level: 'Básico',
    desc: 'Escribí es_par(n) que devuelva True si n es par y False si es impar.',
    starter: 'def es_par(n):\n    # tu código acá\n    pass\n\nprint(es_par(4), es_par(7))',
    test: 'assert es_par(4) is True\nassert es_par(7) is False\nassert es_par(0) is True',
  },
  {
    id: 'mayor', title: 'El goleador', level: 'Básico',
    desc: 'Escribí goleador(goles) que reciba una lista de números y devuelva el mayor. No uses max() 😉',
    starter: 'def goleador(goles):\n    # tu código acá\n    pass\n\nprint(goleador([3, 13, 4, 1]))',
    test: 'assert goleador([3, 13, 4, 1]) == 13\nassert goleador([-5, -2, -9]) == -2\nassert goleador([7]) == 7',
  },
  {
    id: 'vocales', title: 'Contá las vocales', level: 'Intermedio',
    desc: 'Escribí contar_vocales(texto) que devuelva cuántas vocales (a, e, i, o, u, también en mayúscula) tiene el texto.',
    starter: 'def contar_vocales(texto):\n    # tu código acá\n    pass\n\nprint(contar_vocales("Argentina"))',
    test: 'assert contar_vocales("Argentina") == 4\nassert contar_vocales("MATE") == 2\nassert contar_vocales("xyz") == 0',
  },
  {
    id: 'mate', title: 'FizzBuzz del mate', level: 'Intermedio',
    desc: 'Escribí cebar(n) que devuelva "MateConFacturas" si n es múltiplo de 3 y 5, "Mate" si es múltiplo de 3, "Facturas" si es múltiplo de 5, y si no, el número como texto.',
    starter: 'def cebar(n):\n    # tu código acá\n    pass\n\nfor i in range(1, 16):\n    print(cebar(i))',
    test: 'assert cebar(3) == "Mate"\nassert cebar(10) == "Facturas"\nassert cebar(15) == "MateConFacturas"\nassert cebar(7) == "7"',
  },
  {
    id: 'palindromo', title: 'Palíndromo', level: 'Intermedio',
    desc: 'Escribí es_palindromo(texto) que devuelva True si se lee igual al derecho y al revés, ignorando espacios y mayúsculas. "Neuquén" sin tilde es "neuquen" → True.',
    starter: 'def es_palindromo(texto):\n    # tu código acá\n    pass\n\nprint(es_palindromo("Neuquen"))',
    test: 'assert es_palindromo("Neuquen") is True\nassert es_palindromo("Anita lava la tina") is True\nassert es_palindromo("Boca") is False',
  },
  {
    id: 'frecuencia', title: 'Palabras más usadas', level: 'Avanzado',
    desc: 'Escribí frecuencias(texto) que devuelva un diccionario con cuántas veces aparece cada palabra (en minúscula).',
    starter: 'def frecuencias(texto):\n    # tu código acá\n    pass\n\nprint(frecuencias("mate y mate y facturas"))',
    test: 'r = frecuencias("Mate y mate y facturas")\nassert r == {"mate": 2, "y": 2, "facturas": 1}, f"Obtuve {r}"',
  },
  {
    id: 'cuenta', title: 'Cuenta bancaria', level: 'Avanzado',
    desc: 'Creá una clase Cuenta con saldo inicial 0, un método depositar(monto) y un método retirar(monto) que lance ValueError si no hay saldo suficiente.',
    starter: 'class Cuenta:\n    # tu código acá\n    pass\n\nc = Cuenta()\nc.depositar(1000)\nprint(c.saldo)',
    test: 'c = Cuenta()\nassert c.saldo == 0\nc.depositar(1000)\nc.retirar(300)\nassert c.saldo == 700\ntry:\n    c.retirar(5000)\n    assert False, "Debería lanzar ValueError"\nexcept ValueError:\n    pass',
  },
]

export const WEB_TEMPLATES = [
  {
    name: '☀️ Tarjeta argentina',
    html: '<div class="card">\n  <h1>¡Hola, soy Aki! 🧉</h1>\n  <p>Estoy aprendiendo a hacer webs.</p>\n  <button id="btn">Cebame un mate</button>\n  <p id="mates">Mates: 0</p>\n</div>',
    css: 'body {\n  font-family: system-ui, sans-serif;\n  background: linear-gradient(#74ACDF 33%, #fff 33% 66%, #74ACDF 66%);\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  margin: 0;\n}\n.card {\n  background: white;\n  padding: 30px;\n  border-radius: 20px;\n  text-align: center;\n  box-shadow: 0 10px 30px #0002;\n  border: 3px solid #F6B40E;\n}\nbutton {\n  background: #F6B40E;\n  border: none;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-weight: bold;\n  cursor: pointer;\n}',
    js: 'let mates = 0;\ndocument.querySelector("#btn").addEventListener("click", () => {\n  mates++;\n  document.querySelector("#mates").textContent = "Mates: " + mates;\n});',
  },
  {
    name: '✅ Lista de tareas',
    html: '<main>\n  <h1>Mis tareas</h1>\n  <form id="f">\n    <input id="t" placeholder="Nueva tarea" />\n    <button>Agregar</button>\n  </form>\n  <ul id="lista"></ul>\n</main>',
    css: 'body { font-family: system-ui; background: #f4f9fe; padding: 30px; }\nmain { max-width: 420px; margin: auto; background: #fff; padding: 20px; border-radius: 16px; }\nform { display: flex; gap: 8px; }\ninput { flex: 1; padding: 10px; border-radius: 10px; border: 2px solid #74ACDF; }\nbutton { background: #74ACDF; color: #fff; border: none; border-radius: 10px; padding: 0 16px; }\nli { padding: 8px 0; cursor: pointer; }\nli.hecha { text-decoration: line-through; opacity: .5; }',
    js: 'const f = document.querySelector("#f");\nconst t = document.querySelector("#t");\nconst lista = document.querySelector("#lista");\nf.addEventListener("submit", (e) => {\n  e.preventDefault();\n  if (!t.value.trim()) return;\n  const li = document.createElement("li");\n  li.textContent = t.value;\n  li.onclick = () => li.classList.toggle("hecha");\n  lista.append(li);\n  t.value = "";\n});',
  },
  {
    name: '🎨 En blanco',
    html: '<h1>Mi página</h1>',
    css: 'body { font-family: system-ui; }',
    js: '',
  },
]

export const JS_EXAMPLE = 'const jugadores = ["Messi", "Dibu", "Enzo", "Julián"];\n\nconst conCamiseta = jugadores.map((j, i) => `${i + 1}. ${j}`);\nconsole.log(conCamiseta.join("\\n"));\n\nconst largo = jugadores.filter((j) => j.length > 4);\nconsole.log("Nombres largos:", largo);\n\nconst sumar = (a, b) => a + b;\nconsole.log("2 + 3 =", sumar(2, 3));'
