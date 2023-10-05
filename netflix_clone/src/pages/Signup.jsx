import React from 'react'
import logo from '../images/Net.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useContext, useState } from 'react'


  
function Signup() {
  const styles = {
    backgroundImage: `url(${logo})`,
  }
  const{user, signUp } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try{
      await signUp(email, password)
      navigate('/login')
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div className='text-gray-500 grid place-items-center align-middle h-screen' style={styles}>
      <div className='w-full h-screen bg-black/60 absolute'></div>
      <div className='w-{80%} h-{60%} md:w-1/3 md:h-2/3 px-8 py-24 bg-black/80 absolute rounded'>
        <form className='flex flex-col space-y-5 z-10' onSubmit={handleSubmit}>
          <h1 className='text-3xl text-white font-bold'>Sign Up</h1>
          <input onChange={(e) => setEmail(e.target.value)} className='bg-gray-800 rounded px-1 h-9 border-none' type='text' placeholder='email' id='email' name='email' ></input>
          <input onChange={(e) => setPassword(e.target.value)} className='bg-gray-800 rounded px-1 h-9 border-none' type='password' placeholder='password' id='password' name='password' ></input>
          <br />
          <button type="submit" className='bg-primary hover:bg-red-600 text-white p-2 rounded-sm'>Register</button>
          <br />
          <div className='flex flex-row justify-between'>
            <section className='flex flex-row space-x-3'>
              <input type='checkbox' id='checkbox' name='checkbox'></input>
              <label htmlFor='checkbox'>Remember me?</label>
            </section>
            <p>Need help?</p>
          </div>
          <br />
          <p>Already Subscribed to Netflix?
            <Link to='/login'>
              <button className='text-white'>Login</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup