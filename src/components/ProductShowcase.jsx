import Product from '../assets/images/product.webp'
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { IoStarHalfSharp } from "react-icons/io5";
import { IoIosStar, IoMdStarOutline } from "react-icons/io";
import { Handbag, Eye, Heart } from 'lucide-react';
import Container from './Container';
import { useEffect, useState } from 'react';

const ProductShowcase = ({ allPro, type, link, hover, subType, title }) => {
    const [timer, setTimer] = useState({})
    const isCategory = type === "category" || type === "allCate";
    const isProduct = type === 'products' || type === 'allProducts';
    const isDeal = subType === 'deal' || subType === 'allDeal';
    const productHover = (type === 'products' || type === 'allProducts') && hover === true
    const star = (rating) => {
        let stars = []
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<IoIosStar key={i} fill='#FF8A00' className='text-[#FF8A00]' />)
            } else if (i === Math.floor(rating) + 1 && rating % 1 !== 0) {
                stars.push(<IoStarHalfSharp key={i} className='text-[#FF8A00]' />)
            } else {
                stars.push(<IoMdStarOutline key={i} />)
            }
        }
        return stars
    }

        useEffect(()=>{
         const iterval = setInterval(() => {
                 let count = new Date("15 july, 2026 16:37:25").getTime()
           let now = new Date().getTime()
           let distance = count - now
           let days = Math.floor(distance / (1000 * 60 * 60 * 24) )
           let hours =Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
           let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
           let sec = Math.floor((distance % (1000 * 60)) / 1000);
           setTimer({days, hours, min, sec})
             }, 1000);
                 return ()=> clearInterval(interval)
        },[])


    return (
        <>
            <div className={`${isDeal && 'bg-gray-200 my-8 pb-15'}`}>
                <Container>
                    <div className={`flex justify-between items-center  `}>
                        <span className=' font-pop text-gray-900 text-[32px] font-semibold pb-8 pt-10'>
                            {title}
                        </span>
                        <Link to={link} className={`flex cursor-pointer text-primary font-pop ${type === "allCate" && 'hidden'} ${type === "allProducts" && 'hidden'}`}>
                            View All  <ArrowRight />
                        </Link>
                    </div>
                    <div className={`grid  ${isCategory && "gap-6"}  ${isCategory && 'lg:grid-cols-6 md:grid-cols-4 grid-cols-2'} ${isProduct && 'lg:grid-cols-5 md:grid-cols-4 grid-cols-2'} `}>
                        {allPro.map((item, index) => (
                            <div key={index} className={` w-full  border border-gray-200 hover:border-primary duration-150 shadow-[0_2px_12px_rgba(0,0,0,0.06)] cursor-pointer ${type === 'category' ? 'rounded-xl' : ''} group/cart relative overflow-hidden ${isDeal && index === 0 && 'lg:col-span-2 lg:row-span-2 text-center'}  ${isDeal && 'bg-white py-3'}`}>
                                <img src={Product} alt="productImg" className='pb-4 flex items-center justify-center w-full' />
                            {/* deals card  */}
                                {isDeal && index === 0 &&
                                  <div className='flex flex-row justify-center items-center w-full gap-2'>
                                    <div className='flex justify-center items-center rounded-full h-10 w-10 border bg-white border-gray-200  hover:bg-primary duration-500 ease-in-out '>
                                        <Heart size={20} className='hover:text-white duration-300' />
                                      </div>
                                      <button className='flex gap-3 font-pop bg-primary w-[350px] rounded-full text-white justify-center items-center cursor-pointer py-3 group hover:bg-green-600 duration-200'>
                                        Add To Cart  <Handbag className='text-white ' />
                                      </button>
                                      <div className='flex justify-center items-center rounded-full h-10 w-10 border bg-white border-gray-200  hover:bg-primary duration-500 ease-in-out group'>
                                        <Eye size={20} className='group-hover:text-white duration-300' />
                                      </div>
                                  </div>
                                }
                                <div className={` px-2 font-pop  `}>
                                    <div className={` truncate  ${isCategory ? 'text-center  pb-6  text-gray-900 text-[18px]' : ' text-gray-700 text-[14px] pt-4 pb-1'}  ${(isDeal && index == 0) && 'text-[18px]'}`}>
                                        {item.name || item.title}
                                    </div>
                                    <div className={` ${(isDeal && index == 0) && 'text-[22px]'}`}>
                                        <p className='text-gray-800 font-medium font-semibold'>{item.price && '$'}{item.price && item.price}</p>
                                        <p className={`${isProduct && "flex pt-[6px] pb-3"}  ${(isDeal && index == 0) && 'justify-center'}`}>{item.price && star(item.rating)}</p>
                                    </div>
                                    {/* deals timer  */}
                                    {isDeal && index === 0 &&
                                      <div className='flex justify-center gap-3'>
                                        <div className='flex flex-col'>
                                           <p> {timer.days} </p>
                                            <span>Days</span>
                                        </div>
                                        <div className='flex flex-col'>
                                           <p> {timer.hours} </p>
                                            <span>Hours</span>
                                        </div>
                                        <div className='flex flex-col'>
                                           <p> {timer.min} </p>
                                            <span>Min</span>
                                        </div>
                                        <div className='flex flex-col'>
                                           <p> {timer.sec} </p>
                                            <span>Sec</span>
                                        </div>
                                      </div>
                                     }
                                    {productHover &&
                                        <>
                                            <div className='absolute right-5 -top-10  flex justify-center items-center rounded-full h-8 w-8 border bg-white border-gray-200  hover:bg-primary group-hover/cart:duration-600 duration-300 ease-in-out group-hover/cart:top-13 z-10 group/eye'>
                                                <Eye size={18} className='group-hover/eye:text-white duration-200' />
                                            </div>
                                            <div className='absolute right-5 -top-10 flex justify-center items-center rounded-full h-8 w-8 border bg-white border-gray-200  hover:bg-primary duration-500 ease-in-out group-hover/cart:top-3 group/wish'>
                                                <Heart size={18} className='group-hover/wish:text-white duration-300' />
                                            </div>
                                        </>
                                    }
                                    {isProduct &&
                                        <div className={`absolute right-5 bottom-4 w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full group-hover/cart:bg-primary duration-500 ease-in-out ${(isDeal && index == 0) && 'hidden'}`}>
                                            <Handbag className='group-hover/cart:text-white duration-300' />
                                        </div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ProductShowcase
