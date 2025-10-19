import "./MovieCard.css";

type MovieType = {
  title: string;
  year: number | string;
  genre: string;
  poster: string;
};

const MovieCard = ({ title, poster }: MovieType) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-card-img" />
      <h2 className="movie-card-title">{title}</h2>
    </div>
  );
};

export default MovieCard;
