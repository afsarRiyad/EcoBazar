import React from 'react'
import Container from '../Container'
import { FaFacebook, FaTwitter, FaPinterestP, FaInstagram    } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className='font-pop py-10  bg-[#F7F7F7] '>
        <Container>
             <div className='flex sm:flex-row flex-col md:w-auto text-center sm:text-start items-center justify-between gap-6 relative overflow-hidden'>
                <span>
                    <p className='sm:text-[24px] text-[18px] font-semibold text-gray-900 pb-2'>Subcribe our Newsletter </p>
                    <p className='sm:w-[448px] w-80 text-gray-400 text-[14px] '>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </span>
                <div className='flex items-center gap-6 md:flex-row flex-col lg:w-auto'>
                     <div className='relative w-full sm:w-[400px] lg:w-[450px] '>
                        <input type="text"
                         placeholder='Your email address ' 
                         className='w-full bg-white outline-none rounded-full py-4 pl-6 pr-32 border border-transparent focus:border-primary transition-all
                                      '/> 
                      <button className='
                           absolute bg-primary text-white px-6 py-3 rounded-full 
                           text-[15px] top-1 right-1 bottom-1 active:scale-95 transition-all active:bg-green-600
                           cursor-pointer
                      '>Subscribe</button>
                     </div>
                    <div className='flex items-center gap-4 text-gray-500'>
                       <FaFacebook className='sm:h-10 h-8 sm:w-10 w-8  cursor-pointer hover:text-gray-600  active:text-primary transition ease-in-out'/>
                          <FaTwitter className='sm:h-10 h-8 sm:w-10 w-8  cursor-pointer hover:text-gray-600  active:text-primary transition ease-in-out'/>
                           <FaPinterestP className='sm:h-10 h-8 sm:w-10 w-8  cursor-pointer hover:text-gray-600 active:text-primary  transition ease-in-out'/>
                             <FaInstagram className='sm:h-10 h-8 sm:w-10 w-8  cursor-pointer hover:text-gray-600  active:text-primary transition ease-in-out'/>
                    </div>
                </div>
             </div>
        </Container>
    </div>
  )
}

export default NewsLetter


