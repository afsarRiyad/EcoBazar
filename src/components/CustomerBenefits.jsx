import React from 'react'
import truck from '../assets/images/truck.webp'
import headset from '../assets/images/headset.webp'
import bag from '../assets/images/bag.webp'
import returns from '../assets/images/returns.webp'
import Container from './Container'

const valueProps = [
    {
        title: "Free Shipping",
        description: "Free shipping on all your order",
        icon: truck,
    },
    {
        title: "Customer Support 24/7",
        description: "Instant access to Support",
        icon: headset,
    },
    {
        title: "100% Secure Payment",
        description: "We ensure your money is save",
        icon: bag,
    },
    {
        title: "Money-Back Guarantee",
        description: "30 Days Money-Back Guarantee",
        icon: returns,
    },
];

const CustomerBenefits = () => {
    return (
        <>
        <Container>
            <div className='flex w-full rounded-lg lg:py-8 lg:px-8 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-x-auto  touch-auto gap-18 lg:gap-0'>
                {valueProps.map((prop, index) => (
                    <div key={index} className='flex-1 flex gap-2 whitespace-nowrap' >
                        <img src={prop.icon} alt={prop.title} className='w-10 h-10 mb-2 ' />
                        <div className='flex flex-col'>
                            <span className='font-pop text-gray-900 text-[16px] font-semibold'>{prop.title}</span>
                            <span className='text-gray-400 font-pop text-[14px]'>{prop.description}</span>
                        </div>
                    </div>
                ))}
            </div>
         </Container>
        </>
    )
}

export default CustomerBenefits
