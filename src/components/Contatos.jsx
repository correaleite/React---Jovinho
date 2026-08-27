import LogoContatos from '../assets/JOVI-icon.png';
import AvaliacaoEstrelas from './AvaliacaoEstrelas';

function Contatos () {
    const notasDoJovinho = [5, 4, 5, 3, 4, 5, 4, 5, 4, 5, 5, 5, 3, 5, 5, 4, 5];
    return (
        
         <section class="section-contato" id="contato">

        <h1>Contatos</h1>
        <div class="contatos">
            <ul class="contatos-list">
                <li><p>Telefone: <a href="#">(11) 2647-7527</a></p></li>
                <li><p>Email: <a href="#">Jovi@contatos.com.br</a></p></li>
            </ul>
        </div>
        <div className="card-notaJovinho">
            <h3>Jovinho IA</h3>
            <AvaliacaoEstrelas notas={notasDoJovinho} />
        </div>
        <img src={LogoContatos} alt="jovi-logo-contatos"></img>

    </section>
    )
}

export default Contatos