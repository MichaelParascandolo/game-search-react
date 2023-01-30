import * as React from "react";
import Platform from "./Platform";

const GameCard = ({
  game: {
    name,
    background_image,
    metacritic,
    released,
    esrb_rating,
    platforms,
    genres,
  },
}) => {
  return (
    <div className="bg-gray-500/20 m-5 p-0 rounded-xl shadow-xl shadow-gray-700 border-solid border-2 border-gray-700 max-w-[640px] hover:scale-105 ease-in duration-300">
      <img
        className="rounded-t-xl h-[360px] w-[640px] border-b-2 border-gray-600"
        alt={name}
        src={
          background_image
            ? background_image
            : "https://via.placeholder.com/640x360"
        }
      />
      <h1 className="text-center text-4xl text-gray-900 tracking-wide font-bold mt-2 font-mono">
        {name}
      </h1>
      <div className="text-gray-800 text-center font-mono py-2 tracking-wide">
        <div className="flex flex-wrap justify-center">
          {platforms
            ? platforms.map((platform: any) => (
                <Platform
                  name={platform.platform.name}
                  key={platform.platform.id}
                />
              ))
            : null}
        </div>
        <div className="w-[100%] h-0.5 mt-5 bg-gray-600/50" />
        {genres
          ? genres.map((item: any) => (
              <span
                className="flex flex-wrap justify-center font-bold"
                key={item.id}
              >
                {item.name}
              </span>
            ))
          : null}
        <div className="w-[100%] h-0.5 mt-0 bg-gray-600/50" />
        {esrb_rating ? (
          <p>
            Rating: <span className="font-bold">{esrb_rating.name}</span>
          </p>
        ) : null}
        {metacritic ? (
          <div>
            <span
              className={
                metacritic >= 75
                  ? "text-green-800 font-bold border-green-800 border-b-2 px-5"
                  : metacritic > 60
                  ? "text-yellow-800 font-bold border-yellow-800 border-b-2 px-5"
                  : "text-red-800 font-bold border-red-800 border-b-2 px-5"
              }
            >
              Metacritic: {metacritic}
            </span>
          </div>
        ) : null}
        {released ? (
          <p>
            Release Date: <span className="font-bold">{released}</span>
          </p>
        ) : null}
        {/* <span className="border-2 border-gray-600 p-3">More Info</span> */}
      </div>
    </div>
  );
};

export default GameCard;
