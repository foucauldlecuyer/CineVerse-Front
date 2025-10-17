import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ActorPage from "./pages/ActorPage";
import Header from "./components/header/Header";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <NavLink to="/home">Accueil</NavLink>

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
    </>
  );
}
