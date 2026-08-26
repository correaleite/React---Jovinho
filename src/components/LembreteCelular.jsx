import LembreteCelularImg from '../assets/home/LembreteCelular.svg'

function LembreteCelular () {
    return (
            <div class="lembrete-celular-container">
            <div class="lembrete-celular-conteudo">
                <img src={LembreteCelularImg} alt="lembrete-celular"></img>
                <div class="lembrete-celular-conteudo-cm2">
                    <h3>Agende e lembre</h3>
                    <h1>Lembrete pelas fotos</h1>
                    <p class="lembrete-celular-conteudo-cm2-p-cima">Transforme suas fotos em anotações da sua agenda</p>
                    <p class="lembrete-celular-conteudo-cm2-p-baixo">Jovinho consegue reconhecer fotos e transferi-las automaticamente para seus lembretes</p>
                </div>
            </div>
         </div>
    )
}

export default LembreteCelular