import MeninaMelhorFoto from '../assets/home/menina-melhor-foto.svg';

function IdentificacaoFiltros () {
    return (
           <div class="identificacao-filtros" id="identificacao-filtros">
                <div class="identificacao-filtros-container">
                    <h3>Identificação e Filtro Inteligentes</h3>
                    <h1>Faça as melhores fotos</h1>
                    <div class="p-identificacao-filtros-div">
                        <p>Receba sugestões de como melhorar sua foto e tenha erros corrijos pelo<br></br> próprio guia inteligente integrado na câmera</p>
                    </div>
                    <img src={MeninaMelhorFoto} alt="menina-melhor-foto"></img>
                </div>
            </div>
    )
}

export default IdentificacaoFiltros