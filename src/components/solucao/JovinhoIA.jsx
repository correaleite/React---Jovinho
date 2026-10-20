import JovinhoComFundo from '/src/assets/home/Jovinho-com-fundo.svg'
import useFadeIn from '/src/hooks/useFadeIn'

function JovinhoIA () {
    const [refTexto, fadeTexto] = useFadeIn();
    const [refImagem, fadeImagem] = useFadeIn();

    return (
    <div className="min-h-90vh flex flex-col items-center justify-center pt-s50 px-s80 max-lg:pb-s60">
    <div className="w-full flex items-center justify-center gap-s20 max-lg:flex-col">
        <div ref={refTexto} className={`w-3/5 gap-s10 max-lg:w-full ${fadeTexto}`}>
            <h3 className="text-gray flex font-bold">Jovinho IA</h3>
            <h1 className="mb-s30 text-lighter-dark font-bold max-md:text-6v">Conhença Jovinho, seu parceiro de câmera</h1>
            <h3 className="text-gray flex text-3v max-lg:text-4p2v font-bold max-md:text-4v">Dificuldade em tirar fotos boas e lembrar coisas?</h3>
            <p className="mt-s30 text-3v font-medium text-gray w-4/5 max-lg:text-4v max-lg:w-full ">Jovinho te ensinará sobre os recursos e funcionalidades dentro da câmera. </p>
            <p className="mt-s20 pb-s40 text-3v font-medium text-gray w-4/5 max-lg:text-4v max-lg:w-full">Aperfeiçoe suas fotos com as sugestões dele e crie lembretes por meio das suas fotos</p>
        </div>
        <img ref={refImagem} className={`w-3/5 max-lg:w-4/5 delay-200 ${fadeImagem}`} src={JovinhoComFundo} loading='lazy' alt="jovinho-com-fundo" />
    </div>
</div>
    )
}

export default JovinhoIA