import { BiInfoCircle } from "react-icons/bi";
import "./index.css";

function Intro(props) {
    return (
        <div className="Home-Intro">
            <h2>
                Sobre o Site
                <BiInfoCircle style={{ marginLeft: "8px" }} color="#13e796" />
            </h2>
            <div className="Intro-Content">
                <div className="Text-Intro">
                    <p>
                        Fizemos esse site com o objetivo de facilitar a comunicação entre
                        monitores e estudantes da cadeira de introdução a programação para
                        engenharia da computação. Aqui, você pode encontrar as redes
                        socias de todos os monitores, além de arquivos, como slides e
                        provas antigas, e links úteis que os ajudarão nos estudos da
                        cadeira.
                    </p>
                </div>
                <div className="Video-Intro">
                    <iframe
                        title="Introduction Video"
                        width="600"
                        height="355"
                        class="video"
                        src="https://www.youtube.com/embed/nKIu9yen5nc"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Intro;