import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./App.css";
import GameCard from "./components/GameCard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

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
  useEffect(() => {
    searchGames("destiny");
    setSearchTerm("Destiny");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  return (
    <>
      <div className="min-h-screen w-screen p-2">
        <Logo />
        <div className="flex justify-center mt-5">
          <input
            className="text-3xl rounded-xl p-3 shadow-black shadow-lg text-gray-200 bg-black/70 border-2 border-black w-[70%] max-w-[800px] capitalize"
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
            className="ml-3 bg-black/70 border-2 border-black p-3 rounded-2xl text-gray-200 shadow-lg shadow-black hover:bg-black/90 hover:scale-110 ease-in duration-300"
          >
            <FaSearch size={35} />
          </button>
        </div>
        <div className="flex justify-center">
          {games?.length > 0 ? (
            <div>
              <Nav
                counter={counter}
                decrement={() => decrement()}
                increment={() => increment()}
              />
              {/* grid of games */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {games.map((game: any, index: number) => (
                  <GameCard game={game} key={index} />
                ))}
              </div>
              <Nav
                counter={counter}
                decrement={() => decrement()}
                increment={() => increment()}
              />
              <Footer />
            </div>
          ) : (
            <>
              <p className="text-center mt-5 text-xl font-mono text-gray-200 border-2 border-black bg-black/70 py-2 rounded-xl">
                {numResults === undefined ? null : message}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
