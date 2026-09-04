import LembreteCelularImg from '../assets/home/LembreteCelular.svg'

function LembreteCelular () {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center pt-s30 px-s100 pb-s100 max-[1024px]:pt-s100">
            <div className="w-full flex items-center justify-around gap-s50 max-[1024px]:flex-col-reverse max-[1024px]:justify-center">
                <img src={LembreteCelularImg} alt="lembrete-celular" className="w-[28%] max-[1024px]:w-1/2 max-[680px]:w-[75%]" />
                <div className="w-[55%] flex flex-col gap-s10 max-[1024px]:w-full max-[1024px]:items-center max-[1024px]:text-center">
                <h3 className="text-gray flex font-bold">Agende e lembre</h3>
                <h1 className="text-[7vmin] font-bold text-lighter-dark text-balance mb-s30 max-[1024px]:text-center">Lembrete pelas fotos</h1>
                <p className="text-[3vmin] font-medium text-gray w-4/5 max-[1024px]:mt-1.25 max-[1024px]:w-4/5 max-[680px]:w-full max-[680px]:text-[4vmin]">Transforme suas fotos em anotações da sua agenda</p>
                <p className="mt-s20 pb-s40 text-[3vmin] font-medium text-gray w-4/5 max-[1024px]:w-4/5 max-[680px]:w-full max-[680px]:text-[4vmin]">Jovinho consegue reconhecer fotos e transferi-las automaticamente para seus lembretes</p>
                </div>
            </div>
        </div>
    )
}

export default LembreteCelular