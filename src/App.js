import './App.css';
import Row from './Row.js'

function App() {
  return (
    <div className="App">
      <h1>
        lets build nextflix frontend
      </h1>
      <Row title="Netflix Originals" />
      <Row title="Trending Now" />
      <Row title="Top Rated" />
      <Row title="Action Movies" />
      <Row title="Comedy Movies" />
      <Row title="Horror Movies" />
      <Row title="Romance Movies" />
      <Row title="Documentaries" />
    </div>
  );
}

export default App;



// 7389990692ec3eee76e38dc00b76d480

// https://api.themoviedb.org/3/movie/550?api_key=7389990692ec3eee76e38dc00b76d480