import React from 'react'
import Container from '../Container'
import plant from '../../assets/images/plant.webp'
import Ecobazar from '../../assets/images/Ecobazar.webp'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router';

const StickyTopbar = () => {
  return (
     <Container className='border-b border-b-gray-400 sm:hidden sticky top-0 bg-white z-50'>
                <div className="flex justify-between items-center py-4 sm:py-9 font-pop gap-1 sm:gap-0 z-10 " >
                      {/* Logo here  */}
                    <Link to='/' className='flex items-center gap-1 sm:gap-2 cursor-pointer'>
                        <img src={plant} alt="plant" className='w-8 h-8  ' />
                        <img src={Ecobazar} alt="ecoBazar" className='w-full h-full' />
                    </Link>
                     {/* Logo ends here  */}

                        {/* mobile menu here  */}
                        <div className='sm:hidden'><MobileMenu /></div>
                </div>
            </Container>
  )
}

export default StickyTopbar
