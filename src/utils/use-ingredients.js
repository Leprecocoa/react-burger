import { useEffect, useState } from "react";

const API_URL = "https://norma.nomoreparties.space/api/ingredients";

export function useIngredients() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject();
      })
      .then(json => json.data)
      .then(setIngredients)
      .catch((err) => console.log(err));
  }, []);
  return { ingredients };
}
