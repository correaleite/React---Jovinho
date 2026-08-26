import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Hero from './components/hero.jsx'
import Solucao from './components/Solucao.jsx'
import LoginSection from './components/Login.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Solucao />
    <LoginSection />
    <Footer />
  </StrictMode>,
)
