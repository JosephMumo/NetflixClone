import axios from "axios"
import { useEffect, useState } from "react"
import React from 'react'

function Row({title, UrlFetch}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(UrlFetch)
        .then((res) => setMovies(res.data.results))
    }, [UrlFetch])
  return (
    <div className="text-white font-bold md:text-xl p-4 w-full">
        <h3 className="text-white font-bold">{title}</h3>
        <div className="relative flex items-center">
        <div id="slider">
            {movies.map((item, id) => (
                <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2" key={id}>
                    <img className="w-full h-auto" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                    <div className="text-white absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 grid place-items-center">
                        <p>{item?.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Row