import { useState } from 'react'

const faqs = [
  {
    q: '¿Esta guía es solo para adultos con TDAH o también para padres?',
    a: 'Para ambos. Cada parte del libro tiene secciones específicas para adultos que viven con TDAH y para padres que quieren entender y acompañar mejor a sus hijos. No necesitas saber nada previo sobre el tema.',
  },
  {
    q: '¿Necesito tener diagnóstico oficial de TDAH para aprovecharla?',
    a: 'No. Muchas personas se identifican con los síntomas del TDAH y la sensibilidad al rechazo sin haber recibido un diagnóstico formal. Si te ves reflejado en lo que describes esta guía, va a ser útil para ti.',
  },
  {
    q: '¿Es un libro teórico o tiene cosas prácticas para hacer?',
    a: 'Es principalmente práctico. Toda la parte teórica está al servicio de entender para poder actuar. La Parte 5 tiene 12 ejercicios con hojas de trabajo que puedes llenar directamente en la guía o en tu cuaderno.',
  },
  {
    q: '¿En cuánto tiempo lo puedo leer?',
    a: 'Puedes leer la parte informativa en 2-3 horas. Pero está diseñado para que lo trabajes con calma, volviendo a los ejercicios cada vez que los necesites. No es para leer una vez y guardar: es una herramienta de uso continuo.',
  },
  {
    q: '¿Cómo recibo la guía después de comprar?',
    a: 'Recibes acceso inmediato al archivo digital. Puedes leerla en tu teléfono, computadora, tablet, o imprimirla. No hay espera, no hay envío.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className="faq-section">
      <div className="inner">
        <div className="section-label">Preguntas frecuentes</div>
        <h2 className="section-title">Todo lo que necesitas saber</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <div className="faq-q" onClick={() => toggle(i)}>
                {faq.q}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
