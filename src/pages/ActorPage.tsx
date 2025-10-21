import "./Pages.css";
import { useParams, Link } from "react-router-dom";
import { fakeMovies } from "../fakeMovies";
import ActorHighlight from "../components/actorHighlight/ActorHighlight";
import ActorDetails from "../components/actorDetails/ActorDetails";
import ActorFilmography from "../components/actorFilmography/ActorFilmography";

export default function ActorPage() {
  const { id } = useParams<{ id: string }>();
  const actorId = parseInt(id!);

  let actor:
    | {
        id: number;
        name: string;
        photo: string;
        bio?: string;
        nationality?: string;
        birthYear?: number;
      }
    | undefined;

  const knownFor = fakeMovies
    .filter((movie) =>
      movie.actors.some((a) => {
        if (a.id === actorId) {
          actor = a;
          return true;
        }
        return false;
      })
    )
    .map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster,
      year: movie.year,
    }));

  if (!actor) return <p>Acteur introuvable.</p>;

  return (
    <section className="actor-page-container">
      <h2 className="actor-details-name">{actor.name}</h2>
      <div className="actor-page-highlight-container">
        <ActorHighlight photo={actor.photo} />
        <ActorDetails actor={actor} />
      </div>
      <ActorFilmography movies={knownFor} />

      <Link to="/" className="back-button">
        ← Retour à la liste des films
      </Link>
    </section>
  );
}
