import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductShowcase from '../components/ProductShowcase'

const AllProducts = () => {
const [allPro, setAllPro] = useState([])
     useEffect(()=>{
    const Cat = async () =>{
      let allProducts = await axios.get('https://dummyjson.com/products');
      setAllPro(allProducts.data.products) 
  
    }
    Cat()
 },[])

  return (
    <>
     <ProductShowcase type={"allProducts"} title={'Popular Products'} hover={true} allPro={allPro} />
    </> 
  )
}

export default AllProducts
