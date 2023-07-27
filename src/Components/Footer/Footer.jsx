import React from 'react'
import { Center, ContactItem, Container, Desc, Left, List, ListItem, Logo, Right, SocialCOntainer, SocialIcon, Title, Titles } from './FooterElements'
import { GrFacebook, GrTwitter, GrInstagram, GrPinterest } from 'react-icons/gr'
import { FaMapPin, FaPhone } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>JUSTSHOP.</Logo>
            <Desc>
                There are many varieties of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humor, or randomised words which don't look even slightly believable.
            </Desc>
            <SocialCOntainer>
                <SocialIcon color='3B5999'>
                    <GrFacebook/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <GrTwitter/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <GrInstagram/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <GrPinterest/>
                </SocialIcon>
            </SocialCOntainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Titles>Contact</Titles>
            <ContactItem>
                <FaMapPin style={{marginRight: '10px'}}/>
                604 Malibu Avenue, California
            </ContactItem>
            <ContactItem>
                <FaPhone style={{marginRight: '10px'}}/>
                +1 456 56 85
            </ContactItem>
            <ContactItem>
                <FiMail style={{marginRight: '10px'}}/>
                okunowogbemi@gmail.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer