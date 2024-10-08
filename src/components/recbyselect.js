import { useState } from "react";
import MovieCard from "./moviecard";
import "./recbyselect.css";

const MOVIE_DUMMY = [
  {
    id: 1,
    moviename: "Seven",
    movierating: 9.0,
    moviegenres: "Crime, Thriller",
  },
  {
    id: 2,
    moviename: "Gone Girl",
    movierating: 8.5,
    moviegenres: "Crime, Thriller",
  },
  {
    id: 3,
    moviename: "Baby Driver",
    movierating: 9.0,
    moviegenres: "Crime, Action, Romance",
  },
  {
    id: 4,
    moviename: "Hot Fuzz",
    movierating: 8.5,
    moviegenres: "Action, Comedy",
  },
  {
    id: 5,
    moviename: "Shaun of the Dead",
    movierating: 8.0,
    moviegenres: "Comedy, Romance, Action",
  },
  {
    id: 6,
    moviename: "Last Night in Soho",
    movierating: 8.0,
    moviegenres: "Horror, Thriller",
  },
  {
    id: 7,
    moviename: "Reservoir Dogs",
    movierating: 8.5,
    moviegenres: "Crime, Thriller",
  },
  {
    id: 8,
    moviename: "Dead Poets Society",
    movierating: 8.0,
    moviegenres: "Dramedy",
  },
  {
    id: 9,
    moviename: "Dune",
    movierating: 9.0,
    moviegenres: "Sci-fi, Thriller",
  },
  {
    id: 10,
    moviename: "Ferris Bueller's day off",
    movierating: 8.0,
    moviegenres: "Comedy, Romance",
  },
  {
    id: 11,
    moviename: "Scott Pilgrim vs the World",
    movierating: 9.0,
    moviegenres: "Romance, Action",
  },
  {
    id: 12,
    moviename: "Midsommar",
    movierating: 7.0,
    moviegenres: "Horror",
  },
  {
    id: 13,
    moviename: "I Love You, Man",
    movierating: 7.5,
    moviegenres: "Comedy, Romance",
  },
  {
    id: 14,
    moviename: "Everything, Everywhere all at once",
    movierating: 8.0,
    moviegenres: "Sci-Fi, Action",
  },
  {
    id: 15,
    moviename: "Definitely, Maybe",
    movierating: 8.5,
    moviegenres: "Romance, Comedy",
  },
  {
    id: 16,
    moviename: "Death Proof",
    movierating: 8.0,
    moviegenres: "Crime, Action",
  },
  {
    id: 17,
    moviename: "Blade Runner 2049",
    movierating: 8.0,
    moviegenres: "Aci-Fi, Action",
  },
  {
    id: 18,
    moviename: "As Good as it Gets",
    movierating: 8.0,
    moviegenres: "Romance, Comedy",
  },
  {
    id: 19,
    moviename: "500 Days of Summer",
    movierating: 8.0,
    moviegenres: "Romance, Comedy",
  },
  {
    id: 20,
    moviename: "The Nice Guys",
    movierating: 8.5,
    moviegenres: "Comedy, Action",
  },
];

export default function Recbyselect() {
  const [selectedMovies, SetSelectedMovies] = useState([]);

  const handleAddMovie = (movieID) => {
    SetSelectedMovies((prevState) => [...prevState, movieID]);
  };

  const handleRemoveMovie = (movieID) => {
    SetSelectedMovies((prevState) => prevState.filter((id) => id !== movieID));
  };
  const handleAPICall = () => {
    //only send movie IDs to the API and get the recommendations
    console.log(selectedMovies);

    //code to count the genres before making the API call *just in case*
    let allgenreArray = [];
    selectedMovies.forEach((movieID) => {
      let selectedMovie = MOVIE_DUMMY.filter(
        (movie) => movieID === movie.id
      )[0];
      let genres = selectedMovie.moviegenres.split(",");
      genres = genres.map((genre) => {
        return genre.trim();
      });
      allgenreArray.push(...genres);
    });
    // console.log(allgenreArray);
    let genreArray = allgenreArray.reduce((genre, count) => {
      genre[count] = genre[count] === undefined ? 1 : (genre[count] += 1);
      return genre;
    }, {});

    console.log(genreArray);
    let sortedGenres = Object.keys(genreArray).sort((a, b) => {
      return genreArray[b] - genreArray[a];
    });
    console.log(sortedGenres);
    // TODO: API call
  };

  return (
    <>
      <div className="recbyselect-container">
        <span className="title">Get Recommendations by selecting movies</span>
        <div className="recbyselect-movies">
          {MOVIE_DUMMY.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                addMovie={handleAddMovie}
                removeMovie={handleRemoveMovie}
              />
            );
          })}
        </div>
        <button className="recbyselect-get-rec" onClick={handleAPICall}>
          Get Recommendations
        </button>
      </div>
    </>
  );
}
