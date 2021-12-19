import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback } from "react";
import PropTypes from "prop-types";
import ingredientCard from "./ingredient-card.module.css";

IngredientCard.propTypes = {
  ingredient: PropTypes.object.isRequired,
  onIngredientClick: PropTypes.func.isRequired
};

function IngredientCard({ ingredient, onIngredientClick }) {
  const handleSectionClick = useCallback(() => {
    onIngredientClick(ingredient);
  }, [onIngredientClick, ingredient]);
  return (
    <section
      className={ingredientCard.ingredient_card}
      onClick={handleSectionClick}
    >
      <Counter count={233} size="small" />
      <img src={ingredient.image} alt={ingredient.name} />
      <div className={`${ingredientCard.price} mt-1 mb-1`}>
        <span className="text text_type_main-default mr-2">20</span>{" "}
        <CurrencyIcon type="primary" />
      </div>
      <p>{ingredient.name}</p>
    </section>
  );
}

export default IngredientCard;
