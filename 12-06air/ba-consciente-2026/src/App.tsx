import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [aqi, setAqi] = useState(102)

  // Simulate AQI fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setAqi(prev => prev + (Math.random() > 0.5 ? 1 : -1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Buenos Aires: Pulso Ambiental 2026</h1>
        <p>Monitoreo ciudadano sobre el estado de nuestra casa común. Hacia una ciudad más resiliente y limpia.</p>
        
        <div className="aqi-gauge">
          <h3>Calidad del Aire (CABA)</h3>
          <span className={`aqi-value ${aqi > 100 ? 'text-secondary' : 'text-primary'}`}>
            {aqi}
          </span>
          <p>{aqi > 100 ? 'No saludable para grupos sensibles' : 'Aceptable'}</p>
        </div>
      </section>

      {/* Stats Grid */}
      <section id="stats">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ejes Críticos</h2>
        <div className="grid">
          <div className="card">
            <h3>Gestión de Residuos</h3>
            <span className="stat text-primary">7.500 Tn</span>
            <p>De basura generada por día en la ciudad. El 78% de los residuos en nuestras playas es plástico.</p>
          </div>

          <div className="card warning">
            <h3>Calidad del Aire</h3>
            <span className="stat text-secondary">96%</span>
            <p>De los contaminantes del aire provienen de las emisiones del transporte automotor.</p>
          </div>

          <div className="card info">
            <h3>Saneamiento</h3>
            <span className="stat text-accent">4.5M</span>
            <p>Personas beneficiadas por la finalización del Sistema Riachuelo, el mayor hito en décadas.</p>
          </div>

          <div className="card warning">
            <h3>Crisis Climática</h3>
            <span className="stat text-secondary">+40°C</span>
            <p>Temperaturas máximas alcanzadas en el verano de 2026, agravadas por el efecto isla de calor.</p>
          </div>
        </div>
      </section>

      {/* Action Hub */}
      <section>
        <div className="action-hub">
          <h2>Actuá hoy por Buenos Aires</h2>
          <p>La transformación ambiental comienza con la participación ciudadana.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://farn.org.ar" target="_blank" rel="noopener noreferrer" className="btn">FARN Argentina</a>
            <a href="https://buenosaires.gob.ar/ciudadverde" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#3b82f6' }}>Ciudad Verde</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 BA Consciente | Diseñado con bajo impacto de carbono para Buenos Aires.</p>
      </footer>
    </div>
  )
}

export default App
