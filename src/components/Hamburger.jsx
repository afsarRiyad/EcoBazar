import React from 'react'


const Hamburger = ({open, toggle}) => {

  return (
    <>
          <div  className='flex flex-col items-center gap-2 cursor-pointer justify-center px-5 sm:h-16.75 h-12 sm:bg-primary' onClick={toggle}>
                <span className={`sm:w-5 w-8 h-[2px] bg-black  sm:bg-white ${open && ' rotate-45 translate-y-[6px]'} 
                                                     transition-transform duration-300`}></span>
                <span className={`sm:w-5 w-8 h-[2px] bg-black  sm:bg-white ${open && 'opacity-0'}
                                                        transition-all duration-300`} ></span>
                <span className={`sm:w-5 w-8 h-[2px] bg-black  sm:bg-white ${open && ' -rotate-45 -translate-y-[6px]'} transition-transform duration-300`}></span>
              </div>
    </>
  )
}

export default Hamburger