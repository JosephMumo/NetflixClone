import React from 'react'
import Main from '../components/Main'
import requests from '../requests'
import Row from '../components/Row'

const Home = () => {
  return (
    <>
        <Main />
        <Row title='TopRated' UrlFetch={requests.requestTopRated} />
        <Row title='Trending' UrlFetch={requests.requestTrending} />
        <Row title='Horror' UrlFetch={requests.requestHorror} />
        <Row title='Upcoming' UrlFetch={requests.requestUpcoming} />
    </>
  )
}

export default Home