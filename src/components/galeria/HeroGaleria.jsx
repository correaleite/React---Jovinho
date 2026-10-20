import CelularAgua from '/src/assets/home/celular-agua-fotos.png'
import useFadeIn from '/src/hooks/useFadeIn';

function HeroGaleria () {
    const [refImagem, fadeImagem] = useFadeIn(0.15);
    const [refTitulo, fadeTitulo] = useFadeIn(0.15);

    return (
        <div className="min-h-screen px-s80 flex items-center gap-s80 w-full max-[1024px]:min-h-80vh max-[1024px]:flex-col-reverse max-[1024px]:gap-s30">
            <img ref={refImagem} src={CelularAgua} loading='lazy' alt="celular-agua-fotos" className={`w-2/5 max-[1024px]:w-3/5 ${fadeImagem}`} />
            <h1 ref={refTitulo} className={`mb-s100 font-bold delay-200 max-[1024px]:text-center max-[1024px]:text-7v max-[1024px]:pt-s60 max-[1024px]:mb-0 ${fadeTitulo}`}>Galeria de<br />Imagens e Ilustrações</h1>
        </div>
    )
}

export default HeroGaleria