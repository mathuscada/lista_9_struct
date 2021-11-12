import Game from "../Game";
import { Container } from "./styles";
import GamePhoto from "../../assets/teste2.png"

const GamesContainer = () => {
    const game = {
        photo: GamePhoto,
        title: "The Last of Us"
    }
    return (
        <Container>
            <Game photo={game.photo} title={game.title}/>
            <Game photo={game.photo} title={game.title}/>
            <Game photo={game.photo} title={game.title}/>
            <Game photo={game.photo} title={game.title}/>
            <Game photo={game.photo} title={game.title}/>
            <Game photo={game.photo} title={game.title}/>
            
            
        </Container>
    );
}

export default GamesContainer;