import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectWishlistCount } from '../../slices/wishlistSlice'
import plant from '../../assets/images/plant.webp'
import Ecobazar from '../../assets/images/Ecobazar.webp'
import { Search } from 'lucide-react'
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';
import Heart from '../../assets/icons/Heart'
import CartPopup from '../CartPopup'
import MobileMenu from './MobileMenu'
import Container from '../Container';
import Tooltip from '../ui/Tooltip';



const MainHeader = () => {
    const [open, setOpen] = useState(false)
    const wishCount = useSelector(selectWishlistCount)
    return (
        <>
            <Container className='hidden sm:block'>
                <div className="flex justify-between items-center py-4 sm:py-9 font-pop gap-1 sm:gap-0 z-10 " >
                    {/* Logo here  */}
                    <Link to='/' className='flex items-center gap-1 sm:gap-2 cursor-pointer'>
                        <img src={plant} alt="plant" className='w-8 h-8  ' />
                        <img src={Ecobazar} alt="ecoBazar" className='w-full h-full' />
                    </Link>
                    {/* Logo ends here  */}

                    {/* Search Bar */}
                    <div className="relative hidden sm:flex flex-1 max-w-xl">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />

                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 pl-11 pr-4 py-3 border border-gray-300 rounded-l-md outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
                        />

                        <button className="px-6 bg-primary text-white font-semibold rounded-r-md hover:bg-green-600 active:bg-green-500">
                            Search
                        </button>
                    </div>
                    {/* cart and wishlist starts here   */}
                    <div className=' gap-3 items-center hidden sm:flex'>
                        <div className='flex items-center sm:gap-x-8 gap-x-2 relative after:content[""] after:w-[1px] after:h-6 after:bg-gray-300 after:absolute after:left-1/2'>
                            <Tooltip text="Wishlist" position="bottom">
                                <Link
                                    to='/wishlist'
                                    aria-label={wishCount > 0 ? `Wishlist, ${wishCount} item${wishCount > 1 ? 's' : ''}` : 'Wishlist'}
                                    className='relative inline-flex items-center justify-center text-gray-900 hover:text-primary transition-colors duration-200 cursor-pointer'
                                >
                                    <Heart filled={wishCount > 0} className='w-8 h-8' />
                                    {wishCount > 0 && (
                                        <span className='absolute -top-1.5 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-white text-[11px] font-semibold flex items-center justify-center'>
                                            {wishCount}
                                        </span>
                                    )}
                                </Link>
                            </Tooltip>
                            <Tooltip text="Shopping Cart" position="bottom">
                                <ShoppingCart className='w-8 h-8 cursor-pointer ml-2' onClick={() => setOpen(true)} />
                            </Tooltip>
                            <CartPopup open={open} setOpen={setOpen} />
                        </div>
                        <div className='flex flex-col  '>
                            <span className='font-pop text-[12px] text-gray-700'>Shopping cart</span>
                            <span className='font-pop text-[14px] text-gray-900 font-medium'>Amount</span>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default MainHeader

