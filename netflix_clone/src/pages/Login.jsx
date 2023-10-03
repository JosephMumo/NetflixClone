import React from 'react'
import logo from '../images/Net.jpg'
import { Link } from 'react-router-dom'

function Login() {
  const styles = {
    backgroundImage: `url(${logo})`
  }
  return (
    <div className='text-gray-500 grid place-items-center align-middle h-screen' style={styles}>
      <div className='w-full h-screen bg-black/60 absolute'></div>
      <div className='w-{80%} h-{60%} md:w-1/3 md:h-2/3 px-8 py-24 bg-black/80 absolute rounded'>
        <form className='flex flex-col space-y-5 z-10'>
          <h1 className='text-2xl font-bold'>LOGIN</h1>
          <input className='bg-gray-800 rounded px-1 h-9 text-white w-full  border-none' placeholder='Name' id='name' name='fname'></input>
          <input className='bg-gray-800 rounded px-1 h-9 text-white  border-none' placeholder='Email' id='email' name='email'></input>
          <br />
          <button type="submit" className='bg-primary hover:bg-red-600 text-white  p-2 rounded-sm'>Login</button>
          <div className='flex flex-row justify-between'>
            <section className='flex flex-row space-x-3'>
              <input type='checkbox' id='checkbox' name='checkbox'></input>
              <label htmlFor='checkbox'>Remember me?</label>
            </section>
            <p>Need help?</p>
          </div>
          <br />
          <p>New to Netflix?
            <Link to='/signin'>
              <button className='text-white'>Sign up now</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login 