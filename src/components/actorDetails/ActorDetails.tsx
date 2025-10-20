import { Link } from "react-router-dom";
import "./ActorDetails.css";

type ActorDetailsProps = {
  knownFor: { title: string; id: number }[];
};

const ActorDetails = ({ knownFor }: ActorDetailsProps) => {
  return (
    <div className="actor-details">
      <h3>Connu pour :</h3>
      <ul>
        {knownFor.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} className="actor-movie-link">
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActorDetails;
