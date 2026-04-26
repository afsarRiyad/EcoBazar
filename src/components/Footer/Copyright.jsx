import React from 'react'
import Container from '../Container'
import ApplePay from '../../assets/images/footer/ApplePay.png'
import Visa from '../../assets/images/footer/Visa.png'
import Discover from '../../assets/images/footer/Discover.png'
import Mastercard from '../../assets/images/footer/Mastercard.png'

const Copyright = () => {
  return (
    <div className='bg-gray-900 font-pop '>
        <Container>
            <div className='sm:flex items-center justify-between border-t text-center sm:text-start border-t-gray-600 py-6'>
                <p className='text-gray-400 sm:w-full '>
                    Ecobazar eCommerce © 2021. All Rights Reserved
                </p>
                <div className='flex gap-2 sm:justify-end justify-center'>
                    <img src={ApplePay} alt="ApplePay" className='cursor-pointer'/>
                    <img src={Visa} alt="Visa" className='cursor-pointer'/>
                    <img src={Discover} alt="Discover" className='cursor-pointer'/>
                    <img src={Mastercard} alt="Mastercard" className='cursor-pointer'/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Copyright