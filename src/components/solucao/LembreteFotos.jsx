import HomemClique from '/src/assets/home/homem-clique.svg';
import CelularClique from '/src/assets/home/celular-clique.svg';
import MulherClique from '/src/assets/home/mulher-clique.svg';

function LembreteFotos () {
    return (
        <div className="min-h-screen bg-white px-s100 max-[1024px]:px-s70" id="lembrete-fotos">
            <div className="text-center pt-s100">
                <h3 className="text-gray mb-s10 font-bold">Lembrete por Fotos</h3>

                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold text-9v text-lighter-dark mb-s30">Memorize em<br />Poucos Cliques</h1>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="text-2p5v font-medium text-gray max-[1024px]:text-3v max-[680px]:text-4v">Tire fotos de coisas importantes, e seu<br />celular lembrará para você.</p>
                </div>

                <div className="flex justify-center gap-s30 w-full pb-16">
                    <img src={HomemClique} loading='lazy'  alt="celular-clique" className="mt-s40 mb-s70 w-18/100 transition duration-500 hover:scale-105 max-[1024px]:mb-0 max-[1024px]:w-3/10 max-[680px]:w-3/10"/>
                    <img src={CelularClique} loading='lazy'  alt="celular-clique" className="mt-s40 mb-s70 w-18/100 max-[1024px]:mb-0 max-[1024px]:w-3/10 max-[680px]:w-3/10"/>
                    <img src={MulherClique} loading='lazy'  alt="celular-clique" className="mt-s40 mb-s70 w-18/100 transition duration-500 hover:scale-105 max-[1024px]:mb-0 max-[1024px]:w-3/10 max-[680px]:w-3/10"/>
                </div>
            </div>
        </div>
    )
}

export default LembreteFotos