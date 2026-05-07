import React from 'react'
import Container from './Container';
import breadcrumbsImg from '../../public/Breadcrumbs.webp'
import { House } from 'lucide-react';
import { useLocation } from 'react-router';

const Breadcrumbs = () => {
    const page = useLocation().pathname
    const arr = page.split("/")
    console.log(arr);
    

  return (
    <div className='max-h-[120px]' style={{background: `url(${breadcrumbsImg})`}}>
        <Container>
           <div className='py-12 flex gap-2'>
              <House className='text-gray-500'/>
              {
                arr.map((pathName, index)=>(
                    <div className='font-pop text-md flex gap-1 items-center'>
                         <span className='text-gray-500'>{pathName.charAt(0).toUpperCase() + pathName.slice(1)}</span>
                        {index < arr.length - 1 && (<span className='text-gray-500 text-xl'>{">"}</span>)}
                    </div>
                ))
              }
           </div>
        </Container>
    </div>
  )
}

export default Breadcrumbs