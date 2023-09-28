import React, { useState } from 'react'
import {FaRegHeart, FaHeart} from 'react-icons/fa'


function Movie(item) {
    const [like, setLike] = useState(false)


  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img className="w-full h-auto" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
        <div className="text-white absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 grid place-items-center">
            <p className="white-space-normal text-xs md:text-sm">{item?.title}</p>
            <div className="absolute top-4 left-4" >
                {like ? <FaHeart color="grey" /> : <FaRegHeart color="grey" /> }
            </div>
        </div>
    </div>
  )
}

export default Movie