import { buildUrl } from "./strapi";

export type StrapiMovie = {
  id: number;
  attributes: {
    title: string;
    overview?: string;
    release_date?: string;  // ISO date
    director?: string;
    actors?: {               // relation manyToMany
      data: Array<{ id: number; attributes: { name: string } }>;
    };
    // PAS de poster ici
  };
};

type StrapiListResponse<T> = {
  data: T[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
};

export async function getMovies(page = 1, pageSize = 12): Promise<StrapiListResponse<StrapiMovie>> {
  const url = buildUrl("/api/movies", {
    populate: "actors",
    "pagination[page]": page,
    "pagination[pageSize]": pageSize,
    "sort": "title:asc",
  });
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GET ${url} -> ${res.status} ${text}`);
  }
  return res.json();
}
