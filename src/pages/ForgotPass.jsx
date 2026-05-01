import React, { useState } from 'react'
import Container from '../components/Container'
import { AiOutlineEye } from "react-icons/ai";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { Link } from 'react-router';
const ForgotPass = () => {
    const [show, setShow] = useState(false)
  return (
     <Container>
        <div className='py-[80px]  flex items-center justify-center '>
          <div className='lg:w-[520px] lg:h-[350px] h-[330px] w-[480px] flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                         sm:py-7 px-3 pt-3 pb-5 sm:px-6 rounded-xl items-center' >
            <span className='dheading  pb-3'>
              Forgot Password?
            </span>
             <p className='text-center pb-4 dfont text-gray-600'>
                Enter the email used for your account and we'll send you a link to reset your password
             </p>
            <input type="email" className='w-full mb-5 font-pop py-3.5 px-4 border
                  border-gray-300 rounded mb-3 outline-gray-300' placeholder='Enter your email' />
            <button className='w-full bg-primary rounded rounded-full
               text-white sm:text-[18px] text-sm  font-pop font-semibold sm:py-4.5 py-4 cursor-pointer active:scale-95 transition-all 
                  active:bg-green-600 shadow-lg '>Reset password</button>
            <div className='flex gap-2 pt-5'>
              <p className='dfont text-gray-600 select-none'>
                Didn't receive link?
              </p>
              <p className='dfont relative text-gray-900 font-bold hover:text-blue-700 
                                 after:content-[""] after:absolute after:w-full after:h-[2px] 
                                 after:bg-blue-600 after:bottom-[-2px] after:left-0 after:scale-x-0
                                 hover:after:scale-x-100 after:origin-left after:duration-300 after:transition-transform'>
                Send again
              </p>
            </div>
          </div>
        </div>
      </Container>
  )
}

export default ForgotPass