import FotoMembro1 from '/src/assets/home/FotoMembro-1.svg';
import FotoMembro2 from '/src/assets/home/FotoMembro-2.svg';
import FotoMembro3 from '/src/assets/home/FotoMembro-3.svg';
import CardMembros from './CardMembros';
import useFadeIn from '/src/hooks/useFadeIn';

function Membros () {
    const [refTitulo, fadeTitulo] = useFadeIn(0.15);

    return (
        <div className="min-h-screen bg-white-obscure">
            <div className="text-center pb-s100">
                <div ref={refTitulo} className={fadeTitulo}>
                    <h1 className="text-9v text-lighter-dark pt-s60 pb-s40 font-bold">Equipe</h1>
                    <h3 className="text-gray font-semibold mb-s70">Conheça os membros da GemByte</h3>
                </div>
                <div className="grid grid-cols-3 gap-s20 max-[1024px]:grid-cols-1 max-[1024px]:gap-s50">
                    <CardMembros imagem={FotoMembro1} nome="Antônio Almeida" funcao="Front End e Back End" descricao="Responsável pelo código de Front e Back End do site" delay="" />
                    <CardMembros imagem={FotoMembro3} nome="Lucas Carty" funcao="Líder, Front End" descricao="Responsável pela liderança, organização do time, e pelo código de Front End do site" delay="lg:delay-200" />
                    <CardMembros imagem={FotoMembro2} nome="Gabriel Leite" funcao="Front End e Back End" descricao="Responsável pelo código de Front e Back End do site" delay="lg:delay-400" />
                </div>
            </div>
        </div>
    )
}

export default Membros