import "./movieHighlight.css";

const MovieHighlight = ({
  title,
  poster,
}: {
  title: string;
  poster: string;
}) => {
  return (
    <div className="movie-highlight">
      <h2 className="movie-highlight-title">{title}</h2>
      <img src={poster} alt={title} className="movie-highlight-img" />
    </div>
  );
};

export default MovieHighlight;
