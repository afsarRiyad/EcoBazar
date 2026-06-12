import React from 'react'
import Container from './Container'
import BannerBig from '../assets/images/bannerBig.webp'
import Banner1 from '../assets/images/banner1.webp'
import Banner2 from '../assets/images/banner2.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import SwiperNavigation from './SwiperNavigation'


import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';
const Slider = () => {
  return (
    <Container>
      <div className='flex gap-x-6 py-6 relative'>
        <div className='relative max-w-[872px] h-[600px] cursor-pointer'>
          <SwiperNavigation />
           <Swiper
        slidesPerView={1}
        grabCursor={true}
        autoplay={{
          delay: 3000
        }}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
         <SwiperSlide>
           <img src={BannerBig} alt="banner " />
           </SwiperSlide>
         <SwiperSlide>
           <img src={BannerBig} alt="banner " />
           </SwiperSlide>
         <SwiperSlide>
           <img src={BannerBig} alt="banner " />
           </SwiperSlide>
           </Swiper>
        </div>
        <div>
            <div className='relative cursor-pointer w-[423px] h-[288px]'>
             <div>
                <img src={Banner1} alt="banner1" />
             </div>
            </div>
            <div className='mt-6 cursor-pointer w-[423px] h-[288px]'>
                <div>
                <img src={Banner2} alt="banner2" />
            </div>
            </div>
        </div>
      </div>
    </Container>
  )
}

export default Slider