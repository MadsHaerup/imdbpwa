import React from 'react';
import './Movie.css';
import {Link } from "@reach/router";


export default function SingleMovie({title, id, year, image}) {
  return (
    <Link className="singleMovie" to= {"/"+id}>
      <div className="movie" key={id}>
        <img className="movie__image" src={image} alt="" />
        <div className="movie__info">
          <p className="movie__title">{title} </p>
          <p className="movie__year">{year} </p>
        </div>
      </div>
    </Link>
  )
}