import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    @media screen and (max-width: 380px) {
          flex-direction : column;
          padding: 0px;
        }
`