
function CardMembros (props) {
    return (
       <div className="w-full">
                        <img src={props.imagem} loading='lazy'  alt="Foto-Antônio" className="w-2/5 mx-auto transition duration-500 hover:scale-110 mb-s20 max-[1024px]:w-3/10" />
                        <h2 className="font-medium text-6v mt-s10">{props.nome}</h2>
                        <h3 className="font-medium my-s10 text-gray">{props.funcao}</h3>
                        <div className="flex justify-center items-center">
                            <p className="w-4/5 text-3v max-[1024px]:w-1/2 max-[1024px]:text-4v">{props.descricao}</p>
                        </div>
                    </div>
    )
}

export default CardMembros