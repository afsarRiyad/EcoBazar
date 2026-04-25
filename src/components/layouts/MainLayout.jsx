import React from 'react'
import TopBar from '../TopBar'
import { Outlet } from 'react-router'
import Header from '../Header'
import Navbar from '../Navbar'

const MainLayout = () => {
  return (
    <>
       <TopBar/>
       <Header/>
       <Navbar/>
       <Outlet/>
    </>
  )
}

export default MainLayout