import CelularMomento from '/src/assets/home/celular-momento.svg'
import useFadeIn from '/src/hooks/useFadeIn';

function CardFiltro ({ nome, classeImagem, delay }) {
    const [ref, fade] = useFadeIn(0.15);

    return (
        <div ref={ref} className={`${delay} ${fade}`}>
            <div className="w-full transition duration-500 hover:scale-110">
                <p className="text-strong-dark font-bold text-2p5v">{nome}</p>
                <img className={`w-full ${classeImagem}`} src={CelularMomento} loading='lazy' alt="celular-momento" />
            </div>
        </div>
    )
}

function Adapte () {
    const [refTitulo, fadeTitulo] = useFadeIn(0.15);
    const [refTexto, fadeTexto] = useFadeIn(0.15);
    const [refImagem, fadeImagem] = useFadeIn(0.15);

    return (
        <div className="min-h-screen px-s90 bg-white-obscure">
            <div className="text-center pt-s90 pb-s90">
                <div ref={refTitulo} className={fadeTitulo}>
                    <h3 className="text-gray pb-s30 font-bold">Identificação e Filtro Inteligentes</h3>
                    <h1 className="font-bold text-9v text-lighter-dark mb-s30">Sugestões de filtros <br />feito pela IA</h1>
                </div>

                <div ref={refTexto} className={`flex flex-col items-center justify-center delay-200 ${fadeTexto}`}>
                    <p className="text-2p5v font-medium text-gray max-[1024px]:text-3v">Jovinho consegue melhorar suas fotos automaticamente <br />aplicando filtros e muito mais</p>
                </div>

                <div className="flex flex-row items-end justify-center w-full mt-s50 gap-s30 max-[1024px]:flex-col">
                    <div className="grid grid-cols-3 w-2/5 gap-s30 max-[1024px]:w-full max-[1024px]:mx-auto max-[680px]:grid-cols-2">
                        <CardFiltro nome="Raio de sol" classeImagem="brightness-[1.6]" delay="" />
                        <CardFiltro nome="Tremor" classeImagem="brightness-[1.1] contrast-[1.3]" delay="delay-200" />
                        <CardFiltro nome="Âmbar" classeImagem="brightness-[1.3] contrast-[1.2]" delay="delay-400" />
                        <CardFiltro nome="Sombra" classeImagem="mt-s10 grayscale" delay="" />
                        <CardFiltro nome="Cristal" classeImagem="mt-s10 brightness-[1.3] contrast-[0.7]" delay="delay-200" />
                        <CardFiltro nome="Brisa" classeImagem="mt-s10 contrast-[1.4]" delay="delay-400" />
                    </div>
                    <div ref={refImagem} className={`delay-600 ${fadeImagem}`}>
                        <img src={CelularMomento} loading='lazy' alt="celular-momento" className="w-9/10 max-[1024px]:w-full max-lg:hidden"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adapte