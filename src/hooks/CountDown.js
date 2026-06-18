import { useEffect, useState } from "react"

export const useCountDown = (date) =>{
    const [timer, setTimer] = useState({})
        useEffect(()=>{
           const interval = setInterval(() => {
                 let count = new Date(date).getTime()
           let now = new Date().getTime()
           let distance = count - now
           if (distance <= 0) {
               clearInterval(interval);
                  setTimer({
                            days: 0,
                            hours: 0,
                            min: 0,
                            sec: 0,
                          });
                    return;
                 }

           let days = Math.floor(distance / (1000 * 60 * 60 * 24) )
           let hours =Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
           let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
           let sec = Math.floor((distance % (1000 * 60)) / 1000);
           setTimer({days, hours, min, sec})
             }, 1000);
                 return ()=> clearInterval(interval)
        },[date])
    return timer
}