import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getIngredientsApi } from "../../services/actions";
import { useAppDispatch, useAppSelector } from "../../utils/types";
import { IngredientDetails } from "./ingredient-details";

export function IngredientDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredientsApi());
  }, [dispatch]);

  const { ingredients } = useAppSelector((state) => {
    return {
      ingredients: state.ingredients.ingredients,
    };
  });

  const ingredient = ingredients.find((ingredient) => {
    return ingredient._id === id;
  });

  return ingredient ? <IngredientDetails ingredient={ingredient} /> : null;
}
