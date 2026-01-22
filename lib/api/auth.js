import { apiFetch } from "./client";

export function signupApi({ name, email, password }) {
  return apiFetch("/api/auth/signup", { method: "POST", body: { name, email, password } });
}

export function loginApi({ email, password }) {
  return apiFetch("/api/auth/login", { method: "POST", body: { email, password } });
}


