import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { forwardRef, useCallback } from "react";
import { TIngredient } from "../../utils/types";
import BurgerConstructorItemStyles from "./burger-constructor-item.module.css";

const BurgerConstructorItem = forwardRef<
  HTMLDivElement,
  IBurgerConstructorItemProps
>(({ ingredient, index, handleDelete }, ref) => {
  const handleClose = useCallback(
    () => handleDelete(index),
    [handleDelete, index]
  );
  return (
    <div
      className={`${BurgerConstructorItemStyles.constructor_item} mb-4 pl-8`}
      ref={ref}
    >
      <div className={BurgerConstructorItemStyles.ingredient_button}>
        <button className={BurgerConstructorItemStyles.drag_button}>
          <DragIcon type="primary" />
        </button>
      </div>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={handleClose}
      />
    </div>
  );
});

interface IBurgerConstructorItemProps {
  ingredient: TIngredient;
  index: number;
  handleDelete: (deleteIndex: number) => void;
}

export default BurgerConstructorItem;
