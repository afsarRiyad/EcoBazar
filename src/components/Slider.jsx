import React from 'react'
import Container from './Container'
import BannerBig from '../assets/images/bannerBig.webp'
import Banner1 from '../assets/images/banner1.webp'
import Banner2 from '../assets/images/banner2.webp'
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const Slider = () => {
  return (
    <Container>
      <div className='flex gap-x-6 py-6'>
        <div className='max-w-[872px] h-auto cursor-pointer'>
           <img src={BannerBig} alt="banner " />
        </div>
        <div>
            <div className='cursor-pointer'>
                <img src={Banner1} alt="banner1" />
            </div>
            <div className='mt-6 cursor-pointer'>
                <img src={Banner2} alt="banner2" />
            </div>
        </div>
      </div>
    </Container>
  )
}

export default Slider