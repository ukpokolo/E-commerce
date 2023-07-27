import React, { useState } from 'react'
import { Arrow, Container, Desc, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper } from './SliderElements'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { sliderItems } from '../../data'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled(Link)`
    padding: 10px;
    font-size: 20px;
    color: black;
    border: 1px solid black;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)  
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)  
        }
    }

  return (
    <Container>
        <Arrow direction = 'left' onClick={()=>handleClick('left')}>
            <BsFillArrowLeftCircleFill />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item => (
            <Slide key={item.id} bg= {item.bg}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button to='/ProductList'>SHOP NOW</Button>
                </InfoContainer>
            </Slide>))}
        </Wrapper>
        <Arrow direction = 'right' onClick={()=>handleClick('right')}>
            <BsFillArrowRightCircleFill />
        </Arrow>
    </Container>
  )
}

export default Slider