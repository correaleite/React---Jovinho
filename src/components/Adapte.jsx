import CelularMomento from '../assets/home/celular-momento.svg'

function Adapte () {
    return (
        <div className="min-h-screen px-s90 bg-white-obscure">
            <div className="text-center pt-s90 pb-s90">
                <h3 className="text-gray pb-s30">Identificação e Filtro Inteligentes</h3>
                <h1 className="font-bold text-[9vmin] text-lighter-dark mb-s30">Sugestões de filtros <br />feito pela IA</h1>
                <div className="flex flex-col items-center justify-center">
                <p className="text-[2.5vmin] font-medium text-gray max-[1024px]:text-[3vmin]">Jovinho consegue melhorar suas fotos automaticamente <br />aplicando filtros e muito mais</p>
                </div>
                <div className="flex flex-row items-end justify-center w-full mt-s50 gap-s30 max-[1024px]:flex-col">
                    <div className="grid grid-cols-3 w-[40%] gap-s30 max-[1024px]:w-full max-[1024px]:mx-auto max-[680px]:grid-cols-2">
                        <div className="w-full transition duration-500 hover:scale-110">
                            <p className="text-strong-dark text-[2.5vmin] font-bold">Raio de sol</p>
                        <img className="mt-s10 w-full brightness-[1.6]" src={CelularMomento} loading='lazy'  alt="celular-momento" />
                        </div>
                        <div className="w-full transition duration-500 hover:scale-110">
                            <p className="text-strong-dark font-bold text-[2.5vmin]">Tremor</p>
                        <img className="mt-s10 w-full brightness-[1.1] contrast-[1.3]" src={CelularMomento} loading='lazy'  alt="celular-momento" />
                        </div>
                        <div className="w-full transition duration-500 hover:scale-110">
                            <p className="text-strong-dark font-bold text-[2.5vmin]">Âmbar</p>
                        <img className="mt-s10 w-full brightness-[1.3] contrast-[1.2]" src={CelularMomento} loading='lazy'  alt="celular-momento" />
                        </div>
                        <div className="w-full transition duration-500 hover:scale-110">
                            <p className="text-strong-dark font-bold text-[2.5vmin]">Sombra</p>
                        <img className="mt-s10 w-full grayscale" src={CelularMomento} loading='lazy'  alt="celular-momento" />
                        </div>
                        <div className="w-full transition duration-500 hover:scale-110">
                            <p className="text-strong-dark font-bold text-[2.5vmin]">Cristal</p>
                        <img className="mt-s10 w-full brightness-[1.3] contrast-[0.7]" src={CelularMomento} loading='lazy'  alt="celular-momento" />
                        </div>
                        <div className="w-full transition duration-500 hover:scale-110">
                            <p className="text-strong-dark font-bold text-[2.5vmin]">Brisa</p>
                        <img className="mt-s10 w-full contrast-[1.4]" src={CelularMomento} loading='lazy'  alt="celular-momento" />
                        </div>
                    </div>
                <div>
                    <img src={CelularMomento} loading='lazy'  alt="celular-momento" className="w-[90%] max-[1024px]:w-full" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Adapte