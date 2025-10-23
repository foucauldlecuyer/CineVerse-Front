import "./MovieList.css";
import MovieCard from "../movieCard/MovieCard";
import { fakeMovies } from "../../fakeMovies";

const MovieList = () => {
  return (
    <>
      <h1 className="movie-list-title">Films populaires</h1>
      <div className="movie-list">
        {fakeMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            genre={movie.genre}
            poster={movie.poster}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
