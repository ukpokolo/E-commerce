import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import { Circle, Container, Image, Info } from './ProductElements'

export const Iconn = styled(Link)`
    height: 40px;
    color: black;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Iconn to='/Cart'>
                <BsCart3/>
            </Iconn>
            <Iconn to='/Product'>
                <FaSearch/>
            </Iconn>
            <Iconn to='/Product'>
                <BsHeart/>
            </Iconn>
        </Info>
    </Container>
  )
}

export default Product