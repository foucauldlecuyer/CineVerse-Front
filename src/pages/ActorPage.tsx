import { Link, useParams } from "react-router-dom";

export default function ActorPage() {
  const { id } = useParams<{ id: string }>();

  // Simu de données acteur
  const actor = { id, name: "Nom de l’acteur", knownFor: ["Film A", "Film B"] };

  return (
    <section>
      <h1>Détail Acteur</h1>
      <p><strong>ID :</strong> {id}</p>
      <p><strong>Nom :</strong> {actor.name}</p>
      <p><strong>Connu pour :</strong> {actor.knownFor.join(", ")}</p>

      <p style={{ marginTop: 24 }}>
        <Link to="/home">← Retour à l’accueil</Link>
      </p>
    </section>
  );
}
