import React from 'react'
import Container from '../Container'
import { FaFacebook, FaTwitter, FaPinterestP, FaInstagram    } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className='font-pop py-10 bg-[#F7F7F7]'>
        <Container>
             <div className='flex items-center justify-between'>
                <span>
                    <p className='text-[24px] font-semibold text-gray-900'>Subcribe our Newsletter </p>
                    <p className='w-[448px] text-gray-400 text-[14px] '>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </span>
                <div className='flex items-center gap-21'>
                     <div className='relative w-[492px]'>
                        <input type="text"
                         placeholder='Your email address ' 
                         className='bg-white outline-none rounded-l-[46px] 
                                      w-full pr-[140px] py-[14px] pl-6 
                                      focus:ring-2 focus:ring-gray-200'/> 
                      <button className='
                           text-white bg-primary py-4 px-10 rounded-[46px] text-[15px]
                           absolute top-1/2 right-[-40px] -translate-y-1/2 cursor-pointer
                           active:bg-green-500
                      '>Subscribe</button>
                     </div>
                    <div className='flex items-center gap-2 '>
                       <FaFacebook className='h-10 w-10 cursor-pointer hover:text-primary transition ease-in-out'/>
                          <FaTwitter className='h-10 w-10 cursor-pointer hover:text-primary transition ease-in-out'/>
                           <FaPinterestP className='h-10 w-10 cursor-pointer hover:text-primary transition ease-in-out'/>
                             <FaInstagram className='h-10 w-10 cursor-pointer hover:text-primary transition ease-in-out'/>
                    </div>
                </div>
             </div>
        </Container>
    </div>
  )
}

export default NewsLetter