import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Hero from './hero.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Footer />
  </StrictMode>,
)
