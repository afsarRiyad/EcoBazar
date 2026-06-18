import React from 'react'
import Container from './Container'
import sale1 from '../assets/images/sale1.webp'
import sale2 from '../assets/images/sale2.webp'
import sale3 from '../assets/images/sale3.webp'
import { useCountDown } from './../hooks/CountDown';

const Sale = () => {
  const count = useCountDown("2026-6-31")
  return (
    <Container>
      <div className='grid grid-cols-3 gap-4 pt-15 pb-7'>
        <div className='relative'>
          <img src={sale1} alt="sale1"  className='cursor-pointer' />
          {/* timer countdown  */}
          <div className='absolute top-29 left-1/2 -translate-x-1/2 flex gap-3 font-pop text-white w-54'>
           <div >
              <div className='text-[24px]'>{count.days} <span className='pl-3'>:</span></div>
              <span className='text-[12px] font-thin'>DAYS</span>
           </div>
              <div >
              <div className='text-[24px]'>{count.hours} <span className='pl-3'>:</span></div>
              <span className='text-[12px] font-thin'>HOURS</span>
           </div>
              <div >
              <div className='text-[24px]'>{count.min} <span className='pl-3'>:</span></div>
              <span className='text-[12px] font-thin'>MIN</span>
           </div>
           <div >
              <div className='text-[24px]'>{count.sec}</div>
              <span className='text-[12px] font-thin'>SEC</span>
           </div>
          </div>
        </div>
        <img src={sale3} alt="sale3"  className='cursor-pointer'/>
        <img src={sale2} alt="sale2" className='cursor-pointer' />
      </div>
    </Container>
  )
}

export default Sale
