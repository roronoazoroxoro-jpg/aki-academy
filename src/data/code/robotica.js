import { c, t, b, o, m, unit } from '../helpers'

export default {
  id: 'robotica',
  title: 'Robótica y Arduino',
  kind: 'code',
  icon: '🦾',
  color: '#0F766E',
  desc: 'Construí y programá robots de verdad: sensores, motores y automatización.',
  units: [
    unit('¿Qué es un robot?', 'Básico', {
      intro: 'Un robot es una máquina que percibe su entorno, decide y actúa. Siempre tiene tres partes: sensores (percibir), controlador (decidir) y actuadores (actuar).',
      points: ['Sensor: mide algo del mundo', 'Controlador: la "cabeza" que decide', 'Actuador: motor o luz que actúa', 'Ciclo: percibir → decidir → actuar'],
      code: 'percibir  →  decidir  →  actuar  →  (repetir)',
    }, [
      c('¿Qué parte de un robot percibe el entorno?', ['El sensor', 'El actuador', 'El chasis', 'La batería']),
      c('¿Qué parte ejecuta las acciones, como mover una rueda?', ['El actuador', 'El sensor', 'El controlador', 'El cable']),
      c('¿Cuál es el ciclo básico de un robot?', ['Percibir, decidir, actuar', 'Prender, apagar, esperar', 'Cargar, girar, frenar', 'Medir, imprimir, borrar']),
      t('¿Cómo se llama la placa o "cerebro" que ejecuta el programa? (una palabra)', ['controlador', 'microcontrolador']),
      c('¿Qué es un robot autónomo?', ['Decide por sí mismo sin que lo manejen', 'Funciona con control remoto', 'No tiene motores', 'Solo sirve en fábricas']),
      m('Uní cada componente con su tipo', [['Ultrasonido', 'Sensor'], ['Servomotor', 'Actuador'], ['Arduino', 'Controlador'], ['LED', 'Actuador']]),
    ]),
    unit('Primeros pasos con Arduino', 'Básico', {
      intro: 'Arduino es una placa económica que se programa en un lenguaje parecido a C++. Todo programa tiene dos funciones: setup() corre una vez y loop() se repite para siempre.',
      points: ['setup(): configura, corre una sola vez', 'loop(): se repite infinitamente', 'pinMode() define si un pin entra o sale', 'digitalWrite() prende o apaga un pin'],
      code: 'void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}',
    }, [
      c('¿Qué función se ejecuta una sola vez al prender el Arduino?', ['setup()', 'loop()', 'main()', 'start()']),
      c('¿Qué función se repite infinitamente?', ['loop()', 'setup()', 'repeat()', 'forever()']),
      c('¿Qué hace digitalWrite(13, HIGH)?', ['Pone el pin 13 en alto (lo prende)', 'Lee el pin 13', 'Apaga el pin 13', 'Configura el pin 13']),
      t('Completá para configurar el pin 13 como salida:', ['OUTPUT'], 'pinMode(13, ___);'),
      c('¿Qué hace delay(1000)?', ['Espera 1 segundo', 'Espera 1000 segundos', 'Repite 1000 veces', 'Lee 1000 valores']),
      b('Armá la línea que prende el pin 9', ['digitalWrite(', '9,', 'HIGH', ');'], ['pinMode(', 'LOW']),
      o('Ordená el programa que hace parpadear un LED', ['pinMode(13, OUTPUT);', 'digitalWrite(13, HIGH);', 'delay(500);', 'digitalWrite(13, LOW);']),
    ]),
    unit('Sensores', 'Intermedio', {
      intro: 'Los sensores convierten el mundo en números. Los digitales dan solo 0 o 1 (un botón); los analógicos dan un rango de valores (un potenciómetro, la luz).',
      points: ['digitalRead(): devuelve HIGH o LOW', 'analogRead(): devuelve de 0 a 1023', 'Ultrasonido: mide distancia con eco', 'LDR: mide cuánta luz hay'],
      code: 'int luz = analogRead(A0);   // 0 a 1023\nif (luz < 300) {\n  digitalWrite(13, HIGH);   // está oscuro: prendé la luz\n}',
    }, [
      c('¿Qué rango de valores devuelve analogRead() en Arduino?', ['0 a 1023', '0 a 255', '0 a 1', '−512 a 512']),
      c('¿Qué función se usa para leer un botón?', ['digitalRead()', 'analogRead()', 'digitalWrite()', 'pinMode()']),
      c('¿Cómo mide la distancia un sensor de ultrasonido?', ['Con el tiempo que tarda el eco en volver', 'Con la temperatura', 'Con la luz reflejada', 'Con el peso']),
      t('¿Qué sensor usarías para medir cuánta luz hay? Es una fotorresistencia, también llamada...', ['LDR', 'ldr']),
      c('Un sensor digital puede dar...', ['Solo dos estados: HIGH o LOW', 'Cualquier número', 'Solo números negativos', 'Texto']),
      c('¿Para qué sirve un giroscopio en un robot?', ['Para saber su inclinación y giro', 'Para medir distancia', 'Para medir temperatura', 'Para mover ruedas']),
      m('Uní sensor y qué mide', [['Ultrasonido', 'Distancia'], ['LDR', 'Luz'], ['DHT11', 'Temperatura'], ['Giroscopio', 'Inclinación']]),
    ]),
    unit('Motores y movimiento', 'Intermedio', {
      intro: 'Para que un robot se mueva necesitás motores. El servomotor gira a un ángulo exacto, el motor de corriente continua gira rápido y el paso a paso avanza por pasos precisos.',
      points: ['Servo: gira a un ángulo (0° a 180°)', 'Motor DC: giro continuo y rápido', 'Paso a paso: movimiento preciso', 'Un puente H permite invertir el giro'],
      code: '#include <Servo.h>\nServo brazo;\n\nvoid setup() { brazo.attach(9); }\nvoid loop() { brazo.write(90); }',
    }, [
      c('¿Qué motor conviene para mover un brazo a un ángulo exacto?', ['Un servomotor', 'Un motor DC simple', 'Un ventilador', 'Un relé']),
      c('¿Qué rango de ángulos maneja un servo común?', ['0° a 180°', '0° a 90°', '0° a 360°', '−180° a 180°']),
      t('Completá para mover el servo a 90 grados:', ['write'], 'brazo.___(90);'),
      c('¿Para qué sirve un puente H (driver de motor)?', ['Para controlar la velocidad y el sentido de giro', 'Para medir distancia', 'Para cargar la batería', 'Para conectar a internet']),
      c('¿Por qué no conviene alimentar motores directo desde el pin del Arduino?', ['Los motores piden más corriente de la que el pin entrega', 'Los pines no dan voltaje', 'Los motores no usan electricidad', 'Siempre conviene']),
      c('¿Qué motor usan las impresoras 3D por su precisión?', ['El paso a paso', 'El servo de 180°', 'El motor DC sin control', 'El motor de nafta']),
    ]),
    unit('Robots que deciden', 'Avanzado', {
      intro: 'Un robot inteligente combina sensores y lógica. El clásico "seguidor de línea" o el "evita obstáculos" se programan con condicionales dentro del loop.',
      points: ['Usá if/else con los valores del sensor', 'Definí umbrales para decidir', 'Probá y ajustá los valores (calibrar)', 'Los robots modernos suman IA y visión'],
      code: 'int dist = medirDistancia();\n\nif (dist < 20) {\n  frenar();\n  girarDerecha();\n} else {\n  avanzar();\n}',
    }, [
      c('¿Qué estructura usa un robot para tomar decisiones según un sensor?', ['if / else', 'pinMode', 'delay', 'Serial.begin']),
      c('¿Qué es calibrar un sensor?', ['Ajustar sus valores de referencia para que mida bien', 'Soldarlo a la placa', 'Cambiarle la batería', 'Apagarlo']),
      c('Un robot seguidor de línea usa principalmente...', ['Sensores infrarrojos que distinguen claro y oscuro', 'Un GPS', 'Un micrófono', 'Un termómetro']),
      o('Ordená la lógica de un robot que evita obstáculos', ['Leer la distancia del sensor', 'Si hay un obstáculo cerca, frenar', 'Girar hacia un costado', 'Volver a avanzar']),
      c('¿Qué suma la visión por computadora a un robot?', ['Puede reconocer objetos con una cámara', 'Más velocidad de motores', 'Más batería', 'Mejor soldadura']),
      c('En robótica, ¿qué significa "actuador fallido en modo seguro"?', ['Ante una falla, el robot queda en un estado que no hace daño', 'El robot se apaga para siempre', 'El robot acelera', 'El sensor se reinicia']),
      t('¿Cómo se llama el sistema operativo más usado en robótica profesional? (sigla de 3 letras)', ['ROS', 'ros']),
    ]),
    unit('Electricidad práctica', 'Básico', {
      intro: 'Voltaje es “presión”, corriente es “caudal”, resistencia es “angostura”. La ley de Ohm: V = I × R. Un LED siempre lleva resistencia para no quemarse.',
      points: ['V = I × R', 'El LED no se conecta solo a 5V', 'Tierra (GND) es el retorno', 'Un protoboard no se suelda'],
      code: '5V -- [resistencia] -- LED -- GND',
    }, [
      c('En la ley de Ohm, V es...', ['Voltaje', 'Velocidad', 'Volumen', 'Vueltas']),
      t('Completá la fórmula: V = I × ___', ['R', 'r']),
      c('¿Por qué el LED lleva resistencia?', ['Para no quemarse con demasiada corriente', 'Para que brille menos de noche', 'Porque el Arduino lo exige por software', 'Para medir distancia']),
      c('¿Qué es GND?', ['Tierra / retorno del circuito', 'Un pin de datos', 'La antena WiFi', 'Un motor']),
      m('Uní cada magnitud', [['Voltaje', 'Presión'], ['Corriente', 'Caudal'], ['Resistencia', 'Angostura'], ['LED', 'Luz']]),
    ]),
    unit('Comunicación serial', 'Intermedio', {
      intro: 'Serial.println te habla desde el robot a la compu. También podés mandar comandos. I2C y SPI conectan varios sensores con pocos cables.',
      points: ['Serial.begin(9600)', 'println manda texto', 'I2C: varios dispositivos, 2 cables', 'Baudios: velocidad del serial'],
      code: 'void setup() { Serial.begin(9600); }\nvoid loop() {\n  Serial.println(analogRead(A0));\n  delay(200);\n}',
    }, [
      c('¿Qué hace Serial.println("hola")?', ['Manda "hola" a la computadora', 'Mueve un servo', 'Prende el pin 13', 'Mide distancia']),
      t('Completá para iniciar el serial:', ['begin'], 'Serial.___(9600);'),
      c('¿9600 qué es?', ['La velocidad en baudios', 'El pin', 'Los voltios', 'El ID del sensor']),
      c('¿I2C para qué sirve?', ['Hablar con varios sensores con pocos cables', 'Alimentar motores', 'Cargar la notebook', 'Soldar']),
      c('Si ves caracteres locos en el monitor serial...', ['El baud rate no coincide', 'Se rompió Python', 'Falta CSS', 'El LED está al revés nomas']),
    ]),
    unit('Proyecto: evita obstáculos', 'Avanzado', {
      intro: 'Un proyecto cierra el círculo: ultrasónico adelante, dos motores atrás, if de umbral. Calibrás, probás, ajustás. Eso es ingeniería.',
      points: ['Definí el umbral en cm', 'Frená antes de girar', 'Probá en el piso real', 'Documentá los pines'],
      code: 'si distancia < 15 cm → frenar → girar\nsi no → avanzar',
    }, [
      c('¿Qué sensor usa un evita-obstáculos simple?', ['Ultrasónico (eco)', 'GPS', 'Termómetro', 'Micrófono nomas']),
      t('Si el umbral es 15, ¿a cuántos cm empieza a frenar?', ['15', '15 cm', '15cm']),
      c('¿Por qué calibrar en el piso real?', ['La luz y el suelo cambian las lecturas', 'El Arduino se rompe adentro', 'Los motores no giran en casa', 'I2C no funciona en baldosas']),
      c('¿Qué documentarías en el código?', ['Qué pin es cada sensor/motor', 'Tu contraseña de WiFi', 'El precio del servo', 'La fecha de la facu']),
      o('Ordená el loop', ['Medir distancia', 'Comparar con el umbral', 'Frenar o avanzar', 'Pequeño delay para estabilizar']),
    ]),
  ],
}
