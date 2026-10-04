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
  ],
}
