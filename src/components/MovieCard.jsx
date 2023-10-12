import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({
  movie: { imdbID, Year, Poster, Title, Type, Plot, Rating, Genre },
}) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
        <p>{Rating !== "undefined" ? Rating : <p>No Rating</p>}</p>
        <p>{Plot}</p>
      </div>

      <div>
        <Link to={`/movieland/movie/${imdbID}`}>
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
          />
        </Link>
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>

        <span>Genre</span>
        <h4>{Genre}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
