import iconeAvancar from '../assets/home/icone-avancar.svg'
import celularIcones from '../assets/home/celular-icones.svg'
import Navbar from './Navbar'


function Hero () {
    return (
        <section class="section-hero px-(--spacing-s80)">
            <Navbar />
            <div className="flex flex-row w-full max-mobile:flex-col pt-s90">
                <div className="min-h-75 w-[45%] pt-s100 flex items-start flex-col gap-s10 max-mobile:w-full">
                    <h1 className="font-bold">JOVINHO IA</h1>
                    <p>O guia inteligente de filtros e lembretes na câmera do seu celular</p>
                    <p className="mt-s70 text-[3vmin] flex">
                        Saiba mais
                        <a href="./efeitos.html">
                            <img className="pl-s10 pt-1.25" src={iconeAvancar} alt="icone-avancar" />
                        </a>
                    </p>
                    <div className="mt-auto flex self-start flex-col">
                        <p className="text-[2.5vmin] font-extrabold">Desenvolvido por</p>
                        <p className="text-gray font-light">GemByte</p>
                    </div>
                </div>
                <div className="w-[55%] flex flex-col max-mobile:w-[65%] self-center">
                    <img className="pt-s30 h-140" src={celularIcones} alt="celular-icones-hero" />
                </div>
            </div>
        </section>
    )
}

export default Hero