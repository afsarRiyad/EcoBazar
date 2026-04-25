import React, { Children } from 'react'

const Container = ({children, classes }) => {
  return (

      <div className={`w-[1320px] mx-auto ${classes}`}>{children }</div>

  )
}

export default Container