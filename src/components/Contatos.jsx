import LogoContatos from '../assets/JOVI-icon.png';

function Contatos () {
    return (
         <section class="section-contato" id="contato">

        <h1>Contatos</h1>
        <div class="contatos">
            <ul class="contatos-list">
                <li><p>Telefone: <a href="#">(11) 2647-7527</a></p></li>
                <li><p>Email: <a href="#">Jovi@contatos.com.br</a></p></li>
            </ul>
        </div>
        <img src={LogoContatos} alt="jovi-logo-contatos"></img>

    </section>
    )
}

export default Contatos