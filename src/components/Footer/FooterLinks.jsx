import React from 'react'
import Container from '../Container'
import Ecobazar1 from '../../assets/images/Ecobazar1.webp'
import Plant1 from '../../assets/images/Plant1.webp'
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const FooterLinks = () => {
    return (
        <div className='sm:py-15 bg-gray-900'>
            <Container>
                <div className='sm:flex  sm:gap-12 grid grid-cols-2 w-full gap-x-14 py-10'>
                    {/* company details  */}
                    <div className='sm:w-[336px] pb-4'>
                        <span className='flex gap-2 max-w-[143px] pb-4'>
                            <img src={Plant1} alt="Plant1" className="max-w-[138px] max-h-[38px] object-contain" />
                            <img src={Ecobazar1} alt="Ecobazar1" className="max-w-[138px] max-h-[38px] object-contain"/>
                        </span>
                        <p className='eliment pb-4 leading-7'>
                            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
                        </p>
                        <div className='fheading col-span-2 flex gap-2 '>
                            <p className='border-b border-b-primary pb-1  hidden sm:inline border-b-0 hover:border-b-1 transition'>
                                (219) 555-0114
                            </p>
                            <span className='hidden sm:inline'>or</span>
                            <p className='border-b border-b-primary pb-1 h-7 am:h-full border-b-0 hover:border-b-1 transition'>
                                Proxy@gmail.com
                            </p>
                        </div>
                    </div>
                    {/* My accounts section  */}
                    <div className=''>
                        <h2 className='fheading '>
                            My Account
                        </h2>
                        <ul className='cursor-pointer space-y-2 sm:space-y-0'>
                            <li className='eliment footerHover'>My Account</li>
                            <li className='eliment footerHover'>Order History</li>
                            <li className='eliment footerHover'>Shopping Cart</li>
                            <li className='eliment footerHover'>Wishlist</li>
                        </ul>
                    </div>
                    {/* Helps section  */}
                    <div>
                        <h2 className='fheading'>
                            Helps
                        </h2>
                        <ul className='cursor-pointer space-y-2 sm:space-y-0'>
                            <li className='eliment footerHover'>Contact</li>
                            <li className='eliment footerHover'>FAQs</li>
                            <li className='eliment footerHover whitespace-nowrap'>Terms & Conditions</li>
                            <li className='eliment footerHover'>Privacy & Policy</li>
                        </ul>
                    </div>
                    {/* proxy section  */}
                    <div>
                        <h2 className='fheading'>
                            Proxy
                        </h2>
                        <ul className='cursor-pointer space-y-2 sm:space-y-0'>
                            <li className='eliment footerHover'>About</li>
                            <li className='eliment footerHover'>Shop</li>
                            <li className='eliment footerHover'>Product</li>
                            <li className='eliment footerHover'>Track Order</li>
                        </ul>
                    </div>
                    {/* apple & google store */}
                    <div className='col-span-2'>
                        <h2 className="fheading whitespace-nowrap">Download Mobile App</h2>
                        {/* card  */}
                        <div className='flex gap-5  col-span-2'>
                            <div className='flex gap-1 items-center p-[10px] bg-gray-600 rounded hover:bg-gray-500 active:bg-gray-500'>
                                <FaApple className='text-white w-10 h-10 cursor-pointer transition-colors' />
                                <div className='text-white font-pop '>
                                    <p className='text-gray-400 text-[14px] '>Download on the</p>
                                    <p className='font-medium text-[16px] cursor-pointer'>App Store</p>
                                </div>
                            </div>
                            {/* card 2  */}
                            <div className='flex fluid gap-1 items-center p-[10px]
                              bg-gray-600 rounded hover:bg-gray-500 transition-colors active:bg-gray-500'>
                                <BiLogoPlayStore className='text-white w-10 h-10 cursor-pointer' />
                                <div className='text-white font-pop '>
                                    <p className='text-gray-400 text-[14px] '>Download on the</p>
                                    <p className='font-medium text-[16px] cursor-pointer'>Google Play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FooterLinks