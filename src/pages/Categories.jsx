import React, { useEffect, useState } from 'react'
import Container from '../components/Container';
import ProductShowcase from '../components/ProductShowcase';
import axios from 'axios';

const Categories = () => {
    const[allCat, setAllCat] = useState([])
     useEffect(()=>{
    const Cat = async () =>{
      let allCategories = await axios.get('https://dummyjson.com/products/categories');
      setAllCat(allCategories.data)
    }
    Cat()
 },[])

  return (
    <Container>
      <ProductShowcase  allPro={allCat} type={'allCate'}/>
    </Container>
  )
}

export default Categories
