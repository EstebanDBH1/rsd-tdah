import { BUY_URL } from '../constants'

export default function FinalCta() {
  return (
    <section className="final-cta" id="comprar">
      <div className="inner">
        <h2>
          Es hora de dejar de luchar<br />
          contra tu propio cerebro.<br />
          <em>Empieza hoy.</em>
        </h2>
        <p>Más de 110 páginas de claridad, compasión y herramientas reales. Todo lo que necesitas para entenderte y vivir mejor.</p>

        <div className="final-features">
          <span className="final-feature">📱 Acceso inmediato</span>
          <span className="final-feature">📖 +110 páginas</span>
          <span className="final-feature">✍️ 12 ejercicios prácticos</span>
        </div>

        <div className="price-box">
          <div className="price-original">Antes: 46 €</div>
          <div className="price-current">10 €</div>
          <div className="price-desc">EUR · PAGO ÚNICO · ACCESO DE POR VIDA</div>
        </div>

        <br />
        <a href={BUY_URL} className="btn-primary" target="_blank" rel="noopener">
          Quiero mi guía ahora →
        </a>
        <br /><br />
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: 0 }}>
          Tu cerebro no está roto. Solo necesita las herramientas correctas.
        </p>
      </div>
    </section>
  )
}
