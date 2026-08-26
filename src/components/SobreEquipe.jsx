import LogoGembyte from '../assets/home/logo-gembyte.svg';
import TimeFoto from '../assets/home/membros.svg';


function SobreEquipe () {
    return (
        <>
            <div class="titulo-nos-logo">  
            <h1 class="titulo-nos">Conheça Nossa Equipe</h1>
            <div class="logo">
                <img src={LogoGembyte} alt="Logo-GemByte"></img>
                <h2> GemByte </h2>
            </div>
        </div>  
        <div class="equipe">
            <h1>Nós somos a GemByte</h1>
            <div class="div-equipe-p">
                <p>Somos uma empresa de três membros, criada em 2026. Buscamos uma nota 10 da Jovi.</p>
            </div>
            <img src={TimeFoto} alt="Time-foto"></img>
        </div>
        </>
    )
}

export default SobreEquipe