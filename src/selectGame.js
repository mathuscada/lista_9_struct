var previousGame = undefined;

const selectGame = (id) => {
    if (previousGame){
        const preGame = document.querySelector("#game" + previousGame);
        preGame.style.border = "none";
    }
    
    const game = document.querySelector("#game" + id);
    game.style.border = "3px solid #7CA431";
    previousGame = id;
};

export default selectGame;