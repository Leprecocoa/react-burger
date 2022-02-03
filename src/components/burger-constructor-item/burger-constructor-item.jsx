import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { forwardRef, useCallback } from "react";
import { ingredientType } from "../../utils/types";
import BurgerConstructorItemStyles from "./burger-constructor-item.module.css";
import PropTypes from "prop-types";

const BurgerConstructorItem = forwardRef(
  ({ ingredient, index, handleDelete }, ref) => {
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
  }
);

BurgerConstructorItem.propTypes = {
  ingredient: ingredientType.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default BurgerConstructorItem;
