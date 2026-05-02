import React, { useState } from 'react'
import Container from '../components/Container'
import { AiOutlineEye } from "react-icons/ai";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { Link } from 'react-router';
// import registra from '../assets/images/registra.webp'

const Login = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      {/* <img src={registra} alt="regiImg" /> */}
      <Container>
        <div className='py-[80px]  flex items-center justify-center '>
          <div className='lg:w-[520px] lg:h-[420px] h-[390px] w-[480px] flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                         sm:py-7 px-3 pt-3 pb-5 sm:px-6 rounded-xl items-center' >
            <span className='dheading  pb-5'>
              Sign In
            </span>
            <input type="email" className='w-full font-pop py-3.5 px-4 border
                  border-gray-300 rounded mb-3 outline-gray-300' placeholder='Email' />
            <div className='w-full relative'>
              <input type={show ? 'text' : 'password'} className='w-full font-pop  py-3.5 px-4 border
                   border-gray-300 rounded mb-3 outline-gray-300' placeholder='Password' />
              {
                show ? <LuEye className='absolute top-[18px] text-[20px] right-3 cursor-pointer' onClick={() => setShow(!show)} /> :
                  <LuEyeOff className='absolute top-[18px] text-[20px] right-3 cursor-pointer' onClick={() => setShow(!show)} />
              }
            </div>
            <div className='flex items-center justify-between w-full dfont pt-3 pb-5 select-none'>
              <label className='cursor-pointer text-gray-900'>
                <input type="checkbox" className='w-4 h-4 ' /> Remember me
              </label>
              <Link to='/reset_password' className='dfont relative text-gray-900  hover:text-blue-700 
                                 '>Forget Password</Link>
            </div>
            <button className='w-full bg-primary  rounded-full
               text-white sm:text-[18px] text-sm  font-pop font-semibold sm:py-4.5 py-4 cursor-pointer active:scale-95 transition-all 
                  active:bg-green-600 shadow-lg '>Login</button>
            <div className='flex gap-2 pt-5'>
              <p className='dfont text-gray-600 select-none'>
                Don't have account?
              </p>
              <Link to='/registration' className='dfont relative text-gray-900 font-bold hover:text-blue-700 
                                 after:content-[""] after:absolute after:w-full after:h-[2px] 
                                 after:bg-blue-600 after:bottom-[-2px] after:left-0 after:scale-x-0
                                 hover:after:scale-x-100 after:origin-left after:duration-300 after:transition-transform'>
                Register
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login