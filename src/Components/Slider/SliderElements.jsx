import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 380px) {
         display: none;
        }
`
export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color : #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
export const Wrapper = styled.div`
    height: 100px;
    transition: 1.0s ease-in;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
`   
export const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
    transition: 1.0s ease-in;
`
export const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
export const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
export const Image = styled.img`
    height: 80%;
    object-fit: contain;
`
export const Title = styled.h1`
    font-size: 60px;
`
export const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
