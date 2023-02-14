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
    <div className="bg-black/70 m-5 p-0 rounded-xl shadow-lg shadow-black border-solid border-4 border-black max-w-[640px] hover:scale-105 ease-in duration-300">
      <img
        className="rounded-t-xl h-[360px] w-[640px] border-b-2 border-black"
        alt={name}
        src={
          background_image
            ? background_image
            : "https://via.placeholder.com/640x360"
        }
      />
      <h1 className="text-center text-4xl text-gray-200 tracking-wide font-bold mt-2 font-mono">
        {name}
      </h1>
      {released ? (
        <p className="text-center text-gray-400 tracking-widest">{released}</p>
      ) : null}
      <div className="text-gray-200 text-center font-mono py-2 tracking-wide">
        <div className="w-[100%] h-0.5 mb-2 bg-black/50" />
        <div className="flex flex-wrap justify-center">
          {/* <div className="grid grid-cols-3 justify-center"> */}
          {platforms
            ? platforms.map((platform: any) => (
                <Platform
                  name={platform.platform.name}
                  key={platform.platform.id}
                />
              ))
            : null}
        </div>
        <div className="w-[100%] h-0.5 my-2 bg-black/50" />
        {genres ? (
          <div className="flex flex-wrap justify-center">
            {genres.map((item: any) => (
              <span className="px-2 text-sm font-bold" key={item.id}>
                {item.name}
              </span>
            ))}
          </div>
        ) : null}
        <div className="w-[100%] h-0.5 my-2 bg-black/50" />
        {esrb_rating ? (
          <p>
            Rating: <span className="font-bold">{esrb_rating.name}</span>
          </p>
        ) : null}
        {metacritic ? (
          <div className="my-2">
            <span
              className={
                metacritic >= 75
                  ? "text-black font-bold bg-green-500 border-2 border-green-700 rounded-lg px-5 py-1"
                  : metacritic > 60
                  ? "text-black font-bold bg-yellow-500 border-2 border-yellow-700 rounded-lg px-5 py-1"
                  : "text-black font-bold bg-red-500 border-2 border-red-700 rounded-lg px-5 py-1"
              }
            >
              Metacritic: {metacritic}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GameCard;
