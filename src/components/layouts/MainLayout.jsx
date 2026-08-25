import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router'

import TopBar from '../Header/TopBar'
import Searchbar from '../Header/Searchbar'
import Navbar from '../Header/Navbar'
import NewsLetter from '../Footer/NewsLetter'
import FooterLinks from '../Footer/FooterLinks'
import Copyright from '../Footer/Copyright'
import Breadcrumbs from '../Breadcrumbs'

import BottomNav from '../BottomNav'
import SearchPopup from '../SearchPopup'
import StickyTopbar from '../Header/StickyTopbar'
import ActionToast from '../ui/ActionToast'
import useActionToast from '../../hooks/useActionToast'

const MainLayout = () => {
  const page = useLocation().pathname
  const [searchOpen, setSearchOpen] = useState(false)
  const { toast, close } = useActionToast()

  return (
    <>
    <StickyTopbar />
      <TopBar />
      <Searchbar />
      <Navbar />

      {page !== '/' && <Breadcrumbs />}

      <Outlet />

      <NewsLetter />
      <FooterLinks />
      <Copyright />

      <SearchPopup open={searchOpen} setOpen={setSearchOpen} />

      <BottomNav setSearchOpen={setSearchOpen} />

      <ActionToast open={toast.open} onClose={close} type={toast.type} message={toast.message} />
    </>
  )
}

export default MainLayout