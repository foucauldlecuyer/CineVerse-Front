export const BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "");

export function buildUrl(path: string, params?: Record<string, string | number | boolean | undefined>) {
  const url = new URL(path, BASE_URL);
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
    });
  }
  return url.toString();
}

export function mediaUrl(rel?: string) {
  if (!rel) return "";
  return rel.startsWith("http") ? rel : `${BASE_URL}${rel}`;
}
