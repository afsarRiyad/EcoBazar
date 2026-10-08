import React from 'react'
import { Link } from 'react-router'
import Container from '../components/Container'
import notFound from '../assets/images/404.jpg'

const Error = () => {
  return (
    <section className='bg-white py-10 sm:py-16'>
      <Container>
        <div className='flex flex-col items-center justify-center text-center py-4 sm:py-8'>
          <img
            src={notFound}
            alt='404 - page not found'
            className='w-full max-w-[420px] h-auto select-none'
            draggable='false'
          />

          <h1 className='dheading pt-6 pb-3'>Oops! page not found</h1>

          <p className='default max-w-[460px] pb-8'>
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas
            sagittis tortor at metus mollis
          </p>

          <Link
            to='/'
            className='bg-primary text-white font-pop font-semibold px-8 py-3.5 rounded-full hover:bg-emerald-800 active:bg-emerald-900 transition-colors duration-200'
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Error