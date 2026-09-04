import CardSugestao from '../assets/home/celular-card-sugestao.svg';
import CardGuia from '../assets/home/celular-card-guia.svg';
import CardLembrete from '../assets/home/celular-card-lembrete.svg';


function CardsEfeitos () {
    return (
    <div className="min-h-screen flex items-center justify-center bg-white px-s100">
    <div className="grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-3 gap-s30 w-full my-s30 mx-auto">
        <div className="flex justify-center bg-white-obscure w-full rounded-[10px] flex-wrap px-s20 lg:px-s40 transition-[.5s] hover:scale-[1.03]">
            <h3 className="text-[4vmin] mt-s30 font-bold">Sugestões de filtros e dicas nas fotos.</h3>
            <p className="text-[3vmin] lg:text-[2.5vmin] font-medium mt-s10">Modo foto que oferece diversos meios de melhorar a imagem.</p>
            <div className="bottom-0 w-full mobile:w-[68%] lg:w-[80%] pt-s30 mt-auto">
                <img className="w-[65%] mobile:w-[85%] lg:w-full mx-auto" src={CardSugestao} loading='lazy'  alt="card-sugestao" />
            </div>
        </div>
        <div className="flex justify-center bg-white-obscure w-full rounded-[10px] flex-wrap px-s20 lg:px-s40 transition-[.5s] hover:scale-[1.03]">
            <h3 className="text-[4vmin] mt-s30 font-bold">Fale com o seu guia inteligente dentro da câmera.</h3>
            <p className="text-[3vmin] lg:text-[2.5vmin] font-medium mt-s10">Um assistente que te ajudará a melhorar as suas fotos e memorizar por você.</p>
            <div className="bottom-0 w-full mobile:w-[68%] lg:w-[80%] pt-s30 mt-auto">
                <img className="w-[65%] mobile:w-[85%] lg:w-full mx-auto" src={CardGuia} loading='lazy'  alt="card-guia" />
            </div>
        </div>
        <div className="flex justify-center bg-white-obscure w-full rounded-[10px] flex-wrap px-s20 lg:px-s40 col-span-1 mobile:col-span-2 lg:col-span-1 text-center mobile:text-left lg:max-h-none transition-[.5s] hover:scale-[1.03]">
            <h3 className="text-[4vmin] mt-s30 font-bold">Crie lembretes pelas suas fotos.</h3>
            <p className="text-[3vmin] lg:text-[2.5vmin] font-medium mt-s10">Fotos que se transformam em agendas para você.</p>
            <div className="bottom-0 w-full mobile:w-[68%] lg:w-[80%] pt-s30 mt-auto">
                <img className="w-[65%] mobile:w-[53%] lg:w-full mx-auto" src={CardLembrete} loading='lazy'  alt="card-lembrete" />
            </div>
        </div>
    </div>
</div>
    )
}

export default CardsEfeitos