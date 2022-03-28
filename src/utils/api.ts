const API_URL = "https://norma.nomoreparties.space/api";
const checkResponse: <T = {}>(res: Response) => Promise<T> = (res) => {
  if (res && res.ok) {
    return res.json();
  }
  return res
    .json()
    .then((data) => Promise.reject({ message: `Ошибка ${res.status}`, data }));
};

export function getIngredients() {
  return fetch(`${API_URL}/ingredients`).then((res) =>
    checkResponse<{ success: boolean; data: [] }>(res)
  );
}

export function sendOrder(ingredientIds: number[]) {
  return fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: ingredientIds,
    }),
  }).then((res) => checkResponse<{ order: {}; success: boolean }>(res));
}

export function register({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) {
  return fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => checkResponse<{ accessToken: string }>(res));
}

export function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
}

export function logout(refreshToken: string) {
  return fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: refreshToken }),
  }).then((res) => checkResponse(res));
}

export function refreshToken(refreshToken: string) {
  return fetch(`${API_URL}/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: refreshToken }),
  }).then((res) => checkResponse(res));
}

export function getUserInfoApi(authToken: string) {
  return fetch(`${API_URL}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  }).then((res) => checkResponse(res));
}

export function setUserInfoApi(authToken: any, { name, email, password }: any) {
  return fetch(`${API_URL}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkResponse(res));
}

export function forgotPasswordApi(email: string) {
  return fetch(`${API_URL}/password-reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  }).then((res) => checkResponse(res));
}

export function resetPasswordApi(password: string, resetToken: string) {
  return fetch(`${API_URL}/password-reset/reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password, token: resetToken }),
  }).then((res) => checkResponse(res));
}
