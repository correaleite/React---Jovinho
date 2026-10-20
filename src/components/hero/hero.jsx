import iconeAvancar from '/src/assets/home/icone-avancar.svg'
import celularIcones from '/src/assets/home/celular-icones.svg'
import Navbar from '../navbar/Navbar'


function Hero () {
    return (
        <section className="min-h-90vh px-s80">
            <Navbar />
            <div className="flex flex-row w-full max-mobile:flex-col pt-s90">
                <div className="min-h-75 w-45/100 pt-s100 flex items-start flex-col gap-s10 max-mobile:w-full">
                    <h1 className="font-bold max-md:text-6v max-sm:text-9v">JOVINHO IA</h1>
                    <p>O guia inteligente de filtros e lembretes na câmera do seu celular</p>
                    <p className="mt-s70 text-3v flex">
                        Saiba mais
                        <a href="/">
                            <img className="pl-s10 pt-1.25" src={iconeAvancar} alt="icone-avancar" />
                        </a>
                    </p>
                    <div className="mt-auto flex self-start flex-col">
                        <p className="text-2p5v font-extrabold">Desenvolvido por</p>
                        <p className="text-gray font-light">GemByte</p>
                    </div>
                </div>
                <div className="w-55/100 flex flex-col max-mobile:w-65/100 self-center">
                    <img className="pt-s30 h-140" src={celularIcones} alt="celular-icones-hero" />
                </div>
            </div>
        </section>
    )
}

export default Hero