import React, { useRef, useState, useEffect } from 'react'

const useDropdown = () => {
   const ref = useRef(null)
   const [open, setOpen] = useState(false)

   const toggle = () => setOpen(prev => !prev)
    
   useEffect(() => {

        const handleClick = (e) =>{
           if(ref.current && !ref.current.contains(e.target)){
            setOpen(false)
           }
        }

        document.addEventListener('mousedown', handleClick);
        return () => {
          document.removeEventListener('mousedown', handleClick)
        }

   },[]);
   
   return { ref,  open, toggle}
}

export default useDropdown