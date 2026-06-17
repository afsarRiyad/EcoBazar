import Product from '../assets/images/product.webp'
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { IoStarHalfSharp  } from "react-icons/io5";
import { IoIosStar, IoMdStarOutline  } from "react-icons/io";
import { Handbag, Eye, Heart   } from 'lucide-react';

const ProductShowcase = ({ allPro, type, link, hover, subType, title }) => {
    console.log(typeof(hover));
    
    const isCategory = type === "category" || type === "allCate";
    const isProduct = type === 'products' || type === 'allProducts';
    const isDeal = subType === 'deal' || subType === 'allDeal';
    const productHover = (type === 'products' || type === 'allProducts') && hover === true
    const star = (rating) => {
        let stars = []
         for(let i = 1; i <= 5; i++){
            if(i <= rating){
             stars.push(<IoIosStar key={i} fill='#FF8A00'  className='text-[#FF8A00]' />)
            }else if(i === Math.floor(rating) + 1 && rating % 1 !== 0){
                  stars.push(<IoStarHalfSharp key={i}  className='text-[#FF8A00]' />)
            }else{
                 stars.push(<IoMdStarOutline key={i}  />)
            }
         }
         return stars
    }
    return (
        <>
            <div className={`flex justify-between items-center `}>
                <span className=' font-pop text-gray-900 text-[32px] font-semibold pb-8 pt-10'>     
               {title}
                </span>
                <Link to={link} className={`flex cursor-pointer text-primary font-pop ${type === "allCate" && 'hidden'} ${type === "allProducts" && 'hidden'}`}>
                    View All  <ArrowRight />
                </Link>
            </div>
            <div className={`grid  ${type === 'category' ? "gap-6" : ''} ${type === 'allCate' ? "gap-6" : ''} ${type === 'products' ? 'grid-cols-5' : 'lg:grid-cols-6 md:grid-cols-4 grid-cols-2'} `}>
                {allPro.map((item, index) => (
                    <div key={index} className={` w-full  border border-gray-200 hover:border-primary duration-150 shadow-[0_2px_12px_rgba(0,0,0,0.06)] cursor-pointer &{type === 'category' ? 'rounded-xl': ''} group/cart relative overflow-hidden`}>
                        <img src={Product} alt="productImg" className='pb-4 flex items-center justify-center w-full' /> 
                        <div className={` px-2 font-pop  `}>
                             <div className={` truncate  ${isCategory ? 'text-center  pb-6  text-gray-900 text-[18px]' : ' text-gray-700 text-[14px] pt-4 pb-1'}`}>
                                {item.name || item.title}
                            </div>
                            <p className='text-gray-800 font-medium font-semibold'>{item.price && '$'}{item.price && item.price}</p>
                            <p className={`${isProduct && "flex pt-[6px] pb-3"}`}>{item.price && star(item.rating)}</p>
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
                            <div className='absolute right-5 bottom-4 w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full group-hover/cart:bg-primary duration-500 ease-in-out'> 
                                <Handbag className='group-hover/cart:text-white duration-300' /> 
                            </div>}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductShowcase
