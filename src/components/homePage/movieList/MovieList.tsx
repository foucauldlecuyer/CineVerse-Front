import "./MovieList.css";
import MovieCard from "../movieCard/MovieCard";
import { useEffect, useState } from "react";
import { getMovies } from "../../../api/movies";

const MovieList = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getMovies();
        console.log("movies from API:", res);
        setMovies(res.data);
      } catch (error: unknown) {
        setErr(error instanceof Error ? error.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Chargement…</p>;
  if (err) return <p style={{ color: "crimson" }}>Erreur : {err}</p>;

  console.log("Movies length:", movies.length);
  if (!movies.length) return <p>Aucun film publié pour le moment.</p>;

  return (
    <>
      <h1 className="movie-list-title">Films populaires</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie} 
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
