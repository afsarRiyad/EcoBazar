import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import useOutsideClick from '../../hooks/outsideClick';
import MobileMenu from './MobileMenu';
import { categories, menu, allCategories } from '../../data/navigation';
import { ChevronDown, Plus, PhoneIncoming, ChevronRight, Search  } from 'lucide-react';
import Hamburger from './../Hamburger';

const Navbar = () => {
  const [lgMenuOpen, setLgMenuOpen] = useState(false)
  const [desktopSidebar, setDesktopSidebar] = useState(false)
  const [hasIcon, setHasIcon] = useState(false)
  const sideBarRef = useRef(null)
  useOutsideClick(sideBarRef, () => setDesktopSidebar(false), desktopSidebar)
  const [cate, setCate] = useState('Top Categories')


  return (
    <div className=' bg-gray-900'>
      <Container>
        <nav className='sm:flex items-center  font-pop  '>
          {/* mobile view sideBar  */}
          <MobileMenu />
          {/* mobile view sideBar  */}

          {/*Desktop categories dropdown starts here  */}
          <div >
            <div className={` hidden sm:flex relative `}>
              <div ref={sideBarRef} >
                <Hamburger open={desktopSidebar} toggle={() => setDesktopSidebar(prev => !prev)} />
                <div className={`absolute border border-gray-300 rounded-b bg-white text-black z-50 h-auto top-full left-0 w-80 ps-3 py-5 px- 
                                  ${desktopSidebar ? '-translate-x-0 opacity-100' : 'opacity-0 -translate-x-full pointer-events-none'} transform transition-transform  will-change-transform ease-in-out duration-300`}>
                  <div className='font-pop  h-auto '>
                    <div className='pb-2 border-b font-bold  text-2xl border-b-primary border-b-[2px]'>Shop All</div>
                    <ul className='py-3  text-[16px] '>
                       <div className='relative gap-[1px] pb-3'>
                        <Search className='absolute hover:text-gray-700 active:text-gray-500 translate-y-1/2 cursor-pointer right-7 text-gray-900 w-6 h-6' />
                    <input type="text" className=' px-3 w-73 sm:py-3 py-2 pr-10  border font-pop rounded sm:rounded-l border-gray-300 outline-none focus:border-gray-300 focus:ring-2  placeholder:text-gray-500 placeholder:text-[15px]   focus:ring-gray-200 transition'
                            placeholder='Search' />
                    
                    </div>
                      {
                        allCategories.map((item, index) => (
                          <li key={item.name} onClick={() => { setCate(item.name); setDesktopSidebar(false) }} className={`flex relative w-full font-pop text-gray-600 group  gap-3 py-3 ps-2 cursor-pointer items-center border-b border-b-gray-300 group hover:bg-green-500 hover:text-white transition-colors duration-150
                            ${cate == item.name ? 'bg-primary text-white' : 'bg-white text-black'}`}>
                            <div className='flex justify-between w-full pe-4'>{item.name} {
                                       item.hasIcon && <ChevronRight /> 
                                  } </div>
                            {item.children && (
                              <ul className='absolute opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100  left-full top-0 transition-all duration-200 ease-out bg-white border border-gray-200 w-70 shadow-xl pointer-events-none group-hover:pointer-events-auto'>
                                {item.children.map(child => (
                                  <li key={child.name} onClick={(e)=> {e.stopPropagation(); setCate(child.name); setDesktopSidebar(false)}} className={`w-full group text-gray-700 gap-3 py-3 ps-2 cursor-pointer items-center border-b border-b-gray-300 group hover:bg-primary hover:text-white transition-colors duration-150 ${cate == child.name && 'bg-primary text-white' }`}>{child.name}</li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
              {/* desktop sidebar ends here*/}
              <div onMouseEnter={() => { !desktopSidebar && setLgMenuOpen(true) }} onMouseLeave={() => setLgMenuOpen(false)}>
                <div onClick={() => setLgMenuOpen(true)} className='flex hidden font-md sm:flex items-center relative w-[240px] rounded-r-[10px] cursor-pointer   select-none text-[16px] bg-gray-700 py-5.25 pl-4 text-gry'>
                  {cate}
                  <ChevronDown className={`absolute right-6 ${lgMenuOpen && 'rotate-180'} transition-transform duration-300`} />
                </div>
                <ul className={`absolute lg:inline top-full left-0  border bg-white z-50 border-gray-200   select-none cursor-pointer  transition-all transform duration-300 ease-in-out  ${lgMenuOpen ? 'scale-y-100 origin-top opacity-100 z-50' : 'scale-y-0 origin-top opacity-0 pointer-events-none '}`}>
                  {
                    categories.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.name} className={`flex gap-3 text-[16px] pr-4 items-center group hover:bg-primary 
                            ${cate == item.name ? 'bg-primary text-white' : 'bg-white text-black'}`} onClick={() => { setCate(item.name); setLgMenuOpen(false); }}>
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
                  <li onClick={() => { setDesktopSidebar(true); setLgMenuOpen(false) }} className='flex gap-3 pr-4 items-center group hover:bg-primary border-t border-t-gray-300'>
                    <span className='pl-5'>
                      <Plus className='text-gray-400 w-6 h-6 group-hover:text-white transition-colors duration-300' />
                    </span>
                    <span className='py-4 w-[228px] group-hover:text-white transition-colors duration-300'>View All Categories</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* customer service starts here  */}
          <div className='flex items-center justify-between w-full bg-gray-900'>
            <ul className=' hidden sm:flex  gap-8 text-gray-400 cursor-pointer select-none  py-[21.5px] px-8 text-[14px]'>
              {
                menu.map((item, index) => (
                  <li key={index} className='hover:text-white flex items-center gap-1'>{item.name}
                    {item.hasIcon &&
                      <ChevronDown />}
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