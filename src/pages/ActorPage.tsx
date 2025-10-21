import "./Pages.css";
import { useParams, Link } from "react-router-dom";
import { fakeMovies } from "../fakeMovies";
import ActorHighlight from "../components/actorHighlight/ActorHighlight";
import ActorDetails from "../components/actorDetails/ActorDetails";

export default function ActorPage() {
  const { id } = useParams<{ id: string }>();
  const actorId = parseInt(id!);

  let actor: { id: number; name: string; photo: string } | undefined;

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
      description: movie.description,
    }));

  if (!actor) return <p>Acteur introuvable.</p>;

  return (
    <section className="actor-page-container">
      <ActorHighlight name={actor.name} photo={actor.photo} />
      <ActorDetails knownFor={knownFor} />
      <Link to="/" className="back-button">
        ← Retour à la liste des films
      </Link>
    </section>
  );
}
