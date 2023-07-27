import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url('https://img.freepik.com/free-photo/joyful-black-woman-having-fun-studio-pink-background-white-t-shirt-green-jacket-stylish-spring-look_273443-21.jpg?w=740&t=st=1656682077~exp=1656682677~hmac=19371d6c20a93e4e7aa7de8d0ce6efee8f7d7e0608736854611001bb2b9f4b19') center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    @media screen and (max-width: 380px) {
          width: 75%;
        }

`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled(Link)`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    text-decoration: none;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='name'></Input>
                    <Input placeholder='last name'></Input>
                    <Input placeholder='username'></Input>
                    <Input placeholder='email'></Input>
                    <Input placeholder='password'></Input>
                    <Input placeholder='confirm password'></Input>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button to='/'>CREATE</Button>
                </Form>
        </Wrapper>
    </Container>
  )
}

export default Register