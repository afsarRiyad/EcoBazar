import React, { useRef, useState } from 'react'
import Container from '../Container'
import useOutsideClick from '../../hooks/outsideClick';
import MobileMenu from './MobileMenu';
import { categories, menu, allCategories } from '../../data/navigation';
import { ChevronDown, Plus, PhoneIncoming, ChevronRight, Search, X, SolarPanel  } from 'lucide-react';
import Hamburger from './../Hamburger';
import { Link } from 'react-router';

const Navbar = () => {
  const [lgMenuOpen, setLgMenuOpen] = useState(false)
  const [desktopSidebar, setDesktopSidebar] = useState(false)
  const sideBarRef = useRef(null)
  useOutsideClick(sideBarRef, () => setDesktopSidebar(false), desktopSidebar)
  const [cate, setCate] = useState('Top Categories')
  const [openMenu, setOpenMenu] = useState(null)
  const menuRef = useRef(null)
  useOutsideClick(menuRef, () => setOpenMenu(null), openMenu !== null)


  return (
    <div className=' bg-gray-900'>
      <Container>
        <nav className='sm:flex items-center  font-pop  '>
      
          {/*Desktop categories dropdown starts here  */}
          <div >
            <div className={` hidden sm:flex relative `}>
              <div ref={sideBarRef} >
                <Hamburger open={desktopSidebar} toggle={() => setDesktopSidebar(prev => !prev)} />
                  {
                    desktopSidebar &&
                    <div className='fixed inset-0 bg-black/60 backdrop:-blur-[1px] z-50' onClick={()=> setDesktopSidebar(false)}/>
                  }
                <div className={`fixed inset-0 border border-gray-300 rounded-b bg-white text-black z-50 h-auto  w-106 ps-4 pt-10 px- 
                                  ${desktopSidebar ? '-translate-x-0 opacity-100' : 'opacity-0 -translate-x-full pointer-events-none'} transform transition-transform ease-in-out duration-300`}>
                  <div className='font-pop  h-auto '>
                    <div className='pb-4 font-bold relative items-center  text-2xl'>Shop All <X className='absolute right-4 top-0 cursor-pointer' onClick={()=> setDesktopSidebar(false)}/></div>
                    <ul className='py-3  text-[16px] '>
                       <div className='relative gap-[1px] pb-3'>
                        <Search className='absolute hover:text-gray-700 active:text-gray-500 translate-y-1/2 cursor-pointer right-7 text-gray-900 w-6 h-6' />
                    <input type="text" className=' px-3 w-84 sm:py-3 py-2 pr-10  border font-pop rounded sm:rounded-l border-gray-300 outline-none focus:border-gray-300 focus:ring-2  placeholder:text-gray-500 placeholder:text-[15px]   focus:ring-gray-200 transition'
                            placeholder='Search' />
                    
                    </div>
                      {
                        allCategories.map((item) => (
                          <li key={item.name} className={`flex relative w-full font-pop text-gray-600 group  gap-3 py-3 ps-2 cursor-pointer items-center border-b border-b-gray-300 group hover:bg-green-500 hover:text-white transition-colors duration-150
                            ${cate == item.name ? 'bg-primary text-white' : 'bg-white text-black'}`}>
                            <Link to={`/shop?category=${encodeURIComponent(item.name)}`} onClick={() => { setCate(item.name); setDesktopSidebar(false) }} className='flex justify-between w-full pe-4'>{item.name} {
                                       item.hasIcon && <ChevronRight /> 
                                  } </Link>
                            {item.children && (
                              <ul className='absolute opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100  left-full top-0 transition-all duration-200 ease-out bg-white border border-gray-200 w-70 shadow-xl pointer-events-none group-hover:pointer-events-auto'>
                                {item.children.map(child => (
                                  <li key={child.name} className={`w-full group text-gray-700 gap-3 py-3 ps-2 cursor-pointer items-center border-b border-b-gray-300 group hover:bg-primary hover:text-white transition-colors duration-150 ${cate == child.name && 'bg-primary text-white' }`}>  
                                    <Link to={`/shop?category=${encodeURIComponent(child.name)}`} onClick={(e)=> {e.stopPropagation(); setCate(child.name); setDesktopSidebar(false)}}>{child.name}</Link>
                                  </li>
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
              <div onMouseEnter={() => { !desktopSidebar && setLgMenuOpen(true) }} onMouseLeave={() => setLgMenuOpen(false)} className='hidden xl:flex'>
                <div className='flex font-md sm:flex items-center relative w-[240px] rounded-r-[10px] cursor-pointer   select-none text-[16px] bg-gray-700 py-5.25 pl-4 text-gry'>
                  {cate}
                  <ChevronDown className={`absolute right-6 ${lgMenuOpen && 'rotate-180'} transition-transform duration-300`} />
                </div>
              <ul className={`absolute  top-full left-0 shadow-xl border bg-white z-50 border-gray-200   select-none cursor-pointer  transition-all duration-200 ease-out  ${lgMenuOpen ? 'opacity-100 translate-y-0 z-50' : 'translate-y-3 opacity-0 pointer-events-none '}`}>
                  {
                    categories.map((item) => {
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
                  <li onClick={() => { setDesktopSidebar(true); setLgMenuOpen(false) }} className='flex gap-3 pr-4 items-center group hover:bg-primary border-t border-t-gray-300 '>
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
            <ul ref={menuRef} className=' hidden sm:flex  gap-8 text-gray-400 cursor-pointer select-none  py-[21.5px] px-8 text-[14px]'>
              {
                menu.map((item) => {
                  const hasChildren = Boolean(item.children?.length)
                  const isOpen = openMenu === item.name

                  return (
                    <li
                      key={item.name}
                      onMouseEnter={() => hasChildren && setOpenMenu(item.name)}
                      onMouseLeave={() => hasChildren && setOpenMenu(null)}
                      className='relative hover:text-white flex items-center gap-1'
                    >
                      <Link to={item.to || '#'}>{item.name}</Link>
                      {hasChildren && (
                        <button
                          type='button'
                          onClick={() => setOpenMenu(item.name)}
                          aria-expanded={isOpen}
                          aria-haspopup='true'
                          aria-label={`${item.name} menu`}
                          className='flex items-center cursor-pointer'
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                      )}

                      {hasChildren && (
                        <div
                          className={`absolute left-0 top-full pt-3 z-50 transition-all duration-200 ${isOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-1 pointer-events-none'
                            }`}
                        >
                          <ul className='w-[280px] divide-y divide-stone-100 overflow-hidden border border-stone-200 bg-white shadow-[0_24px_44px_-26px_rgba(28,25,23,0.45)]'>
                            {item.children.map((child) => {
                              const Icon = child.icon

                              return (
                                <li key={child.to}>
                                  <Link
                                    to={child.to}
                                    onClick={() => setOpenMenu(null)}
                                    title={child.name}
                                    className='group flex items-center gap-3 px-5 py-3.5 font-pop text-[14px] text-stone-700 transition-colors duration-150 hover:bg-primary hover:text-white'
                                  >
                                    {Icon && (
                                      <Icon className='h-[18px] w-[18px] shrink-0 text-stone-400 transition-colors duration-150 group-hover:text-white' />
                                    )}
                                    <span className='truncate'>{child.name}</span>
                                  </Link>
                                </li>
                              )
                            })}

                            {item.footer && (
                              <li>
                                <Link
                                  to={item.footer.to}
                                  onClick={() => setOpenMenu(null)}
                                  className='group flex items-center gap-3 px-5 py-3.5 font-pop text-[14px] text-stone-700 transition-colors duration-150 hover:bg-primary hover:text-white'
                                >
                                  <Plus className='h-[18px] w-[18px] shrink-0 text-stone-400 transition-colors duration-150 group-hover:text-white' />
                                  <span className='truncate'>{item.footer.label}</span>
                                </Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </li>
                  )
                })
              }
            </ul>
            <div className='text-white hidden lg:flex  items-center gap-2'>
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