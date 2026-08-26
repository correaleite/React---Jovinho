import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Hero from './components/hero.jsx'
import Solucao from './components/Solucao.jsx'
import PublicoAlvo from './components/PublicoAlvo.jsx'
import Galeria from './components/Galeria.jsx'
import NossaEquipe from './components/NossaEquipe.jsx'
import Contatos from './components/Contatos.jsx'
import LoginSection from './components/Login.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Solucao />
    <PublicoAlvo />
    <Galeria />
    <NossaEquipe />
    <LoginSection />
    <Contatos />
    <Footer />
  </StrictMode>,
)
