import React, { useRef, useState, useEffect } from 'react'

const useOutsideClick = ({ref, callback, enable = false}) => {
   useEffect(()=>{
           if(!enable) return
         const handleClick = (e) =>{
            if(ref.current && !ref.current.contains(e.target)){
               callback(e)
            }
         }
    document.addEventListener('mousedown', handleClick)
      return () =>{
            document.removeEventListener('mousedown', handleClick)
      }
   },[ref, callback, enable])
}

export default useOutsideClick