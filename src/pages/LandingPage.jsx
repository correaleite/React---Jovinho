import '../styles.css'
import Hero from '../components/hero/hero.jsx'
import Solucao from '../components/solucao/Solucao.jsx'
import PublicoAlvo from '../components/publicoalvo/PublicoAlvo.jsx'
import Galeria from '../components/galeria/Galeria.jsx'
import NossaEquipe from '../components/equipe/NossaEquipe.jsx'
import Contatos from '../components/contatos/Contatos.jsx'
import LoginSection from '../components/login/Login.jsx'
import Footer from '../components/footer/Footer.jsx'

function LandingPage() {
  return (
    <>
    <Hero />
    <Solucao />
    <PublicoAlvo />
    <Galeria />
    <NossaEquipe />
    <Contatos />
    <LoginSection />
    <Footer />
    </>
    
  );
}

export default LandingPage;
