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
  // console.log(dominant_color);
  // &nbsp;
  return (
    <div className="bg-gray-600/30 m-5 p-0 rounded-xl shadow-xl shadow-gray-700 border-solid border-2 border-gray-700 max-w-[640px]">
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
            <p className="font-bold text-sm">
              {platforms[0] ? platforms[0].platform.name : null}
            </p>
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
                ? "text-green-600 font-bold"
                : metacritic >= 75
                ? "text-yellow-500 font-bold"
                : "text-red-500 font-bold"
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
