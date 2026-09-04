import PublicoAlvoImg from '../assets/home/publico-alvo.jpg'

function PublicoAlvo () {
    return (
     <section className="min-h-[90vh]" id="publico-alvo">
        <div className="min-h-[90vh] flex flex-col items-center justify-center px-s100 py-s100 bg-white-obscure max-[1024px]:px-s50">
            <div className="w-full flex items-center justify-center max-[1024px]:flex-col">
            <div className="w-4/5 flex flex-col gap-s10 max-[1024px]:w-full">
                <h1 className="text-[7vmin] text-lighter-dark text-balance mb-s30 font-bold">Público-Alvo</h1>
                <p className="mt-s30 text-[3vmin] font-medium text-gray w-4/5 max-[1024px]:w-full max-[680px]:text-[4vmin]">A solução beneficia usuários de smartphones, estudantes e profissionais que utilizam câmeras para registrar informações, documentos e momentos importantes.</p>
                <p className="mt-s20 pb-s40 text-[3vmin] font-medium text-gray w-4/5 max-[1024px]:w-full max-[680px]:text-[4vmin]">O Jovinho facilita esse processo, orientando fotos, sugerindo melhorias e criando lembretes, tornando a câmera mais prática e inteligente.</p>
            </div>
            <img src={PublicoAlvoImg} alt="publico-alvo" className="w-[35%] rounded-[10px] max-[1024px]:w-1/2" />
            </div>
        </div>
     </section>
    )
}

export default PublicoAlvo