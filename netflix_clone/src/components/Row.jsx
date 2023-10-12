import axios from "axios"
import { useEffect, useState } from "react"
import React from 'react'
import Movie from "./Movie"
import {CiCircleChevLeft, CiCircleChevRight} from "react-icons/ci"


function Row({title, UrlFetch, rowId}) {
    const [movies, setMovies] = useState([])
    
    
    

    useEffect(() => {
        axios.get(UrlFetch)
        .then((res) => setMovies(res.data.results))
    }, [UrlFetch])

    const slideRight = () => {
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
    <div className="text-white font-bold md:text-xl p-4 w-full">
        <h3 className="text-white font-bold">{title}</h3>
        <div className="relative flex items-center group">
            <CiCircleChevLeft size={40} onClick={slideLeft} className="hidden group-hover:block z-10 left-1 absolute cursor-pointer" />
            <div id={"slider" + rowId} className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide">
                {movies.map((item, id) => (
                    <Movie 
                        key={item?.id}
                        {...item}
                    />
                ))}
            </div>
            <CiCircleChevRight size={40} onClick={slideRight} className="hidden group-hover:block z-10 absolute right-1 cursor-pointer" />
        </div>
    </div>
  )
}

export default Row