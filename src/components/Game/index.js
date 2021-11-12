import { Container } from "./styles";
import PlayButton from "../../assets/playButtonBlack.png"

const Game = ({photo, title}) => {
    return (
        <Container>
            <img src={`http://localhost:3000${photo}`} alt={`Imagem do jogo ${title}`}/>
            <div className={"game-name"}>
                <img src={PlayButton} alt=""/>
                <h1>{title}</h1>
            </div>
        </Container>
    );
}

export default Game;