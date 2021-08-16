import React from "react";
import "./SearchBar.css";

export default function SearchBar({ handleSearch }) {
	return (
		<form className="search">
			<input
				className="search__bar"
				type="search"
				id="search"
				placeholder="Search"
				name="search"
				onKeyPress={(e) => (e.key === "Enter" ? handleSearch(e) : null)}
				// onMouseLeave={(e) =>  handleSearch(e) }
			/>

			{/* <button type="submit" id="search" >Search</button> */}
		</form>
	);
}
