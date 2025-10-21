import "./Pages.css";
import { useParams, Link } from "react-router-dom";
import MovieHighlight from "../components/movieHighlight/movieHighlight";
import MovieDetails from "../components/movieDetails/MovieDetails";
import MovieSimilarList from "../components/movieSimilarList/MovieSimilarList";
import { fakeMovies } from "../fakeMovies";

const MoviePage = () => {
  const { id } = useParams();
  const movie = fakeMovies.find((m) => m.id === parseInt(id || "0"));

  if (!movie) return <p>Film introuvable.</p>;

  return (
    <div className="movie-detail-container">
      <MovieHighlight title={movie.title} poster={movie.poster} />
      <MovieDetails
        year={movie.year}
        genre={movie.genre}
        description={movie.description}
        actors={movie.actors}
      />
      <MovieSimilarList
        currentMovieId={movie.id}
        genre={movie.genre}
        allMovies={fakeMovies}
      />
      <Link to="/" className="back-button">
        ← Retour
      </Link>
    </div>
  );
};

export default MoviePage;
