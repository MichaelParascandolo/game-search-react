import React, { useState, useEffect } from "react";
import GameCard from "./components/GameCard";
import "./App.css";
import {
  FaArrowAltCircleRight,
  FaArrowCircleLeft,
  FaSearch,
} from "react-icons/fa";
import { MdGamepad } from "react-icons/md";

const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
const API_URL: string = "https://api.rawg.io/api/games?key=" + API_KEY;
let numResults: number;

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [games, setGames] = useState<any>([]);
  const message = "No games found . . .";

  let [counter, setCounter] = useState<number>(1);

  const increment = () => {
    setCounter((counter += 1));
    searchGames(searchTerm);
  };

  const decrement = () => {
    if (counter >= 2) {
      setCounter((counter -= 1));
      searchGames(searchTerm);
    }
  };

  // used for testing
  // useEffect(() => {
  //   searchGames("destiny");
  //   setSearchTerm("Destiny");
  // }, []);

  const searchGames = async (title: string) => {
    if (title !== "") {
      const response = await fetch(
        `${API_URL}&search=${title}&page=${counter}`
      );
      const data = await response.json();
      setGames(data.results);
      numResults = parseInt(data.count);
    }
  };

  const style = {
    button: "p-2 rounded-2xl font-mono",
  };
  return (
    <>
      <div className="min-h-screen w-screen p-4 bg-gradient-to-r from-[#f0f0f0] to-[#bd8cf6]">
        {/* <h1 className="text-7xl font-mono font-bold tracking-wide text-center mt-10 text-gray-800"> */}
        <h1 className="text-transparent text-5xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-gray-400 to-gray-900 text-center tracking-widest font-thin">
          GameSearch
          <MdGamepad className="text-gray-800/80 inline-flex" />
        </h1>
        <div className="app">
          <div className="flex justify-center mt-5">
            <input
              className="text-3xl rounded-xl p-3 shadow-lg shadow-gray-600 text-gray-200 bg-gray-600 w-[70%] max-w-[800px] capitalize"
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
              className="ml-3 bg-gray-800 p-3 rounded-2xl text-gray-200 shadow-lg shadow-gray-600 hover:scale-110 ease-in duration-300"
            >
              <FaSearch size={35} />
            </button>
          </div>
          {games?.length > 0 ? (
            <div>
              <div className="text-center pt-5 text-xl font-mono text-gray-700">
                <p className="tracking-wide">{numResults} Results</p>
                <p className="font-bold mt-2 flex justify-center text-gray-800">
                  <button className={style.button} onClick={() => decrement()}>
                    <FaArrowCircleLeft size={30} />
                  </button>
                  <span className="mt-1 text-3xl">{counter}</span>
                  <button className={style.button} onClick={() => increment()}>
                    <FaArrowAltCircleRight size={30} />
                  </button>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                {games.map((game: any, index: number) => (
                  <GameCard game={game} key={index} />
                ))}
              </div>
              <div className="text-center py-2 text-xl font-mono text-gray-800">
                <p className="font-bold mt-2 flex justify-center">
                  <button className={style.button} onClick={() => decrement()}>
                    <FaArrowCircleLeft size={30} />
                  </button>
                  <span className="mt-1 text-3xl">{counter}</span>
                  <button className={style.button} onClick={() => increment()}>
                    <FaArrowAltCircleRight size={30} />
                  </button>
                </p>
                <footer>
                  © {new Date().getFullYear()} Michael Parascandolo
                </footer>
              </div>
            </div>
          ) : (
            <>
              <p className="text-center pt-5 text-xl font-mono text-gray-700">
                {numResults ? null : message}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
