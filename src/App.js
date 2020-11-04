import './App.css'
import React from 'react'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <div className="cont">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow="true" />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActioMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries}></Row>
      </div>
    </div>
  );
}

export default App;
