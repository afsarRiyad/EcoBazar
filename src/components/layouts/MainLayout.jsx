import React from 'react'
import TopBar from './TopBar'
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