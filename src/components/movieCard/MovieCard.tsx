import "./MovieCard.css";
import { Link } from "react-router-dom";

type MovieType = {
  id?: number;
  title: string;
  year?: number | string;
  genre?: string;
  poster: string;
};

const MovieCard = ({ id, title, poster }: MovieType) => {
  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <img src={poster} alt={title} className="movie-card-img" />
      <h2 className="movie-card-title">{title}</h2>
    </Link>
  );
};

export default MovieCard;
