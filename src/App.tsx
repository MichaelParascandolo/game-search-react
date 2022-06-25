import React, { useState, useEffect } from "react";
import GameCard from "./components/GameCard";
// import SearchIcon from "./search.svg";
import "./App.css";
import { Button, TextField } from "@mui/material";
import SearchAppBar from "./components/Header";
//test API page
// https://api.rawg.io/api/games?key=8d1a421af80b4f9b8650de12d9943010&search=uncharted&page=1

const API_URL =
  "https://api.rawg.io/api/games?key=8d1a421af80b4f9b8650de12d9943010";
let x;

const App = () => {
  const [searchTerm] = useState("");
  const [games, setGames] = useState([]);

  let [counter, setCounter] = useState(1);

  const increment = () => {
    // Counter state is incremented
    if (counter <= 100) {
      setCounter((counter += 1));
      searchGames(searchTerm);
    }
  };

  const decrement = () => {
    // Counter state is decremented
    if (counter >= 2) {
      setCounter((counter -= 1));
      searchGames(searchTerm);
    }
  };

  //runs at the start of the app
  useEffect(() => {
    searchGames("Destiny");
  }, []);

  const searchGames = async (title) => {
    const response = await fetch(`${API_URL}&search=${title}&page=${counter}`);
    const data = await response.json();
    setGames(data.results);
    // console.log(data.results);
    x = parseInt(data.count);
  };

  return (
    <>
      <SearchAppBar />
      <div className="app">
        {/* <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for games"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setCounter((counter = 1));
                searchGames(searchTerm);
              }
            }}
            type="text"
          />
          {/* <img
          src={}
          alt="search"
          onClick={() => {
            //resets page counter back to 1
            setCounter((counter = 1));
            searchMovies(searchTerm);
          }}
        /> 
        </div> */}

        {games?.length > 0 ? (
          <div className="main">
            <h2>{x} Total Results</h2>
            <br />
            <h2 className="counter">Page {counter} </h2>
            <Button variant="outlined" onClick={decrement}>
              Back
            </Button>{" "}
            <Button variant="outlined" onClick={increment}>
              Next
            </Button>
            <div className="container">
              {games.map((game) => (
                <GameCard game={game} />
              ))}
            </div>
          </div>
        ) : (
          <>
            <h2>{typeof x === "undefined" ? "" : "No games found . . ."}</h2>
          </>
        )}
        <br />
        <footer>Created by Michael Parascandolo</footer>
      </div>
    </>
  );
};

export default App;
