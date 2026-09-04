import LogoContatos from '../assets/JOVI-icon.png';
import AvaliacaoEstrelas from './AvaliacaoEstrelas';

function Contatos () {
    const notasDoJovinho = [5, 4, 5, 3, 4, 5, 4, 5, 4, 5, 5, 5, 3, 5, 5, 4, 5];
    return (
        <section className="min-h-[90vh] px-s80 flex flex-col items-center justify-between bg-white-obscure" id="contato">
            <h1 className="text-[9vmin] pt-s60 font-bold">Contatos</h1>
            <div className="flex flex-col justify-center items-center">
                <ul className="flex flex-col gap-s20">
                <li>
                    <p className="text-[4vmin] max-[1024px]:text-[5vmin]">
                    Telefone: <a href="#" className="text-blue underline text-[3vmin] max-[1024px]:text-[4vmin]">(11) 2647-7527</a>
                    </p>
                </li>
                <li>
                    <p className="text-[4vmin] max-[1024px]:text-[5vmin]">
                    Email: <a href="#" className="text-blue underline text-[3vmin] max-[1024px]:text-[4vmin]">Jovi@contatos.com.br</a>
                    </p>
                </li>
                </ul>
            </div>
            <div className="card-notaJovinho">
                <h3>Jovinho IA</h3>
                <AvaliacaoEstrelas notas={notasDoJovinho} />
            </div>
            <img src={LogoContatos} loading='lazy'  alt="jovi-logo-contatos" className="w-[7%] mb-s50 rounded-lg max-[1024px]:w-[15%] max-[1024px]:rounded-md" />
        </section>
    )
}

export default Contatos