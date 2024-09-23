import MovieCard from "./moviecard";
import "./reccbyselect.css";

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
    movierating: 9.0,
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
    movierating: 9.0,
    moviegenres: "Action, Comedy",
  },
  {
    id: 5,
    moviename: "Shaun of the Dead",
    movierating: 9.0,
    moviegenres: "Comedy, Romance, Action",
  },
  {
    id: 6,
    moviename: "Last Night in Soho",
    movierating: 9.0,
    moviegenres: "Horror, Thriller",
  },
  {
    id: 7,
    moviename: "Reservoir Dogs",
    movierating: 9.0,
    moviegenres: "Crime, Thriller",
  },
  {
    id: 8,
    moviename: "Dead Poets Society",
    movierating: 9.0,
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
    movierating: 9.0,
    moviegenres: "Comedy, Romance",
  },
];
export default function Reccbyselect() {
  return (
    <div className="reccbyselect-container">
      {MOVIE_DUMMY.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
