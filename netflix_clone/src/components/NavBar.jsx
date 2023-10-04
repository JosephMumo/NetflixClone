import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className='text-white flex justify-between items-center p-2 z-[10] absolute w-full'>
      <Link to='/'>
        <h1 className='text-3xl text-primary font-bold'>NETFLIX</h1>
      </Link>
      <div className='flex items-center justify-around space-x-3'>
        <Link to='/login'>
          <button className='text-sm'>LogIn</button>
        </Link>
        <Link to='/signup'>
          <button className='bg-primary text-sm p-2 px-4 rounded-md'>SignUp</button>
        </Link>
      </div>
    </div>
  )
}

export default NavBar