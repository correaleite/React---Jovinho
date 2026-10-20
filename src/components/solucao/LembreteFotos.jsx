import HomemClique from '/src/assets/home/homem-clique.svg';
import CelularClique from '/src/assets/home/celular-clique.svg';
import MulherClique from '/src/assets/home/mulher-clique.svg';
import useFadeIn from '/src/hooks/useFadeIn';

function LembreteFotos () {
    const [refTitulo, fadeTitulo] = useFadeIn(0.15);
    const [refTexto, fadeTexto] = useFadeIn(0.15);
    const [refHomem, fadeHomem] = useFadeIn(0.15);
    const [refCelular, fadeCelular] = useFadeIn(0.15);
    const [refMulher, fadeMulher] = useFadeIn(0.15);

    const tamanhoImagem = "mt-s40 mb-s70 w-18/100 max-[1024px]:mb-0 max-[1024px]:w-3/10 max-[680px]:w-3/10";

    return (
        <div className="min-h-screen bg-white px-s100 max-[1024px]:px-s70" id="lembrete-fotos">
            <div className="text-center pt-s100">
                <div ref={refTitulo} className={fadeTitulo}>
                    <h3 className="text-gray mb-s10 font-bold">Lembrete por Fotos</h3>

                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold text-9v text-lighter-dark mb-s30">Memorize em<br />Poucos Cliques</h1>
                    </div>
                </div>

                <div ref={refTexto} className={`flex flex-col items-center justify-center delay-200 ${fadeTexto}`}>
                    <p className="text-2p5v font-medium text-gray max-[1024px]:text-3v max-[680px]:text-4v">Tire fotos de coisas importantes, e seu<br />celular lembrará para você.</p>
                </div>

                <div className="flex justify-center gap-s30 w-full pb-16">
                    <div ref={refHomem} className={`${tamanhoImagem} delay-400 ${fadeHomem}`}>
                        <img src={HomemClique} loading='lazy' alt="homem-clique" className="w-full transition duration-500 hover:scale-105"/>
                    </div>
                    <div ref={refCelular} className={`${tamanhoImagem} delay-600 ${fadeCelular}`}>
                        <img src={CelularClique} loading='lazy' alt="celular-clique" className="w-full"/>
                    </div>
                    <div ref={refMulher} className={`${tamanhoImagem} delay-800 ${fadeMulher}`}>
                        <img src={MulherClique} loading='lazy' alt="mulher-clique" className="w-full transition duration-500 hover:scale-105"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LembreteFotos