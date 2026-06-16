import React from 'react'
import Product from '../assets/images/product.webp'
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const ProductShowcase = ({ allPro, type }) => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <span className=' font-pop text-gray-900 text-[32px] font-semibold pb-8 pt-10'>Popular Categories</span>
                <Link to='/categories' className={`flex cursor-pointer text-primary font-pop ${type === "allCate" && 'hidden'}`}>
                    View All  <ArrowRight />
                </Link>
            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 '>
                {allPro.map(item => (
                    <div key={item.id} className=' w-full rounded-xl border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.06)] cursor-pointer'>
                        <img src={Product} alt="productImg" className='pb-4' />
                        <div className='font-pop text-center pb-6  text-gray-900 text-[18px] '>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductShowcase
