import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    left: 0;
    margin: 5rem 0 0 8vw;
    display: flex;
    flex-direction: column;
    background-color: #2A2A2A;
    width: 35%;
    img {
        width: 100%;
    }
    .game-info {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 0.5rem 1rem;
        .name-genre h1, .platform-release h2 {
            color: #FFFFFF;
            font-size: 1.2rem;
        }
        .name-genre {
            margin: 0.1rem 0 0 0;
            h1 img {
                width: 1rem;
            }
            h3 {
                margin-left: 1.1rem;
            }
        }
        .name-genre h3, .platform-release h3{
            color: #A9A9A9;
            font-size: 1.125rem;
            margin-top: -1rem;
        }
    }
    .button-container {
        display: flex;
        margin: 1rem 3.688rem 2.75rem 0;
        .hr-container {
            margin-top: 2.2rem;
            width: 47%;
            .hr {
                border: 3px solid #7CA431;
            }
        }
    }
    @media only screen and (max-width: 1040px){
        width: 80%;
        left: 2.5vw;
        margin-top: 1rem;
        .button-container {
            margin: 1rem 3.688rem 1rem 0;
            .hr-container {
                margin-top: 2.2rem;
                width: 47%;
                .hr {
                    border: 3px solid #7CA431;
                }
            }
        }
    }
`;