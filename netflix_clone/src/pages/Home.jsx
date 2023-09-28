import React from 'react'
import Main from '../components/Main'
import requests from '../requests'
import Row from '../components/Row'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowId='1' title='TopRated' UrlFetch={requests.requestTopRated} />
        <Row rowId='2' title='Trending' UrlFetch={requests.requestTrending} />
        <Row rowId='3' title='Popular' UrlFetch={requests.requestPopular} />
        <Row rowId='4' title='Upcoming' UrlFetch={requests.requestUpcoming} />
    </>
  )
}

export default Home