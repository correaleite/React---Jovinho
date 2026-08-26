import CardSugestao from '../assets/home/celular-card-sugestao.svg';
import CardGuia from '../assets/home/celular-card-guia.svg';
import CardLembrete from '../assets/home/celular-card-lembrete.svg';


function CardsEfeitos () {
    return (
         <div class="cards-jovinho">
            <div class="cards-efeitos-container-grid">
                    <div class="cards-efeitos">
                        <h3>Sugestões de filtros e dicas nas fotos.</h3>
                        <p>Modo foto que oferece diversos meios de melhorar a imagem.</p>
                        <div class="card-efeitos-img">
                            <img class="card-img-sugestao" src={CardSugestao} alt="card-sugestao"></img>
                        </div>
                    </div>
                    <div class="cards-efeitos">
                        <h3>Fale com o seu guia inteligente dentro da câmera.</h3>
                        <p>Um assistente que te ajudará a melhorar as suas fotos e memorizar por você.</p>
                        <div class="card-efeitos-img">
                            <img class="card-img-guia" src={CardGuia} alt="card-guia"></img>
                        </div>
                    </div>
                    <div class="cards-efeitos">
                        <h3>Crie lembretes pelas suas fotos.</h3>
                        <p>Fotos que se transformam em agendas para você.</p>
                        <div class="card-efeitos-img">
                            <img class="card-img-lembrete" src={CardLembrete} alt="card-lembrete"></img>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default CardsEfeitos