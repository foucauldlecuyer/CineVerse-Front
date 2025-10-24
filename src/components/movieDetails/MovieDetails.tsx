import "./MovieDetails.css";
import { Link } from "react-router-dom";
import type { MovieProps } from "../../pages/MoviePage";

const MovieDetails = ({ movie }: MovieProps) => {
  const title = movie.title;
  const description = movie.overview;
  const year = movie.release_date;
  const genre = "À importer"; // placeholder
  const director = movie.director;

  // ✅ Conversion propre des acteurs Strapi → Front
  const actors =
    movie.actors?.data?.map((a: any) => ({
      id: a.id,
      name: `${a.attributes.first_name ?? ""} ${
        a.attributes.last_name ?? ""
      }`.trim(),
      photo: a.attributes.profile_path
        ? `https://image.tmdb.org/t/p/w200${a.attributes.profile_path}`
        : undefined,
    })) ?? [];

  return (
    <div className="movies-container">

    <div className="movie-details">
      <p>
        <strong>Titre :</strong> {title}
        <br />
        <br />
        <strong>Réalisateur :</strong> {director || "Inconnu"}
        <br />
        <br />
        <strong>Date de sortie :</strong> {year}
        <br />
        <br />
        <strong>Genre :</strong> {genre}
      </p>

      <p className="movie-details-description">{description}</p>

      <p>
        <strong>Acteurs :</strong>
      </p>
      <ul>
        {actors.length > 0 ? (
          actors.map((actor) => (
            <li key={actor.id} className="actor-item">
              <Link to={`/actor/${actor.id}`} className="actor-link">
                {actor.name}
              </Link>
            </li>
          ))
        ) : (
          <li>Aucun acteur renseigné</li>
        )}
      </ul>
    </div>
        </div>
  );
};

export default MovieDetails;
