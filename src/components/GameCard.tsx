import * as React from "react";

const GameCard = ({
  game: { name, background_image, metacritic, released, platforms },
}) => {
  return (
    <div className="bg-gray-700 m-5 p-0 rounded-xl shadow-lg shadow-gray-700 border-solid border-2 border-gray-200">
      <img
        className="rounded-t-xl min-h-[360px]"
        alt={name}
        src={
          background_image !== null
            ? background_image
            : "https://via.placeholder.com/640x360"
        }
      />
      <h1 className="text-center text-3xl text-gray-900 tracking-wide font-bold mt-2">
        {name}
      </h1>
      <div className="text-gray-100 text-center font-mono py-2">
        <div className="mb-3">
          <p className="font-bold text-sm">
            {platforms[0] ? platforms[0].platform.name : null}
          </p>
          <p className="font-bold text-sm">
            {platforms[1] ? platforms[1].platform.name : null}
          </p>
          <p className="font-bold text-sm">
            {platforms[2] ? platforms[2].platform.name : null}
          </p>
          <p className="font-bold text-sm">
            {platforms[3] ? platforms[3].platform.name : null}
          </p>
          <p className="font-bold text-sm">
            {platforms[4] ? platforms[4].platform.name : null}
          </p>
        </div>
        <hr />
        <p>{metacritic ? "Metacritic: " + metacritic : null}</p>
        <p>{released ? released : null}</p>
      </div>
    </div>
  );
};

export default GameCard;
