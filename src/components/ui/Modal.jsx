import React, { useEffect, useRef, useState } from 'react'
import {  IoClose  } from "react-icons/io5";
import modalImg from '../../assets/images/modalImg.webp'
import { RiCloseCircleLine } from "react-icons/ri";
import useOutsideClick from '../../hooks/outsideClick';


const Modal = ({modalOpen, setModalOpen, dontShow, setDontShow}) => {
  const modalRef = useRef()
  useOutsideClick({
    ref: modalRef,
    callback: ()=> setModalOpen(false),
    enable: modalOpen
  })
 
if(!modalOpen) return null
    return (
    <>

      <section className={`fixed transition-all inset-0 bg-black/50 z-50 flex items-center justify-center `}>
       <div ref={modalRef} className={`relative lg:w-[872px] sm:w-[650px] w-[400px ] transition-all duration-300 flex flex-col sm:flex-row  font-pop rounded-lg p-2 bg-white gap-10 shadow-2xl animate-[fadeIn_0.3s_ease-out]`}>
         <RiCloseCircleLine className='absolute right-3 top-3 text-3xl cursor-pointer' onClick={()=> setModalOpen(false)}/>
         <div>
          <img src={modalImg} alt="modalImg" />
        </div>
        <div className='md:pt-8 sm:pt-6 '>
            <span className='flex flex-col justify-center items-center'>
                    <p className='sm:text-[40px] text-[20px] font-semibold
                       text-gray-900 pb-2  leading-[120%] 
                        sm:px-6 text-center'>
                      Subcribe to our Newsletter 
                    </p>
                    <p className='sm:w-[448px] text-center w-80 text-gray-400 sm:text-[16px]  text-[14px] sm:px-9 pb-4'>Subscribe to our newlletter and Save your <span className='text-[#FF8A00]  '>20% money </span> with discount code today.</p>
                </span>
         <div className='relative w-full sm:w-[400px] lg:w-[450px] '>
                        <input type="text"
                         placeholder='Your email address ' 
                         className='w-full bg-white outline-none border-gray-200 rounded-full py-4 pl-6 pr-32 border  focus:border-primary transition-all 
                                      '/> 
                      <button className='
                           absolute bg-primary text-white sm:px-10 px-6  py-3 rounded-full 
                           text-[15px] top-0 right-0 bottom-0 active:scale-95 transition-all active:bg-green-600
                           cursor-pointer
                      '>Subscribe</button>
                     </div>
                    <label className='default flex justify-center gap-1 sm:pt-8 pb-4 pt-6' >
                      <input type="checkbox" checked={dontShow}  onChange={ (e) => setDontShow(e.target.checked)} className='w-5 h-5 cursor-pointer'/>Do not show this window.
                    </label>
        </div>
       </div>
      </section>

    </>
  )
}

export default Modal