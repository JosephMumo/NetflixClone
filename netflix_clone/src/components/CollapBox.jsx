import React, { useState } from 'react'
import {RiAddFill} from 'react-icons/ri'
import { HiMinus} from 'react-icons/hi'

function CollapBox(props) {
    const { description, title } = props
    const [ show, setShow ] = useState(false)
  return (
    <div className='grid place-items-center'>
        <div className='bg-neutral-900 hover:bg-neutral-800 w-[90%] p-3 md:p-4 text-white transition left-[5%] my-1 flex justify-between items-center'>
            <h1 className='text-lg md:text-2xl font-semibold'>{title}</h1>
            <div onClick={() => setShow(!show)}>
                {show ? <HiMinus size={24} /> : <RiAddFill size={24} /> }
            </div>
        </div>
        {show &&
            <div className='bg-neutral-900 hover:bg-neutral-800 w-[90%] p-3 md:p-4 text-white left-[5%]'>
                <p className='text-base md:text-lg'>{description}</p>
            </div>
        }
    </div>
  )
}

export default CollapBox