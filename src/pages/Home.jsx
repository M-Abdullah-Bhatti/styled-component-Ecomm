import React from 'react'

// import { Routes, Route } from 'react-router-dom'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Footer from '../Footer'
import Cart from './Cart'
import Login from './Login'
import Product from './Product'
import ProductList from './ProductList'
import Register from './Register'


function Home() {
  return (
    <div>
      
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
      
    </div>
  )
}

export default Home