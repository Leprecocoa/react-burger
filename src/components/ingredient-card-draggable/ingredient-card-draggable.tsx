import { useDrag } from "react-dnd";
import IngredientCard from "../ingredient-card/ingredient-card";
import { TIngredient } from "../../utils/types";

interface IIngredientCardDraggableProps {
  ingredient: TIngredient;
  onIngredientClick: (ingredient: TIngredient) => void;
  count: number;
}

function IngredientCardDraggable({
  ingredient,
  onIngredientClick,
  count,
}: IIngredientCardDraggableProps) {
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { ingredient },
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
