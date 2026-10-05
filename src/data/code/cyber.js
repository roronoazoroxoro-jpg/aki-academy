import { c, t, o, m, unit } from '../helpers'

export default {
  id: 'cyber',
  title: 'Ciberseguridad',
  kind: 'code',
  icon: '🛡️',
  color: '#475569',
  desc: 'Protegé tus cuentas, tus datos y el código que escribís.',
  units: [
    unit('Contraseñas y cuentas', 'Básico', {
      intro: 'La mayoría de los robos de cuentas no usan trucos sofisticados: aprovechan contraseñas débiles o repetidas. Una buena contraseña es larga y única para cada sitio.',
      points: ['Largo importa más que los símbolos raros', 'Nunca repitas contraseñas entre sitios', 'Usá un gestor de contraseñas', 'Activá el segundo factor (2FA)'],
      code: 'Débil:  juan123\nFuerte: mate-celeste-42-puente',
    }, [
      c('¿Qué hace más segura a una contraseña?', ['Que sea larga y única', 'Que tenga tu fecha de nacimiento', 'Que sea corta pero con símbolos', 'Que la uses en todos los sitios']),
      c('¿Qué es el 2FA (segundo factor)?', ['Un segundo paso además de la contraseña', 'Una contraseña más larga', 'Dos cuentas distintas', 'Un antivirus']),
      c('¿Por qué es peligroso repetir la contraseña?', ['Si filtran un sitio, entran a todas tus cuentas', 'Es más difícil recordarla', 'Ocupa más espacio', 'No es peligroso']),
      t('¿Cómo se llama el programa que guarda tus contraseñas cifradas? (dos palabras)', ['gestor de contraseñas', 'administrador de contraseñas']),
      c('Si un sitio te avisa de una filtración de datos, ¿qué hacés?', ['Cambiás esa contraseña y las iguales en otros sitios', 'Ignorás el aviso', 'Borrás el navegador', 'Cambiás de computadora']),
      c('¿Cuál es el método más seguro de 2FA?', ['Una llave física o app de autenticación', 'SMS al teléfono', 'Una pregunta secreta', 'El email']),
    ]),
    unit('Estafas y phishing', 'Básico', {
      intro: 'El phishing es cuando alguien se hace pasar por una empresa para robarte datos. Casi siempre apela a la urgencia: "tu cuenta será suspendida", "ganaste un premio".',
      points: ['Desconfiá de la urgencia', 'Mirá bien el dominio del enlace', 'Los bancos nunca piden la clave completa', 'Nunca compartas el código que te llega por SMS'],
      code: 'Real:  banco.com.ar\nFalso: banco-com-ar.net  ·  bancoo.com',
    }, [
      c('¿Qué es el phishing?', ['Hacerse pasar por alguien confiable para robar datos', 'Un virus que borra archivos', 'Un ataque a servidores', 'Un error de programación']),
      c('Te llega un SMS: "Su cuenta será cerrada, ingrese acá YA". ¿Qué hacés?', ['No toco el enlace y entro por la app oficial', 'Hago clic y pongo mis datos', 'Reenvío el mensaje', 'Llamo al número del SMS']),
      c('¿Cuál de estos dominios es sospechoso si esperás el sitio de un banco?', ['banco-seguro-login.net', 'banco.com.ar', 'www.banco.com.ar', 'banco.com.ar/login']),
      c('¿Un banco te puede pedir tu clave completa o el código del SMS?', ['Nunca', 'Sí, si te llaman ellos', 'Sí, por email', 'Solo los días hábiles']),
      t('¿Cómo se llama la estafa que te pide un pago para liberar tus archivos secuestrados?', ['ransomware']),
      c('¿Qué es la ingeniería social?', ['Manipular personas para que entreguen información', 'Diseñar redes sociales', 'Programar bots', 'Encriptar datos']),
      m('Uní amenaza y descripción', [['Phishing', 'Suplantación de identidad'], ['Ransomware', 'Secuestro de archivos'], ['Malware', 'Software malicioso'], ['Spyware', 'Espía tu actividad']]),
    ]),
    unit('Navegar seguro', 'Intermedio', {
      intro: 'En internet tus datos viajan por muchos intermediarios. HTTPS cifra la conexión, y en redes WiFi públicas conviene tomar precauciones extra.',
      points: ['HTTPS cifra lo que enviás', 'En WiFi público evitá operaciones sensibles', 'Mantené el sistema actualizado', 'Las actualizaciones tapan agujeros de seguridad'],
      code: 'http://  → sin cifrar (evitalo)\nhttps:// → cifrado',
    }, [
      c('¿Qué significa la "s" de HTTPS?', ['Que la conexión está cifrada y es segura', 'Que el sitio es oficial', 'Que es más rápido', 'Que tiene publicidad']),
      c('¿Por qué conviene actualizar el sistema y las apps?', ['Las actualizaciones corrigen fallas de seguridad', 'Para que se vean mejor', 'Para ocupar más espacio', 'No conviene']),
      c('En un WiFi público, ¿qué es más riesgoso?', ['Hacer operaciones bancarias sin precaución', 'Leer las noticias', 'Escuchar música', 'Ver el clima']),
      t('¿Cómo se llama la herramienta que crea un túnel cifrado para tu tráfico? (sigla)', ['VPN', 'vpn']),
      c('¿Qué es una cookie?', ['Un archivito que guarda datos de tu sesión en el navegador', 'Un virus', 'Una contraseña', 'Un tipo de WiFi']),
      c('¿El candado en la barra de direcciones garantiza que el sitio sea honesto?', ['No: solo garantiza que la conexión está cifrada', 'Sí, garantiza todo', 'Sí, lo verifica el gobierno', 'Solo en bancos']),
    ]),
    unit('Programar seguro', 'Avanzado', {
      intro: 'Si escribís código, la seguridad es parte de tu trabajo. Las fallas más comunes son no validar lo que entra el usuario y exponer secretos en el repositorio.',
      points: ['Nunca confíes en lo que entra el usuario', 'Usá consultas parametrizadas contra SQL injection', 'Las claves van en variables de entorno', 'Guardá contraseñas con hash, nunca en texto plano'],
      code: '// Mal: pega el texto del usuario en la consulta\n"SELECT * FROM u WHERE id = " + entrada\n\n// Bien: consulta parametrizada\n"SELECT * FROM u WHERE id = ?", [entrada]',
    }, [
      c('¿Qué es una inyección SQL?', ['Meter código SQL malicioso a través de un campo de entrada', 'Un error de sintaxis', 'Una copia de la base', 'Un índice mal hecho']),
      c('¿Cómo se previene la inyección SQL?', ['Con consultas parametrizadas', 'Poniendo comillas simples', 'Ocultando el nombre de la tabla', 'Usando mayúsculas']),
      c('¿Dónde NO deben estar las claves de API?', ['En el código subido al repositorio', 'En variables de entorno', 'En un gestor de secretos', 'En el servidor, fuera del repo']),
      t('¿Cómo se llama guardar una contraseña transformada e irreversible? (una palabra)', ['hash', 'hasheo', 'hashing']),
      c('¿Qué es XSS (Cross-Site Scripting)?', ['Inyectar JavaScript malicioso en una página', 'Robar cookies por WiFi', 'Un ataque a la base de datos', 'Un error de CSS']),
      c('¿Qué principio dice que cada usuario tenga solo los permisos que necesita?', ['Mínimo privilegio', 'Defensa en profundidad', 'Cifrado total', 'Código abierto']),
      o('Ordená el manejo seguro de una contraseña', ['El usuario la escribe por HTTPS', 'El servidor le aplica un hash con sal', 'Se guarda el hash en la base', 'Al ingresar, se compara el hash']),
    ]),
    unit('WiFi y el celu', 'Básico', {
      intro: 'La red de un café no es tu casa. Un atacante en la misma WiFi puede intentar mirar tráfico no cifrado. Actualizá el sistema y no cargues banca en redes raras.',
      points: ['Preferí datos móviles para banca', 'El router de casa: clave fuerte y firmware al día', 'Bluetooth también se puede atacar', 'Un USB desconocido no se enchufa'],
      code: 'Café + banca  →  mala idea\nCasa + WPA3/WPA2 + clave larga  →  mucho mejor',
    }, [
      c('¿Conviene entrar al home banking por el WiFi del bar?', ['No: usá datos o una VPN de confianza', 'Sí, siempre', 'Solo si hay candadito dibujado en una servilleta', 'Sí, si pedís la clave al mozo']),
      c('¿Qué es una VPN (cuando es seria)?', ['Un túnel cifrado hasta otro punto de internet', 'Una app de fotos', 'Un antivirus gratis', 'Un tipo de USB']),
      t('¿Qué no enchufás si no sabés de dónde viene?', ['usb', 'un usb']),
      c('¿El router de casa hay que actualizarlo?', ['Sí: el firmware también tiene parches', 'No, nunca', 'Solo el nombre de la red', 'Solo si es nuevo']),
      m('Uní cada riesgo', [['WiFi pública', 'Alguien en la misma red'], ['USB desconocido', 'Malware físico'], ['Router viejo', 'Agujeros sin parche'], ['Bluetooth abierto', 'Conexiones raras']]),
    ]),
    unit('2FA y recuperá tu cuenta', 'Básico', {
      intro: 'El segundo factor es algo que tenés (una app, una llave) además de lo que sabés (la contraseña). El SMS es mejor que nada, pero una app autenticadora es más sólida.',
      points: ['App autenticadora > SMS', 'Guardá los códigos de respaldo offline', 'No aceptes 2FA que no pediste', 'Una llave física (passkey) es excelente'],
      code: 'algo que sabés + algo que tenés  →  2FA',
    }, [
      c('¿Qué es 2FA?', ['Un segundo paso además de la contraseña', 'Una segunda contraseña igual', 'Un antivirus', 'Un correo nuevo']),
      c('¿Por qué una app es mejor que SMS?', ['El SMS se puede desviar / sim-swap', 'La app es más lenta', 'SMS es ilegal', 'No hay diferencia']),
      t('¿Cómo se llaman los códigos que guardás por si perdés el celu?', ['códigos de respaldo', 'codigos de respaldo', 'backup codes']),
      c('Si te llega un código que no pediste...', ['Alguien está intentando entrar: cambiá la clave', 'Lo ignorás y listo para siempre', 'Se lo pasás a un amigo', 'Lo publicás']),
      c('¿Una passkey qué evita?', ['Tipear la contraseña en un sitio trucho', 'Usar internet', 'Tener email', 'Actualizar el celu']),
    ]),
    unit('Backups y ransomware', 'Intermedio', {
      intro: 'El ransomware cifra tus archivos y pide plata. La defensa de verdad es un backup que no esté enchufado siempre (regla 3-2-1).',
      points: ['3 copias, 2 medios, 1 afuera', 'Un disco siempre conectado también se cifra', 'No pagues si podés restaurar', 'Probá restaurar, no solo copiar'],
      code: '3 copias · 2 tipos de disco · 1 fuera de casa',
    }, [
      c('¿Qué es ransomware?', ['Malware que cifra tus archivos y pide rescate', 'Un antivirus pago', 'Un tipo de WiFi', 'Un backup en la nube']),
      t('¿Cuántas copias recomienda la regla 3-2-1?', ['3', 'tres']),
      c('¿Por qué un disco siempre enchufado no alcanza?', ['El ransomware también lo puede cifrar', 'Pesa mucho', 'Git no lo ve', 'Pierde la garantía']),
      c('¿Qué tenés que probar además de copiar?', ['Que se pueda restaurar de verdad', 'Que el disco sea rojo', 'Que esté en el escritorio', 'Que tenga meme']),
      c('Si te cifran todo y tenés backup bueno...', ['Restaurás y formateás el equipo infectado', 'Pagás sin pensar', 'Mandás más archivos', 'Desinstalás el navegador nomas']),
    ]),
    unit('Ingeniería social', 'Avanzado', {
      intro: 'La mayoría de los ataques grandes empiezan con una persona, no con un exploit: apuro, miedo, autoridad falsa. “Tu jefe” pidiendo una transferencia urgente es un clásico.',
      points: ['Verificá por otro canal', 'El apuro es una bandera roja', 'Nadie serio pide claves por WhatsApp', 'Decí que no: está bien'],
      code: 'mail urgente + pedido raro + "no le digas a nadie"  →  freno',
    }, [
      c('¿Qué es ingeniería social?', ['Manipular a una persona para que entregue acceso', 'Un tipo de firewall', 'Programar en C', 'Un examen de redes']),
      c('Si “el CEO” pide por mail una transferencia ya...', ['Lo confirmás por otro medio (llamada conocida)', 'La hacés ya', 'Reenviás el mail a todos', 'Contestás la clave']),
      t('¿Qué emoción usan mucho las estafas para que no pienses?', ['apuro', 'miedo', 'urgencia']),
      c('¿Un soporte real te pide la contraseña?', ['No', 'Sí, siempre', 'Solo los lunes', 'Solo por SMS']),
      m('Uní la señal', [['Apuro', 'Bandera roja'], ['Otro canal', 'Verificar'], ['Pedido de clave', 'Estafa'], ['Calma', 'Tu mejor defensa']]),
    ]),
  ],
}
