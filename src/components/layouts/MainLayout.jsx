import React from 'react'
import TopBar from '../TopBar/TopBar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <>
       <TopBar/>
       <Outlet/>
    </>
  )
}

export default MainLayout