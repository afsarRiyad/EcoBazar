import React from 'react'
import Container from './Container'
import logo1 from '../assets/images/logo1.webp'
import logo2 from '../assets/images/logo2.webp'
import logo3 from '../assets/images/logo3.webp'
import logo4 from '../assets/images/logo4.webp'
import logo5 from '../assets/images/logo5.webp'

const logos = [
    { id: 1, src: logo1 },
    { id: 2, src: logo2 },
    { id: 3, src: logo3 },
    { id: 4, src: logo4 },
    { id: 5, src: logo5 },
]

const SponsorLogo = () => {
  return (
    <Container>
         <div className='flex flex-wrap sm:gap-20 gap-10 py-12 justify-center items-center'>
            {logos.map(logo => (
                <div className={`border-r border-r-gray-300 last:border-r-0 pr-10 sm:pr-0 flex sm:flex-1`} key={logo.id}>
                    <img src={logo.src} alt={`Logo ${logo.id}`} className='cursor-pointer' />
                </div>
            ))} 
         </div>
    </Container>
  )
}

export default SponsorLogo
