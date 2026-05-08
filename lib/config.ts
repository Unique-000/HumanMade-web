const DEFAULT_API_BASE_URL = "http://localhost:6333";
const DEFAULT_IMAGE_HOST = "sixmvbhdxbrvfbivwojw.supabase.co";

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const API_BASE_URL =
  trimTrailingSlash(process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL);

export const IMAGE_HOST =
  process.env.NEXT_PUBLIC_IMAGE_HOST ?? DEFAULT_IMAGE_HOST;

export const apiUrl = (path: string) =>
  `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
