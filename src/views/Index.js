import React, { useState } from 'react';
import Logo from '../components/movie/Logo';
import MovieDB from '../components/movie/MovieDB';
import SearchBar from '../components/searchbar/SearchBar';

export default function Index() {
  const [search, setSearch] = useState(" ");
  
    const handleSearch = (event) => {
      event.preventDefault();
      setSearch(event.target.value);
      console.log(search)
    };

  return (
    <div>
      <Logo/>
      <SearchBar 
      handleSearch={handleSearch} 
      search={search} 
      setSearch={setSearch} />

      <MovieDB 
      search={search} 
      setSearch={setSearch} /> 
    </div>
  )
}
