import React, { useState, useEffect } from "react";
import GameCard from "./components/GameCard";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.rawg.io/api/games?key=" + API_KEY;
let x: any;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [games, setGames] = useState([]);

  let [counter, setCounter] = useState(1);

  const increment = () => {
    if (counter <= 100) {
      setCounter((counter += 1));
      searchGames(searchTerm);
    }
  };

  const decrement = () => {
    if (counter >= 2) {
      setCounter((counter -= 1));
      searchGames(searchTerm);
    }
  };

  //runs at the start of the app
  useEffect(() => {
    searchGames("Destiny");
  }, []);

  const searchGames = async (title: string) => {
    const response = await fetch(`${API_URL}&search=${title}&page=${counter}`);
    const data = await response.json();
    setGames(data.results);
    x = parseInt(data.count);
  };

  const style = {
    button: "p-2 rounded-2xl font-mono",
  };
  return (
    <>
      <div className="min-h-screen w-screen p-4 bg-gradient-to-b from-[#f0f0f0] to-[#8b8989]">
        <h1 className="text-7xl font-mono font-bold tracking-wide text-center mt-10 text-gray-800">
          GameSearch
        </h1>
        <div className="app">
          <div className="flex justify-center mt-5">
            <input
              className="text-3xl rounded-xl p-3 shadow-lg shadow-gray-700 text-gray-200 bg-gray-600 w-[50%]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Games . . ."
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setCounter((counter = 1));
                  searchGames(searchTerm);
                }
              }}
              type="text"
            />{" "}
            <button
              onClick={() => {
                searchGames(searchTerm);
              }}
              className="ml-3 bg-gray-800 p-3 rounded-2xl text-gray-200 hover:scale-110 ease-in duration-300"
            >
              <FaSearch size={35} />
            </button>
          </div>

          {games?.length > 0 ? (
            <div>
              <div className="text-center pt-5 text-xl font-mono text-gray-700">
                <p className="">{x} Total Results</p>
                <p className="">Page {counter} </p>
              </div>
              <div className="flex justify-between">
                <button className={style.button} onClick={() => decrement()}>
                  <GrPrevious size={25} />
                </button>
                <button className={style.button} onClick={() => increment()}>
                  <GrNext size={25} />
                </button>
              </div>

              <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                  {games.map((game) => (
                    <GameCard game={game} />
                  ))}
                </div>
              </div>
              <div className="text-center py-2 text-xl font-mono text-gray-800">
                <h2>Page {counter} </h2>
                <footer>Created by Michael Parascandolo</footer>
              </div>
            </div>
          ) : (
            <>
              <h2>{typeof x === "undefined" ? "" : "No games found . . ."}</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
