const API_URL = "https://norma.nomoreparties.space/api";
const checkResponse: <T = {}>(res: Response) => Promise<T> = (res) => {
  if (res && res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
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

export function auth() {}
