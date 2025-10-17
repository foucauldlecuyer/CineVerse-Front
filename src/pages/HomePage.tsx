import { Link } from "react-router-dom";

const fakeMovies = [
  { id: "1", title: "Inception", mainActorId: "101", mainActor: "Leonardo DiCaprio" },
  { id: "2", title: "Interstellar", mainActorId: "102", mainActor: "Matthew McConaughey" },
];

export default function HomePage() {
  return (
    <section>
      <h1>Accueil</h1>
      <p>Bienvenue ! Choisis un film :</p>

      <ul>
        {fakeMovies.map(m => (
          <li key={m.id}>
            <Link to={`/movie/${m.id}`}>{m.title}</Link>
            {" — "}
            <small>
              avec{" "}
              <Link to={`/actor/${m.mainActorId}`}>{m.mainActor}</Link>
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
