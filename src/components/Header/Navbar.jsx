import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import { FaAngleUp, FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { Heart, Apple, Soup, Shrimp, Drumstick ,PhoneIncoming, CupSoda, IceCreamCone, Dessert, CookingPot, ShoppingCart , CircleX ,Plus   } from 'lucide-react';
import {GiButter} from "react-icons/gi";
import useOutsideClick from '../../hooks/outsideClick';
import Hamburger from '../Hamburger';



const Navbar = () => {
  const [lgMenuOpen, setLgMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lgMenuRef = useRef(null)
  const mobileMenuRef = useRef(null)
 useOutsideClick({
  ref: lgMenuRef,
  callback: () => setLgMenuOpen(false),
  enable: lgMenuOpen
 })
useOutsideClick({
  ref: mobileMenuRef,
  callback: () => setMobileMenuOpen(false),
  enable: mobileMenuOpen})
  const [cate, setCate] = useState('All Categories')
  const [clickedMenu, setClickedMenu] = useState('Menu')
  const [active, setActive] = useState(false)
  const categories = [
    { name: 'Fresh Fruits', icon: Apple },
    { name: 'Vegetables', icon: Soup  },
    { name: 'River Fish', icon: Shrimp },
    { name: 'Chicken & Meat', icon: Drumstick },
    { name: 'Drinks & Water', icon: CupSoda  },
    { name: 'Yogurt & Ice Cream', icon: IceCreamCone  },
    { name: 'Cake & Bread', icon: Dessert  },
    { name: 'Butter & Cream', icon: GiButter },
    { name: 'Cooking', icon: CookingPot  },

  ]
  

  const menu = [
    'Home',
    'Shop',
    'Pages',
    'Blog',
    'About Us',
    'Contact Us',
  ]

  return (
    <div className=' bg-gray-900'>
       {/* overlay while mobile menu open */}
         {mobileMenuOpen && ( 
           <div className='fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40'></div>
          )}
      <Container>
        <nav className='flex items-center  font-pop  '>
            {/* mobile view menu bar stats herer  */}
            {/* React custom hambarger */}
              <div className='sm:hidden flex items-center relative '  >
                  <Hamburger open={mobileMenuOpen} toggle={()=>setMobileMenuOpen(!mobileMenuOpen)}/>
                 <span className='text-white sm:hidden pl-4 whitespace-nowrap'>{clickedMenu}</span>
              <div ref={mobileMenuRef} className={`fixed top-0 left-0 h-full w-[75%] pt-6 border whitespace-nowrap bg-white z-50 border-gray-200  
                  select-none transition-all transform duration-300  ease-in-out 
                    ${mobileMenuOpen ? '-translate-x-0  opacity-100 z-50' : 
                    '-translate-x-full opacity-100 pointer-events-none '}`}>
                      <div className='text-3xl relative w-full '>
                        Menu  <CircleX  onClick={()=> setMobileMenuOpen(false)} className='cursor-pointer
                                       active:text-gray-500 absolute top-[-19px] right-3'/>
                      </div>
                    <div className='flex pt-5'>
                      <h1 onClick={() => setActive(false)} className={`text-[18px]  justify-center text-center w-full text-gray-400 relative font-medium  h-12  px-3 pt-2
                         cursor-pointer  after:content[""] after:absolute bg-gray-100 after:h-[2px] after:w-0 after:bg-primary hover:text-black active:text-black
                          hover:after:w-full after:bottom-0 after:right-0 after:transition-all after:duration-150
                          ${!active && 'bg-gray-200 border-b text-gray-800 border-b-primary'}`}>
                        All Categories
                      </h1>
                      <h1 onClick={() => setActive(true)} className={`text-[18px] w-full flex justify-center text-gray-400 bg-gray-100 relative font-medium  h-12  pt-2
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
                      <li key={item.name} className={`flex gap-3 px-8 py-2 border-b border-b-gray-200 
                              whitespace-nowrap items-center group mobilemenuLi  active:scale-[0.97] active:bg-primary/40 touch-manipulation 
                             hover:bg-primary transition-colors group hover:text-white 
                              ${clickedMenu === item.name && 'bg-primary text-white'}`} 
                      onClick={() => {setClickedMenu(item.name); setMobileMenuOpen(false)}}>
                        <span className=''>
                          <Icon key={item.icon} className={`text-gray-400 w-6 h-6 group-active:text-white  group-hover:text-white transition-colors duration-300 ${clickedMenu == item.name && 'text-white'}`} />
                        </span>
                        <span className='py-4 w-[228px] group-hover:text-white transition-colors duration-150'>
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
                    <li className={`flex gap-3 px-8 py-5 border-b border-b-gray-200 cursor-pointer active:scale-[0.97] active:bg-primary/40 touch-manipulation
                              whitespace-nowrap items-center group mobilemenuLi transition-all active:translate-x-1
                             hover:bg-primary transition-colors group hover:text-white 
                              ${clickedMenu === item && 'bg-primary text-white'}`} key={index}
                      onClick={() => {setClickedMenu(item); setMobileMenuOpen(false)}}> {item} <span className='w-full flex justify-end'>{clickedMenu == item ? <FaAngleRight /> : <FaAngleDown />} </span>
                    </li>
                  ))
                }
              </ul>
                </div>
                  </div>
                  
              </div>

            
              {/*large device categories dropdown starts here  */}
            <div ref={lgMenuRef}>
              <div className=' hidden sm:flex relative ' onClick={()=> setLgMenuOpen(!lgMenuOpen)}>
               <div className='flex flex-col items-center gap-2 cursor-pointer justify-center px-5 h-16 bg-primary' >
                <span className={`w-5 h-[2px] bg-white ${lgMenuOpen && ' rotate-45 translate-y-[6px] '} 
                                                     transition-transform duration-300`}></span>
                <span className={`w-5 h-[2px] bg-white ${lgMenuOpen && 'opacity-0'} 
                                                        transition-all duration-300`} ></span>
                <span className={`w-5 h-[2px] bg-white ${lgMenuOpen && ' -rotate-45 -translate-y-[6px]'}
                                                               transition-transform duration-300`}></span>
                        </div>
                <div className='flex hidden sm:flex items-center relative w-[240px] rounded-r-[10px] cursor-pointer select-none text-[16px] bg-gray-700 py-5 pl-4 text-gry'>{cate} <FaAngleDown className={`absolute right-6 ${lgMenuOpen && 'rotate-180'} transition-transform duration-300`} />
              </div>
              <ul className={`absolute lg:inline top-full  border bg-white z-50 border-gray-200   select-none cursor-pointer  transition-all transform duration-300 ease-in-out ${lgMenuOpen ? 'scale-y-100 origin-top opacity-100 z-50' : 'scale-y-0 origin-top opacity-0 pointer-events-none '}`}>
                {
                  categories.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name} className={`flex gap-3 pr-4 items-center group hover:bg-primary 
                            ${cate == item.name ? 'bg-primary text-white' : 'bg-white text-black'}`} onClick={() => {setCate(item.name); setLgMenuOpen(false); }}>
                        <span className='pl-5'>
                          <Icon key={item.icon} className='text-gray-400 w-6 h-6 group-hover:text-white transition-colors duration-300' />
                        </span>
                        <span className='py-4 w-[228px] group-hover:text-white transition-colors duration-150'>
                          {item.name}
                        </span>
                      </li>
                    )
                  })
                }
                <li className='flex gap-3 pr-4 items-center group hover:bg-primary border-t border-t-gray-300'>
                  <span className='pl-5'>
                    <Plus  className='text-gray-400 w-6 h-6 group-hover:text-white transition-colors duration-300' />
                  </span>
                  <span className='py-4 w-[228px] group-hover:text-white transition-colors duration-300'>View All Categories</span>
                </li>
              </ul>
            
            </div>
            </div>
          {/* customer service starts here  */}
          <div className='flex items-center justify-between w-full bg-gray-900'>
            <ul className=' hidden sm:flex  gap-8 text-gray-400 cursor-pointer select-none  py-[21.5px] px-8 text-[14px]'>
              {
                menu.map((item, index) => (
                  <li key={index} className='hover:text-white flex items-center gap-1'>{item} <FaAngleUp /></li>
                ))
              }
            </ul>
            <div className='text-white hidden sm:flex flex items-center gap-2'>
              <PhoneIncoming className='w-10 h-10 text-gray-300 cursor-pointer' />
              <div className='pr-4'>
                <p className='text-gray-400 text-[14px]'>Customer Service</p>
                <p className='text-gray-100 text-[16px]'>+1 (123) 456-7890</p>
              </div>
            </div>
            {/* mobile view Wishlist and cart icons starts here  */}
            <div className='flex gap-3 items-center text-white sm:hidden w-full justify-end'>
              <div className='flex items-center  gap-x-2 relative   after:content[""] after:w-[1px] after:h-6 after:bg-gray-300 after:absolute after:left-[45%] '>
                <Heart className='w-8 h-8 cursor-pointer mr-3 transition-colors hover:text-primary' />
                <ShoppingCart className='w-8 h-8 cursor-pointer sm:ml-0 mx-2 text-gray-300 transition-colors hover:text-primary' />
              </div>
            </div>
            {/* mobile view Wishlist and cart icons starts here  */}
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar