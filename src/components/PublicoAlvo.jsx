import PublicoAlvoImg from '../assets/home/publico-alvo.jpg'

function PublicoAlvo () {
    return (
            <section class="section-publico-alvo" id="publico-alvo">
        <div class="publico-container">
            <div class="publico-conteudo">
                <div class="publico-conteudo-cm2">
                    <h1>Público-Alvo</h1>
                    <p class="publico-conteudo-cm2-p-cima">A solução beneficia usuários de smartphones, estudantes e profissionais que utilizam câmeras para registrar informações, documentos e momentos importantes.</p>
                    <p class="publico-conteudo-cm2-p-baixo">O Jovinho facilita esse processo, orientando fotos, sugerindo melhorias e criando lembretes, tornando a câmera mais prática e inteligente.</p>
                </div>
                <img src={PublicoAlvoImg} alt="publico-alvo"></img>
            </div>
         </div>

    </section>
    )
}

export default PublicoAlvo