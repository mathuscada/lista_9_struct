import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-around;
    margin: 2.5rem auto 0 auto;
    .mid-header {
        margin-top: 0.5rem;
    }
    .mid-header a {
        margin: 0 1.5rem;
        text-decoration: none;
        color: #747474;
    }
    @media only screen and (max-width: 510px) {
        .mid-header {
            display: none;
        }
    }
`;