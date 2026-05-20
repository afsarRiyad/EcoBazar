import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SwiperNavigation = () => {
  return (
    <>
     <button className="custom-prev cursor-pointer custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow">
        <ChevronLeft />
      </button>

     <button className="custom-next cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow">
        <ChevronRight />
      </button>
      </>
  )
}

export default SwiperNavigation