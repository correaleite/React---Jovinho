import PublicoAlvoImg from '/src/assets/home/publico-alvo.jpg'
import useFadeIn from '/src/hooks/useFadeIn';

function PublicoAlvo () {
    const [refTexto, fadeTexto] = useFadeIn(0.15);
    const [refImagem, fadeImagem] = useFadeIn(0.15);

    return (
     <section className="min-h-90vh" id="publico-alvo">
        <div className="min-h-90vh flex flex-col items-center justify-center px-s100 py-s100 bg-white-obscure max-[1024px]:px-s50">
            <div className="w-full flex items-center justify-center max-[1024px]:flex-col">
            <div ref={refTexto} className={`w-4/5 flex flex-col gap-s10 max-[1024px]:w-full ${fadeTexto}`}>
                <h1 className="text-7v text-lighter-dark text-balance mb-s30 font-bold">Público-Alvo</h1>
                <p className="mt-s30 text-3v font-medium text-gray w-4/5 max-[1024px]:w-full max-[680px]:text-4v">A solução beneficia usuários de smartphones, estudantes e profissionais que utilizam câmeras para registrar informações, documentos e momentos importantes.</p>
                <p className="mt-s20 pb-s40 text-3v font-medium text-gray w-4/5 max-[1024px]:w-full max-[680px]:text-4v">O Jovinho facilita esse processo, orientando fotos, sugerindo melhorias e criando lembretes, tornando a câmera mais prática e inteligente.</p>
            </div>
            <img ref={refImagem} src={PublicoAlvoImg} alt="publico-alvo" className={`w-[35%] rounded-[10px] max-[1024px]:w-1/2 delay-200 ${fadeImagem}`} />
            </div>
        </div>
     </section>
    )
}

export default PublicoAlvo