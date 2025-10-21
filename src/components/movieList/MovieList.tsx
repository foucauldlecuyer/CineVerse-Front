// MovieList.tsx
import "./MovieList.css";
import MovieCard from "../movieCard/MovieCard";
import { useEffect, useState } from "react";
import { getMovies } from "../../api/movies";
import type { StrapiMovie } from "../../api/movies";

const MovieList = () => {
  const [movies, setMovies] = useState<StrapiMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getMovies(1, 12);
        const safe = (res.data ?? []).filter(
          (m): m is StrapiMovie => !!m && !!(m as any).attributes
        );
        setMovies(safe);
        console.log("movies from API:", res.data);
      } catch (e: unknown) {
        setErr(e instanceof Error ? e.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Chargement…</p>;
  if (err) return <p style={{ color: "crimson" }}>Erreur : {err}</p>;

  if (!movies.length) return <p>Aucun film publié pour le moment.</p>;

  return (
    <>
      <h1 className="movie-list-title">Films populaires</h1>
      <div className="movie-list">
        {movies.map((movie) => {
          // garde-fou par item (ne rend rien si l’item est étrange)
          if (!movie?.attributes) {
            console.warn("Movie sans attributes:", movie);
            return null;
          }
          const a = movie.attributes;

          const year = a.release_date
            ? new Date(a.release_date).getFullYear()
            : undefined;

          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={a.title}
              year={year}
              // adapte si MovieCard a besoin d’autres props
            />
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
