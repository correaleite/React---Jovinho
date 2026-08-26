import HomemClique from '../assets/home/homem-clique.svg';
import CelularClique from '../assets/home/celular-clique.svg';
import MulherClique from '../assets/home/mulher-clique.svg';

function LembreteFotos () {
    return (
           <div class="lembrete-fotos" id="lembrete-fotos">
                <div class="lembrete-fotos-container">
                    <h3>Lembrete por Fotos</h3>
                    <div class="h1-lembrete-fotos-div">
                        <h1>Memorize em<br></br> Poucos Cliques</h1>
                    </div>
                    <div class="p-lembrete-fotos-div">
                        <p>Tire fotos de coisas importantes, e seu<br></br> celular lembrará para você.</p>
                    </div>
                    <div class="lembrete-fotos-img-row">
                        <img src={HomemClique} alt="celular-clique"></img>
                        <img class="img-celular-clique" src={CelularClique} alt="celular-clique"></img>
                        <img src={MulherClique} alt="celular-clique"></img>
                    </div>
                </div>
            </div>
    )
}

export default LembreteFotos