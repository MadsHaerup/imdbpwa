import React, { useState } from "react";
import "./Movie.css";
import { Link } from "@reach/router";
import StarRating from "../starRating/StarRating";
import PouchDB from "pouchdb";
var db = new PouchDB("movieDB");

export default function SingleMovie({ title, id, year, image }) {
	const [starValue, setStarValue] = useState(0);

	db.get(id, function (err, doc) {
		if (err) {
			return null;
		} else {
			setStarValue(doc.value);
		}
	});

	return (
		<div className="movie" key={id}>
			<Link className="singleMovie" to={"/" + id}>
				<img className="movie__image" src={image} alt="" />
			</Link>
			<div className="movie__info">
				<p className="movie__title">{title} </p>
				<p className="movie__year">{year} </p>
				<StarRating id={id} />
			</div>
		</div>
	);
}
