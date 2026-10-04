export default {
  id: 'chinese',
  title: 'Chino mandarín',
  kind: 'lang',
  icon: '🀄',
  flag: 'cn',
  color: '#DC2626',
  lang: 'zh-CN',
  desc: 'El idioma más hablado del mundo y la puerta a Asia.',
  units: [
    {
      title: 'Saludos y tonos', level: 'Básico',
      guide: { intro: 'El chino tiene 4 tonos: el mismo sonido cambia de significado según cómo lo digas. El pinyin es la escritura con nuestro alfabeto que te ayuda a pronunciar.', points: ['你好 = Hola (nǐ hǎo)', '谢谢 = Gracias (xiè xie)', '是 = Sí / es (shì)', 'No hay conjugaciones de verbos'] },
      words: [['hola', '你好', 'nǐ hǎo'], ['gracias', '谢谢', 'xiè xie'], ['sí', '是', 'shì'], ['no', '不是', 'bú shì'], ['adiós', '再见', 'zài jiàn'], ['por favor', '请', 'qǐng'], ['amigo', '朋友', 'péng you'], ['perdón', '对不起', 'duì bu qǐ']],
      phrases: [['Me llamo Aki', '我 叫 阿基', 'wǒ jiào Ā jī'], ['Soy argentino', '我 是 阿根廷人', 'wǒ shì Ā gēn tíng rén'], ['¿Cómo estás?', '你 好 吗', 'nǐ hǎo ma'], ['Estoy muy bien', '我 很 好', 'wǒ hěn hǎo'], ['Mucho gusto', '很 高兴 认识 你', 'hěn gāo xìng rèn shi nǐ']],
    },
    {
      title: 'Números y compras', level: 'Básico',
      guide: { intro: 'Los números chinos son muy regulares: once es "diez uno" (十一) y veinte es "dos diez" (二十). Para preguntar el precio: 多少钱 (duō shao qián).', points: ['一二三 = 1, 2, 3', '十一 = 11 (diez uno)', '多少钱 = ¿Cuánto cuesta?', '元 (yuán) es la moneda'] },
      words: [['uno', '一', 'yī'], ['dos', '二', 'èr'], ['tres', '三', 'sān'], ['cuatro', '四', 'sì'], ['cinco', '五', 'wǔ'], ['diez', '十', 'shí'], ['dinero', '钱', 'qián'], ['comprar', '买', 'mǎi']],
      phrases: [['¿Cuánto cuesta?', '多少 钱', 'duō shao qián'], ['Quiero comprar esto', '我 要 买 这个', 'wǒ yào mǎi zhè ge'], ['Es muy caro', '太 贵 了', 'tài guì le'], ['Quiero dos', '我 要 两个', 'wǒ yào liǎng ge'], ['No quiero', '我 不 要', 'wǒ bú yào']],
    },
    {
      title: 'Comida', level: 'Básico',
      guide: { intro: 'En China se come con palillos (筷子). Para pedir algo: 我要… (wǒ yào = yo quiero). 好吃 (hǎo chī) significa "rico".', points: ['水 = agua (shuǐ)', '茶 = té (chá)', '米饭 = arroz (mǐ fàn)', '好吃 = rico'] },
      words: [['agua', '水', 'shuǐ'], ['té', '茶', 'chá'], ['arroz', '米饭', 'mǐ fàn'], ['carne', '肉', 'ròu'], ['pescado', '鱼', 'yú'], ['rico', '好吃', 'hǎo chī'], ['comer', '吃', 'chī'], ['beber', '喝', 'hē']],
      phrases: [['Quiero agua', '我 要 水', 'wǒ yào shuǐ'], ['Está muy rico', '很 好吃', 'hěn hǎo chī'], ['Tengo hambre', '我 饿 了', 'wǒ è le'], ['Quiero tomar té', '我 要 喝 茶', 'wǒ yào hē chá'], ['No como carne', '我 不 吃 肉', 'wǒ bù chī ròu']],
    },
    {
      title: 'Familia', level: 'Intermedio',
      guide: { intro: 'El chino tiene palabras distintas para cada familiar según el lado de la familia. Para empezar alcanza con las básicas. 我有… (wǒ yǒu) = yo tengo.', points: ['妈妈 = mamá (mā ma)', '爸爸 = papá (bà ba)', '我有 = yo tengo', '的 marca posesión: 我的 = mi'] },
      words: [['mamá', '妈妈', 'mā ma'], ['papá', '爸爸', 'bà ba'], ['hermano mayor', '哥哥', 'gē ge'], ['hermana mayor', '姐姐', 'jiě jie'], ['hijo', '儿子', 'ér zi'], ['hija', '女儿', 'nǚ ér'], ['casa', '家', 'jiā'], ['perro', '狗', 'gǒu']],
      phrases: [['Esta es mi mamá', '这 是 我 妈妈', 'zhè shì wǒ mā ma'], ['Tengo un perro', '我 有 一只 狗', 'wǒ yǒu yì zhī gǒu'], ['Mi casa es grande', '我 家 很 大', 'wǒ jiā hěn dà'], ['Tengo una hermana mayor', '我 有 姐姐', 'wǒ yǒu jiě jie']],
    },
    {
      title: 'Viaje a China', level: 'Avanzado',
      guide: { intro: 'Para preguntar dónde está algo: …在哪里 (zài nǎ lǐ). 我不懂 (wǒ bù dǒng) significa "no entiendo", muy útil cuando recién arrancás.', points: ['在哪里 = ¿dónde está?', '我不懂 = no entiendo', '火车站 = estación de tren', '去 = ir (qù)'] },
      words: [['estación de tren', '火车站', 'huǒ chē zhàn'], ['aeropuerto', '机场', 'jī chǎng'], ['hotel', '酒店', 'jiǔ diàn'], ['baño', '厕所', 'cè suǒ'], ['dónde', '哪里', 'nǎ lǐ'], ['ir', '去', 'qù'], ['hoy', '今天', 'jīn tiān'], ['mañana', '明天', 'míng tiān']],
      phrases: [['¿Dónde está el baño?', '厕所 在 哪里', 'cè suǒ zài nǎ lǐ'], ['No entiendo', '我 不 懂', 'wǒ bù dǒng'], ['Quiero ir al hotel', '我 要 去 酒店', 'wǒ yào qù jiǔ diàn'], ['¿Hablás español?', '你 会 说 西班牙语 吗', 'nǐ huì shuō xī bān yá yǔ ma'], ['Mañana voy a Pekín', '明天 我 去 北京', 'míng tiān wǒ qù Běi jīng']],
    },
  ],
}
