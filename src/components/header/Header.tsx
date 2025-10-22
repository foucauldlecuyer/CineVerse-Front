import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { fakeMovies } from "../../fakeMovies";
import { getActors } from "../../api/actors"; // import Strapi
import "./Header.css";
import type { StrapiActor } from "../../api/actors";

export default function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    { id: string; name: string; type: "movie" | "actor" }[]
  >([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length === 0) {
      setResults([]);
      return;
    }

    const lower = value.toLowerCase();

    // Rechercher dans les films (inchangé)
    const movieMatches = fakeMovies
      .filter((m) => m.title.toLowerCase().includes(lower))
      .map((m) => ({
        id: m.id.toString(),
        name: m.title,
        type: "movie" as const,
      }));

    // Rechercher dans les acteurs via Strapi
    let actorMatches: { id: string; name: string; type: "actor" }[] = [];
    try {
      const res = await getActors(1, 25, value); // filtre par prénom ou nom
      actorMatches = res.data.map((a: StrapiActor) => ({
        id: a.id_actor || a.id.toString(), // on utilise id_actor si dispo
        name: `${a.first_name ?? ""} ${a.last_name ?? ""}`,
        type: "actor" as const,
      }));
    } catch (err) {
      console.error("Erreur recherche acteurs :", err);
    }

    setResults([...movieMatches, ...actorMatches]);
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="Logo" />
      </Link>

      <div className="header-search-container">
        <input
          className="header-searchbar"
          type="search"
          placeholder="Rechercher un film ou acteur..."
          value={query}
          onChange={handleSearch}
        />

        {results.length > 0 && (
          <ul className="search-results">
            {results.map((item) => (
              <li key={`${item.type}-${item.id}`}>
                <Link
                  to={
                    item.type === "movie"
                      ? `/movie/${item.id}`
                      : `/actor/${item.id}` // id_actor ici
                  }
                  className="search-result-item"
                  onClick={() => {
                    setQuery("");
                    setResults([]);
                  }}
                >
                  {item.name}{" "}
                  <span className="result-type">
                    {item.type === "movie" ? "🎬 Film" : "⭐ Acteur"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
