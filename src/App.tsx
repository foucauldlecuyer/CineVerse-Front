import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ActorPage from "./pages/ActorPage";

export default function App() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: 16 }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <NavLink to="/home">Accueil</NavLink>
      </nav>

      <Routes>
        {/* rediriger la racine vers /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/actor/:id" element={<ActorPage />} />

        {/* 404 */}
        <Route path="*" element={<div>Page introuvable</div>} />
      </Routes>
    </div>
  );
}
