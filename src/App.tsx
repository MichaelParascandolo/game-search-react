import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Oval } from "react-loading-icons";
import "./App.css";
import GameCard from "./components/GameCard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
const API_URL: string = "https://api.rawg.io/api/games?key=" + API_KEY;
let numResults: number;

export interface GameData {
  name?: string;
  game: {
    name?: string;
    released?: string;
    background_image?: string;
    esrb_rating?: ESRBData;
    metacritic?: number;
    platforms?: PlatformData[];
    genres?: GenreData[];
  };
}

interface ESRBData {
  id: number;
  name: string;
}

export interface PlatformData {
  platform: {
    id: number;
    name: string;
  };
}

export interface GenreData {
  id: number;
  name: string;
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [games, setGames] = useState<GameData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
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
    // searchGames("destiny");
    // setSearchTerm("Destiny");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchGames = async (title: string) => {
    setLoading(true);
    if (title !== "") {
      const response = await fetch(
        `${API_URL}&search=${title}&page=${counter}`
      );
      const data = await response.json();
      setGames(data.results);
      numResults = parseInt(data.count);
    }
    setLoading(false);
  };
  return (
    <>
      <div className="w-full h-full p-2">
        <Logo />
        <div className="flex justify-center mt-2">
          <input
            className="text-3xl rounded-xl p-3 shadow-md shadow-black text-gray-200 bg-black/70 border-2 border-black w-[70%] max-w-[800px] capitalize"
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
            className="ml-3 bg-black/70 border-2 border-black p-3 rounded-2xl text-gray-200 md:shadow-md md:shadow-black hover:bg-black/90 hover:scale-110 ease-in duration-300"
          >
            {!loading ? <FaSearch size={35} /> : <Oval />}
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                {games.map((item: GameData, index: number) => (
                  <GameCard game={item} key={index} />
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
              {numResults === undefined ? null : (
                <p className="text-center mt-5 text-xl text-gray-200 border-2 border-black bg-black/70 py-2 px-4 rounded-xl">
                  No games found . . .
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
