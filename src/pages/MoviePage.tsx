import { Link, useParams } from "react-router-dom";

export default function MoviePage() {
  const { id } = useParams<{ id: string }>();

  // Ici tu iras chercher les données du film via API avec `id`.
  // Pour l’instant on simule :
  const movie = { id, title: "Titre du film", year: 2010, actorId: "101", actorName: "Acteur Principal" };

  return (
    <section>
      <h1>Détail Film</h1>
      <p><strong>ID :</strong> {id}</p>
      <p><strong>Titre :</strong> {movie.title}</p>
      <p><strong>Année :</strong> {movie.year}</p>
      <p>
        <strong>Acteur principal :</strong>{" "}
        <Link to={`/actor/${movie.actorId}`}>{movie.actorName}</Link>
      </p>

      <p style={{ marginTop: 24 }}>
        <Link to="/home">← Retour à l’accueil</Link>
      </p>
    </section>
  );
}
