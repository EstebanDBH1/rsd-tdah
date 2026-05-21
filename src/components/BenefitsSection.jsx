const benefits = [
  {
    num: '01',
    title: 'Entenderás por qué tu cerebro reacciona como reacciona',
    text: 'Dejarás de culparte. Por primera vez vas a tener una explicación real, clara y sin juicio de lo que pasa dentro de ti cuando las emociones se desbordan.',
  },
  {
    num: '02',
    title: 'Aprenderás a detectar la tormenta antes de que llegue',
    text: 'Tus señales de alerta personales, cómo leerlas, y qué hacer en ese momento para que no escale a una explosión que luego lamentarás.',
  },
  {
    num: '03',
    title: 'Tendrás estrategias reales para calmarte cuando todo se desborda',
    text: 'No el típico "respira profundo". Técnicas basadas en cómo funciona el sistema nervioso, adaptadas para el cerebro con TDAH.',
  },
  {
    num: '04',
    title: 'Mejorarás tus relaciones sin perder quién eres',
    text: 'Cómo comunicarte en los momentos difíciles, cómo pedir una pausa sin que suene a huida, y cómo romper los ciclos que dañan lo que más quieres.',
  },
  {
    num: '05',
    title: '12 ejercicios prácticos para conocerte y cambiar patrones de raíz',
    text: 'Hojas de trabajo que puedes llenar directamente en la guía. Desde identificar tus disparadores hasta diseñar tu plan de calma personal.',
  },
  {
    num: '06',
    title: 'Si eres padre, entenderás qué vive tu hijo por dentro',
    text: 'Qué ayuda, qué daña, cómo hablarle después de una crisis, y cómo ser el adulto que marca la diferencia en su vida.',
  },
]

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="inner">
        <div className="section-label">Lo que vas a aprender</div>
        <h2 className="section-title">Todo lo que este libro hace por ti</h2>
        <div className="benefits-list">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-row reveal">
              <div className="benefit-num">{b.num}</div>
              <div className="benefit-content">
                <h4>{b.title}</h4>
                <p>{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
