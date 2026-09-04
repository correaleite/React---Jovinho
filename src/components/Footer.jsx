import AvaliacaoEstrelas from './AvaliacaoEstrelas';
import LogoInstagram from '../assets/home/instagram-brands-solid.png'
import LogoYoutube from '../assets/home/youtube-brands-solid.png'
import LogoLinkedin from '../assets/home/linkedin-brands-solid.png'


function Footer () {
    const notasDoJovinho = [5, 4, 5, 3, 4, 5, 4, 5, 4, 5, 5, 5, 3, 5, 5, 4, 5];
    return (
        <footer className="bg-dark-blue min-h-[60vh] px-s80 py-s60 flex flex-col justify-between max-[1024px]:px-s40 max-[680px]:px-s20 max-[680px]:py-s40">
            <div className="flex justify-between items-start gap-s40 max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:text-center max-[1024px]:gap-s50">
                
            
                <div>
                <h3 className="text-white text-[3vmin] font-semibold mb-s20">Navegação</h3>
                <ul className="flex flex-col gap-s10">
                    <li><a href="#solucao" className="text-white text-[2.2vmin] hover:text-blue transition duration-300">Solução</a></li>
                    <li><a href="#publico-alvo" className="text-white text-[2.2vmin] hover:text-blue transition duration-300">Público-Alvo</a></li>
                    <li><a href="#galeria" className="text-white text-[2.2vmin] hover:text-blue transition duration-300">Galeria</a></li>
                    <li><a href="#nossa-equipe" className="text-white text-[2.2vmin] hover:text-blue transition duration-300">Nossa Equipe</a></li>
                    <li><a href="#contato" className="text-white text-[2.2vmin] hover:text-blue transition duration-300">Contato</a></li>
                    <li><a href="#login" className="text-white text-[2.2vmin] hover:text-blue transition duration-300">Login</a></li>
                </ul>
                </div>

                <div className=' w-[10%] max-mobile:w-full'>
                    <h3 className="text-white text-[3vmin] font-semibold mb-s20">Siga-nos</h3>
                    <div className="flex w-full gap-s10 justify-start max-[1024px]:justify-center">
                        <a href="https://www.instagram.com/jovi.brasil" target='_blank' className=' w-[50%] max-mobile:w-[10%]'>
                            <span><img src={LogoInstagram} className="w-full" alt="LogoInstagram" loading='lazy' /></span>
                        </a>
                        <a href="https://www.youtube.com/@Jovi.Brasil" target='_blank' className=' w-[50%]  max-mobile:w-[10%]'>
                            <span><img src={LogoYoutube} className="w-full" alt="LogoYoutube" loading='lazy' /></span>
                        </a>
                        <a href="https://www.linkedin.com/company/jovi-mobile/" target='_blank'className=' w-[50%]  max-mobile:w-[10%]'>
                            <span><img src={LogoLinkedin} className="w-full" alt="LogoLinkedin" loading='lazy' /></span>
                        </a>
                    </div>
                </div>

           
                <div>
                <h3 className="text-white text-[3vmin] font-semibold mb-s20">Contatos</h3>
                <ul className="flex flex-col gap-s10">
                    <li className="text-white text-[2.2vmin]">Telefone: (11) 2647-7527</li>
                    <li className="text-white text-[2.2vmin]">Email: Jovi@contatos.com.br</li>
                </ul>
                </div>

        
                <div className="flex flex-col items-center gap-s30">
                <div className="card-notaJovinho">
        
                    <h3 className="text-white text-[3vmin] font-semibold mb-s10">Jovinho IA</h3>
                    <AvaliacaoEstrelas notas={notasDoJovinho} />
                </div>
                </div>

            </div>

            <div className="mt-s50 pt-s30 border-t border-white/20 text-center">
                <p className="text-white/70 text-[1.8vmin]">© 2026 GemByte. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer