import "./Pages.css";
import { useParams, Link } from "react-router-dom";
import MovieHighlight from "../components/movieHighlight/movieHighlight"
import MovieDetails from "../components/movieDetails/MovieDetails";
import MovieSimilarList from "../components/movieSimilarList/MovieSimilarList";
import { getMovieById } from "../api/movies";
import { useEffect, useState } from "react";

export type MovieProps = {
  movie: {
    "id": number,
    "documentId": string,
    "title": string,
    "release_date": string,
    "director": null,
    "id_movie": string,
    "createdAt": string,
    "updatedAt": string,
    "publishedAt": string,
    "overview": string,
    "poster_path": string
  },
};

const MoviePage = () => {
  // récupérer le bon nom de paramètre — ici on suppose "documentId"
  const { documentId } = useParams<{ documentId?: string }>();
  console.log("MoviePage documentId param:", documentId);

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
        setMovie(res?.data);
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
      <MovieHighlight movie={movie} />
      <MovieDetails movie={movie} />
      <MovieSimilarList />
      <Link to="/" className="back-button">
        ← Retour
      </Link>
    </div>
  );
};

export default MoviePage;
