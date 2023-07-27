import React from 'react'
import { Button, Container, Description, Input, InputContainer, Title } from './NewsletterElements'
import { MdSend } from 'react-icons/md'

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <MdSend/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter