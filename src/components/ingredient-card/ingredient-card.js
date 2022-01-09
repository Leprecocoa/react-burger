import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, forwardRef } from "react";
import PropTypes from "prop-types";
import ingredientCard from "./ingredient-card.module.css";
import { ingredientType } from "../../utils/types";

const IngredientCard = forwardRef(
  ({ ingredient, onIngredientClick, count }, ref) => {
    const handleSectionClick = useCallback(() => {
      onIngredientClick(ingredient);
    }, [onIngredientClick, ingredient]);
    return (
      <section
        className={ingredientCard.ingredient_card}
        onClick={handleSectionClick}
        ref={ref}
      >
        <Counter count={count} size="small" />
        <img src={ingredient.image} alt={ingredient.name} />
        <div className={`${ingredientCard.price} mt-1 mb-1`}>
          <span className="text text_type_main-default mr-2">
            {ingredient.price}
          </span>{" "}
          <CurrencyIcon type="primary" />
        </div>
        <p>{ingredient.name}</p>
      </section>
    );
  }
);

IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default IngredientCard;
