/**
 * Heart icon.
 *
 * Colours come from `currentColor` so it can be themed by the parent, and
 * `filled` swaps it between the outline and solid states.
 */
const Heart = ({ className = "", filled = false }) =>{
   return (
     <svg className={className} width="32" height="32" viewBox="0 0 32 32"
       fill={filled ? "currentColor" : "none"}
       stroke="currentColor" strokeWidth="1.5"
       xmlns="http://www.w3.org/2000/svg">
      <path d="M15.999 28.0722C-10.6672 13.3333 7.9995 -2.66666 15.999 7.45075C23.9995 -2.66666 42.6661 13.3333 15.999 28.0722Z"/>
     </svg>
   )
}

export default Heart