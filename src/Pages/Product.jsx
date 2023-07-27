import React from 'react'
import styled from 'styled-components'
import Announcements from '../Components/Announcements/Announcements'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Newsletter from '../Components/Newsletter/Newsletter'
import {  GrAdd } from 'react-icons/gr'
import {  MdRemove } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    @media screen and (max-width: 380px) {
          flex-direction : column;
          padding: 10px;
        }

`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    @media screen and (max-width: 380px) {
          height: 40vh;
        }

`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    @media screen and (max-width: 380px) {
          padding: 10px;
        }

`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 30px 0px;
    @media screen and (max-width: 380px) {
          width: 100%;
        }

`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    @media screen and (max-width: 380px) {
            width: 100%;
        }

`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled(Link)`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    color: black;
    text-decoration: none;
    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
            <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit itaque, et perspiciatis laudantium suscipit saepe dolorum! Inventore sint magni fugiat voluptas temporibus vero. Eius repudiandae laboriosam molestiae aut assumenda. Vel magnam veritatis nam autem optio. Porro odio assumenda omnis, quisquam, fugit esse doloribus consequatur ipsa, repudiandae dolorem nesciunt enim error!</Desc>
                <Price>$30</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='black'/>
                        <FilterColor color = 'darkblue'/>
                        <FilterColor color = 'gray'/>
                    </Filter>
                    <Filter>
                        <FilterTitle>
                            Size
                        </FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <MdRemove/>
                        <Amount>1</Amount>
                        <GrAdd/>
                    </AmountContainer>
                    <Button to='/Cart'>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>

  )
}

export default Product