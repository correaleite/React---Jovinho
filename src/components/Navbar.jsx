import circleUserRegularFull from '../assets/home/circle-user-regular-full.svg'

function Navbar () {
    return (
            <header class="header-hero">
                    <h1>JOVI</h1>
                    <nav>
                        <ul class="menu-list">
                            <li><a href="#solucao" class="menu-list-item">Solução</a></li>
                            <li><a href="#publico-alvo" class="menu-list-item">Público-Alvo</a></li>
                            <li><a href="#galeria" class="menu-list-item">Galeria</a></li>
                            <li><a href="#nossa-equipe" class="menu-list-item">Nossa Equipe</a></li>
                            <li><a href="#contato" class="menu-list-item">Contato</a></li>
                        </ul>
                    </nav>
                    <a class="login-botao" href="#login"><img  src={circleUserRegularFull} alt="circle-user"></img></a>
            </header>
    )
}

export default Navbar