import "./movieHighlight.css";
import type { MovieProps } from "../../pages/MoviePage";

const MovieHighlight = ({movie}: MovieProps) => {
  const title = movie.title;
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";
  return (
    <div className="movie-highlight">
      <h2 className="movie-highlight-title">{title}</h2>
      <img src={posterUrl} alt={title} className="movie-highlight-img" />
    </div>
  );
};

export default MovieHighlight;
