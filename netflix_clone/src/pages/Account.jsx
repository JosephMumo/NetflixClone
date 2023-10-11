import React from 'react'
import logo from '../images/Net.jpg'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <div className='w-full text-white'>
      <img src={logo} alt='bg-img' className='w-full h-[550px] object-cover absolute top-0 left-0' />
      <div className='absolute w-full h-[550px] bg-black/60 top-0 left-0'></div>
      <div className='absolute w-full h-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl font-semibold'>My Shows</h1>
      </div>
      <SavedShows />
    </div>
  )
}

export default Account