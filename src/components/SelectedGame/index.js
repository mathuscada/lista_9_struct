import { Container } from "./styles";
import PlayButton from "../../assets/playButton.png"
import Button from "../Button";
import { useEffect, useState } from "react";
import {api} from "../../services/api"

const SelectedGame = () => {

    const [selectedGame, setSelectedGame] = useState({});

    useEffect(() => {
        api.get('/games/index').then((response) => {
            setSelectedGame(response.data[0]);
        })
    }, []);

    return (
        <Container>
            <img src={`http://localhost:3000${selectedGame.photo_url}`} alt={`Capa do Jogo ${selectedGame.title}`}/>
            <div className="game-info">
                <div className="name-genre">
                    <h1><img src={PlayButton} alt=""/>{selectedGame.title}</h1>
                    <h3>{selectedGame.genre}</h3>
                </div>
                <div className="platform-release">
                    <h2>{selectedGame.platform}</h2>
                    <h3>{selectedGame.release}</h3>
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