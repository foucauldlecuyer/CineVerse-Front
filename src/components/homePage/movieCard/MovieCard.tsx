import "./MovieCard.css";
import { Link } from "react-router-dom";

type MovieCardProps = {
  movie: {
    id: number;
    documentId: number;
    title: string;
    poster_path?: string;
  };
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link to={`/movie/${movie.documentId}`} className="movie-card">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-card-img"
        />
      ) : (
        <div className="movie-card-placeholder">Pas d'affiche</div>
      )}
      <h2 className="movie-card-title">{movie.title}</h2>
    </Link>
  );
};

export default MovieCard;
