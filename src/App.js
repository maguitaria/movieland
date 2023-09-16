import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "./MovieCard.jsx";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=d97d3ff1";

const App = () => {

  const [searchTerm, setSearchTerm] = useState('') // search value is a string
  const [movies, setMovies] = useState([]); // movies are an array fetched from API

  useEffect(() => {
    searchMovies();
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
console.log(data)
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <h2 style={{color: "white"}}>Best Movies of your choice!</h2>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
