import React from 'react'
import Hamburger from '../Hamburger';
import { ChevronDown, CircleX, Heart, ShoppingCart   } from 'lucide-react';
import useOutsideClick from '../../hooks/outsideClick';
import { useRef, useState } from 'react'
import { categories, menu } from '../../data/navigation';
import CartPopup from '../../pages/CartPopup';


const MobileMenu = () => {
  const [open, setOpen] = useState(false)
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
        const [clickedMenu, setClickedMenu] = useState('')
          const [active, setActive] = useState(false)
    const mobileMenuRef = useRef(null)
    useOutsideClick(mobileMenuRef, () => setMobileMenuOpen(false), mobileMenuOpen)
  return (
    <>
    <div className='sm:hidden flex justify-between w-full'>   
         {mobileMenuOpen && ( 
           <div className='fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40'></div>
          )}
         {/* mobile view menu bar stats herer  */}
            {/* React custom hambarger */}
              <div className='sm:hidden flex items-center relative '  >
                  <Hamburger open={mobileMenuOpen} toggle={()=>setMobileMenuOpen(!mobileMenuOpen)}/>
                 <span className='text-white sm:hidden pl-4 whitespace-nowrap'>{clickedMenu}</span>
              <div ref={mobileMenuRef} className={`fixed top-0 left-0 h-full w-[75%] pt-6 border bg-white z-50 border-gray-200  
                  select-none transition-all transform duration-300  ease-in-out 
                    ${mobileMenuOpen ? '-translate-x-0 z-50' : 
                    '-translate-x-full pointer-events-none '}`}>
                      <div className='text-xl font-bold ps-4 relative w-full '>
                        Menu  <CircleX  onClick={()=> setMobileMenuOpen(false)} className='cursor-pointer
                                       active:text-gray-500 absolute top-[-19px] right-3'/>
                      </div>
                     <div className='relative w-full mt-4 mb-1 px-2'>
                        <input type="text"
                         placeholder='Search for items' 
                         className='w-full bg-white outline-none rounded py-3 pl-2 pr-23 border border-gray-300 focus:border-primary transition-all
                                      '/> 
                      <button type="button" className='
                           absolute bg-primary text-white px-4 py-3 rounded
                           text-[15px] top-0 font-semibold right-2 bottom-0 active:scale-95 transition-all active:bg-green-600
                           cursor-pointer
                      '>Search</button>
                     </div>
                    <div className='flex pt-5'>
                      <h1 onClick={() => setActive(false)} className={`text-[18px] whitespace-nowrap font-bold justify-center text-center w-full text-gray-400 relative  h-12  px-3 pt-2
                         cursor-pointer  after:content[""] after:absolute bg-gray-100 after:h-[2px] after:w-0 after:bg-primary hover:text-black active:text-black
                          hover:after:w-full after:bottom-0 after:right-0 after:transition-all after:duration-150
                          ${!active && 'bg-gray-200 border-b text-gray-800 border-b-primary'}`}>
                        All Categories
                      </h1>
                      <h1 onClick={() => setActive(true)} className={`text-[18px] font-bold w-full flex justify-center text-gray-400 bg-gray-100 relative h-12  pt-2
                         cursor-pointer    after:content[""] after:absolute 
                            after:h-[2px] after:w-0 after:bg-primary
                          hover:after:w-full after:bottom-0 after:left-0 after:transition-all hover:text-black active:text-black after:duration-150
                          ${active && 'bg-gray-200 text-gray-800 border-b border-b-primary'}`}>
                        Explore
                     </h1>
                    </div>
                  <div className='relative w-full'>    
                 {/* mobile menu all categories */}
                  <ul className={` w-full cursor-pointer 
                                    ${!active ? 'opacity-100 transition-all duration-150 ease-in-out translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'}`}>
                         {
                  categories.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name} className={`flex gap-3 text-gray-900 px-8 py-1 border-b text-[16px] border-b-gray-200 
                              whitespace-nowrap items-center group mobilemenuLi  active:scale-[0.97] active:bg-primary/40 touch-manipulation 
                             hover:bg-primary transition-colors group hover:text-white 
                              ${clickedMenu === item.name && 'bg-primary text-white'}`} 
                      onClick={() => {setClickedMenu(item.name); setMobileMenuOpen(false)}}>
                        <span className=''>
                          <Icon key={item.icon} className={`text-gray-400 w-5 h-5 group-active:text-white  group-hover:text-white transition-colors duration-300 ${clickedMenu == item.name && 'text-white'}`} />
                        </span>
                        <span className='py-3 w-[228px] group-hover:text-white transition-colors duration-150'>
                          {item.name}
                        </span>
                      </li>
                    )
                  })
                }
              </ul>
                    
                 {/* mobile menu all Menubar  */}
                  <ul className={`absolute top-0 left-0 w-full
                                    ${active  ? 'opacity-100 transition-all duration-150 ease-in-out pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-3'}`}>
                {
                  menu.map((item, index) => (
                    <li className={`flex gap-3 px-8 py-4 border-b text-gray-900 border-b-gray-200 cursor-pointer active:scale-[0.97] active:bg-primary/40 touch-manipulation
                              whitespace-nowrap items-center group mobilemenuLi transition-all active:translate-x-1
                             hover:bg-primary transition-colors group hover:text-white 
                              ${clickedMenu === item.name && 'bg-primary text-white'}`} key={item.name}
                      onClick={() => {setClickedMenu(item.name); setMobileMenuOpen(false)}}> {item.name} 
                        {item.hasIcon &&
                        <span className='w-full flex justify-end'> <ChevronDown  /> </span>}
                    </li>
                  ))
                }
              </ul>
                </div>
                  </div>
                  
              </div>
                          {/* mobile view Wishlist and cart icons starts here  */}
            <div className='flex gap-3 items-center text-white sm:hidden w-full justify-end'>
              <div className='flex items-center  gap-x-2 relative   after:content[""] after:w-[1px] after:h-6 after:bg-gray-300 after:absolute after:left-[45%] '>
                <Heart className='w-8 h-8 cursor-pointer mr-3 transition-colors hover:text-primary' />
                <ShoppingCart className='w-8 h-8 cursor-pointer sm:ml-0 mx-2 text-gray-300 transition-colors hover:text-primary' onClick={()=> setOpen(true)}/>
                 <CartPopup open={open} setOpen={setOpen} />
              </div>
            </div>
            {/* mobile view Wishlist and cart icons starts here  */}
              </div>

    </>
  )
}

export default MobileMenu