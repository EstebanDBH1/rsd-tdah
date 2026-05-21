import { useState, useEffect } from 'react'
import { BUY_URL } from '../constants'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`sticky-bar${visible ? ' visible' : ''}`}>
      <p>¿Te identificaste? Ya no tienes que vivir así.</p>
      <a href={BUY_URL} className="btn-primary" target="_blank" rel="noopener">
        Quiero la guía — 10 € →
      </a>
    </div>
  )
}
