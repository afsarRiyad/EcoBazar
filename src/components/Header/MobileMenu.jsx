import React from 'react'
import Hamburger from '../Hamburger';
import { ChevronDown, CircleX, Heart, ShoppingCart } from 'lucide-react';
import useOutsideClick from '../../hooks/outsideClick';
import { useRef, useState } from 'react'
import { categories, menu } from '../../data/navigation';
import CartPopup from '../CartPopup';
import { Link } from 'react-router';


  const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [clickedMenu, setClickedMenu] = useState('')
  const [expandedMenu, setExpandedMenu] = useState('')
  const [active, setActive] = useState(false)
  const mobileMenuRef = useRef(null)
  useOutsideClick(mobileMenuRef, () => setMobileMenuOpen(false), mobileMenuOpen)
  return (
    <>
      <div className='sm:hidden flex justify-center  '  >
        {mobileMenuOpen && (
          <div className='fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40'></div>
        )}
        {/* mobile view menu bar stats herer  */}
        {/* React custom hambarger */}
        <div className='sm:hidden flex flex-col h-full items-center relative '  >
          <Hamburger open={mobileMenuOpen} toggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
            <div ref={mobileMenuRef} className={`fixed top-0 left-0 h-full w-[82%] pt-6 flex flex-col border bg-white z-50 border-gray-200   scroll-auto overflow-y-auto
                  select-none transition-all transform duration-300  ease-in-out 
                    ${mobileMenuOpen ? '-translate-x-0 z-50' :
              '-translate-x-full pointer-events-none '}`}>
            <div className='text-xl font-bold ps-4 relative w-full '>
              Menu  <CircleX onClick={() => setMobileMenuOpen(false)} className='cursor-pointer
                                       active:text-gray-500 absolute top-[0px] right-3'/>
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
                  categories.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name} className={`flex gap-3 text-gray-900 px-8 py-1 border-b text-[16px] border-b-gray-200 
                              whitespace-nowrap items-center group mobilemenuLi  active:scale-[0.97] active:bg-primary/40 touch-manipulation 
                             hover:bg-primary transition-colors group hover:text-white 
                              ${clickedMenu === item.name && 'bg-primary text-white'}`}>
                        <Link to={`/shop?category=${encodeURIComponent(item.name)}`} onClick={() => { setClickedMenu(item.name); setMobileMenuOpen(false) }} className='flex gap-3 items-center w-full'>
                        <span className=''>
                          <Icon key={item.icon} className={`text-gray-400 w-5 h-5 group-active:text-white  group-hover:text-white transition-colors duration-300 ${clickedMenu == item.name && 'text-white'}`} />
                        </span>
                        <span className='py-3 w-[228px] group-hover:text-white transition-colors duration-150'>
                          {item.name}
                        </span>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>

              {/* mobile menu all Menubar  */}
              <ul className={`absolute top-0 left-0 w-full
                                    ${active ? 'opacity-100 transition-all duration-150 ease-in-out pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-3'}`}>
                {
                  menu.map((item) => {
                    const hasChildren = Boolean(item.children?.length)
                    const isExpanded = expandedMenu === item.name

                    return (
                      <li
                        className={`border-b text-gray-900 border-b-gray-200 cursor-pointer touch-manipulation transition-colors duration-150 hover:bg-gray-50
                              ${clickedMenu === item.name && 'bg-primary/10'}`}
                        key={item.name}
                      >
                        {hasChildren ? (
                          <button
                            type='button'
                            onClick={() => setExpandedMenu(isExpanded ? '' : item.name)}
                            aria-expanded={isExpanded}
                            className='flex w-full items-center justify-between gap-3 px-8 py-4 text-left'
                          >
                            {item.name}
                            <ChevronDown
                              className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                            />
                          </button>
                        ) : (
                          <Link
                            to={item.to || '#'}
                            onClick={() => { setClickedMenu(item.name); setMobileMenuOpen(false) }}
                            className='flex items-center gap-3 w-full px-8 py-4'
                          >
                            {item.name}
                          </Link>
                        )}

                        {hasChildren && isExpanded && (
                          <ul className='pb-3'>
                            {item.children.map((child) => {
                              const ChildIcon = child.icon

                              return (
                                <li key={child.to}>
                                  <Link
                                    to={child.to}
                                    onClick={() => { setClickedMenu(child.name); setMobileMenuOpen(false) }}
                                    title={child.name}
                                    className='flex items-center gap-3 px-12 py-2.5 text-[14px] text-gray-500 hover:text-primary transition-colors duration-150'
                                  >
                                    {ChildIcon && <ChildIcon className='h-4 w-4 shrink-0 text-stone-400' />}
                                    <span className='truncate'>{child.name}</span>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="mt-auto border-t border-t-gray-300 pt-4 flex gap-1">
              {/* Account */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Account</h3>
                <div className="flex gap-2 px-1 py-2 border rounded cursor-pointer">
                  <Link onClick={()=>setMobileMenuOpen(false)} to='/login' className="cursor-pointer hover:text-blue-600">
                    Sign In 
                  </Link>
                  <span>/</span>
                  <Link onClick={()=>setMobileMenuOpen(false)} to='/registration' className="cursor-pointer hover:text-blue-600">
                    Sign Up
                  </Link>
                </div>
              </div>

              {/* Language */} {/* Currency */}
             <div className='flex gap-2'>
               <div className="mb-4">
                <h3 className="font-medium mb-2">Language</h3>
                <select className="w-full border rounded p-2">
                  <option value="en">English</option>
                  <option value="bn">বাংলা</option>
                  <option value="hi">हिन्दी</option>
                </select>
              </div>

              <div>
                <h3 className="font-medium mb-2">Currency</h3>
                <select className="w-full border rounded p-2">
                  <option value="BDT">৳ BDT</option>
                  <option value="USD">$ USD</option>
                  <option value="EUR">€ EUR</option>
                </select>
              </div>
             </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default MobileMenu