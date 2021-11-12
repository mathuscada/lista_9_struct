import { Container } from "./styles";
import PlayButton from "../../assets/playButtonBlack.png"
import selectGame from "../../selectGame";

const Game = ({photo, title, id}) => {
    return (
        <Container id={`game${id}`} onClick={() => selectGame(id)}>
            <img src={`http://localhost:3000${photo}`} alt={`Imagem do jogo ${title}`}/>
            <div className={"game-name"}>
                <img src={PlayButton} alt=""/>
                <h1>{title}</h1>
            </div>
        </Container>
    );
}

export default Game;