import CelularAgua from '../assets/home/celular-agua-fotos.png'

function HeroGaleria () {
    return (
        <div className="min-h-screen px-s80 flex items-center gap-s80 w-full max-[1024px]:min-h-[80vh] max-[1024px]:flex-col-reverse max-[1024px]:gap-s30">
            <img src={CelularAgua} loading='lazy'  className="w-[40%] max-[1024px]:w-[60%]" />
            <h1 className="mb-s100 font-bold max-[1024px]:text-center max-[1024px]:text-[7vmin] max-[1024px]:pt-s60 max-[1024px]:mb-0">Galeria de<br />Imagens e Ilustrações</h1>
        </div>
    )
}

export default HeroGaleria