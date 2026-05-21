const testimonials = [
  {
    quote: '"Tengo 34 años y nunca nadie me había explicado así lo que siento. Leí las primeras páginas y me puse a llorar porque por fin alguien lo nombraba. No estoy loco. Solo funciono diferente."',
    name: 'Martín R.',
    loc: 'México · Diagnosticado con TDAH a los 31',
    initial: 'M',
    color: 'var(--sage)',
  },
  {
    quote: '"Compré esta guía pensando que era para mí y terminé leyéndola con mi hija de 14 años. Fue la primera conversación real que tuvimos sobre su TDAH. Ahora entendemos cómo ayudarla de verdad."',
    name: 'Carolina V.',
    loc: 'Colombia · Madre de adolescente con TDAH',
    initial: 'C',
    color: 'var(--lavender)',
  },
  {
    quote: '"Lo que más me impactó fue la parte del ciclo del rechazo. Reconocí cada paso. Por primera vez pude ver el patrón desde afuera y eso cambió todo. Los ejercicios son muy concretos y fáciles de hacer."',
    name: 'Andrea S.',
    loc: 'Argentina · TDAH combinado',
    initial: 'A',
    color: 'var(--peach)',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="inner">
        <div className="section-label">Lo que dicen quienes ya lo leyeron</div>
        <h2 className="section-title">Personas reales, cambios reales</h2>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card reveal">
              <div className="testi-stars">★★★★★</div>
              <p>{t.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.color }}>{t.initial}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-loc">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
