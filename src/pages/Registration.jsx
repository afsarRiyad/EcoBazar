import React, { useState } from 'react'
import Container from '../components/Container'
import { LuEyeOff, LuEye  } from "react-icons/lu";
// import registra from '../assets/images/registra.webp'

const Registration = () => {
      const [pssShow, setPassShow] = useState(false)
      const [confirmShow, setConfirmShow] = useState(false)
  return (
    <>
    {/* <img src={registra} alt="regiImg" /> */}
    <Container>
      <div className='py-[80px]  flex items-center justify-center '>
        <div className='lg:w-[520px] lg:h-[400px] w-[480px] flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                         sm:py-7 px-3 py-5 sm:px-6 rounded-xl items-center' >
           <span className='dheading  pb-5'>
            Create Account
         </span>
         <input type="email" className='w-full font-pop py-3.5 px-4 border
                  border-gray-300 rounded mb-3 outline-gray-300' placeholder='Email'/>
         <div className='w-full relative'>
          <input type={pssShow ? 'text' : 'password'} className='w-full font-pop  py-3.5 px-4 border
                   border-gray-300 rounded mb-3 outline-gray-300' placeholder='Password'/>
                   {
                    pssShow ?  <LuEye className='absolute top-[18px] text-[20px] right-3 cursor-pointer' onClick={()=> setPassShow(!pssShow)}/> :
                    <LuEyeOff className='absolute top-[18px] text-[20px] right-3 cursor-pointer' onClick={()=> setPassShow(!pssShow)}/>
                   }         
         </div>
         <div className='w-full relative'>
          <input type={confirmShow ? 'text' : 'password'} className='w-full font-pop  py-3.5 px-4 border
                   border-gray-300 rounded mb-3 outline-gray-300' placeholder='Confirm password'/>
                   {
                    confirmShow ?  <LuEye  className='absolute top-[18px] text-[20px] right-3 cursor-pointer' onClick={()=> setConfirmShow(!confirmShow)}/> :
                    <LuEyeOff className='absolute top-[18px] text-[20px] right-3 cursor-pointer' onClick={()=> setConfirmShow(!confirmShow)}/>
                   }         
         </div>
         <div className='flex items-center justify-between w-full dfont pb-5'> 
          <label className='cursor-pointer text-gray-900'>
            <input type="checkbox" className='w-4 h-4'/> Accept All terms & Conditions
          </label>
         </div>
         <button className='w-full bg-primary rounded rounded-full
               text-white sm:text-[18px] text-sm  font-pop sm:font-semibold sm:py-4.5 py-4 cursor-pointer active:scale-95 transition-all 
                  active:bg-green-600 shadow-lg'>Create Account</button>
         <div className='flex gap-2 pt-5'>
          <p className='dfont text-gray-600'>
            Already have account 
          </p>
          <span className='dfont text-gray-900 font-medium'>Login</span>
         </div>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Registration