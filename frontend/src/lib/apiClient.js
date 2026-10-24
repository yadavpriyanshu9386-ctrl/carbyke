// Small fetch wrapper for the backend API.
// Not used yet: pages use mock data from src/data until the backend is ready (step A11).
const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000/api/v1";

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers ?? {}) },
  });
  if (!res.ok) throw new ApiError(`Request failed: ${res.status}`, res.status);
  return res.json();
}

export const apiGet = (path) => request(path);
export const apiPost = (path, body) => request(path, { method: "POST", body: JSON.stringify(body) });
