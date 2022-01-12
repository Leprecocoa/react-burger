import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useMemo, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import burgerConstructorStyles from "./burger-constructor.module.css";
import { ingredientType } from "../../utils/types";
import { DELETE_IGREDIENT } from "../../services/actions";
import BurgerConstructorItemDraggableDroppable from "../burger-constructor-item-draggable-droppable/burger-constructor-item-draggable-droppable";

const BurgerConstructor = forwardRef(({ onSubmit, ingredients }, ref) => {
  const dispatch = useDispatch();

  const selectedIngredients = useSelector((store) =>
    store.reducer.selectedIngredients.map((selectedIngredientId) =>
      store.reducer.ingredients.find(
        (ingredient) => ingredient._id === selectedIngredientId
      )
    )
  );

  const selectedBun = useSelector(({ reducer: { ingredients, selectedBun } }) =>
    ingredients.find((ingredient) => ingredient._id === selectedBun)
  );

  const orderSum = useMemo(() => {
    const bunPrice = selectedBun ? selectedBun.price : 0;
    return (
      selectedIngredients.reduce(
        (sum, ingredient) => sum + ingredient.price,
        0
      ) + bunPrice
    );
  }, [selectedIngredients, selectedBun]);

  const handleSubmit = useCallback(() => {
    if (!selectedBun) {
      return;
    }
    onSubmit(
      selectedIngredients
        .map((ingredient) => ingredient._id)
        .concat(selectedBun._id)
    );
  }, [onSubmit, selectedIngredients, selectedBun]);

  const handleDelete = useCallback(
    (deleteIndex) => {
      dispatch({ type: DELETE_IGREDIENT, payload: { deleteIndex } });
    },
    [dispatch]
  );

  if (ingredients.length === 0) {
    return null;
  }

  return (
    <section
      className={`${burgerConstructorStyles.constructor_section} pt-25`}
      ref={ref}
    >
      <div className={burgerConstructorStyles.constructor_list}>
        {selectedBun ? (
          <div className="pl-9 pr-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${selectedBun.name} (верх)`}
              price={selectedBun.price}
              thumbnail={selectedBun.image}
            />
          </div>
        ) : null}
        <div
          className={`${burgerConstructorStyles.constructor_items} ${burgerConstructorStyles.scrollbar}  mt-4 mb-4 pl-4 pr-4`}
        >
          {selectedIngredients.map((ingredient, index) => {
            return (
              <BurgerConstructorItemDraggableDroppable
                ingredient={ingredient}
                index={index}
                handleDelete={handleDelete}
                key={`${ingredient._id}${index}`}
              />
            );
          })}
        </div>
        {selectedBun ? (
          <div className="pl-9 pr-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${selectedBun.name} (низ)`}
              price={selectedBun.price}
              thumbnail={selectedBun.image}
            />
          </div>
        ) : null}
      </div>
      <div className={`${burgerConstructorStyles.order} pt-10`}>
        <div className={`${burgerConstructorStyles.order_price} mr-10`}>
          <span className="text text_type_digits-medium mr-2">{orderSum}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleSubmit}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
});

BurgerConstructor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(ingredientType),
};

export default BurgerConstructor;
