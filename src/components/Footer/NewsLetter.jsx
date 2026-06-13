import React from 'react'
import Container from '../Container'
import Facebook from "../../assets/iconsSocial/facebookSvg.svg?react";
import Twitter from '../../assets/iconsSocial/twitterSvg.svg?react'
import Pinterest from '../../assets/iconsSocial/pinterestSvg.svg?react'
import Instagram from '../../assets/iconsSocial/instagramSvg.svg?react'
import { Link } from 'react-router';

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
                        <input type="email"
                         placeholder='Your email address ' 
                         className='w-full bg-white outline-none rounded-full py-4 pl-6 pr-40 border border-transparent focus:border-primary transition-all
                                      '/> 
                      <button className='
                           absolute bg-primary font-semibold text-white px-5 sm:px-10 py-3 rounded-full 
                           text-[15px] top-0 right-0 bottom-0 active:scale-95 transition-all active:bg-green-600
                           cursor-pointer
                      '>Subscribe</button>
                     </div>
                    <div className='flex items-center gap-4 text-gray-500'>
                       <Link to="#" className=' cursor-pointer group hover:bg-primar  w-12 h-12  flex items-center justify-center  active:text-green-500 hover:bg-primary  transition ease-in-out py-2 px-3 rounded-full text-center border border-gray-200 duration-300'>
                        <Facebook fill="currentColor" className='text-[#3b5998] group-hover:text-white transition-colors duration-500 h-5 w-auto'/>
                       </Link>
                          <Link to="#" className=' cursor-pointer group hover:bg-primary active:text-green-500  transition ease-in-out py-2 px-3 rounded-full text-center border border-gray-200 duration-300'>
                        <Twitter fill="currentColor"  className='text-[#3b5998] sm:h-7 h-8 sm:w-6 w-5 group-hover:text-white transition-colors duration-500'/>
                       </Link>
                           <Link to="#" className=' cursor-pointer group hover:bg-primary active:text-green-500  transition ease-in-out py-2 px-3 rounded-full text-center border border-gray-200 duration-300'>
                        <Pinterest fill="currentColor" size={24} className='text-gray-500 sm:h-7 h-8 sm:w-6 w-5 group-hover:text-white transition-colors duration-500'/>
                       </Link>
                             <Link to="#" className=' cursor-pointer group hover:bg-primary active:text-green-500  transition ease-in-out py-2 px-3 rounded-full text-center border border-gray-200 duration-300'>
                        <Instagram fill="currentColor" size={24} className='text-gray-500 sm:h-7 h-8 sm:w-6 w-5 group-hover:text-white transition-colors duration-500'/>
                       </Link>
                    </div>
                </div>
             </div>
        </Container>
    </div>
  )
}

export default NewsLetter


