import React, { useRef } from 'react'
import Cart from '../assets/images/cart/cart.webp'
import { X } from 'lucide-react';
import useOutsideClick from '../hooks/outsideClick';

const CartPopup = ({open, setOpen}) => {
  const ref = useRef(null)
  useOutsideClick(ref, ()=> setOpen(false), open)
  return (
    <>
  {open && <div className='fixed inset-0 bg-black/60  z-50' />}
      <div ref={ref} className={`fixed top-0 right-0 bottom-0 sm:w-116 w-75 bg-white z-50 shadow-xl font-pop transform transition-transform transition-opacity duration-200 ${open ? 'opacity-100 translate-x-0' : 'translate-x-full opacity-0'}`} >
       <div className=' flex flex-col overflow-hidden h-full'>
         <div className='relative text-gray-900 font-semibold text-xl sm:p-10 p-6 ' >
               Shopping Cart <span className='text-gray-400'>(1)</span>
          <X className='absolute sm:right-8 right-4 sm:top-10 top-6 cursor-pointer' onClick={()=> setOpen(false)}/>
        </div>
       <div className='flex-1 overflow-y-auto space-y-4 sm:px-10 p-2'>
        {/* cart item start */}
         <div className='flex relative items-center mb-4 border-t border-gray-100 py-4'>
            <img src={Cart} alt="product image" className='w-25 h-auto' />
            <div className='px-2'>
            <span className='text-gray-900'>Fresh Indian Orange</span>
            <div>
                <span className='text-gray-300 '>1kg * </span>
                <span className='font-bold text-black'>14.00</span>
            </div>
            </div>
        </div>
        {/* cart item ends */}
       </div>
       <div className='bg-gray-50 w-full'>
           <div className='flex justify-between items-center sm:py-6 py-3 sm:px-10 px-5 '>
              <span className='text-[18px] text-gray-500'>1 Product</span>
              <span className='text-[18px] font-semibold text-black'>$26.00</span>
           </div>
           <div className='space-y-3 flex flex-col sm:p-8 p-4'>
             <button className='cursor-pointer bg-primary text-white rounded-full font-semibold text-[18px] sm:py-4 py-2 active:scale-95 transition transform hover:bg-green-600 duration-200 ease-in-out'>Checkout</button>
             <button onClick={()=> setOpen(false)} className='cursor-pointer bg-[#56AC59]/10 hover:bg-[#56AC59]/20 rounded-full font-semibold text-[18px] text-primary sm:py-4 py-2 active:scale-95 transition transform duration-200 ease-in-out'>Go To Cart</button>
           </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default CartPopup