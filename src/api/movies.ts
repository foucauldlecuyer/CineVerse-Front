import { buildUrl } from "./strapi";

export async function getMovies() {
  const url = buildUrl("/api/movies");
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  const data = await res.json();
  return data;
}

export async function getMovieById(documentId : string) {
  const url = buildUrl(`/api/movies/${documentId}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  const data = await res.json();
  return data;
}