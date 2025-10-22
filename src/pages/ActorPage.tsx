import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getActorByTMDBId } from "../api/actors";
import "./Pages.css";
import type { StrapiActor } from "../api/actors";

export default function ActorPage() {
  const { id } = useParams<{ id: string }>();
  const [actor, setActor] = useState<StrapiActor | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const actor = await getActorByTMDBId(id);
        setActor(actor);
      } catch (e: unknown) {
        setErr(e instanceof Error ? e.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p>Chargement de l’acteur…</p>;
  if (err) return <p style={{ color: "crimson" }}>Erreur : {err}</p>;
  if (!actor) return <p>Acteur introuvable.</p>;

  return (
    <section className="actor-page-container">
      <h1>
        {actor.first_name} {actor.last_name}
      </h1>
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : "/placeholder.jpg"
        }
        alt={`${actor.first_name} ${actor.last_name}`}
      />
      <p>
        <strong>Birthday:</strong> {actor.birthday || "Unknown"}
      </p>
      <p>
        <strong>Place of birth:</strong> {actor.place_of_birth || "Unknown"}
      </p>
      <p>{actor.biography || "No biography available."}</p>

      <Link to="/" className="back-button">
        ← Retour à l'accueil
      </Link>
    </section>
  );
}
