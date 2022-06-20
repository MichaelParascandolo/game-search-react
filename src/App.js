import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
//test API page
// https://api.rawg.io/api/games?key=8d1a421af80b4f9b8650de12d9943010&search=uncharted&page=1

const API_URL = "https://api.rawg.io/api/games?key=8d1a421af80b4f9b8650de12d9943010";
let x;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  
  let [counter, setCounter] = useState(1);
  
 
  // Function is called everytime increment button is clicked
  const increment = () => {
    // Counter state is incremented
    if(counter <= 100) {
      setCounter(counter += 1);
      searchMovies(searchTerm);
    }
  }
  
  // Function is called everytime decrement button is clicked
  const decrement = () => {
    // Counter state is decremented
    if(counter >= 2) {
      setCounter(counter -= 1);
      searchMovies(searchTerm);

    }
  }
 

//runs at the start of the app
  useEffect(() => {
    searchMovies("Destiny");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&search=${title}&page=${counter}`);
    const data = await response.json();
    setMovies(data.results);
    // console.log(data.results);
    x = parseInt(data.count);
  };

  return (
    <div className="app">
      <h1>GameLand</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for games"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
                    setCounter(counter = 1);
                    searchMovies(searchTerm);
            }
        }}
        type="text"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            //resets page counter back to 1
            setCounter(counter = 1);
            searchMovies(searchTerm);
           }}/>
      </div>
  
      {movies?.length > 0 ? (
        <div className="main">
        <h2>{x} Total Results</h2>
        <br />
        
            <h2 className="counter">Page {counter} </h2>
            <button onClick={decrement} className="page">
              Back
            </button>
            <button onClick={increment} className="page">
              Next
            </button>
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
        </div>
      ) : (
        <>
        <h2>{typeof(x) === 'undefined' ? '' : 'No games found . . .'}</h2>
        </>
      )}
        <br />
      <footer>© 2022 GameLand Inc</footer>
    </div>
  );
};

export default App;
