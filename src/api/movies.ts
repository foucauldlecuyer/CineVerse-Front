import { buildUrl } from "./strapi";

export async function getMovies() {
  const url = buildUrl("/api/movies");
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  const data = await res.json();
  return data;
}

export async function getMovieById(documentId: string) {
  const url = buildUrl(`/api/movies/${documentId}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  const data = await res.json();
  return data;
}

// ✅ Recherche de films
export async function searchMovies(query: string) {
  const url = buildUrl("/api/movies", {
    "filters[title][$containsi]": query,
    "pagination[pageSize]": 10,
    populate: "*",
  });

  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.json();
}