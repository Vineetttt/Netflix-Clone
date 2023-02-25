import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Row from '../../components/Rows/Row';
import requests from '../../components/Requests';
import Banner from '../../components/Banner/Banner';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Navbar />
        <Banner />
        <Row 
          title="NETFLIX ORIGINALS"
          fetchURL={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="TRENDING NOW" fetchURL={requests.fetchTrending} />
        <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
        <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
        <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
        <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
        <Row title="ROMANTIC MOVIES" fetchURL={requests.fetchRomanceMovies} />
        <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen