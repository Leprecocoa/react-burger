import { useCallback, useEffect } from "react";
import mainSectionStyles from "./main.module.css";
import { OrderDetails } from "../order-details/order-details";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { Modal } from "../modal/modal";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructorDroppable from "../burger-constructor-droppable/burger-constructor-droppable";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_ORDER_DATA,
  DELETE_SELECTED_INGREDIENT_DATA,
  getIngredientsApi,
  getOrderNumber,
  SELECT_INGREDIENT,
} from "../../services/actions";

function Main() {
  const dispatch = useDispatch();

  const { ingredients, selectedIngredient, order } = useSelector(
    ({
      ingredients: { ingredients, selectedIngredient },
      order: { order },
    }) => {
      return {
        ingredients,
        selectedIngredient,
        order,
      };
    }
  );

  const handleIngredientDetailsOpen = useCallback(
    (ingredient) => {
      dispatch({
        type: SELECT_INGREDIENT,
        payload: {
          ingredient: ingredient,
        },
      });
    },
    [dispatch]
  );

  const handleIngredientDetailsClose = useCallback(() => {
    dispatch({
      type: DELETE_SELECTED_INGREDIENT_DATA,
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIngredientsApi());
  }, [dispatch]);

  const handleOrderDetailsOpen = useCallback(
    (ingredients) => {
      dispatch(getOrderNumber(ingredients.map((ingredient) => ingredient._id)));
    },
    [dispatch]
  );

  const handleOrderDetailsClose = useCallback(() => {
    dispatch({
      type: DELETE_ORDER_DATA,
    });
  }, [dispatch]);

  return (
    <main className={`${mainSectionStyles.main} pb-10`}>
      <BurgerIngredients
        handleIngredientDetailsOpen={handleIngredientDetailsOpen}
        ingredients={ingredients}
      />
      <BurgerConstructorDroppable
        onSubmit={handleOrderDetailsOpen}
        ingredients={ingredients}
      />
      <Modal
        isVisible={!!selectedIngredient}
        onClose={handleIngredientDetailsClose}
        title="Детали ингредиента"
      >
        <IngredientDetails ingredient={selectedIngredient} />
      </Modal>
      <Modal isVisible={!!order} onClose={handleOrderDetailsClose}>
        <OrderDetails order={order} />
      </Modal>
    </main>
  );
}

export default Main;
