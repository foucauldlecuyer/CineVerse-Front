import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getActorByTMDBId } from "../api/actors";
import "./Pages.css";
import type { StrapiActor } from "../api/actors";
import ActorDetails from "../components/actorDetails/ActorDetails";

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
    <div className="actor-page-container">
      <h2 className="actor-details-name">
        {actor.first_name} {actor.last_name}
      </h2>

      <div className="actor-page-highlight-container">
        <img
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
              : ""
          }
          alt={`${actor.first_name} ${actor.last_name}`}
          className="actor-highlight-img"
        />
        <ActorDetails
          actor={{
            name: `${actor.first_name ?? ""} ${actor.last_name ?? ""}`,
            photo: actor.profile_path
              ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
              : "",
            bio: actor.biography || undefined,
            nationality: actor.place_of_birth || undefined,
            birthDate: actor.birthday || undefined,
            deathDate: actor.deathday || undefined,
          }}
        />
      </div>

      <Link to="/" className="back-button">
        ← Retour à l'accueil
      </Link>
    </div>
  );
}
