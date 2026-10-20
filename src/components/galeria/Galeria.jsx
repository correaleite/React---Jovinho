import HeroGaleria from './HeroGaleria'
import JovinhoDica from './JovinhoDica'
import LembreteCelular from './LembreteCelular'
import Adapte from './Adapte'

function Galeria () {
    return (
        <section class="section-galeria" id="galeria">
            <HeroGaleria />
            <JovinhoDica />
            <LembreteCelular />
            <Adapte />
        </section>
    )
}

export default Galeria