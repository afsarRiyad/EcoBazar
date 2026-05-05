import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import useOutsideClick from '../../hooks/outsideClick';
import Hamburger from '../Hamburger';
import MobileMenu from './MobileMenu';
import { categories, menu } from '../../data/navigation';
import { ChevronDown, Plus, PhoneIncoming } from 'lucide-react';

const Navbar = () => {
  const [lgMenuOpen, setLgMenuOpen] = useState(false)
  const [hasIcon, setHasIcon] = useState(false)
  const lgMenuRef = useRef(null)
useOutsideClick(lgMenuRef, () => setLgMenuOpen(false), lgMenuOpen)
  const [cate, setCate] = useState('All Categories')


  return (
    <div className=' bg-gray-900'>
      <Container>
        <nav className='sm:flex items-center  font-pop  '>
          {/* mobile menuBar  */}
               <MobileMenu />
          {/* mobile menuBar  */}

              {/*Desktop categories dropdown starts here  */}
            <div ref={lgMenuRef}>
              <div className={` hidden sm:flex relative `} onMouseEnter={()=> setLgMenuOpen(true)} onMouseLeave={()=> setLgMenuOpen(false)}>
               <div className='flex flex-col items-center gap-2 cursor-pointer justify-center px-5 h-16 bg-primary' >
                <span className={`w-5 h-[2px] bg-white ${lgMenuOpen && ' rotate-45 translate-y-[6px] '} 
                                                     transition-transform duration-300`}></span>
                <span className={`w-5 h-[2px] bg-white ${lgMenuOpen && 'opacity-0'} 
                                                        transition-all duration-300`} ></span>
                <span className={`w-5 h-[2px] bg-white ${lgMenuOpen && ' -rotate-45 -translate-y-[6px]'}
                                                               transition-transform duration-300`}></span>
                        </div>
                <div className='flex hidden sm:flex items-center relative w-[240px] rounded-r-[10px] cursor-pointer select-none text-[16px] bg-gray-700 py-5 pl-4 text-gry'>{cate} <ChevronDown  className={`absolute right-6 ${lgMenuOpen && 'rotate-180'} transition-transform duration-300`} />
              </div>
              <ul className={`absolute lg:inline top-full  border bg-white z-50 border-gray-200   select-none cursor-pointer  transition-all transform duration-300 ease-in-out  ${lgMenuOpen ? 'scale-y-100 origin-top opacity-100 z-50' : 'scale-y-0 origin-top opacity-0 pointer-events-none '}`}>
                {
                  categories.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li role="button" key={item.name} className={`flex gap-3 pr-4 items-center group hover:bg-primary 
                            ${cate == item.name ? 'bg-primary text-white' : 'bg-white text-black'}`} onClick={() => {setCate(item.name); setLgMenuOpen(false); }}>
                        <span role="button" className='pl-5'>
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
                  <li key={index} className='hover:text-white flex items-center gap-1'>{item.name} 
                   {item.hasIcon && 
                   <ChevronDown  />}
                  </li>
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
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar