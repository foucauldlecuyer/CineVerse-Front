import MovieCard from "../../homePage/movieCard/MovieCard";
import "./ActorFilmography.css";

type Movie = {
  id: number;
  title: string;
  poster: string;
  year?: number;
};

type ActorFilmographyProps = {
  movies: Movie[];
};

const ActorFilmography = ({ movies }: ActorFilmographyProps) => {
  if (movies.length === 0)
    return (
      <p className="actor-filmography-empty">
        Aucun film trouvé pour cet acteur.
      </p>
    );

  return (
    <div className="actor-filmography">
      <h3 className="actor-filmography-title">Filmographie :</h3>
      <div className="actor-filmography-grid">
        {movies.map((movie) => (
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

export default ActorFilmography;
