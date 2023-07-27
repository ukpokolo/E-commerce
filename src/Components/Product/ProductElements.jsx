import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
`
export const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
export const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        opacity: 1;
        transition: all 0.5s ease;
    }
`
export const Image = styled.img`
    height: 75%;
    z-index: 2;
`
export const Containers = styled.div`
    
`