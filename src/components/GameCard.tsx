import * as React from "react";

const GameCard = ({
  game: {
    name,
    background_image,
    metacritic,
    released,
    platforms,
    esrb_rating,
  },
}) => {
  return (
    <div className="bg-gray-600/30 m-5 p-0 rounded-xl shadow-xl shadow-gray-700 border-solid border-2 border-gray-700 max-w-[640px] hover:scale-105 ease-in duration-300">
      <img
        className="rounded-t-xl h-[360px] w-[640px] border-b-2 border-gray-600"
        alt={name}
        src={
          background_image !== null
            ? background_image
            : "https://via.placeholder.com/640x360"
        }
      />
      <h1 className="text-center text-4xl text-gray-900 tracking-wide font-bold mt-2 font-mono">
        {name}
      </h1>
      <div className="text-gray-800 text-center font-mono py-2">
        {platforms ? (
          <div className="mb-6 flex justify-center">
            {/* {platforms[0] ? (
              <p
                className={
                  platforms[0].platform.name === "Xbox One"
                    ? "font-bold text-sm text-gray-900 border-solid border-1 p-2 mx-5 bg-green-600 rounded-lg"
                    : platforms[0].platform.name === "Xbox 360"
                    ? "font-bold text-sm text-gray-900 border-solid border-1 p-2 mx-5 bg-green-600 rounded-lg"
                    : platforms[0].platform.name === "Xbox Series S/X"
                    ? "font-bold text-sm text-gray-900 border-solid border-1 p-2 mx-5 bg-green-600 rounded-lg"
                    : platforms[0].platform.name === "PlayStation 2"
                    ? "font-bold text-sm text-gray-900 border-solid border-1 p-2 mx-5 bg-blue-600 rounded-lg"
                    : platforms[0].platform.name === "PlayStation 3"
                    ? "font-bold text-sm text-gray-900 border-solid border-1 p-2 mx-5 bg-blue-600 rounded-lg"
                    : platforms[0].platform.name === "PlayStation 4"
                    ? "font-bold text-sm text-gray-900 border-solid border-1 p-2 mx-5 bg-blue-600 rounded-lg"
                    : platforms[0].platform.name === "PlayStation 5"
                    ? "font-bold text-sm text-gray-900 border-solid border-1 p-2 mx-5 bg-blue-600 rounded-lg"
                    : platforms[0].platform.name === "PS Vita"
                    ? "font-bold text-sm text-gray-900 border-solid border-1 p-2 mx-5 bg-blue-600 rounded-lg"
                    : "font-bold text-sm text-gray-900 border-solid border-1 p-2 mx-5 bg-gray-600 rounded-lg"
                }
              >
                &nbsp;{platforms[0].platform.name}
              </p>
            ) : null} */}

            {platforms[0] ? (
              <p className="font-bold text-sm">
                &nbsp;{platforms[0].platform.name}
              </p>
            ) : null}

            {platforms[1] ? (
              <p className="font-bold text-sm">
                &nbsp;{platforms[1].platform.name}
              </p>
            ) : null}

            {platforms[2] ? (
              <p className="font-bold text-sm">
                &nbsp;{platforms[2].platform.name}
              </p>
            ) : null}
            {platforms[3] ? (
              <p className="font-bold text-sm">
                &nbsp;{platforms[3].platform.name}
              </p>
            ) : null}

            {platforms[4] ? (
              <p className="font-bold text-sm">
                &nbsp;{platforms[4].platform.name}
              </p>
            ) : null}
          </div>
        ) : null}
        <div className="w-[100%] h-0.5 bg-gray-600/50" />
        {esrb_rating ? <p>Rating: {esrb_rating.name}</p> : null}
        {metacritic ? (
          <p
            className={
              metacritic >= 75
                ? "text-green-700 font-bold"
                : metacritic > 60
                ? "text-yellow-700 font-bold"
                : "text-red-700 font-bold"
            }
          >
            Metacritic: {metacritic}
          </p>
        ) : null}
        {released ? <p>Released: {released}</p> : null}
      </div>
    </div>
  );
};

export default GameCard;
