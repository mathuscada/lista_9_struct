import { Container } from "./styles";
import Image from "../../assets/teste.png"
import PlayButton from "../../assets/playButton.png"
import Button from "../Button";

const SelectedGame = () => {

    return (
        <Container>
            <img src={Image} alt="Capa do Jogo The Last of Us"/>
            <div className="game-info">
                <div className="name-genre">
                    <h1><img src={PlayButton} alt=""/>The Last of Us</h1>
                    <h3>Aventura</h3>
                </div>
                <div className="platform-release">
                    <h2>Playstation 3</h2>
                    <h3>2013</h3>
                </div>
            </div>
            <div className="button-container">
                <div className="hr-container">
                    <div className="hr"></div>
                </div>
                <Button/>
            </div>
        </Container>
    );
}

export default SelectedGame;