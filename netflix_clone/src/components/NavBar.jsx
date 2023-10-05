import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { PiUserCircle } from 'react-icons/pi'
import { Tooltip } from 'react-tooltip'



function NavBar() {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogOut = async () => {
    try{
      logOut()
      navigate('/')
    }
    catch(e){
      console.log(e)
    }

  }

  return (
    <div className='text-white flex justify-between items-center p-2 z-[10] absolute w-full'>
      <Link to='/'>
        <h1 className='text-3xl text-primary font-bold'>NETFLIX</h1>
      </Link>
      {user ?
        <div className='flex items-center justify-around space-x-3'>
          <Link to='/account'>
            <a data-tooltip-id="my-tooltip" data-tooltip-content={user?.email}>
              <PiUserCircle size={28} color='white' />
            </a>
            <Tooltip id="my-tooltip" />
          </Link>
            <button onClick={handleLogOut} className='bg-primary text-sm p-2 px-4 rounded-md'>Log Out</button>
        </div>
      :
        <div className='flex items-center justify-around space-x-3'>
          <Link to='/login'>
            <button className='text-sm'>Log In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-primary text-sm p-2 px-4 rounded-md'>Sign Up</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default NavBar