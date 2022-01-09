import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import IngredientCard from "../ingredient-card/ingredient-card";
import { ingredientType } from "../../utils/types";

IngredientCardDraggable.propTypes = {
  ingredient: ingredientType.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

function IngredientCardDraggable({ ingredient, onIngredientClick, count }) {
  const { _id } = ingredient;
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { id: _id },
  });
  return (
    <IngredientCard
      ingredient={ingredient}
      onIngredientClick={onIngredientClick}
      count={count}
      ref={dragRef}
    />
  );
}

export default IngredientCardDraggable;
