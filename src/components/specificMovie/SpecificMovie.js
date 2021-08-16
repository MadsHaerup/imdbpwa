import React, { useEffect, useState } from 'react';
import Logo from '../movie/Logo';
import './SpecificMovie.css';
require('dotenv').config();
export default function SpecificMovie({id}) {
  var apiKey = process.env.REACT_APP_APIKEY;
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${id}&r=json`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": `${apiKey}`,
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setMovie(data)
    })
    .catch(err => {
      console.error(err);
    });
  }, [])

  return (
    <>
    <Logo/>
    <div className="specificMovie">
       <h1 className="specificMovie__title" >{movie.Title}</h1>
       <div className ="specificMovie__details">
        <p>{movie.Type}</p>
        <p>{movie.Runtime}</p>
        <p>{movie.Genre}</p>
       </div>
      <div className="specificMovie__overview">
        <img className="specificMovie__image" src={movie.Poster} alt="" />
        <div className="specificMovie__info">
          <p>{movie.Country}</p>
          <p>{movie.Production}</p>
          <p>Rating: {movie.imdbRating}</p>
          <p>{movie.Language}</p>
          <p>{movie.Actors}</p>
          <p>Box office {movie.BoxOffice}</p>
          <p>Director {movie.Director}</p>
        </div>
      </div>
        <div>
          <p>Awards</p>
          <p>{movie.Awards}</p>
        </div>
      <p>{movie.Plot}</p>
    </div>
    </>
  )
}
