import JovinhoDicaImg from '../assets/home/JovinhoDicaCelular.svg'

function JovinhoDica () {
    return (
            <div class="jovinho-dica-container">
            <div class="jovinho-dica-conteudo">
                <div class="jovinho-dica-conteudo-cm2">
                    <h3>Assistente Inteligente</h3>
                    <h1>O Seu Guia Pessoal</h1>
                    <p class="jovinho-dica-conteudo-cm2-p-cima">Jovinho te ensinará como usar todas as funções disponiveis da câmera.</p>
                    <p class="jovinho-dica-conteudo-cm2-p-baixo">Ele sempre vai estar a sua disposição quando precisar de ajuda.</p>
                </div>
                <img src={JovinhoDicaImg} alt="jovinho-dica-celular"></img>
            </div>
         </div>
    )
}

export default JovinhoDica