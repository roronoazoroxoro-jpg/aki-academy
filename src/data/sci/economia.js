import { c, t, m, unit } from '../helpers'

export default {
  id: 'economia',
  title: 'Economía y finanzas',
  kind: 'sci',
  icon: '📈',
  color: '#059669',
  desc: 'Plata, inflación, trabajo e inversión: entendé el país y tu bolsillo.',
  units: [
    unit('Oferta, demanda y precios', 'Básico', {
      intro: 'El precio sube cuando mucha gente quiere algo (demanda) y hay poco (oferta). Baja cuando sobra el producto o nadie lo busca.',
      points: ['Oferta: cuánto se vende', 'Demanda: cuánto se quiere comprar', 'Escasez: no alcanza para todos', 'El mercado equilibra precio y cantidad'],
      code: 'más demanda + misma oferta  →  precio ↑\nmás oferta + misma demanda  →  precio ↓',
    }, [
      c('Si todo el mundo quiere el mismo producto y no hay stock, ¿qué pasa con el precio?', ['Sube', 'Baja', 'Queda igual siempre', 'Se vuelve gratis']),
      c('¿Qué es la oferta?', ['La cantidad que se pone a la venta', 'Lo que la gente desea comprar', 'Un descuento', 'El sueldo mínimo']),
      c('¿Qué es la escasez?', ['Que no hay suficiente para todos los que lo quieren', 'Que sobra de todo', 'Que el precio es cero', 'Que no existe el dinero']),
      t('¿Cómo se llama el punto donde la cantidad ofrecida iguala a la demandada?', ['equilibrio', 'equilibrio de mercado']),
      c('Si aparece un montón de oferta nueva y la demanda no cambia, el precio...', ['Tiende a bajar', 'Siempre se duplica', 'Desaparece', 'Se vuelve ilegal']),
      m('Uní cada concepto', [['Oferta', 'Lo que se vende'], ['Demanda', 'Lo que se quiere'], ['Precio', 'Señal del mercado'], ['Escasez', 'No alcanza']]),
    ]),
    unit('Inflación y poder de compra', 'Básico', {
      intro: 'Inflación es cuando los precios suben en general. Con la misma plata comprás menos. En Argentina es un tema de todos los días: por eso importa entender tasas, sueldos y ahorro.',
      points: ['Inflación: suba general de precios', 'Poder adquisitivo: qué podés comprar', 'Tasa de interés: el precio del dinero', 'Si la inflación > el interés, tu ahorro pierde'],
      code: 'Sueldo 100 · precios +10%  →  poder de compra ≈ 91',
    }, [
      c('¿Qué es la inflación?', ['La suba general de los precios', 'Que el dólar baje', 'Que cierren los bancos', 'Un impuesto a las exportaciones']),
      c('Si los precios suben y tu sueldo no, ¿qué pasa?', ['Perdés poder de compra', 'Sos más rico', 'No cambia nada', 'Se acaba el dinero']),
      t('¿Cómo se llama lo que realmente podés comprar con tu plata?', ['poder adquisitivo', 'poder de compra']),
      c('Si un plazo fijo rinde 4% y la inflación es 8%, tu plata...', ['Pierde valor real', 'Gana sí o sí', 'Se duplica', 'Se congela']),
      c('¿Qué suele pasar si se imprime mucho dinero y hay los mismos bienes?', ['Suben los precios', 'Bajan todos los precios', 'Desaparece la inflación', 'El dólar se vuelve inútil siempre']),
      c('¿Para qué sirve un índice de precios (IPC)?', ['Medir cómo cambian los precios de una canasta', 'Fijar el dólar a mano', 'Imprimir billetes', 'Calcular la población']),
    ]),
    unit('Trabajo, sueldo e impuestos', 'Intermedio', {
      intro: 'El sueldo es el precio de tu tiempo. Los impuestos financian escuelas, hospitales y rutas. El IVA se paga en casi cada compra; Ganancias grava ingresos altos.',
      points: ['Sueldo bruto vs. neto (de bolsillo)', 'IVA: impuesto al consumo', 'Monotributo: régimen simplificado', 'Presupuesto: plan de ingresos y gastos'],
      code: 'bruto − descuentos = neto (lo que cobrás)',
    }, [
      c('¿Qué es el sueldo neto?', ['Lo que cobrás de bolsillo', 'El total antes de descuentos', 'El aguinaldo', 'El IVA']),
      c('¿Qué grava el IVA?', ['El consumo (casi cada compra)', 'Solo las exportaciones', 'Solo los sueldos', 'El alquiler de la casa siempre']),
      t('¿Cómo se llama el impuesto que en Argentina pagan los trabajadores y empresas sobre lo que ganan?', ['ganancias', 'impuesto a las ganancias']),
      c('¿Para qué sirven, en teoría, los impuestos?', ['Financiar bienes públicos', 'Hacer más cara la nafta nomas', 'Eliminar el dinero', 'Pagar solo la deuda privada']),
      c('¿Qué es un presupuesto personal?', ['Anotar ingresos y gastos para decidir', 'Un préstamo del banco', 'Una tarjeta de crédito', 'Un impuesto nuevo']),
      c('Si gastás más de lo que entra todos los meses...', ['Te endeudás o comés ahorros', 'Se crea inflación sola', 'El banco te regala plata', 'Sube tu sueldo automático']),
    ]),
    unit('Ahorro e inversión', 'Avanzado', {
      intro: 'Ahorrar es no gastar una parte. Invertir es poner esa plata a trabajar (plazo fijo, fondos, acciones, un negocio). Más rendimiento suele ser más riesgo. Diversificar es no poner todo en una sola cosa.',
      points: ['Interés compuesto: el interés genera más interés', 'Riesgo vs. retorno', 'Diversificar: no poner todos los huevos en la misma canasta', 'Nunca inversas plata que no podés perder'],
      code: '100 × (1,10)^10 ≈ 259   ←  10% anual durante 10 años',
    }, [
      c('¿Qué es el interés compuesto?', ['Ganar interés sobre el interés anterior', 'Un préstamo sin devolver', 'Una tasa que baja siempre', 'Un impuesto']),
      c('En general, más rendimiento esperado implica...', ['Más riesgo', 'Cero riesgo', 'Menos tiempo', 'Que es mentira']),
      t('¿Cómo se llama no poner toda la plata en un solo activo?', ['diversificar', 'diversificación']),
      c('¿Qué es una acción?', ['Una parte de una empresa', 'Un bono del Estado siempre', 'Una factura', 'Un plazo fijo']),
      c('Si no entendés un producto financiero, lo más sano es...', ['No meter la plata ahí', 'Poner todos tus ahorros', 'Pedir un crédito para entrar', 'Confiar en un desconocido de internet']),
      m('Uní cada instrumento', [['Plazo fijo', 'Préstamo al banco a tasa fija'], ['Acción', 'Parte de una empresa'], ['Bono', 'Deuda que cobra interés'], ['Efectivo', 'Plata lista para gastar']]),
    ]),
    unit('Dólar, tipo de cambio y país', 'Intermedio', {
      intro: 'El tipo de cambio es el precio de una moneda en otra. Si el peso se deprecia, importar se encarece y exportar puede ayudar. En Argentina conviven varias cotizaciones: eso también es economía política.',
      points: ['Tipo de cambio: pesos por dólar', 'Devaluar: el peso compra menos dólares', 'Reservas: dólares del Banco Central', 'Inflación y dólar se empujan'],
      code: 'más $ por 1 US$  →  peso más débil',
    }, [
      c('Si pasan de $1000 a $1200 por dólar, el peso...', ['Se depreció', 'Se apreció', 'Desapareció', 'Se volvió oro']),
      c('¿Qué son las reservas?', ['Dólares (y otros activos) que tiene el Banco Central', 'Los sueldos del mes', 'El IVA', 'Las acciones de YPF nomas']),
      t('¿Cómo se llama el precio de una moneda en términos de otra?', ['tipo de cambio', 'cotización', 'tipo de cambio.']),
      c('Si importás tecnología y el dólar sube, en pesos te sale...', ['Más caro', 'Más barato', 'Igual siempre', 'Gratis']),
      c('¿Por qué mucha gente ahorra en dólares acá?', ['Porque el peso suele perder poder de compra', 'Porque el dólar no fluctúa nunca', 'Porque es obligatorio', 'Porque no existe el plazo fijo']),
    ]),
    unit('Bancos y crédito', 'Básico', {
      intro: 'Un banco junta depósitos y presta. El interés del préstamo suele ser mayor que el del plazo fijo: esa diferencia es parte de su negocio. Endeudate solo si podés pagar la cuota.',
      points: ['TNA / TEA: tasas nominal y efectiva', 'CFT: costo financiero total (mirá este)', 'Tarjeta: crédito caro si no pagás el total', 'Garantía: algo que el banco puede ejecutar'],
      code: 'CFT > TNA   ←  mirá el CFT',
    }, [
      c('¿Qué número conviene mirar al comparar un préstamo?', ['El CFT', 'El logo del banco', 'La TNA nomas', 'El color de la tarjeta']),
      c('Si pagás el mínimo de la tarjeta...', ['Te cobran intereses altos sobre el resto', 'Te regalan el saldo', 'Se cancela la deuda', 'Baja el CFT a 0']),
      t('¿Qué significa que un crédito sea “en cuotas”?', ['devolverlo de a partes + interés', 'pagar todo ya', 'no devolverlo']),
      c('¿Por qué el banco te pide recibo de sueldo?', ['Para estimar si podés pagar', 'Para publicar tu sueldo', 'Es un impuesto', 'Para el IVA']),
      m('Uní', [['Depósito', 'Tu plata en el banco'], ['Préstamo', 'Plata que devolvés'], ['CFT', 'Costo real'], ['Mínimo de tarjeta', 'Trampa cara']]),
    ]),
    unit('Trabajo y pymes', 'Intermedio', {
      intro: 'Una pyme produce, vende y paga sueldos. El margen es precio menos costos. Si el costo sube más que el precio, el negocio se ahoga aunque “venda mucho”.',
      points: ['Ingreso − costo = resultado', 'Costo fijo vs. variable', 'Punto de equilibrio: ni gana ni pierde', 'Monotributo / responsable inscripto'],
      code: 'equilibrio:  ingresos = costos',
    }, [
      c('¿Qué es el punto de equilibrio?', ['Donde no se gana ni se pierde', 'El sueldo máximo', 'El IVA al 21%', 'El primer cliente']),
      c('El alquiler del local es un costo...', ['Fijo (al menos en el corto plazo)', 'Variable por unidad siempre', 'Un ingreso', 'Una reserva']),
      t('¿Cómo se llama precio menos costo?', ['margen', 'ganancia', 'resultado']),
      c('Si vendés el doble pero el costo variable también se duplica y el fijo igual...', ['Puede mejorar el resultado (los fijos se diluyen)', 'Siempre perdés', 'Da igual', 'Cierra el local']),
      c('¿Una factura sirve para...?', ['Registrar la venta y los impuestos', 'Pedir un café', 'Cifrar la red', 'Firmar un gol']),
    ]),
    unit('Macro en criollo', 'Avanzado', {
      intro: 'PBI es lo que produce el país. El desempleo mide quién busca y no encuentra. Un déficit fiscal es gastar más de lo que entra. No hay almuerzo gratis: alguien lo paga (impuestos, deuda o inflación).',
      points: ['PBI: producción', 'Desempleo: busca y no hay', 'Déficit: gastos > ingresos públicos', 'Deuda: consumo presente, pago futuro'],
      code: 'gastos > ingresos  →  déficit  →  deuda o emisión',
    }, [
      c('¿Qué mide el PBI?', ['Lo que se produce en el país en un período', 'La cantidad de dólares bajo el colchón', 'Los goles de la selección', 'El precio del asado nomas']),
      c('Una persona que no busca trabajo... ¿está desempleada en la estadística clásica?', ['No: hay que buscar para contar como desempleado', 'Sí, siempre', 'Sí, si es joven', 'Sí, si cobró alguna vez']),
      t('¿Cómo se llama gastar más de lo que entra el Estado?', ['déficit', 'deficit', 'déficit fiscal']),
      c('Emitir mucho para pagar gastos, si no hay más bienes, suele...', ['Empujar inflación', 'Bajar todos los precios', 'Crear oro', 'Eliminar el dólar']),
      c('La deuda pública es...', ['Un compromiso de pagar después', 'Un regalo', 'El PBI', 'Una acción de una pyme']),
    ]),
  ],
}
