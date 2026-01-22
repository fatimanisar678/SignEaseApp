const DEFAULT_BASE_URL = "http://localhost:4000";

export function getBaseUrl() {
  // TODO: Replace with your LAN IP for real device testing (e.g. http://192.168.x.x:4000)
  return DEFAULT_BASE_URL;
}

export async function apiFetch(path, { method = "GET", body, token, headers } = {}) {
  const res = await fetch(`${getBaseUrl()}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : null),
      ...(headers ?? null),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  const data = text ? safeJson(text) : null;
  if (!res.ok) {
    const msg = data?.message || `Request failed (${res.status})`;
    const err = new Error(msg);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

function safeJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
}


