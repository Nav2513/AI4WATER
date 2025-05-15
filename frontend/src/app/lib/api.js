const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function registerUser(userData) {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return res.json();
}

export async function loginUser(credentials) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return res.json();
}

export async function getUserRoute(token, role) {
  const res = await fetch(`${BASE_URL}/users/${role}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}
