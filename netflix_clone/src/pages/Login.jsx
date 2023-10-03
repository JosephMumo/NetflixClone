import React from 'react'
import logo from '../images/Net.jpg'

function Login() {
  const styles = {
    backgroundImage: `url(${logo})`
  }
  return (
    <div className='text-white grid place-items-center align-middle h-screen bg-gradient-to-r from-black' style={styles}>
      <form className='flex flex-col w-1/2 space-y-5 items-center z-10 text-center'>
        <h1 className='text-white text-4xl font-bold'>LOGIN</h1>
        <input className='bg-inherit text-white w-full  border-b border-white' placeholder='Name' id='name' name='fname'></input>
        <input className='bg-inherit text-white w-full border-b border-white' placeholder='Email' id='email' name='email'></input>
        <button type="submit" className='bg-primary hover:bg-red-600 w-24 p-2 rounded-sm'>Login</button>
      </form>
    </div>
  )
}

export default Login