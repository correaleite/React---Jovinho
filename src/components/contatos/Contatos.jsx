import IconeEmail from '/src/assets/home/envelope-regular-full.svg'
import IconeTelefone from '/src/assets/home/phone-solid-full.svg'
import MapaEmpresa from './MapaEmpresa';
import useFadeIn from '/src/hooks/useFadeIn';

function Contatos () {

    const [refTitulo, fadeTitulo] = useFadeIn(0.15);
    const [refCard, fadeCard] = useFadeIn(0.15);

    return (
        <section className="min-h-screen px-s80 flex flex-col items-center justify-between bg-white" id="contato">
            <h1 ref={refTitulo} className={`text-6v text-lighter-dark mt-s90 font-bold max-lg:text-center max-lg:text-7v ${fadeTitulo}`}>Entre em contato conosco</h1>
            <div ref={refCard} className={`flex flex-col items-center justify-center bg-white-obscure w-4/5 py-s30 mt-s30 rounded-4xl delay-200 ${fadeCard}`}>
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
            <MapaEmpresa />
        </section>
    )
}

export default Contatos