import React from 'react'
import Container from '../Container'
import { FaFacebook, FaTwitter, FaPinterestP, FaInstagram    } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className='font-pop py-10  bg-[#F7F7F7]'>
        <Container>
             <div className='sm:flex sm:flex-row flex-col  items-center justify-between relative overflow-hidden'>
                <span>
                    <p className='sm:text-[24px] text-[18px] font-semibold text-gray-900 pb-2'>Subcribe our Newsletter </p>
                    <p className='sm:w-[448px] w-80 text-gray-400 text-[14px] pr-5 sm:pr-0'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </span>
                <div className='flex sm:items-center gap-21'>
                     <div className='relative  lg:w-[492px] pt-5 '>
                        <input type="text"
                         placeholder='Your email address ' 
                         className='bg-white outline-none min-w-0 shrink-1  rounded-l-[46px] 
                                      lg:w-full lg:pr-[140px] pr-22 py-[14px] pl-3 
                                      focus:ring-2 focus:ring-gray-200 '/> 
                      <button className='
                           text-white bg-primary shrink-0 py-4 sm:px-10 px-4 z-30 rounded-[46px] text-[15px]
                           absolute top-[45px] sm:right-[-40px] right-[-25px] -translate-y-1/2 cursor-pointer
                           active:bg-green-500 hover:bg-green-600
                      '>Subscribe</button>
                     </div>
                    <div className='sm:flex sm:items-center sm:mt-4 sm:gap-2 gap-4 flex-col sm:flex-row absolute sm:static right-0 top-[-30px]'>
                       <FaFacebook className='sm:h-10 h-6 sm:w-10 w-6 mb-3 cursor-pointer hover:text-gray-600  active:text-primary transition ease-in-out'/>
                          <FaTwitter className='sm:h-10 h-6 sm:w-10 w-6 mb-3 cursor-pointer hover:text-gray-600  active:text-primary transition ease-in-out'/>
                           <FaPinterestP className='sm:h-10 h-6 sm:w-10 w-6 mb-3 cursor-pointer hover:text-gray-600 active:text-primary  transition ease-in-out'/>
                             <FaInstagram className='sm:h-10 h-6 sm:w-10 w-6 mb-3 cursor-pointer hover:text-gray-600  active:text-primary transition ease-in-out'/>
                    </div>
                </div>
             </div>
        </Container>
    </div>
  )
}

export default NewsLetter