import LogoContatos from '/src/assets/JOVI-icon.png';
import IconeEmail from '/src/assets/home/envelope-regular-full.svg'
import IconeTelefone from '/src/assets/home/phone-solid-full.svg'
import AvaliacaoEstrelas from './AvaliacaoEstrelas';
import useFadeIn from '/src/hooks/useFadeIn';

function Contatos () {
    const notasDoJovinho = [5, 4, 5, 3, 4, 5, 4, 5, 4, 5, 5, 5, 3, 5, 5, 4, 5];

    const [refTitulo, fadeTitulo] = useFadeIn(0.15);
    const [refCard, fadeCard] = useFadeIn(0.15);
    const [refRodape, fadeRodape] = useFadeIn(0.15);

    return (
        <section className="min-h-80vh px-s80 flex flex-col items-center justify-between bg-white" id="contato">
            <h1 ref={refTitulo} className={`text-5v mt-s100 font-medium ${fadeTitulo}`}>Entre em contato conosco</h1>
            <div ref={refCard} className={`flex flex-col items-center justify-center bg-white-obscure w-4/5 py-s30 rounded-4xl delay-200 max-lg:mt-s30 ${fadeCard}`}>
                <ul className="grid grid-cols-2 gap-s90 max-lg:grid-cols-1">
                <li>
                    <div className="flex flex-col justify-around h-full items-center text-center text-4v max-[1024px]:text-5v">
                        <img src={IconeTelefone} loading='lazy' alt="iconeTelefone" className='w-1/2 max-lg:w-1/3' />
                        <a href="#" className=" text-3v transition duration-300 hover:text-blue max-[1024px]:text-4v">(11) 2647-7527</a>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col justify-around h-full items-center text-center text-4v max-[1024px]:text-5v">
                        <img src={IconeEmail} loading='lazy' alt="iconeEmail"  className='w-1/2 max-lg:w-1/3' />
                        <a href="#" className=" text-3v transition duration-300 hover:text-blue max-[1024px]:text-4v">Jovi@contatos.com.br</a>
                    </div>
                </li>
                </ul>
            </div>
            <div ref={refRodape} className={`flex justify-center gap-s80 delay-400 max-lg:mt-s30 ${fadeRodape}`}>
                <div className="card-notaJovinho">
                    <h3>Jovinho IA</h3>
                    <AvaliacaoEstrelas notas={notasDoJovinho} />
                </div>
                <img src={LogoContatos} loading='lazy'  alt="jovi-logo-contatos" className="w-7/100 mb-s50 rounded-lg max-[1024px]:w-15/100 max-[1024px]:rounded-md" />
            </div>
        </section>
    )
}

export default Contatos