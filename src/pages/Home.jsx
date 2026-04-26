import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/Container'

const Home = () => {

    let selector = useSelector((state => console.log(state.count.value)))
  return (
    <Container>
      <h1 className='h-[400px]'>Home</h1>
    </Container>
  )
}

export default Home