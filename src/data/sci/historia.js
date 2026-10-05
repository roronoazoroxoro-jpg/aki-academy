import { c, t, m, unit } from '../helpers'

export default {
  id: 'historia',
  title: 'Historia argentina',
  kind: 'sci',
  icon: '📜',
  color: '#B45309',
  desc: 'De 1810 a hoy: independencia, inmigración, democracia y memoria.',
  units: [
    unit('Independencia', 'Básico', {
      intro: 'El 25 de mayo de 1810 nació el primer gobierno patrio en Buenos Aires. El 9 de julio de 1816, en Tucumán, se declaró la Independencia. San Martín cruzó los Andes para libertar Chile y Perú.',
      points: ['25 de mayo de 1810: Revolución de Mayo', '9 de julio de 1816: Independencia', 'San Martín: campaña libertadora', 'Belgrano creó la bandera en 1812'],
      code: '1810 Revolución  →  1812 Bandera  →  1816 Independencia  →  1817 Cruce de los Andes',
    }, [
      c('¿Qué se recuerda el 25 de mayo?', ['La Revolución de Mayo de 1810', 'La Independencia de 1816', 'El cruce de los Andes', 'La fundación de Buenos Aires']),
      c('¿Dónde se declaró la Independencia en 1816?', ['Tucumán', 'Buenos Aires', 'Córdoba', 'Mendoza']),
      t('¿Quién creó la bandera argentina?', ['Belgrano', 'Manuel Belgrano']),
      c('¿Qué hizo San Martín en 1817?', ['Cruzó los Andes para libertar Chile', 'Fundó Buenos Aires', 'Escribió la Constitución', 'Inventó el himno']),
      c('¿En qué año se izó por primera vez la bandera?', ['1812', '1810', '1816', '1853']),
      m('Uní cada fecha', [['25 de mayo 1810', 'Revolución de Mayo'], ['9 de julio 1816', 'Independencia'], ['1812', 'Bandera'], ['1817', 'Cruce de los Andes']]),
    ]),
    unit('La Argentina moderna', 'Básico', {
      intro: 'A fines del siglo XIX el país se llenó de inmigrantes europeos, se tendieron ferrocarriles y se exportó carne y trigo. En 1853 se sancionó la Constitución. El voto secreto y obligatorio llegó en 1912 (ley Sáenz Peña).',
      points: ['Constitución de 1853', 'Inmigración masiva 1880-1930', 'Ley Sáenz Peña 1912: voto secreto', 'El campo y el puerto conectaron al país con el mundo'],
      code: '1853 Constitución  →  1912 voto secreto  →  1947 voto femenino',
    }, [
      c('¿En qué año se sancionó la Constitución argentina?', ['1853', '1810', '1912', '1983']),
      c('¿Qué estableció la ley Sáenz Peña de 1912?', ['El voto secreto, universal y obligatorio (varones)', 'La independencia', 'El ferrocarril', 'El peso convertible']),
      t('¿En qué año votaron por primera vez las mujeres en una elección nacional argentina?', ['1951', '1947']),
      c('¿De dónde vino gran parte de la inmigración entre 1880 y 1930?', ['Italia y España', 'Japón y China', 'Sudáfrica', 'Canadá']),
      c('¿Por qué se dice que Argentina era el “granero del mundo”?', ['Exportaba trigo, maíz y carne', 'Fabricaba celulares', 'Tenía petróleo nomas', 'Solo vendía vino']),
      c('¿Qué ciudad se volvió el puerto y el centro político del país?', ['Buenos Aires', 'Ushuaia', 'Salta', 'Posadas']),
    ]),
    unit('Siglo XX y democracia', 'Intermedio', {
      intro: 'El siglo XX argentino tuvo gobiernos electos, golpes militares y una sociedad que peleó por derechos. En 1983 volvió la democracia con Raúl Alfonsín. El 24 de marzo se recuerda a las víctimas de la última dictadura.',
      points: ['1930: primer golpe del siglo XX', '1983: retorno de la democracia', '24 de marzo: Día de la Memoria', 'Nunca más: informe sobre los desaparecidos'],
      code: 'golpes ↔ democracia  →  1983 democracia para quedarse',
    }, [
      c('¿En qué año volvió la democracia de forma continua hasta hoy?', ['1983', '1976', '1955', '2001']),
      c('¿Qué se recuerda el 24 de marzo?', ['El último golpe militar de 1976 y a sus víctimas', 'La Independencia', 'El mundial 86', 'La Constitución']),
      t('¿Cómo se llama el informe de la CONADEP sobre los desaparecidos?', ['Nunca más', 'Nunca Mas']),
      c('¿Quién asumió como presidente en 1983?', ['Raúl Alfonsín', 'Juan Perón', 'Carlos Menem', 'Arturo Illia']),
      c('¿Qué es un golpe de Estado?', ['Derrocar un gobierno por la fuerza', 'Ganar una elección', 'Una huelga', 'Un tratado de paz']),
      c('¿Por qué importa votar?', ['Porque la democracia se cuida ejerciéndola', 'Porque es un trámite del banco', 'Porque da un descuento', 'Porque es opcional y da igual']),
    ]),
    unit('Cultura que nos une', 'Avanzado', {
      intro: 'La identidad argentina se armó con pueblos originarios, criollos, inmigrantes y afroargentinos. El tango, el fútbol, el mate y la literatura (Borges, Cortázar) son parte de esa mezcla.',
      points: ['Pueblos originarios anteriores a 1810', 'Tango: patrimonio de Buenos Aires y el Río de la Plata', 'El mate es un ritual social', 'Malvinas: reclamo soberano argentino'],
      code: 'originarios + criollos + inmigrantes  →  cultura argentina',
    }, [
      c('¿Qué pueblos habitaban el actual territorio argentino antes de 1810?', ['Pueblos originarios (mapuche, qom, diaguita, guaraní y muchos más)', 'Solo españoles', 'Solo italianos', 'Nadie']),
      c('¿De qué ciudad es más característico el tango?', ['Buenos Aires', 'Mendoza', 'Bariloche', 'Jujuy']),
      t('¿Cómo se llama el archipiélago del Atlántico Sur cuyo reclamo sostiene Argentina?', ['Malvinas', 'Islas Malvinas']),
      c('¿Qué tiene de especial el mate además de la yerba?', ['Es un ritual de compartir', 'Solo se toma en invierno', 'Es un impuesto', 'Es un baile']),
      c('¿Quién escribió "Rayuela"?', ['Julio Cortázar', 'Jorge Luis Borges', 'María Elena Walsh', 'José de San Martín']),
      m('Uní cada símbolo', [['Mate', 'Ritual social'], ['Tango', 'Música rioplatense'], ['Malvinas', 'Soberanía'], ['25 de mayo', 'Revolución de Mayo']]),
    ]),
    unit('Pueblos originarios', 'Básico', {
      intro: 'Antes de 1810 el territorio ya estaba habitado. Mapuche, qom, wichí, guaraní, diaguita, comechingón, selkʼnam y muchos más. La Conquista del Desierto (1879) fue un avance militar sobre territorios indígenas del sur.',
      points: ['No era “desierto”: había pueblos', 'Lenguas originarias siguen vivas', 'La Constitución reconoce su preexistencia', 'Escuchar su historia es parte de la nuestra'],
      code: 'preexistencia → conquista → resistencia → hoy',
    }, [
      c('¿El sur argentino estaba vacío antes de las campañas militares del XIX?', ['No: lo habitaban pueblos originarios', 'Sí, del todo', 'Solo había españoles', 'Solo pingüinos']),
      c('¿Qué pueblo se asocia históricamente a la Patagonia y la Araucanía?', ['Mapuche', 'Azteca', 'Inuit', 'Maorí']),
      t('¿Cómo se llama la campaña militar de 1879 hacia el sur?', ['conquista del desierto', 'la conquista del desierto']),
      c('¿La Constitución argentina qué dice de los pueblos indígenas?', ['Reconoce su preexistencia étnica y cultural', 'Dice que no existen', 'Los declara extranjeros', 'No los menciona nunca']),
      c('El quechua y el guaraní en el país son...', ['Lenguas originarias que todavía se hablan', 'Dialectos del italiano', 'Códigos secretos', 'Marcas de yerba']),
    ]),
    unit('Inmigración y conventillo', 'Intermedio', {
      intro: 'Entre 1880 y 1930 llegaron millones, sobre todo de Italia y España. El conventillo era un convento de piezas: muchas familias, un patio. De ahí salieron tango, lunfardo y una Argentina nueva.',
      points: ['Hotel de inmigrantes en Retiro', 'Campo y fábrica absorbieron mano de obra', 'Cocoliche: italiano + castellano', 'El “crisol” nunca fue tan simple: también hubo discriminación'],
      code: 'barco → hotel de inmigrantes → conventillo / campo',
    }, [
      c('¿De qué países vino la mayoría de esa ola?', ['Italia y España', 'Japón y Canadá', 'Sudáfrica y Australia', 'Rusia solamente']),
      c('¿Qué era un conventillo?', ['Una casa de muchas piezas y familias', 'Un palacio', 'Un barco', 'Una escuela rural']),
      t('¿Cómo se llama la mezcla de italiano y castellano de esa época?', ['cocoliche']),
      c('¿Dónde funcionó el Hotel de Inmigrantes más famoso?', ['Buenos Aires (Retiro)', 'Ushuaia', 'Mendoza ciudad', 'Salta capital']),
      c('El lunfardo nació sobre todo en...', ['El Río de la Plata inmigrante', 'El Inca', 'Londres', 'El ejército de San Martín']),
    ]),
    unit('Perón, Evita y el voto', 'Intermedio', {
      intro: 'El peronismo (desde 1946) marcó el siglo: derechos laborales, el voto femenino (ley 1947, primera elección 1951) y una grieta que todavía se discute. Evita fue un símbolo de ese momento.',
      points: ['1946: Perón presidente', '1947: ley de voto femenino', '1951: votan las mujeres', '1955: golpe que lo derroca'],
      code: '1946 Perón  →  1947 voto mujeres  →  1951 eligen  →  1955 derrocamiento',
    }, [
      c('¿En qué año se sancionó el voto femenino?', ['1947', '1912', '1983', '1955']),
      c('¿Cuándo votaron por primera vez las mujeres en una nacional?', ['1951', '1947', '1912', '1983']),
      t('¿Cómo se llamaba Eva Duarte de Perón, de forma popular?', ['evita']),
      c('¿Qué golpe derrocó a Perón en 1955?', ['La “Revolución Libertadora”', 'El de 1930', 'El de 1976', 'El de 1810']),
      c('La ley Sáenz Peña de 1912 era para...', ['Varones: voto secreto y obligatorio', 'Solo mujeres', 'Solo inmigrantes', 'Solo militares']),
    ]),
    unit('1983 a hoy', 'Avanzado', {
      intro: 'Desde Alfonsín la democracia no se interrumpió. Hubo hiperinflación, convertibilidad, el 2001, el kirchnerismo, cambios de signo y una sociedad que discute en voz alta. El hilo: votar y no romper la regla del voto.',
      points: ['1983: “Nunca más” en democracia', '1990s: convertibilidad 1 a 1', '2001: crisis y “que se vayan todos”', 'La Constitución se reforma en 1994 (reelección, etc.)'],
      code: '1983 democracia continua → crisis y cambios → la regla: elecciones',
    }, [
      c('¿Qué presidente recuperó la democracia en 1983?', ['Raúl Alfonsín', 'Carlos Menem', 'Juan Perón', 'Jorge Videla']),
      c('La convertibilidad de los 90 era, en criollo...', ['Un peso igual a un dólar (por ley)', 'Dolarizar los sueldos nomas', 'Prohibir el dólar', 'Cerrar el Banco Central']),
      t('¿En qué año fue la crisis del “que se vayan todos”?', ['2001']),
      c('La reforma constitucional de 1994, entre otras cosas...', ['Permitió la reelección inmediata y cambió reglas', 'Declaró la Independencia', 'Creó el ferrocarril', 'Prohibió votar']),
      c('¿Qué no se interrumpió desde 1983?', ['La sucesión democrática por elecciones (con todas las crisis)', 'La inflación en 0', 'El 1 a 1', 'El servicio militar obligatorio']),
    ]),
  ],
}
