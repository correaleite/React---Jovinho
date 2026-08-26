import iconeAvancar from '../assets/home/icone-avancar.svg'
import celularIcones from '../assets/home/celular-icones.svg'
import Navbar from './Navbar'


function Hero () {
    return (
        <section class="section-hero">
            <Navbar />
            <div class="hero-introduction-container-row">
                <div class="hero-introduction-container">
                    <h1>JOVINHO IA</h1>
                    <p>O guia inteligente de filtros e lembretes na câmera do seu celular</p>
                    <p class="introduction-link">Saiba mais<a href="./efeitos.html"><img src={iconeAvancar} alt="icone-avancar"></img></a></p>
                    <div class="desenvolvido-gembyte">
                        <p class="desenvolvido-gembyte-topo">Desenvolvido por</p>
                        <p class="gembyte-logo-nome">GemByte</p>
                    </div>
                </div>
                <div class="celular-icones-container"> 
                    <img src={celularIcones} alt="celular-icones-hero"></img>
                </div>
            </div>
        </section>
    )
}

export default Hero