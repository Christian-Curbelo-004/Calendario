const API_URL = "http://localhost:3000";

async function fetchJSON(path, options) {
  const finalPath = `${API_URL}${path}`;
  const resource = new URL(finalPath, window.location);
  const response = await window.fetch(resource, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
}

export async function get(path) {
  const res = await fetchJSON(path);

  return res;
}

export async function post(path, body) {
  const res = await fetchJSON(path, {
    method: "POST",
    body: JSON.stringify(body),
  });

  return res;
}
