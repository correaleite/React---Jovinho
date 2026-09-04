import MeninaMelhorFoto from '../assets/home/menina-melhor-foto.svg';

function IdentificacaoFiltros () {
    return (
        <div className="min-h-screen bg-white-obscure px-s100 max-[1024px]:px-s60" id="identificacao-filtros">
            <div className="flex flex-col items-center text-center pt-s100">
                <h3 className="text-gray mb-s20 font-bold">Identificação e Filtro Inteligentes</h3>
                <h1 className="font-bold text-[9vmin] text-lighter-dark mb-s30">Faça as melhores fotos</h1>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-[2.5vmin] font-medium text-gray max-[1024px]:text-[3vmin] max-[680px]:text-[4vmin]">Receba sugestões de como melhorar sua foto e tenha erros corrijos pelo<br />próprio guia inteligente integrado na câmera</p>
                </div>
                <img src={MeninaMelhorFoto} loading='lazy'  alt="menina-melhor-foto" className="mt-s10 mb-s70 w-[30%] transition duration-500 hover:scale-105 max-[1024px]:mb-0 max-[1024px]:w-1/2 max-[680px]:w-[70%]"/>
            </div>
        </div>
    )
}

export default IdentificacaoFiltros