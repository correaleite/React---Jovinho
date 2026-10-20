import LogoGembyte from '/src/assets/home/logo-gembyte.svg';
import TimeFoto from '/src/assets/home/membros.svg';
import useFadeIn from '/src/hooks/useFadeIn';

function SobreEquipe () {
    const [refLogo, fadeLogo] = useFadeIn(0.15);
    const [refTitulo, fadeTitulo] = useFadeIn(0.15);
    const [refTexto, fadeTexto] = useFadeIn(0.15);
    const [refFoto, fadeFoto] = useFadeIn(0.15);

    return (
        <>
            <div className="text-center mt-s100 mb-s10">
                <div ref={refLogo} className={`flex flex-col items-center justify-center ${fadeLogo}`}>
                    <img src={LogoGembyte} alt="Logo-GemByte" className="w-60" />
                </div>
                <h1 ref={refTitulo} className={`font-bold my-s30 text-9v text-lighter-dark delay-200 max-[1024px]:w-9/10 max-[1024px]:mx-auto ${fadeTitulo}`}>Nós somos a GemByte</h1>
                <div ref={refTexto} className={`flex justify-center items-center mt-s40 mb-s70 delay-400 ${fadeTexto}`}>
                    <p className="w-3/5 text-gray text-3v font-medium max-[1024px]:text-4v">Somos uma empresa de três membros, criada em 2026.<br /> Buscamos uma nota 10 da Jovi.</p>
                </div>
                <img ref={refFoto} src={TimeFoto} alt="Time-foto" className={`mx-auto w-4/5 mb-s60 rounded-3xl delay-400 ${fadeFoto}`} />
            </div>
        </>
    )
}

export default SobreEquipe