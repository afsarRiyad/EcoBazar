import React from 'react'
import Container from './Container';
import breadcrumbsImg from '../../public/Breadcrumbs.webp'
import { House } from 'lucide-react';
import { Link, useLocation } from 'react-router';

const Breadcrumbs = () => {
    const page = useLocation().pathname
    const arr = page.split("/").filter(item => item !== '')
    console.log(arr);
    

  return (
    <div className='max-h-[120px]' style={{background: `url(${breadcrumbsImg})`}}>
        <Container>
           <div  className='py-12 flex gap-2'>
             <Link to='/'><House className='text-gray-500'/></Link> 
              {
                arr.map((pathName, index)=>{
                    let lastItem = arr.length - 1;
                    let href = '/' + arr.slice(0, index + 1).join('/')
                    return(
                    <div key={index} className='font-pop text-md flex gap-3 items-center'>
                        <span className='text-gray-500 text-xl'>{">"}</span>
                         <Link to={href} className={`text-gray-500 ${index === lastItem && 'text-primary' }`}>{pathName.charAt(0).toUpperCase() + pathName.slice(1)}</Link>
                    </div>
                    )
                })
              }
           </div>
        </Container>
    </div>
  )
}

export default Breadcrumbs