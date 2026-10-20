import useFadeIn from '/src/hooks/useFadeIn'

function CardEfeito (props) {
    const [ref, fade] = useFadeIn(0.15);

    return (
        <div ref={ref} className={`h-full ${fade} ${props.delay}`}>
            <div className="flex justify-center bg-white-obscure w-full h-full rounded-2xl flex-wrap px-s20 lg:px-s40 transition-[.5s] hover:scale-[1.03]">
                <h3 className="text-4v mt-s30 font-bold">{props.titulo}</h3>
                <p className="text-3v lg:text-2p5v font-medium mt-s10">{props.descricao}</p>
                <div className="bottom-0 w-full mobile:w-68/100 lg:w-4/5 pt-s30 mt-auto">
                    <img className="w-65/100 mobile:w-85/100 lg:w-full mx-auto" src={props.imagem} loading='lazy' alt="card-guia" />
                </div>
            </div>
        </div>
    )
}

export default CardEfeito