import LogoGembyte from '../assets/home/logo-gembyte.svg';
import TimeFoto from '../assets/home/membros.svg';


function SobreEquipe () {
    return (
        <>
            <div className="mt-s100">
                <h1 className="text-center text-[7vmin] font-bold">Conheça Nossa Equipe</h1>
                <div className="flex flex-col items-center justify-center mt-s60 text-center bg-[url(/img/home/fundo-titulo-nos.svg)] bg-no-repeat bg-cover py-s50">
                    <img src={LogoGembyte} alt="Logo-GemByte" className="w-60" />
                    <h2 className="text-lighter-dark text-[9vmin] font-semibold mt-s30">GemByte</h2>
                </div>
            </div>
            <div className="text-center mt-s70 mb-s10">
                <h1 className="font-bold my-s60 text-[9vmin] text-lighter-dark max-[1024px]:w-[90%] max-[1024px]:mx-auto">Nós somos a GemByte</h1>
                <div className="flex justify-center items-center mt-s50 mb-s70">
                    <p className="w-3/5 text-gray text-[3vmin] font-medium max-[1024px]:text-[4vmin]">Somos uma empresa de três membros, criada em 2026. Buscamos uma nota 10 da Jovi.</p>
                </div>
                <img src={TimeFoto} alt="Time-foto" className="mx-auto w-4/5 mb-s60 rounded-xs" />
            </div>
        </>
    )
}

export default SobreEquipe