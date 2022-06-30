import React, { useState, useEffect } from "react";
import GameCard from "./components/GameCard";
import "./App.css";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
//test API page
// https://api.rawg.io/api/games?key=8d1a421af80b4f9b8650de12d9943010&search=uncharted&page=1

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));
////////////
const API_URL =
  "https://api.rawg.io/api/games?key=8d1a421af80b4f9b8650de12d9943010";
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
    // searchGames("Destiny");
  }, []);

  const searchGames = async (title: string) => {
    const response = await fetch(`${API_URL}&search=${title}&page=${counter}`);
    const data = await response.json();
    setGames(data.results);
    // console.log(data.results);
    x = parseInt(data.count);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, borderBottom: "2px solid white" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <h1>GameLand</h1>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for games"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setCounter((counter = 1));
                    searchGames(searchTerm);
                  }
                }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
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
            <h2 className="counter">Page {counter} </h2>
            <Button variant="outlined" onClick={decrement}>
              Back
            </Button>{" "}
            <Button variant="outlined" onClick={increment}>
              Next
            </Button>
            <footer>Created by Michael Parascandolo</footer>
          </div>
        ) : (
          <>
            <h2>{typeof x === "undefined" ? "" : "No games found . . ."}</h2>
          </>
        )}
      </div>
    </>
  );
};

export default App;
