import JovinhoComFundo from '../assets/home/Jovinho-com-fundo.svg'

function JovinhoIA () {
    return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center pt-s50 px-s80 max-lg:pb-s60">
    <div className="w-full flex items-center justify-center gap-s20 max-lg:flex-col">
        <div className="w-[60%] gap-s10 max-lg:w-full">
            <h3 className="text-gray flex font-bold">Jovinho IA</h3>
            <h1 className="mb-s30 text-lighter-dark font-bold">Conhença Jovinho, seu parceiro de câmera</h1>
            <h3 className="text-gray flex text-[3vmin] max-lg:text-[4.2vmin] font-bold">Dificuldade em tirar fotos boas e lembrar coisas?</h3>
            <p className="mt-s30 text-[3vmin] font-medium text-gray w-[80%] max-lg:text-[4vmin] max-lg:w-full">Jovinho te ensinará sobre os recursos e funcionalidades dentro da câmera. </p>
            <p className="mt-s20 pb-s40 text-[3vmin] font-medium text-gray w-[80%] max-lg:text-[4vmin] max-lg:w-full">Aperfeiçoe suas fotos com as sugestões dele e crie lembretes por meio das suas fotos</p>
        </div>
        <img className="w-[60%] max-lg:w-[80%]" src={JovinhoComFundo} loading='lazy'  alt="jovinho-com-fundo" />
    </div>
</div>
    )
}

export default JovinhoIA