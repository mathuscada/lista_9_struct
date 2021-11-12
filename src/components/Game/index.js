import { Container } from "./styles";
import PlayButton from "../../assets/playButtonBlack.png"

const Game = ({photo, title}) => {
    return (
        <Container>
            <img src={photo}/>
            <div className="game-name">
                <img src={PlayButton}/>
                <h1>{title}</h1>
            </div>
        </Container>
    );
}

export default Game;