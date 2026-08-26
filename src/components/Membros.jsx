import FotoMembro1 from '../assets/home/FotoMembro-1.svg';
import FotoMembro2 from '../assets/home/FotoMembro-2.svg';
import FotoMembro3 from '../assets/home/FotoMembro-3.svg';


function Membros () {
    return (
        <div class="container-membros">
            <div class="membros">
                <div class="titulo-membros">
                    <h1> Equipe </h1>
                    <h3> Conheça os membros da GemByte</h3>
                </div>
                <div class="card-time">
                    <div class="card-individual">
                        <img src={FotoMembro1} alt="Foto-Antônio"></img>
                        <h2> Antônio </h2>
                        <h3> Front End e Back End </h3>
                        <div class="card-time-div-p">
                            <p> Responsável pelo código de Front e Back End do site </p>
                        </div>
                    </div>
                    <div class="card-individual">
                        <img src={FotoMembro3} alt="Foto-Lucas"></img>
                        <h2> Lucas Carty</h2>
                        <h3> Líder, Front End</h3>
                        <div class="card-time-div-p">
                            <p> Responsável pela liderança, organização do time, e pelo código de Front End do site</p>
                        </div>
                    </div>
                    <div class="card-individual">
                        <img src={FotoMembro2} alt="Foto-Gabriel"></img>
                        <h2> Gabrie Leite </h2>
                        <h3> Front End e Back End </h3>
                        <div class="card-time-div-p">
                            <p> Responsável pelo código de Front e Back End do site </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Membros