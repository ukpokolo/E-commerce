import React from 'react'
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'
import { BsCart3 } from 'react-icons/bs'
import { Input, 
    Language,   
    NavBarCenter, 
    NavBarContainer, 
    NavBarLeft, 
    NavBarRight, 
    NavBarWrapper, 
    SearchContainer } from './NavbarElements'
import styled from 'styled-components'

const MenuItems = styled(Link)`
    cursor: pointer;
    font-size: 14px;
    color: black;
    text-decoration: none;
    margin-left: 25px;
    @media screen and (max-width: 380px) {
          font-size: 12px;
          margin-left: 10px;
        }
`
const Logo = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    font-size: 27px;
    color: black;
    @media screen and (max-width: 380px) {
          font-size: 22px;
        }
`
const Navbar = () => {
  return (
    <NavBarContainer>
        <NavBarWrapper>
            <NavBarLeft>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <FaSearch style={{color:'gray', fontSize:16}}/>
                </SearchContainer>
            </NavBarLeft>
            <NavBarCenter>
                <Logo to='/'>JUSTSHOP.</Logo>
            </NavBarCenter>
            <NavBarRight>
                <MenuItems to='/Register'>REGISTER</MenuItems>
                <MenuItems to='/Login'>SIGN-IN</MenuItems>
                <MenuItems to='/Cart'><BsCart3/></MenuItems>
            </NavBarRight>
        </NavBarWrapper>
    </NavBarContainer>
  )
}

export default Navbar