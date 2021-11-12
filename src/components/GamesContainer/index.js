import Game from "../Game";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import {api} from "../../services/api"
import selectGame from "../../selectGame";

const GamesContainer = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        api.get('/games/index').then((response) => {
            setGames(response.data.slice(0, 6));
        })
    }, []);

    return (
        <Container>
            {games.map((game) => <Game key={game.id} title={game.title} photo={game.photo_url} id={game.id}/>)}
        </Container>
    );
}

export default GamesContainer;