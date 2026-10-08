import FotoMembro1 from '../assets/home/FotoMembro-1.svg';
import FotoMembro2 from '../assets/home/FotoMembro-2.svg';
import FotoMembro3 from '../assets/home/FotoMembro-3.svg';
import CardMembros from './CardMembros';


function Membros () {
    return (
        <div className="min-h-screen bg-white-obscure">
            <div className="text-center pb-s100">
                <div>
                    <h1 className="text-9v text-lighter-dark pt-s60 pb-s40 font-bold">Equipe</h1>
                    <h3 className="text-gray font-semibold mb-s50">Conheça os membros da GemByte</h3>
                </div>
                <div className="grid grid-cols-3 gap-s30 max-[1024px]:grid-cols-1 max-[1024px]:gap-s50">
                    <CardMembros imagem={FotoMembro1} nome="Antônio Almeida" funcao="Front End e Back End" descricao="Responsável pelo código de Front e Back End do site"  />
                    <CardMembros imagem={FotoMembro3} nome="Lucas Carty" funcao="Líder, Front End" descricao="Responsável pela liderança, organização do time, e pelo código de Front End do site"  />
                    <CardMembros imagem={FotoMembro2} nome="Gabriel Leite" funcao="Front End e Back End" descricao="Responsável pelo código de Front e Back End do site"  />
                </div>
            </div>
        </div>
    )
}

export default Membros