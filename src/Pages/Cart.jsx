import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcements/Announcements'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import {  GrAdd } from 'react-icons/gr'
import {  MdRemove } from 'react-icons/md'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
    @media screen and (max-width: 380px) {
          padding: 10px;
        }

`
const Title = styled.h1`
    font-size: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === 'filled' && 'none'};
    background-color: ${props=>props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props=>props.type === 'filled' ? 'white' : 'black'};
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    @media screen and (max-width: 380px) {
          display: none;
        }

`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 380px) {
          flex-direction : column;
        }

`
const Info = styled.div`
    flex: 3;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    padding: 20px;
    height: 50vh;
`
const Product = styled.div`
   display: flex;
   justify-content: space-between;
   @media screen and (max-width: 380px) {
          flex-direction : column;
        }

`
const ProductDetail = styled.div`
   flex: 2;
   display: flex;
`
const Image = styled.img`
   width: 200px;
`
const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`
const ProductName = styled.span`
   
`
const ProductId = styled.span`
   
`
const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props=>props.color};
`
const ProductSize = styled.span`
   
`
const PriceDetail = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    @media screen and (max-width: 380px) {
          margin: 5px 15px;
        }

`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    @media screen and (max-width: 380px) {
         margin-bottom: 20px;
        }

`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const SummaryTitle = styled.div`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === 'total' && '500'};
    font-size: ${props=>props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>
                YOUR BAG
            </Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png'/>
                            <Details>
                                <ProductName><b>Product:</b>JESSIE THUNDER</ProductName>
                                <ProductId><b>ID:</b>93813718293</ProductId>
                                <ProductColor color='gray'/>
                                <ProductSize><b>Size:</b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <GrAdd/>
                                <ProductAmount>1</ProductAmount>
                                <MdRemove/>
                            </ProductAmountContainer>
                            <ProductPrice>$40</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png"/>
                            <Details>
                                <ProductName><b>Product:</b>Tote Bag</ProductName>
                                <ProductId><b>ID:</b>93813713467</ProductId>
                                <ProductColor color='green'/>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <GrAdd/>
                                <ProductAmount>3</ProductAmount>
                                <MdRemove/>
                            </ProductAmountContainer>
                            <ProductPrice>$20</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>
                        ORDER SUMMARY
                    </SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$8</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping discount</SummaryItemText>
                        <SummaryItemPrice>-$8</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$100</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart