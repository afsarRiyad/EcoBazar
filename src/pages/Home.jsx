import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/Container'
import Modal from '../components/ui/Modal'
import Slider from '../components/Slider'
import CustomerBenefits from '../components/CustomerBenefits'
import axios from 'axios'
import ProductShowcase from '../components/ProductShowcase'

const Home = () => {
  const [open, setOpen] = useState(false)
  const [allCat, setAllCat] = useState([])
  const clicked = 'checkbox_clicked'
  const [dontShow, setDontShow] = useState(()=>{
    return localStorage.getItem(clicked) === 'true';
  })

  
  useEffect(() => {
    const dismissed = localStorage.getItem(clicked)
    if (dismissed === 'true') return

    const timer = setTimeout(() => {
      setOpen('true')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

 useEffect(()=>{
    if(dontShow){
      localStorage.setItem(clicked, 'true')
    }else {
      localStorage.removeItem(clicked)
    }
 },[dontShow])


 useEffect(()=>{
    const Cat = async () =>{
      let allCategories = await axios.get('https://dummyjson.com/products/categories');
      setAllCat(allCategories.data)
    }
    Cat()
 },[])


  return (
    <Container>
      <Slider/>
      <CustomerBenefits/>

      {open && <Modal modalOpen={open} dontShow={dontShow} setDontShow={setDontShow} setModalOpen={setOpen} />}
      <ProductShowcase type={"category"} allPro={allCat.slice(0,12)} />
    </Container>
  )
}

export default Home