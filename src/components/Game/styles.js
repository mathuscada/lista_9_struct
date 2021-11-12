import styled from "styled-components";

export const Container = styled.div`
    width: 16.4vw;
    margin: 0 2.5rem 1rem 2.5rem;
    img {
        width: 100%;
    }
    .game-name {
        margin: -0.8rem 0 0 0.5rem;
        img {
            width: 1.2rem;
        }
        h1 {
            margin-left: 0.5rem;
            display: inline-block;
            font-size: 1.2rem;
            color: #FFFFFF;
        }
    }
    @media only screen and (max-width: 1040px){
        width: 33vw;
        margin: 0 1rem 1rem 1rem;
    }
`;

