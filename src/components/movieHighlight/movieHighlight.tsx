import "./movieHighlight.css";

const MovieHighlight = ({ poster }: { poster: string }) => {
  return (
    <div className="movie-highlight">
      <img src={poster} alt="" className="movie-highlight-img" />
    </div>
  );
};

export default MovieHighlight;
