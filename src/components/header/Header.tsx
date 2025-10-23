import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { fakeMovies } from "../../fakeMovies";
import "./Header.css";

export default function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    { id: number; name: string; type: "movie" | "actor" }[]
  >([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length === 0) {
      setResults([]);
      return;
    }

    const lower = value.toLowerCase();

    const movieMatches = fakeMovies
      .filter((m) => m.title.toLowerCase().includes(lower))
      .map((m) => ({
        id: m.id,
        name: m.title,
        type: "movie" as const,
      }));

    const actorMatches = fakeMovies.flatMap((m) =>
      m.actors
        .filter((a) => a.name.toLowerCase().includes(lower))
        .map((a) => ({
          id: a.id,
          name: a.name,
          type: "actor" as const,
        }))
    );

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
                      : `/actor/${item.id}`
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