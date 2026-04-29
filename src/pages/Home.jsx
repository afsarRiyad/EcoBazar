import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/Container'
import Modal from '../components/ui/Modal'

const Home = () => {
  const [open, setOpen] = useState(false)
  const STORAGE_KEYS = 'checkbox_clicked'
  const [dontShow, setDontShow] = useState(()=>{
    return localStorage.getItem(STORAGE_KEYS) === 'true';
  })

  
  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEYS)
    if (dismissed === 'true') return

    const timer = setTimeout(() => {
      setOpen('true')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

 useEffect(()=>{
    if(dontShow){
      localStorage.setItem(STORAGE_KEYS, 'true')
    }else {
      localStorage.removeItem(STORAGE_KEYS)
    }
 },[dontShow])


 


  return (
    <Container>
      <h1 className='h-[400px]'>home</h1>
      {open && <Modal modalOpen={open} dontShow={dontShow} setDontShow={setDontShow} setModalOpen={setOpen} />}
    </Container>
  )
}

export default Home