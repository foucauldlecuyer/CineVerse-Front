import MovieList from "../components/movieList/MovieList";
import "./Pages.css";

export default function HomePage() {
  return (
    <section className="movielist-container">
      <MovieList />
    </section>
  );
}
