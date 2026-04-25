import React from 'react'
import TopBar from './TopBar'
import { Outlet } from 'react-router'
import Header from './Header'

const MainLayout = () => {
  return (
    <>
       <TopBar/>
       <Header/>
       <Outlet/>
    </>
  )
}

export default MainLayout