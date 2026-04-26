import React from 'react'
import Container from '../Container'
import Ecobazar from '../../assets/images/ecobazar.png'
import plant from '../../assets/images/plant.jpg'   

const FooterLinks = () => {
  return (
    <div className='sm:py-15 bg-gray-900'>
        <Container>
           <div className='sm:flex sm:flex-col gap-25'>
              {/* company details  */}
                <div>
                    <span className=''>
                        <img src={Ecobazar} alt="EcoBazar" />
                    </span>
                </div>
           </div>
        </Container>
    </div>
  )
}

export default FooterLinks