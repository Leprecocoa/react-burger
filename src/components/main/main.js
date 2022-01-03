import { useCallback, useState } from "react";
import mainSectionStyles from "./main.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { OrderDetails } from "../order-details/order-details";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { Modal } from "../modal/modal";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
// import { BurgerContext } from "../../utils/burger-context";

Main.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

function Main({ ingredients }) {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const handleIngredientDetailsOpen = useCallback((ingredient) => {
    setSelectedIngredient(ingredient);
  }, []);
  const handleIngredientDetailsClose = useCallback(() => {
    setSelectedIngredient(null);
  }, []);
  const [order, setOrder] = useState(null);
  const handleOrderDetailsOpen = useCallback(() => {
    setOrder({});
  }, []);
  const handleOrderDetailsClose = useCallback(() => {
    setOrder(null);
  }, []);

  return (
    <main className={`${mainSectionStyles.main} pb-10`}>
      <BurgerIngredients
        ingredients={ingredients}
        handleIngredientDetailsOpen={handleIngredientDetailsOpen}
      />
      <BurgerConstructor
        ingredients={ingredients}
        handleOrderDetailsOpen={handleOrderDetailsOpen}
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
