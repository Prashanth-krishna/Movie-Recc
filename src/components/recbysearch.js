import { useState } from "react";
import "./recbysearch.css";
export default function RecBySearch() {
  const [searcheString, SetsearcheString] = useState("");
  const [searchedMovies, SetsearchedMovies] = useState([]);
  const handleInputChange = (e) => {
    SetsearcheString(e.target.value);
  };
  const handleAPICall = () => {
    console.log(searcheString);
    console.log("searching for movie");
    SetsearchedMovies([
      {
        id: 1,
        moviename: "Seven",
        movieyear: 1995,
      },
      {
        id: 2,
        moviename: "Gone Girl",
        movieyear: 2017,
      },
    ]);
  };
  const handleClickOnMovie = () => {
    console.log("getting rec");
  };
  return (
    <div className="recbysearch-container">
      <span className="title">Search for similar movies</span>
      <input
        type="text"
        placeholder="search for a movie"
        value={searcheString}
        onChange={handleInputChange}
      />
      <button className="recbyselect-get-rec" onClick={handleAPICall}>
        Search
      </button>
      <div className="movie-cards">
        {searchedMovies.map((movie) => {
          return (
            <div
              key={movie.id}
              onClick={handleClickOnMovie}
              className="movie-card-container"
            >
              <div className="movie-card-moviename">
                <span>{movie.moviename}</span>
              </div>
              <div className="movie-card-movieyear">
                <span>{movie.movieyear}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
