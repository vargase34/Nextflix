import React from 'react'
import './App.css';
import Row from './Row.js'
import requests from './requests.js'

function App() {
  return (
    <div className="App">
      <h1>lets build nextflix frontend</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;



// 7389990692ec3eee76e38dc00b76d480

// https://api.themoviedb.org/3/movie/550?api_key=7389990692ec3eee76e38dc00b76d480