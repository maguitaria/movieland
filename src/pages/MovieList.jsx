import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../components/MovieCard";
import SearchIcon from "../assets/search.svg";
import   "../css/App.css";

const API_URL = "https://www.omdbapi.com?apikey=d97d3ff1";

const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState(""); // search value is a string
  const [movies, setMovies] = useState([]); // movies are an array fetched from API
  // Infinite scrolling implementation
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    searchMovies();
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);

    // Check if there's more data to load; if not, set hasMore to false
    if (data.Search && data.Search.length > 0) {
      const moviesWithRatingAndPlot = data.Search.map(async (movie) => {
        const imdbID = movie.imdbID;
        const detailedResponse = await fetch(`${API_URL}&i=${imdbID}`);
        const detailedData = await detailedResponse.json();

        // Extract and include more detailed info about plot and ratings
        return {
          ...movie,
          Ratings: detailedData.Ratings.Value,
          Plot: detailedData.Plot,
          Genre: detailedData.Genre,
        };
      });
      const moviesWithDetails = await Promise.all(moviesWithRatingAndPlot);
      setMovies(moviesWithDetails);
      console.log(moviesWithDetails);
      setHasMore(false);
    }
  };

  return (
    <div className="app">
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
        <InfiniteScroll
          dataLength={movies.length}
          next={searchMovies}
          hasMore={hasMore}
          loader={<h2>Loading...</h2>}
        >
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default MovieList;
