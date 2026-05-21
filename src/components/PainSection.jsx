const cards = [
  {
    icon: '💬',
    title: 'Un mensaje sin respuesta y tu mundo se derrumba',
    text: 'Alguien tarda en responderte y tu cerebro ya construyó diez escenarios de catástrofe. "¿Hice algo mal? ¿Está enojado? ¿Ya no le importo?" Todo esto en cuestión de minutos.',
  },
  {
    icon: '😤',
    title: 'Exploto por cosas "pequeñas" y luego me odio',
    text: 'La reacción fue desproporcionada. Tú lo sabes. Ellos lo saben. Y esa mezcla de vergüenza y culpa después es casi peor que el momento de la explosión.',
  },
  {
    icon: '🪞',
    title: 'Cualquier crítica se siente como un ataque personal',
    text: 'No importa cómo te lo digan. Suave o directo, con amor o en el trabajo. Algo en ti lo recibe como: "Eres un fracaso. No vales. Nunca vas a ser suficiente."',
  },
  {
    icon: '😶',
    title: 'Te quedas paralizado cuando más necesitas actuar',
    text: 'Sabes perfectamente lo que tienes que hacer. Es urgente. Lo tienes claro. Y sin embargo ahí estás, incapaz de empezar, mientras la culpa y la frustración crecen.',
  },
  {
    icon: '🔄',
    title: 'Les vueltas a las cosas durante horas, días, semanas',
    text: 'Esa conversación de hace tres días sigue viva en tu cabeza. Cada detalle analizado. Cada frase reinterpretada. Aunque ya no cambie nada, tu mente no puede soltar.',
  },
  {
    icon: '😔',
    title: 'Evitas oportunidades para no exponerte al rechazo',
    text: 'No envías el proyecto. No pides el ascenso. No dices lo que piensas en la reunión. Porque si intentas y fallas, el dolor va a ser insoportable. Mejor no intentar.',
  },
  {
    icon: '💔',
    title: 'Tus relaciones sufren por cosas que no puedes controlar',
    text: 'Las personas que más quieres terminan en el fuego cruzado de tus tormentas emocionales. Y luego viene la culpa, la vergüenza, y el ciclo que se repite una y otra vez.',
  },
  {
    icon: '🌙',
    title: 'La noche es el peor momento',
    text: 'Cuando el mundo se calma, tu mente se activa. Los pensamientos que durante el día lograste ignorar vuelven con más fuerza. El sueño se convierte en otro campo de batalla.',
  },
  {
    icon: '🎭',
    title: 'Por fuera estás bien. Por dentro, no tanto.',
    text: 'Aprendiste a enmascararlo. A parecer normal. A funcionar aunque por dentro estés agotado de tanto esfuerzo para hacer lo que para otros parece natural.',
  },
]

export default function PainSection() {
  return (
    <section className="pain-section">
      <div className="inner">
        <div className="section-label">Los puntos de dolor que nadie nombra</div>
        <h2 className="section-title">¿Reconoces alguna de estas situaciones?</h2>
        <div className="pain-grid">
          {cards.map((card, i) => (
            <div key={i} className="pain-card reveal">
              <span className="icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
