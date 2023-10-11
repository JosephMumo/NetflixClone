import React, { useEffect, useState } from 'react'
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { updateDoc, onSnapshot, doc } from 'firebase/firestore'


function SavedShows() {
    const [movies, setMovies] = useState([])
    const {user} = UserAuth()
    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`, (doc) => {
            setMovies(doc.data()?.SavedShows)
        }))
    },[user?.email])
  return (
    <div className="text-white font-bold md:text-xl p-4 w-full">
        <h3 className="text-white font-bold">My List</h3>
        <div className="relative flex items-center group">
            <CiCircleChevLeft size={40} onClick={slideLeft} className="hidden group-hover:block z-13 absolute left-1 cursor-pointer" />
            <div id={"slider"} className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide">
                {movies.map((item, id) => (
                    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                    <img className="w-full h-auto" src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                    <div className="text-white absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 grid place-items-center">
                        <p className="white-space-normal text-xs md:text-sm">{item?.title}</p>
                    </div>
                </div>
                ))}
            </div>
            <CiCircleChevRight size={40} onClick={slideRight} className="hidden group-hover:block z-10 absolute right-1 cursor-pointer" />
        </div>
    </div>
  )
}

export default SavedShows