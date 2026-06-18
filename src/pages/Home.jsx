import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/Container'
import Modal from '../components/ui/Modal'
import Slider from '../components/Slider'
import CustomerBenefits from '../components/CustomerBenefits'
import axios from 'axios'
import ProductShowcase from '../components/ProductShowcase'
import Sale from '../components/Sale'
import discountBanner from '../assets/images/discountBanner.webp'
import LatestNews from '../components/LatestNews'
import Testimonials from '../components/Testimonials'

const Home = () => {
  const [open, setOpen] = useState(false)
  const [allCat, setAllCat] = useState([])
  const [allPro, setAllPro] = useState([])
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
 useEffect(()=>{
    const Cat = async () =>{
      let allProducts = await axios.get('https://dummyjson.com/products');
      setAllPro(allProducts.data.products) 
   
    }
    Cat()
 },[])


  return (
    <>
      <Slider/>
      <CustomerBenefits/>

      {open && <Modal modalOpen={open} dontShow={dontShow} setDontShow={setDontShow} setModalOpen={setOpen} />}
      <ProductShowcase type={"category"} link="/categories" title={'Popular Categories'} allPro={allCat.slice(0,12)} />
      <ProductShowcase type={"products"} hover={true} title={'Popular Products'} link='/all-products' allPro={allPro.slice(0,10)} />
      <Sale/>
      <ProductShowcase type={"products"} subType={"deal"} title={'Hot Deals'}  link='/deals' allPro={allPro.slice(0,12)} />
      <Container>
        <img src={discountBanner} alt="discountBanner"  className='cursor-pointer'/>
      </Container>
        <ProductShowcase type={"products"} link="/" hover={true} title={'Featured Products'} allPro={allPro.slice(0,10)} />
        <LatestNews/>
        <Testimonials/>
    </>
  )
}

export default Home