import React, { useEffect, useState } from 'react';
import SingleMovie from './SingleMovie';
import './Movies.css';
require('dotenv').config();
export default function MovieDB({search, setSearch}) {
  var apiKey = process.env.REACT_APP_APIKEY;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${search === " " ? "Avengers" : search }&page=1&r=json`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": `${apiKey}`,
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      }
    })
    .then(response => response.json())
    .then(data => {
      setMovies(data.Search)
      console.log(data.Search)
    })
    .catch(err => {
      console.error(err);
    });

  }, [setSearch, search])

  return (
    <div className="movies">
      {movies?.map((movie)=>(
        <SingleMovie key={movie.imdbID}
        title={movie.Title}
        image={movie.Poster}
        id={movie.imdbID}
        year={movie.Year}
        />
      ))}
    </div>
  )
}
