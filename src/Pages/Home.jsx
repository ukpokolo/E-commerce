import React from 'react'
import Announcements from '../Components/Announcements/Announcements'
import Categories from '../Components/Category/Categories'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Newsletter from '../Components/Newsletter/Newsletter'
import Products from '../Components/Product/Products'
import Slider from '../Components/Slider/Slider'

const Home = () => {
  return (
    <div>
        <Announcements/>
        <Navbar />
        <Slider />
        <Categories />
        <Products/>
        <Newsletter/>
        <Footer />
    </div>
  )
}

export default Home