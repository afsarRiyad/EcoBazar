import React from 'react'

const Container = ({children, className = '' }) => {
  return (

      <div className={`w-full max-w-[1320px] px-4 sm:px-6  mx-auto ${className}`}>{children }</div>

  )
}

export default Container