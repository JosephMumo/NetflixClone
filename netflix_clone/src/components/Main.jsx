import React, { useEffect, useState } from 'react'
import requests from '../requests'
import axios from 'axios'
 
function Main() {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor((Math.random(movies)) * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular)
        .then((res) => setMovies(res.data.results))
    }, [])

    const truncateString = (str, num) => {
        if(str?.length > num) {
            return str.slice(0, num) +'...'
        } else {
            return str;
        }

    }
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <div className='absolute w-full h-[550px] text-white top-[65%] md:top-[50%] transform translate-y-[-50%] left-2 flex flex-col space-y-4 p-4 md:p-8'>
                <h1 className='text-3xl md:text-6xl font-bold'>{movie?.original_title}</h1>
                <div className='flex flex-row'>
                    <button className='cursor-pointer text-black bg-white py-2 px-4 mr-4'>Play</button>
                    <button className='cursor-pointer outline outline-1 py-2 px-4 bg-transparent'>Watch Later</button>
                </div>
                <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                <p className='text-gray-200 w-full md:max-w-[70%] lg:max-w-[60%] xl:max-w-[35%]'>{truncateString(movie?.overview, 150)}</p>
            </div>
            <img className='h-full w-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        </div>
    </div>
  )
}

export default Main