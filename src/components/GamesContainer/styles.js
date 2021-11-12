import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    right: 0;
    margin: 5rem 4vw 0 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-space-around;
    width: 50%;
    height: 37vh;
    @media only screen and (max-width: 1040px){
        bottom: 0;
        right: 2vw;
        margin: 0;
        width: 90%;
    }
`;