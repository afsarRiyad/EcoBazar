import React from 'react'
import TopBar from '../Header/TopBar'
import { Outlet } from 'react-router'
import MainHeader from '../Header/MainHeader'
import Navbar from '../Header/Navbar'
import NewsLetter from '../Footer/NewsLetter'
import FooterLinks from '../Footer/FooterLinks'

const MainLayout = () => {
  return (
    <>
       <TopBar/>
       <MainHeader/>
       <Navbar/>
       <Outlet/>
       <NewsLetter/>
       <FooterLinks/>
    </>
  )
}

export default MainLayout