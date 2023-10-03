import React from 'react'
import logo from '../images/Net.jpg'

  
function Signup() {
  const styles = {
    backgroundImage: `url(${logo})`,
  }
  return (
    <div className='text-white grid place-items-center align-middle h-screen' style={styles}>
      <div className='w-full h-screen bg-black/80 absolute'></div>
      <form className='flex flex-col w-1/2 space-y-5 items-center z-10'>
        <h1 className='text-white text-4xl font-bold'>SIGNUP</h1>
        <input className='bg-black bg-inherit w-full md:w-1/2  border-b border-white' placeholder='Name' id='name' name='fname'></input>
        <input className='bg-black bg-inherit w-full md:w-1/2 border-b border-white' placeholder='Email' id='email' name='email'></input>
        <button type="submit" className='bg-primary hover:bg-red-600 w-24 p-2 rounded-sm'>Register</button>
      </form>
    </div>
  )
}

export default Signup