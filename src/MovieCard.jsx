import React from 'react';

const MovieCard = ({ movie: {name, background_image, metacritic, released, platforms } }) => {
  


// const platformList = platforms.map(console => {
//   return console;
// })

// const PlatformList = () => (
//   <div>
//     {MovieCard.map(console => <span key={console}>{console}</span>)}
//   </div>
// );


  // console.log(platformList);



  return (
    <div>
      <div className="movie" key={metacritic}>
      <div>
        <p>{}</p>
      </div>
      <div>
        <img src={background_image !== null ? background_image : "https://via.placeholder.com/640x360"} alt={name} />
      </div>

      <div>
        <span>{metacritic !== null ? 'Metacritic Score: ' + metacritic : '' }</span>
        <h3>{name}</h3>
        <span>{released !== null ? 'Released: ' + released : '' }</span>
        <br />
        <span>{platforms[0].platform.name || ''} </span>
        <span>{platforms[0].platform.id}</span>
        

     
      </div>
    </div>
    </div>
  );
}

export default MovieCard;