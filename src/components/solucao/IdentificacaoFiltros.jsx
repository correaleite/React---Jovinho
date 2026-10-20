import MeninaMelhorFoto from '/src/assets/home/menina-melhor-foto.svg';
import useFadeIn from '/src/hooks/useFadeIn';

function IdentificacaoFiltros () {
    const [refTitulo, fadeTitulo] = useFadeIn(0.15);
    const [refTexto, fadeTexto] = useFadeIn(0.15);
    const [refImagem, fadeImagem] = useFadeIn(0.15);

    return (
        <div className="min-h-screen bg-white-obscure px-s100 max-[1024px]:px-s60" id="identificacao-filtros">
            <div className="flex flex-col items-center text-center pt-s100">
                <div ref={refTitulo} className={fadeTitulo}>
                    <h3 className="text-gray mb-s20 font-bold ">Identificação e Filtro Inteligentes</h3>
                    <h1 className="font-bold text-9v text-lighter-dark mb-s30">Faça as melhores fotos</h1>
                </div>

                <div ref={refTexto} className={`flex flex-col items-center justify-center delay-200 ${fadeTexto}`}>
                    <p className="text-2p5v font-medium text-gray max-[1024px]:text-3v max-[680px]:text-4v">Receba sugestões de como melhorar sua foto e tenha erros corrijos pelo<br />próprio guia inteligente integrado na câmera</p>
                </div>

                <div ref={refImagem} className={`w-full flex justify-center delay-400 ${fadeImagem}`}>
                    <img src={MeninaMelhorFoto} loading='lazy' alt="menina-melhor-foto" className="mt-s10 mb-s70 w-3/10 transition duration-500 hover:scale-105 max-[1024px]:mb-0 max-[1024px]:w-1/2 max-[680px]:w-7/10"/>
                </div>
            </div>
        </div>
    )
}

export default IdentificacaoFiltros