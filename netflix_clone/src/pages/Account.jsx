import React from 'react'
import logo from '../images/Net.jpg'
import SavedShows from '../components/SavedShows'
import Footer from '../components/Footer'

const Account = () => {
  return (
    <div className='w-full text-white'>
      <img src={logo} alt='bg-img' className='w-full h-[550px] object-cover absolute top-0 left-0' />
      <div className='absolute w-full h-[550px] bg-black/80 top-0 left-0'></div>
      <div className='absolute w-full top-[25%]'>
        <SavedShows />
      </div>
      <div className='absolute w-full bottom-0'>
        <Footer />
      </div>
    </div>
  )
}

export default Account