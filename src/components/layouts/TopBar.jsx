import React from 'react'
import Container from '../Container'
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";


const TopBar = () => {
    return (
        <div className='border-b border-gry text-[#666666] font-pop text-sm py-3.5'>
            <Container>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                         <CiLocationOn/> Store Location: Lincoln- 344, Illinois, Chicago, USA
                    </div>
                   <div className='flex items-center gap-5'>
                       <div className='flex items-center gap-2.5'>Eng <FaAngleDown /></div>
                       <div className='flex items-center gap-2.5'>USD <FaAngleDown /></div>
                       <div>Sign In / Sign Up</div>
                   </div>
                </div>
            </Container>
        </div>
    )
}

export default TopBar