import { useEffect, useState } from "react";

const API_URL = "https://norma.nomoreparties.space/api";
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export function useIngredients() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/ingredients`)
      .then((res) => checkResponse(res))
      .then((json) => json.data)
      .then(setIngredients)
      .catch((err) => console.log(err));
  }, []);
  return { ingredients };
}

export function sendOrder(ingredientIds) {
  return fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: ingredientIds,
    }),
  })
    .then((res) => checkResponse(res))
    .then((json) => json)
    .catch((err) => console.log(err));
}
