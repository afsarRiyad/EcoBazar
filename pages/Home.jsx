import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    let selector = useSelector((state => console.log(state.count.value)))
  return (
    <div>Home</div>
  )
}

export default Home