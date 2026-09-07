
function CardEfeito (props) {
    return (
        <div className="flex justify-center bg-white-obscure w-full rounded-[10px] flex-wrap px-s20 lg:px-s40 transition-[.5s] hover:scale-[1.03]">
            <h3 className="text-[4vmin] mt-s30 font-bold">{props.titulo}</h3>
            <p className="text-[3vmin] lg:text-[2.5vmin] font-medium mt-s10">{props.descricao}</p>
            <div className="bottom-0 w-full mobile:w-[68%] lg:w-[80%] pt-s30 mt-auto">
                <img className="w-[65%] mobile:w-[85%] lg:w-full mx-auto" src={props.imagem} loading='lazy'  alt="card-guia" />
            </div>
        </div>
    )
}

export default CardEfeito