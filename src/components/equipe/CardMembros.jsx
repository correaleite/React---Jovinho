import useFadeIn from '/src/hooks/useFadeIn';

function CardMembros (props) {
    const [ref, fade] = useFadeIn(0.15);

    return (
        <div ref={ref} className={`w-full ${props.delay} ${fade}`}>
            <img src={props.imagem} loading='lazy' alt={`Foto-${props.nome}`} className="w-2/5 mx-auto transition duration-500 hover:scale-110 mb-s20 max-[1024px]:w-3/10" />
            <h2 className="font-medium text-5v mt-s10">{props.nome}</h2>
            <h3 className="font-medium my-s10 text-4v text-gray">{props.funcao}</h3>
            <div className="flex justify-center items-center">
                <p className="w-4/5 text-3v max-[1024px]:w-1/2 max-[1024px]:text-4v">{props.descricao}</p>
            </div>
        </div>
    )
}

export default CardMembros