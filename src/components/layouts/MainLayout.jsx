import React from 'react'
import TopBar from '../Header/TopBar'
import { Outlet, useLocation } from 'react-router'
import MainHeader from '../Header/MainHeader'
import Navbar from '../Header/Navbar'
import NewsLetter from '../Footer/NewsLetter'
import FooterLinks from '../Footer/FooterLinks'
import Copyright from '../Footer/Copyright'
import Breadcrumbs from '../Breadcrumbs'

const MainLayout = () => {
     const page = useLocation().pathname
  return (
    <>
       <TopBar/>
       <MainHeader/>
       <Navbar/>
       {page !== '/' && <Breadcrumbs/>}
       <Outlet/>
       <NewsLetter/>
       <FooterLinks/>
       <Copyright/>
    </>
  )
}

export default MainLayout