import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url('https://img.freepik.com/free-photo/glad-african-woman-with-perfect-curly-hairs-casual-orange-blouse-golden-pants-posing-beige-wall_273443-4078.jpg?t=st=1656678207~exp=1656678807~hmac=0fbec292f36e722b9bb7de867ac95de8172f06a4ec8f4b26c6bbd0c9caeed3e8&w=740') center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    @media screen and (max-width: 380px) {
            width: 75%;
        }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Alternate = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='username'></Input>
                    <Input placeholder='password'></Input>
                    <Button>CREATE</Button>
                    <Alternate>DO YOU REMEMBER YOUR PASSWORD?</Alternate>
                    <Alternate>CREATE A NEW ACCOUNT</Alternate>
                </Form>
        </Wrapper>
    </Container>
  )
}

export default Login