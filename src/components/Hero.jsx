import { BUY_URL } from '../constants'

export default function Hero() {
  return (
    <section className="hero">
      <span className="hero-badge">Para personas con TDAH y sus familias</span>
      <h1>
        ¿Y si todo ese dolor emocional que sientes<br />
        <em>tiene una explicación y una solución?</em>
      </h1>
      <p className="hero-sub">
        Descubre por qué sientes todo con una intensidad que los demás no entienden — y aprende a vivir sin que las emociones te controlen.
      </p>
      <div className="hero-cta">
        <a href={BUY_URL} className="btn-primary" target="_blank" rel="noopener">
          Quiero mi guía ahora →
        </a>
        <span className="hero-guarantee">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Acceso inmediato · Digital · Léelo en cualquier dispositivo
        </span>
      </div>
    </section>
  )
}
