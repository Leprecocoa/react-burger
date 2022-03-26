import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { DELETE_SELECTED_INGREDIENT_DATA } from "../../services/actions";
import { useAppDispatch, useAppSelector } from "../../utils/types";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { Modal } from "../modal/modal";

export function IngredientDetailsModal() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { selectedIngredient } = useAppSelector(
    ({ ingredients: { ingredients, selectedIngredient } }) => {
      return {
        ingredients,
        selectedIngredient,
      };
    }
  );
  const handleIngredientDetailsClose = useCallback(() => {
    dispatch({
      type: DELETE_SELECTED_INGREDIENT_DATA,
    });
    history.goBack();
  }, [dispatch, history]);
  return (
    <Modal
      isVisible={!!selectedIngredient}
      onClose={handleIngredientDetailsClose}
      title="Детали ингредиента"
    >
      {selectedIngredient && (
        <IngredientDetails ingredient={selectedIngredient} />
      )}
    </Modal>
  );
}
