import CardSugestao from '../assets/home/celular-card-sugestao.svg';
import CardGuia from '../assets/home/celular-card-guia.svg';
import CardLembrete from '../assets/home/celular-card-lembrete.svg';
import CardEfeito from './CardEfeito';


function CardsEfeitos () {
    return (
<div className="min-h-screen flex items-center justify-center bg-white px-s100">
    <div className="grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-3 gap-s30 w-full my-s30 mx-auto">
        <CardEfeito imagem={CardSugestao} titulo="Sugestões de filtros e dicas nas fotos." descricao="Modo foto que oferece diversos meios de melhorar a imagem." />
        <CardEfeito imagem={CardGuia} titulo="Fale com o seu guia inteligente dentro da câmera." descricao="Um assistente que te ajudará a melhorar as suas fotos e memorizar por você." />
        <div className="flex justify-center bg-white-obscure w-full rounded-2xl flex-wrap px-s20 lg:px-s40 col-span-1 mobile:col-span-2 lg:col-span-1 text-center mobile:text-left lg:max-h-none transition-[.5s] hover:scale-[1.03]">
            <h3 className="text-4v mt-s30 font-bold">Crie lembretes pelas suas fotos.</h3>
            <p className="text-3v lg:text-2p5v font-medium mt-s10">Fotos que se transformam em agendas para você.</p>
            <div className="bottom-0 w-full mobile:w-68/100 lg:w-4/5 pt-s30 mt-auto">
                <img className="w-65/100 mobile:w-53/100 lg:w-full mx-auto" src={CardLembrete} loading='lazy'  alt="card-lembrete" />
            </div>
        </div>
    </div>
</div>
    )
}

export default CardsEfeitos