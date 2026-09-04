import { useState } from "react";
import circleUserRegularFull from '../assets/home/circle-user-regular-full.svg'



function Navbar () {

    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between min-h-s90 bg-white px-s80 max-mobile:px-s40">
            <a href="#"><h1 className="font-bold text-[4.5vmin] max-mobile:text-[7vmin]">JOVI</h1></a>
            <nav className="max-mobile:hidden">
                <ul className="flex gap-s40 max-lg:gap-s20 mr-s30">
                <li><a href="#solucao" className="text-[2vmin] transition duration-500 hover:text-blue">Solução</a></li>
                <li><a href="#publico-alvo" className="text-[2vmin] transition duration-500 hover:text-blue">Público-Alvo</a></li>
                <li><a href="#galeria" className="text-[2vmin] transition duration-500 hover:text-blue">Galeria</a></li>
                <li><a href="#nossa-equipe" className="text-[2vmin] transition duration-500 hover:text-blue">Nossa Equipe</a></li>
                <li><a href="#contato" className="text-[2vmin] transition duration-500 hover:text-blue">Contato</a></li>
                </ul>
            </nav>
            <a className="transition duration-500 hover:scale-110 max-mobile:hidden" href="#login">
                <img className="w-s30" src={circleUserRegularFull} alt="circle-user" />
            </a>

            <button className="hidden max-mobile:flex flex-col gap-1.5 p-2" onClick={() => setMenuAberto(!menuAberto)}>
                <span className={`block w-7 h-0.75 bg-black transition duration-300 ${menuAberto ? "rotate-45 translate-y-2.25" : ""}`}></span>
                <span className={`block w-7 h-0.75 bg-black transition duration-300 ${menuAberto ? "opacity-0" : ""}`}></span>
                <span className={`block w-7 h-0.75 bg-black transition duration-300 ${menuAberto ? "-rotate-45 -translate-y-2.25" : ""}`}></span>
            </button>

            <div className={`
                fixed top-[80px] left-0 right-0 bg-white flex flex-col items-center gap-s30 py-s40
                transition-all duration-300 origin-top
                max-mobile:flex
                ${menuAberto ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
            `}>
                <a href="#solucao" onClick={() => setMenuAberto(false)} className="text-[4vmin] hover:text-blue">Solução</a>
                <a href="#publico-alvo" onClick={() => setMenuAberto(false)} className="text-[4vmin] hover:text-blue">Público-Alvo</a>
                <a href="#galeria" onClick={() => setMenuAberto(false)} className="text-[4vmin] hover:text-blue">Galeria</a>
                <a href="#nossa-equipe" onClick={() => setMenuAberto(false)} className="text-[4vmin] hover:text-blue">Nossa Equipe</a>
                <a href="#contato" onClick={() => setMenuAberto(false)} className="text-[4vmin] hover:text-blue">Contato</a>
                
                <a href="#login" onClick={() => setMenuAberto(false)} className="mt-s20">
                <img className="w-[40px]" src={circleUserRegularFull} alt="circle-user" />
                </a>
            </div>
        </header>
    )
}

export default Navbar