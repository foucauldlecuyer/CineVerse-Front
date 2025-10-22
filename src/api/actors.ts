
import { buildUrl } from "./strapi";

// Type pour un acteur depuis Strapi
export type StrapiActor = {
  id: number;
  first_name?: string;
  last_name?: string;
  id_actor?: string;
  documentId?: string;
  profile_path?: string | null;
  gender?: number;
  deathday?: string | null;
  place_of_birth?: string | null;
  biography?: string;
  birthday?: string | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

// Type pour la réponse liste
export type StrapiListResponse<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

// Récupérer tous les acteurs (avec pagination)
export async function getActors(page = 1, pageSize = 25, search?: string) {
  const params: Record<string, string | number> = {
    "pagination[page]": page,
    "pagination[pageSize]": pageSize,
  };

  if (search) {
    const words = search.trim().split(/\s+/); // sépare par espace
    words.forEach((word, i) => {
      params[`filters[$and][${i}][$or][0][first_name][$containsi]`] = word;
      params[`filters[$and][${i}][$or][1][last_name][$containsi]`] = word;
    });
  }

  const url = buildUrl("/api/actors", params);
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GET ${url} -> ${res.status} ${text}`);
  }
  return res.json() as Promise<StrapiListResponse<StrapiActor>>;
}

// Récupérer un acteur par ID
export async function getActorByTMDBId(tmdbId: string) {
  const url = buildUrl("/api/actors", {
    "filters[id_actor][$eq]": tmdbId,
  });
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GET ${url} -> ${res.status} ${text}`);
  }
  const json = await res.json() as { data: StrapiActor[] };
  if (json.data.length === 0) throw new Error("Actor not found");
  return json.data[0]; // renvoie le premier match
}

