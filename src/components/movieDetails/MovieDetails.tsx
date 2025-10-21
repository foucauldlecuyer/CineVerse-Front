import "./MovieDetails.css";
import { Link } from "react-router-dom";

type MovieDetailsProps = {
  year: number;
  genre: string;
  description: string;
  actors: { id: number; name: string; photo?: string }[];
};

const MovieDetails = ({
  year,
  genre,
  description,
  actors,
}: MovieDetailsProps) => {
  return (
    <div className="movie-details">
      <p>
        <strong>Année :</strong> {year}
      </p>
      <p>
        <strong>Genre :</strong> {genre}
      </p>
      <p className="movie-details-description">{description}</p>
      <h3>Acteurs :</h3>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id} className="actor-item">
            <Link to={`/actor/${actor.id}`} className="actor-link">
              {actor.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
