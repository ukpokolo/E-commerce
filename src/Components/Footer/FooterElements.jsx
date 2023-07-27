import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    @media screen and (max-width: 380px) {
          flex-direction : column;
        }
`
export const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
export const Center = styled.div`
    flex: 1;
    padding: 20px;
    @media screen and (max-width: 380px) {
          display: none;
        }
`
export const Title = styled.h3`
    margin-bottom: 30px;
`
export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
export const Right = styled.div`
    flex: 1;
    @media screen and (max-width: 380px) {
          background-color: #fff8f8;
        }
    
`
export const Titles = styled.h1`
    flex: 1;
    margin-bottom: 30px;
`
export const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
export const Logo = styled.h1`
    
`
export const Desc = styled.p`
    margin: 20px 0px;
`
export const SocialCOntainer = styled.div`
    display: flex;
`
export const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: #${props=>props.color};
`