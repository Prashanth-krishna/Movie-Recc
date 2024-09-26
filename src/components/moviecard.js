import { useState } from "react";
import "./moviecard.css";

export default function MovieCard(props) {
  const [isChecked, SetIsChecked] = useState(false);
  const genreArray = props.movie.moviegenres.split(",");
  const classfortitle = genreArray[0].toLowerCase();

  const handleClickOnMovie = () => {
    if (isChecked) {
      props.removeMovie(props.movie.id);
    } else {
      props.addMovie(props.movie.id);
    }
    SetIsChecked(!isChecked);
  };

  return (
    <div onClick={handleClickOnMovie} className="movie-card-container">
      <div className="movie-card-checkbox">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleClickOnMovie}
        />
      </div>
      <div className="movie-card-moviename">
        <span className={classfortitle}>{props.movie.moviename}</span>
      </div>
      <div className="movie-card-moviegenres">
        <span>{props.movie.moviegenres}</span>
      </div>
      <div className="movie-card-movierating">
        <span>{props.movie.movierating.toFixed(1)}/10</span>
      </div>
    </div>
  );
}
