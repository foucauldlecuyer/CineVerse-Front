import "./Pages.css";
import { useParams, Link } from "react-router-dom";
import MovieHighlight from "../components/movieHighlight/movieHighlight";
import MovieDetails from "../components/movieDetails/MovieDetails";
import MovieSimilarList from "../components/movieSimilarList/MovieSimilarList";
import { getMovieById } from "../api/movies";
import { useEffect, useState } from "react";

export type MovieProps = {
  movie: {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    director?: string | null;
    actors?: any;
  };
};

const MoviePage = () => {
  const { documentId } = useParams<{ documentId?: string }>();
  const [movie, setMovie] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!documentId) {
      setErr("ID manquant");
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const res = await getMovieById(documentId);
        setMovie(res?.data?.attributes ?? res?.data); // ✅ Strapi consistency fix
      } catch (e: unknown) {
        setErr(e instanceof Error ? e.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    })();
  }, [documentId]);

  if (loading) return <p>Chargement…</p>;
  if (err) return <p style={{ color: "crimson" }}>Erreur : {err}</p>;
  if (!movie) return <p>Film introuvable.</p>;

  return (
    <div className="movie-detail-container">
      <div className="movie-container">
        <MovieHighlight movie={movie} />
        <MovieDetails movie={movie} />
      </div>
      <MovieSimilarList />
      <Link to="/" className="back-button">
        ← Retour
      </Link>
    </div>
  );
};

export default MoviePage;
