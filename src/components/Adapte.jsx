import CelularMomento from '../assets/home/celular-momento.svg'

function Adapte () {
    return (
            <div class="container-adapte-se">
            <div class="adapt-container">
                <h3>Identificação e Filtro Inteligentes</h3>
                <h1>Sugestões de filtros <br></br>feito pela IA</h1>
                <div class="p-adapt-div">
                    <p>Jovinho consegue melhorar suas fotos automaticamente <br></br>aplicando filtros e muito mais</p>
                </div>
                <div class="adapt-imgs-container-row">
                    <div class="filtros-container-grid">
                            <div class="filtro">
                                <p>Raio de sol</p>
                                <img class="filtro-raio" src={CelularMomento} alt="celular-momento"></img>
                            </div>
                            <div class="filtro">
                                <p>Tremor</p>
                                <img class="filtro-tremor" src={CelularMomento}  alt="celular-momento"></img>
                            </div>
                            <div class="filtro">
                                <p>Âmbar</p>
                                <img class="filtro-ambar" src={CelularMomento} alt="celular-momento"></img>
                            </div>
                            <div class="filtro">
                                <p>Sombra</p>
                                <img class="filtro-sombra" src={CelularMomento}  alt="celular-momento"></img>
                            </div>
                            <div class="filtro">
                                <p>Cristal</p>
                                <img class="filtro-cristal" src={CelularMomento}  alt="celular-momento"></img>
                            </div>
                            <div class="filtro">
                                <p>Brisa</p>
                                <img class="filtro-brisa" src={CelularMomento}  alt="celular-momento"></img>
                            </div>
                    </div>
                    <div class="adapt-img-padrao-container">
                        <img src={CelularMomento}  alt="celular-momento"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adapte