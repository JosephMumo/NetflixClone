import React from 'react'
import Main from '../components/Main'
import requests from '../requests'
import Row from '../components/Row'
import Landing from '../components/Landing'
import { UserAuth } from '../context/AuthContext'
import Footer from '../components/Footer'

const Home = () => {
  const { user } = UserAuth()
  return (
    <>
        <Main />
        <Row rowId='1' title='TopRated' UrlFetch={requests.requestTopRated} />
        <Row rowId='2' title='Trending' UrlFetch={requests.requestTrending} />
        <Row rowId='3' title='Popular' UrlFetch={requests.requestPopular} />
        <Row rowId='4' title='Upcoming' UrlFetch={requests.requestUpcoming} />
        {user ? null : <Landing />}
        <Footer />
    </>
  )
}

export default Home