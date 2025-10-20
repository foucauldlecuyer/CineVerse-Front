import { useParams } from "react-router-dom";
import { fakeMovies } from "../fakeMovies";
import ActorHighlight from "../components/actorHighlight/ActorHighlight";
import ActorDetails from "../components/actorDetails/ActorDetails";
import { Link } from "react-router-dom";

export default function ActorPage() {
  const { id } = useParams<{ id: string }>();

  let actor: { id: number; name: string; photo: string } | undefined;
  const knownFor: { title: string; id: number }[] = [];

  fakeMovies.forEach((movie) => {
    movie.actors.forEach((a) => {
      if (a.id === parseInt(id!)) {
        actor = a;
        knownFor.push({ title: movie.title, id: movie.id });
      }
    });
  });

  if (!actor) return <p>Acteur introuvable.</p>;

  return (
    <section className="actor-page">
      <ActorHighlight name={actor.name} photo={actor.photo} />
      <ActorDetails knownFor={knownFor} />
      <Link to="/" className="back-button">
        ← Retour à la liste des films
      </Link>
    </section>
  );
}
