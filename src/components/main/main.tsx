import { useCallback, useEffect } from "react";
import mainSectionStyles from "./main.module.css";
import { OrderDetails } from "../order-details/order-details";
import { Modal } from "../modal/modal";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructorDroppable from "../burger-constructor-droppable/burger-constructor-droppable";
import {
  DELETE_ORDER_DATA,
  getIngredientsApi,
  getOrderNumber,
  SELECT_INGREDIENT,
} from "../../services/actions";
import { TIngredient, useAppDispatch, useAppSelector } from "../../utils/types";

function Main() {
  const dispatch = useAppDispatch();

  const { order } = useAppSelector(
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

  useEffect(() => {
    dispatch(getIngredientsApi());
  }, [dispatch]);

  const handleOrderDetailsOpen = useCallback(
    (ingredients) => {
      dispatch(
        getOrderNumber(
          ingredients.map((ingredient: TIngredient) => ingredient._id)
        )
      );
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
      />
      <BurgerConstructorDroppable onSubmit={handleOrderDetailsOpen} />

      <Modal isVisible={!!order} onClose={handleOrderDetailsClose}>
        {order ? <OrderDetails order={order} /> : null}
      </Modal>
    </main>
  );
}

export default Main;
