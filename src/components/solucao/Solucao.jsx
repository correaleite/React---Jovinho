import JovinhoIA from "./JovinhoIA"
import CardsEfeitos from "./CardsEfeitos"
import IdentificacaoFiltros from "./IdentificacaoFiltros"
import LembreteFotos from "./LembreteFotos"

function Solucao () {
    return (
        <section className="bg-white-obscure" id="solucao">
            <JovinhoIA />
            <CardsEfeitos />
            <IdentificacaoFiltros />
            <LembreteFotos />
        </section>
    )
}

export default Solucao