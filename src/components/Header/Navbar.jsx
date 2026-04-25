import React, { useState } from 'react'
import Container from '../Container'
import { FaAngleUp } from "react-icons/fa6";
import { PiPhoneCallThin, PiFish  } from "react-icons/pi";
import { CiApple, CiBowlNoodles  } from "react-icons/ci";
import { IoIceCreamOutline } from "react-icons/io5";
import { GiChickenLeg, GiCupcake, GiButter, GiCampCookingPot    } from "react-icons/gi";
import { IoAddSharp } from "react-icons/io5";
import { RiDrinksLine } from "react-icons/ri";
import useDropdown from '../../hooks/useDropdown';



const Navbar = () => {
    const category = useDropdown()
    const [cate, setCate] = useState('All Categories')
    const categories = [
           {name: 'Fresh Fruits', icon: CiApple},
           {name: 'Vegetables', icon: CiBowlNoodles},
           {name: 'River Fish', icon: PiFish},
           {name: 'Chicken & Meat', icon: GiChickenLeg},
           {name: 'Drinks & Water', icon: RiDrinksLine},
           {name: 'Yogurt & Ice Cream', icon: IoIceCreamOutline},
           {name: 'Cake & Bread', icon: GiCupcake},
           {name: 'Butter & Cream', icon: GiButter},
           {name: 'Cooking', icon: GiCampCookingPot},

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
         <Container>
        <nav className='flex items-center  font-pop  '>
           <div ref={category.ref}>
                {/* React custom hambarger starts here */}
                {/* React custom hambarger starts here */}
             <div className='flex items-center relative ' onClick={category.toggle}>
             <div className='flex flex-col items-center gap-2 cursor-pointer justify-center px-5 h-16 bg-primary'>
             <span className={`w-5 h-[2px] bg-white ${category.open && ' rotate-45 translate-y-[6px]' } transition-transform duration-300`}></span>
             <span className={`w-5 h-[2px] bg-white ${category.open && 'opacity-0' } transition-all duration-300`}></span>
             <span className={`w-5 h-[2px] bg-white ${category.open && ' -rotate-45 -translate-y-[6px]' } transition-transform duration-300`}></span>
            </div>
                {/* React custom hambarger ends here */}
                {/* React custom hambarger ends here */}
                    
              <div className='flex items-center relative w-[240px] rounded-r-[10px] cursor-pointer select-none text-[16px] bg-gray-700 py-5 pl-4 text-gry'>{cate} <FaAngleUp className={`absolute right-6 ${category.open && 'rotate-180'} transition-transform duration-300`}/>
               </div>

                {/* categories dropdown starts here  */}
                <ul className={`absolute top-full mt-[20px] border bg-white z-50 border-gray-200   select-none cursor-pointer  transition-all transform duration-300 ease-in-out ${category.open ? 'translate-x-0 opacity-100 z-50' : '-translate-x-12 opacity-0 pointer-events-none'}`}>
                  {
                    categories.map((item, index)=> {
                        const Icon = item.icon;
                       return(
                         <li key={index} className={`flex gap-3 pr-4 items-center group hover:bg-primary ${cate == item.name ? 'bg-primary text-white' : 'bg-white text-black'}`} onClick={(e)=> {e.stopPropagation(); setCate(item.name) ; category.close();}}>
                            <span className='pl-5'><Icon className='text-gray-400 w-6 h-6 group-hover:text-white transition-colors duration-300'/></span>
                            <span className='py-4 w-[228px] group-hover:text-white transition-colors duration-300'>{item.name}</span>
                        </li>
                       )
                    })
                  }
                  <li className='flex gap-3 pr-4 items-center group hover:bg-primary border-t border-t-gray-300'>
                     <span className='pl-5'>
                        <IoAddSharp className='text-gray-400 w-6 h-6 group-hover:text-white transition-colors duration-300'/>
                      </span>
                     <span className='py-4 w-[228px] group-hover:text-white transition-colors duration-300'>View All Categories</span>
                  </li>
                </ul>
   
            </div>  
           </div>
                        {/* customer service starts here  */}
                        {/* customer service starts here  */}
            <div className='flex items-center justify-between w-full bg-gray-900'>
                <ul className='flex gap-8 text-gray-400 cursor-pointer select-none  py-[21.5px] px-8 text-[14px]'>
                    {/* <li className='hover:text-white flex items-center gap-1'>Home <FaAngleUp /></li>
                    <li className='hover:text-white flex items-center gap-1'>Shop <FaAngleUp /></li>
                    <li className='hover:text-white flex items-center gap-1'>Pages <FaAngleUp /></li>
                    <li className='hover:text-white flex items-center gap-1'>Blog <FaAngleUp /></li>
                    <li className='hover:text-white flex items-center gap-1'>About Us <FaAngleUp /></li>
                    <li className='hover:text-white flex items-center gap-1'>Contact Us <FaAngleUp /></li> */}
                    {
                    menu.map((item, index) =>(
                        <li className='hover:text-white flex items-center gap-1'>{item} <FaAngleUp /></li>
                    ))
                    }
                </ul>
              <div className='text-white flex items-center gap-2'>
                 <PiPhoneCallThin  className='w-10 h-10 cursor-pointer'/>
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