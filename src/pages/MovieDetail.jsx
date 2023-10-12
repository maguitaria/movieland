import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_URL = "https://www.omdbapi.com?apikey=d97d3ff1";

const MovieDetail = () => {
  const { id } = useParams();
  
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Fetch the movie data using the provided id (imdbID)
        const response = await fetch(`${API_URL}&i=${id}`);
        const data = await response.json();

        // Check if the movie data is valid
        if (data && data.Title) {
          setMovie(data);
        } else {
          // Handle the case where movie data is not found
          console.error("Movie data not found");
        }
      } catch (error) {
        // Handle any fetch errors here
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4">
          <img
          
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
            className="img-thumbnail img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2>{movie.Title}</h2>
          <p>Year: {movie.Year}</p>
          <p>Genre: {movie.Genre}</p>
          <p>
            Rating: {movie.Rating !== "undefined" ? movie.Rating : "No Rating"}
          </p>
          <p>Plot: {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
