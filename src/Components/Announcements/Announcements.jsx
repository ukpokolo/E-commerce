import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Container = styled(Link)`
    height: 30px;
    background: linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0,0.1), );
    color: black;
    background-color: #fc8fed;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 3px;
    font-size: 15px;
    font-weight: light;
    text-decoration: none;
`

const Announcements = () => {
  return (
    <Container to='/ProductList'>
        Super Deals! Free Shipping on Orders Over $40
    </Container>
  )
}

export default Announcements