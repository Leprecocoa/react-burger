import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, forwardRef } from "react";
import ingredientCard from "./ingredient-card.module.css";
import { TIngredient } from "../../utils/types";
import { IngredientCardLink } from "../ingredient-card-link/ingredient-card-link";

const IngredientCard = forwardRef<HTMLAnchorElement, IIngredientCardProps>(
  ({ ingredient, onIngredientClick, count }, ref) => {
    const handleSectionClick = useCallback(() => {
      onIngredientClick(ingredient);
    }, [onIngredientClick, ingredient]);
    return (
      <IngredientCardLink
        ingredient={ingredient}
        className={ingredientCard.ingredient_card}
        innerRef={ref}
        onClick={handleSectionClick}
      >
        <>
          <Counter count={count} size="small" />
          <img src={ingredient.image} alt={ingredient.name} />
          <div className={`${ingredientCard.price} mt-1 mb-1`}>
            <span className="text text_type_main-default mr-2">
              {ingredient.price}
            </span>{" "}
            <CurrencyIcon type="primary" />
          </div>
          <p>{ingredient.name}</p>
        </>
      </IngredientCardLink>
    );
  }
);

interface IIngredientCardProps {
  ingredient: TIngredient;
  onIngredientClick: (ingredient: TIngredient) => void;
  count: number;
}

export default IngredientCard;
