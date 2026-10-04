export default {
  id: 'vietnamese',
  title: 'Vietnamita',
  kind: 'lang',
  icon: '🇻🇳',
  flag: 'vn',
  color: '#DC2626',
  lang: 'vi-VN',
  desc: 'El idioma de Vietnam: seis tonos, pho y una cultura milenaria.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: 'El vietnamita tiene 6 tonos: el mismo sonido cambia de significado. "Xin chào" es hola. No hay conjugaciones: el verbo no cambia.', points: ['Xin chào = Hola', 'Cảm ơn = Gracias', 'Vâng / Không = Sí / No', 'Tôi tên là... = Me llamo...'] },
      words: [['hola', 'xin chào'], ['gracias', 'cảm ơn'], ['sí', 'vâng'], ['no', 'không'], ['por favor', 'làm ơn'], ['adiós', 'tạm biệt'], ['amigo', 'bạn'], ['agua', 'nước']],
      phrases: [['Me llamo Aki', 'Tôi tên là Aki'], ['Soy de Argentina', 'Tôi đến từ Argentina'], ['¿Cómo estás?', 'Bạn khỏe không?'], ['Estoy bien, gracias', 'Tôi khỏe, cảm ơn'], ['Mucho gusto', 'Rất vui được gặp bạn']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'Phở es la sopa nacional. Para pedir: "Cho tôi..." (dame / para mí). "Ngon" significa rico.', points: ['Cho tôi nước = Dame agua', 'Ngon = Rico', 'Tính tiền = La cuenta'] },
      words: [['agua', 'nước'], ['arroz', 'cơm'], ['sopa', 'phở'], ['té', 'trà'], ['café', 'cà phê'], ['rico', 'ngon'], ['cuenta', 'tính tiền'], ['carne', 'thịt']],
      phrases: [['Dame agua', 'Cho tôi nước'], ['La cuenta, por favor', 'Tính tiền giúp tôi'], ['Está rico', 'Rất ngon'], ['Tengo hambre', 'Tôi đói'], ['Quiero phở', 'Tôi muốn phở']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: 'En vietnamita el pronombre cambia según la edad de la otra persona. "Tôi" es yo (neutro). "Có" = tener.', points: ['Mẹ / Bố = mamá / papá', 'Anh / Chị = hermano / hermana mayor', 'Tôi có = Tengo'] },
      words: [['mamá', 'mẹ'], ['papá', 'bố'], ['hermano mayor', 'anh'], ['hermana mayor', 'chị'], ['hijo', 'con trai'], ['hija', 'con gái'], ['perro', 'chó'], ['casa', 'nhà']],
      phrases: [['Tengo un perro', 'Tôi có một con chó'], ['Mi mamá está en casa', 'Mẹ tôi ở nhà'], ['La casa es grande', 'Nhà rất lớn'], ['Él es mi papá', 'Đây là bố tôi']],
    },
    {
      title: 'Viaje', level: 'Avanzado',
      guide: { intro: '"Ở đâu?" pregunta dónde. El tren es "tàu" y la estación "nhà ga".', points: ['Nhà ga ở đâu?', 'Hôm nay / ngày mai = hoy / mañana'] },
      words: [['estación', 'nhà ga'], ['tren', 'tàu'], ['calle', 'đường'], ['ciudad', 'thành phố'], ['hoy', 'hôm nay'], ['mañana', 'ngày mai'], ['hotel', 'khách sạn'], ['baño', 'nhà vệ sinh']],
      phrases: [['¿Dónde está la estación?', 'Nhà ga ở đâu?'], ['Viajo mañana', 'Ngày mai tôi đi'], ['El tren llega hoy', 'Tàu đến hôm nay'], ['¿Dónde está el baño?', 'Nhà vệ sinh ở đâu?']],
    },
  ],
}
