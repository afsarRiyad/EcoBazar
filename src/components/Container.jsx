import React, { Children } from 'react'

const Container = ({children, classes }) => {
  return (

      <div className={`w-full max-w-[1320px] px-2 sm:px-6 lg:px-8 mx-auto ${classes}`}>{children }</div>

  )
}

export default Container