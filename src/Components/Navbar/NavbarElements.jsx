import styled from "styled-components";


export const NavBarContainer = styled.div`
    height: 60px;
    @media screen and (max-width: 380px) {
          height: 50px;
        }
`
export const NavBarWrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 380px) {
          padding: 10px 0px;
        }
`
export const NavBarLeft = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
export const Language = styled.span`
    cursor: pointer;
    font-size: 14px;
    @media screen and (max-width: 380px) {
         display: none;
        }
`
export const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
export const Input = styled.input`
    border: none;
    @media screen and (max-width: 380px) {
          width: 50px;
        }
`
export const NavBarCenter = styled.div`
    flex: 1;
    text-align: center;
`
export const NavBarRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 380px) {
          justify-content: center;
          flex: 2px;
        }
`
export const MenuItem = styled.div`
    cursor: pointer;
    font-size: 14px;
    margin-left: 25px;
    @media screen and (max-width: 380px) {
          font-size: 12px;
          margin-left: 10px;
        }
`