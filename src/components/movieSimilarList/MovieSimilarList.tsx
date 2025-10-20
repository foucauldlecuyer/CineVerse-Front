import MovieCard from "../movieCard/MovieCard";
import "./MovieSimilarList.css";

type Movie = {
  id: number;
  title: string;
  poster: string;
  genre: string;
  year?: number;
  description?: string;
};

type MovieSimilarListProps = {
  currentMovieId: number;
  genre: string;
  allMovies: Movie[];
};

const MovieSimilarList = ({
  currentMovieId,
  genre,
  allMovies,
}: MovieSimilarListProps) => {
  const similarMovies = allMovies.filter(
    (movie) => movie.genre === genre && movie.id !== currentMovieId
  );

  if (similarMovies.length === 0) return null;

  return (
    <div className="movie-similar-list">
      <h3>Films similaires</h3>
      <div className="similar-movies-grid">
        {similarMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSimilarList;
