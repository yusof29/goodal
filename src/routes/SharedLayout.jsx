import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'

const SharedLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default SharedLayout