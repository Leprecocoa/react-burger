import { useMemo } from "react";
import { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { DELETE_SELECTED_INGREDIENT_DATA } from "../../services/actions/ingredients-actions";
import { useAppDispatch, useAppSelector } from "../../utils/types";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { Modal } from "../modal/modal";

export function IngredientDetailsModal() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { selectedIngredient, ingredients } = useAppSelector(
    ({ ingredients: { ingredients, selectedIngredient } }) => {
      return {
        ingredients,
        selectedIngredient,
      };
    }
  );
  const ingredient = useMemo(() => {
    if (selectedIngredient) {
      return selectedIngredient;
    }
    return ingredients.find((ingredient) => ingredient._id === id);
  }, [id, selectedIngredient, ingredients]);
  const handleIngredientDetailsClose = useCallback(() => {
    dispatch({
      type: DELETE_SELECTED_INGREDIENT_DATA,
    });
    history.goBack();
  }, [dispatch, history]);
  return (
    <Modal
      isVisible={!!ingredient}
      onClose={handleIngredientDetailsClose}
      title="Детали ингредиента"
    >
      {ingredient && <IngredientDetails ingredient={ingredient} />}
    </Modal>
  );
}
