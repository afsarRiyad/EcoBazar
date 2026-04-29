import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/Container'
import Modal from '../components/ui/Modal'

const Home = () => {
  const [open, setOpen] = useState(false)
  const [dontShow, setDontShow] = useState(false)
  const STORAGE_KEYS = 'checkbox_clicked'

  const dismissed = localStorage.getItem(STORAGE_KEYS)


  useEffect(() => {
    if (dismissed == true) {
      setOpen(false)
    } return

    const timer = setTimeout(() => {
      setOpen(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (dontShow == true && !open) {
    localStorage.setItem(dismissed, true)
  }
  console.log(localStorage.getItem(dismissed));


  return (
    <Container>
      <h1 className='h-[400px]'>home</h1>
      {open && <Modal modalOpen={open} dontShow={dontShow} setDontShow={setDontShow} setModalOpen={setOpen} />}
    </Container>
  )
}

export default Home