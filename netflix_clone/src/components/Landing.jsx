import React from 'react'
import CollapsibleComponent from './CollapsibleComponent'

function Landing() {
  return (
    <div className='w-full text-white'>
        <hr className='w-[90%] absolute left-[5%]' />
        <section className='w-full h-auto md:h-[600px] flex flex-col md:flex-row text-center md:text-start justify-center items-center py-3 px-4 md:px-12'>
            <div className='w-full md:w-1/2 p-4 space-y-4'>
                <h1 className='text-3xl md:text-6xl font-bold'>Enjoy on Your Tv</h1>
                <p className='text-lg md:text-2xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div className='w-full md:w-1/2 p-4 grid place-items-center' >
                <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt='tv-img' className='w-[80%] md:w-[60%]' />
            </div>
        </section>
        <hr className='w-[90%] absolute left-[5%]' />
        <section className='w-full h-auto md:h-[600px] flex flex-col md:flex-row text-center md:text-start justify-center items-center py-3 px-4 md:px-12'>
            <div className='w-full md:w-1/2 p-4 grid place-items-center' >
                <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt='tv-img-1' className='w-[80%] md:w-[60%]' />
            </div>
            <div className='w-full md:w-1/2 p-4 space-y-4'>
                <h1 className='text-3xl md:text-6xl font-bold'>Download Your Shows <br /> To Watch Offline</h1>
                <p className='text-lg md:text-2xl'>Save your favorites easily and always have something to watch.</p>
            </div>
        </section>
        <hr className='w-[90%] absolute left-[5%]' />
        <section className='w-full h-auto md:h-[600px] flex flex-col md:flex-row text-center md:text-start justify-center items-center py-3 px-4 md:px-12'>
            <div className='w-full md:w-1/2 p-4 space-y-4'>
                <h1 className='text-3xl md:text-6xl font-bold'>Watch EveryWhere</h1>
                <p className='text-lg md:text-2xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className='w-full md:w-1/2 p-4 grid place-items-center' >
                <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-ke.png' alt='tv-img-3' className='w-[80%] md:w-[60%]' />
            </div>
        </section>
        <hr className='w-[90%] absolute left-[5%]' />
        <section className='w-full h-auto md:h-[600px] flex flex-col md:flex-row text-center md:text-start justify-center items-center py-3 px-4 md:px-12'>
            <div className='w-full md:w-1/2 p-4 grid place-items-center' >
                <img src='https://occ-0-1234-6126.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55' alt='tv-img-1' className='w-[80%] md:w-[60%]' />
            </div>
            <div className='w-full md:w-1/2 p-4 space-y-4'>
                <h1 className='text-3xl md:text-6xl font-bold'>Create Profiles For Kids</h1>
                <p className='text-lg md:text-2xl'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
        </section>
        <CollapsibleComponent />
    </div>
  )
}

export default Landing