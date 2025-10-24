import MovieCard from "../homePage/movieCard/MovieCard";
import "./MovieSimilarList.css";

type Movie = {
  id: number;
  title: string;
  poster: string;
  genre: string;
  year?: number;
  description?: string;
};


const MovieSimilarList = ({movie}: MovieProps) => {
  const description = movie.overview
  const similarMovies = allMovies.filter

  if (similarMovies.length === 0) return null;

  return (
    <div className="movie-similarlist">
      <h3 className="movie-similarlist-title">Films similaires</h3>
      <div className="similar-movies-grid">
        {similarMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.documentId}
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
