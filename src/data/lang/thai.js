export default {
  id: 'thai',
  title: 'Tailandés',
  kind: 'lang',
  icon: '🇹🇭',
  flag: 'th',
  color: '#2563EB',
  lang: 'th-TH',
  desc: 'La lengua de Tailandia: alfabeto propio, sonrisa y cinco tonos.',
  units: [
    {
      title: 'Saludos', level: 'Básico',
      guide: { intro: '"สวัสดี" (sawasdee) es hola. Los hombres agregan ครับ (khrap) y las mujeres ค่ะ (kha) al final para ser educados. El wai es el saludo con las palmas juntas.', points: ['สวัสดี = Hola (sawasdee)', 'ขอบคุณ = Gracias (khop khun)', 'ใช่ / ไม่ = Sí / No', 'ผมชื่อ... = Me llamo... (hombre)'] },
      words: [['hola', 'สวัสดี', 'sawasdee'], ['gracias', 'ขอบคุณ', 'khop khun'], ['sí', 'ใช่', 'chai'], ['no', 'ไม่', 'mai'], ['por favor', 'กรุณา', 'karuna'], ['adiós', 'ลาก่อน', 'la kon'], ['amigo', 'เพื่อน', 'phuean'], ['agua', 'น้ำ', 'nam']],
      phrases: [['Me llamo Aki', 'ผม ชื่อ อากิ', 'phom chue Aki'], ['Soy de Argentina', 'ผม มา จาก อาร์เจนตินา', 'phom ma chak Argentina'], ['¿Cómo estás?', 'สบาย ดี ไหม', 'sabai di mai'], ['Estoy bien, gracias', 'สบาย ดี ขอบคุณ', 'sabai di khop khun'], ['Mucho gusto', 'ยินดี ที่ ได้ พบ', 'yindi thi dai phop']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'El pad thai y el mango sticky rice son famosos. Para pedir: "เอา... " (ao = quiero). "อร่อย" (aroi) = rico.', points: ['เอาน้ำ = Quiero agua', 'อร่อย = Rico', 'เช็คบิล = La cuenta'] },
      words: [['agua', 'น้ำ', 'nam'], ['arroz', 'ข้าว', 'khao'], ['fideos', 'ก๋วยเตี๋ยว', 'kuai tiao'], ['picante', 'เผ็ด', 'phet'], ['rico', 'อร่อย', 'aroi'], ['cuenta', 'เช็คบิล', 'chek bin'], ['té', 'ชา', 'cha'], ['fruta', 'ผลไม้', 'phonlamai']],
      phrases: [['Quiero agua', 'เอาน้ำ', 'ao nam'], ['La cuenta, por favor', 'เช็คบิล', 'chek bin'], ['Está rico', 'อร่อย มาก', 'aroi mak'], ['Tengo hambre', 'หิว', 'hio'], ['No picante', 'ไม่ เผ็ด', 'mai phet']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: '"มี" = tener. Los pronombres cambian por edad y respeto. "แม่ / พ่อ" = mamá / papá.', points: ['แม่ / พ่อ', 'พี่ชาย / พี่สาว', 'ผมมี = Tengo'] },
      words: [['mamá', 'แม่', 'mae'], ['papá', 'พ่อ', 'pho'], ['hermano mayor', 'พี่ชาย', 'phi chai'], ['hermana mayor', 'พี่สาว', 'phi sao'], ['hijo', 'ลูกชาย', 'luk chai'], ['hija', 'ลูกสาว', 'luk sao'], ['perro', 'หมา', 'ma'], ['casa', 'บ้าน', 'ban']],
      phrases: [['Tengo un perro', 'ผม มี หมา', 'phom mi ma'], ['Mamá está en casa', 'แม่ อยู่ บ้าน', 'mae yu ban'], ['La casa es grande', 'บ้าน ใหญ่', 'ban yai'], ['Él es mi papá', 'นี่ พ่อ ของ ผม', 'ni pho khong phom']],
    },
    {
      title: 'Viaje a Bangkok', level: 'Avanzado',
      guide: { intro: '"อยู่ที่ไหน" pregunta dónde. El tren es "รถไฟ" y la estación "สถานี".', points: ['สถานีอยู่ที่ไหน?', 'วันนี้ / พรุ่งนี้ = hoy / mañana'] },
      words: [['estación', 'สถานี', 'sathani'], ['tren', 'รถไฟ', 'rot fai'], ['calle', 'ถนน', 'thanon'], ['ciudad', 'เมือง', 'mueang'], ['hoy', 'วันนี้', 'wan ni'], ['mañana', 'พรุ่งนี้', 'phrung ni'], ['hotel', 'โรงแรม', 'rong raem'], ['baño', 'ห้องน้ำ', 'hong nam']],
      phrases: [['¿Dónde está la estación?', 'สถานี อยู่ ที่ ไหน', 'sathani yu thi nai'], ['Viajo mañana', 'พรุ่งนี้ ผม ไป', 'phrung ni phom pai'], ['El tren llega hoy', 'รถไฟ มา วันนี้', 'rot fai ma wan ni'], ['¿Dónde está el baño?', 'ห้องน้ำ อยู่ ที่ ไหน', 'hong nam yu thi nai']],
    },
  ],
}
