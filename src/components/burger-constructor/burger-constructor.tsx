import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useMemo, forwardRef } from "react";
import burgerConstructorStyles from "./burger-constructor.module.css";
import { TIngredient, useAppDispatch, useAppSelector } from "../../utils/types";
import { DELETE_IGREDIENT } from "../../services/actions";
import BurgerConstructorItemDraggableDroppable from "../burger-constructor-item-draggable-droppable/burger-constructor-item-draggable-droppable";

const BurgerConstructor = forwardRef<HTMLDivElement, IBurgerConstructorProps>(
  ({ onSubmit, ingredients }, ref) => {
    const dispatch = useAppDispatch();

    const selectedIngredients = useAppSelector(
      (state) => state.burgerConstructor.selectedIngredients
    );

    const selectedBun = useAppSelector(
      (state) => state.burgerConstructor.selectedBun
    );

    const orderSum = useMemo(
      () =>
        selectedIngredients.reduce(
          (sum, ingredient) => sum + ingredient.price,
          selectedBun ? selectedBun.price : 0
        ),
      [selectedIngredients, selectedBun]
    );

    const handleSubmit = useCallback(() => {
      if (!selectedBun) {
        return;
      }
      onSubmit(selectedIngredients.concat(selectedBun));
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
          {selectedBun && (
            <div className="pl-9 pr-4">
              <ConstructorElement
                type="top"
                isLocked
                text={`${selectedBun.name} (верх)`}
                price={selectedBun.price}
                thumbnail={selectedBun.image}
              />
            </div>
          )}
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
            <span className="text text_type_digits-medium mr-2">
              {orderSum}
            </span>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={handleSubmit}>
            Оформить заказ
          </Button>
        </div>
      </section>
    );
  }
);

interface IBurgerConstructorProps {
  onSubmit: (ingredients: Array<TIngredient>) => void;
  ingredients: Array<TIngredient>;
}

export default BurgerConstructor;
