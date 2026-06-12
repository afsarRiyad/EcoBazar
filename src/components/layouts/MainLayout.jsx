import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router'

import TopBar from '../Header/TopBar'
import MainHeader from '../Header/MainHeader'
import Navbar from '../Header/Navbar'
import NewsLetter from '../Footer/NewsLetter'
import FooterLinks from '../Footer/FooterLinks'
import Copyright from '../Footer/Copyright'
import Breadcrumbs from '../Breadcrumbs'

import BottomNav from '../BottomNav'
import SearchPopup from '../SearchPopup'

const MainLayout = () => {
  const page = useLocation().pathname
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <TopBar />
      <MainHeader />
      <Navbar />

      {page !== '/' && <Breadcrumbs />}

      <Outlet />

      <NewsLetter />
      <FooterLinks />
      <Copyright />

      <SearchPopup open={searchOpen} setOpen={setSearchOpen} />
      
      <BottomNav setSearchOpen={setSearchOpen} />
    </>
  )
}

export default MainLayout