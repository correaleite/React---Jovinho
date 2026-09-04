import FotoMembro1 from '../assets/home/FotoMembro-1.svg';
import FotoMembro2 from '../assets/home/FotoMembro-2.svg';
import FotoMembro3 from '../assets/home/FotoMembro-3.svg';


function Membros () {
    return (
        <div className="min-h-screen bg-white-obscure">
            <div className="text-center pb-s100">
                <div>
                    <h1 className="text-[9vmin] text-lighter-dark pt-s60 pb-s40 font-bold">Equipe</h1>
                    <h3 className="text-gray font-semibold mb-s50">Conheça os membros da GemByte</h3>
                </div>
                <div className="grid grid-cols-3 gap-s30 max-[1024px]:grid-cols-1 max-[1024px]:gap-s50">
                    <div className="w-full">
                        <img src={FotoMembro1} loading='lazy'  alt="Foto-Antônio" className="w-[40%] mx-auto transition duration-500 hover:scale-110 mb-s20 max-[1024px]:w-[30%]" />
                        <h2 className="font-medium text-[6vmin] mt-s10">Antônio</h2>
                        <h3 className="font-medium my-s10 text-gray">Front End e Back End</h3>
                        <div className="flex justify-center items-center">
                            <p className="w-4/5 text-[3vmin] max-[1024px]:w-1/2 max-[1024px]:text-[4vmin]">Responsável pelo código de Front e Back End do site</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={FotoMembro3} loading='lazy'  alt="Foto-Lucas" className="w-[40%] mx-auto transition duration-500 hover:scale-110 mb-s20 max-[1024px]:w-[30%]" />
                        <h2 className="font-medium text-[6vmin] mt-s10">Lucas Carty</h2>
                        <h3 className="font-medium my-s10 text-gray">Líder, Front End</h3>
                        <div className="flex justify-center items-center">
                         <p className="w-4/5 text-[3vmin] max-[1024px]:w-1/2 max-[1024px]:text-[4vmin]">Responsável pela liderança, organização do time, e pelo código de Front End do site</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={FotoMembro2} loading='lazy'  alt="Foto-Gabriel" className="w-[40%] mx-auto transition duration-500 hover:scale-110 mb-s20 max-[1024px]:w-[30%]" />
                        <h2 className="font-medium text-[6vmin] mt-s10">Gabrie Leite</h2>
                        <h3 className="font-medium my-s10 text-gray">Front End e Back End</h3>
                        <div className="flex justify-center items-center">
                            <p className="w-4/5 text-[3vmin] max-[1024px]:w-1/2 max-[1024px]:text-[4vmin]">Responsável pelo código de Front e Back End do site</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Membros