import JovinhoDicaImg from '/src/assets/home/JovinhoDicaCelular.svg'
import useFadeIn from '/src/hooks/useFadeIn';

function JovinhoDica () {
    const [refTexto, fadeTexto] = useFadeIn(0.15);
    const [refImagem, fadeImagem] = useFadeIn(0.15);

    return (
        <div className="min-h-80vh flex flex-col items-center justify-center pt-s30 px-s100 max-[1024px]:pt-s100">
            <div className="w-full flex items-center justify-center max-[1024px]:flex-col">
                <div ref={refTexto} className={`w-55/100 flex flex-col gap-s10 max-[1024px]:w-full max-[1024px]:items-center max-[1024px]:text-center ${fadeTexto}`}>
                <h3 className="text-gray flex font-bold">Assistente Inteligente</h3>
                <h1 className="text-7v font-bold text-lighter-dark text-balance mb-s30 max-[1024px]:text-center">O Seu Guia Pessoal</h1>
                <p className="text-3v font-medium text-gray w-4/5 max-[1024px]:mt-1.25 max-[1024px]:w-4/5 max-[680px]:w-full max-[680px]:text-4v">Jovinho te ensinará como usar todas as funções disponiveis da câmera.</p>
                <p className="mt-s20 pb-s40 text-3v font-medium text-gray w-4/5 max-[1024px]:w-4/5 max-[680px]:w-full max-[680px]:text-4v">Ele sempre vai estar a sua disposição quando precisar de ajuda.</p>
                </div>
                <img ref={refImagem} src={JovinhoDicaImg} loading='lazy' alt="jovinho-dica-celular" className={`w-28/100 delay-200 max-[1024px]:w-1/2 max-[680px]:w-3/4 ${fadeImagem}`} />
            </div>
        </div>
    )
}

export default JovinhoDica