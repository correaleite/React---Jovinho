import JovinhoComFundo from '../assets/home/Jovinho-com-fundo.svg'

function JovinhoIA () {
    return (
        <div class="jovinho-ia-container">
            <div class="jovinho-ia-conteudo">
                <div class="jovinho-ia-conteudo-cm2">
                    <h3>Jovinho IA</h3>
                    <h1>Conhença Jovinho, seu parceiro de câmera</h1>
                    <h3 class="h3-dificuldade">Dificuldade em tirar fotos boas e lembrar coisas?</h3>
                    <p class="jovinho-ia-conteudo-cm2-p-cima">Jovinho te ensinará sobre os recursos e funcionalidades dentro da câmera. </p>
                    <p class="jovinho-ia-conteudo-cm2-p-baixo">Aperfeiçoe suas fotos com as sugestões dele e crie lembretes por meio das suas fotos</p>
                </div>
                <img src={JovinhoComFundo} alt="jovinho-com-fundo"></img>
            </div>
        </div>
    )
}

export default JovinhoIA