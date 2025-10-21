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
      <img src={poster} alt={title} className="movie-highlight-img" />
    </div>
  );
};

export default MovieHighlight;
