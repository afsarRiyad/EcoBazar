import React from 'react'
import plant from '../../assets/images/plant.jpg'
import Ecobazar from '../../assets/images/Ecobazar.png'
import Container from './../Container'
import { CiSearch, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const MainHeader = () => {
    return (
        <>
            <Container>
                <div className="flex justify-between items-center py-5 sm:py-9 font-pop gap-1 sm:gap-0 z-10" >
                      {/* Logo here  */}
                    <div className='flex-shrink-0 flex flex-col sm:flex-row  items-center gap-1 sm:gap-2 cursor-pointer'>
                        <img src={plant} alt="plant" className='sm:w-8 sm:h-8 w-4 h-4' />
                        <img src={Ecobazar} alt="ecoBazar" className='h-4 sm:w-full sm:h-full' />
                    </div>
                     {/* Logo ends here  */}

                      {/* search bar here  */}
                    <div className='flex-shrink-1 relative gap-[1px]'>
                        <CiSearch className='absolute hover:text-gray-700 active:text-gray-500 top-1/2 sm:top-1/2 right-3 cursor-pointer -translate-y-1/2 sm:left-4 text-gray-900 w-5 h-5' />
                    <input type="text" className='sm:px-11 px-3 w-55 sm:w-100 sm:py-3 py-2 pr-10  border font-pop rounded sm:rounded-l border-gray-300 outline-none focus:border-gray-300 focus:ring-2  placeholder:text-gray-500 placeholder:text-[15px]   focus:ring-gray-200 transition'
                            placeholder='Search' />
                        <button className='py-3.5 hidden sm:inline px-6 bg-primary active:bg-green-500  rounded-r-md cursor-pointer text-white text-[15px] '>Search</button>
                    </div>
                       {/* search bar ends here  */ }
                      
                        {/* cart and wishlist starts here   */}
                    <div className='shrink-0 flex gap-3 items-center hidden sm:flex'>
                        <div className='flex items-center sm:gap-x-8 gap-x-2 relative after:content[""] after:w-[1px] after:h-6 after:bg-gray-300 after:absolute after:left-1/2'>
                            <CiHeart className='w-8 h-8 cursor-pointer '/>
                            <HiOutlineShoppingBag className='w-8 h-8 cursor-pointer ml-2'/>
                        </div>
                             <div className='flex flex-col  '>
                                <span className='font-pop text-[12px] text-gray-700'>Shopping cart</span>
                              <span className='font-pop text-[14px] text-gray-900 font-medium'>Amount</span>
                         </div>
                    </div>
                        {/* cart and wishlist ends here   */}
                </div>
            </Container>
        </>
    )
}

export default MainHeader

