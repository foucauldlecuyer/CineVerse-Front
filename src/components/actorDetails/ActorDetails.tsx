import MovieCard from "../movieCard/MovieCard";
import "./ActorDetails.css";

type Movie = {
  id: number;
  title: string;
  poster: string;
  year?: number;
  description?: string;
};

type ActorDetailsProps = {
  knownFor: Movie[];
};

const ActorDetails = ({ knownFor }: ActorDetailsProps) => {
  if (knownFor.length === 0) return <p>Aucun film trouvé pour cet acteur.</p>;

  return (
    <div className="actor-details">
      <h3>Filmographie :</h3>
      <div className="actor-movies-grid">
        {knownFor.map((movie) => (
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

export default ActorDetails;
