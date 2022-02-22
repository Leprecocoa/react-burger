import IngredientCardDraggable from "../ingredient-card-draggable/ingredient-card-draggable";
import ingredientsSectionStyles from "./ingredients-section.module.css";
import { forwardRef } from "react";
import { TIngredient } from "../../utils/types";

const IngredientsSection = forwardRef<HTMLDivElement, IIngredientsSectionProps>(
  ({ title, ingredients, type, onIngredientClick, counts }, ref) => {
    return (
      <section
        ref={ref}
        className={`${ingredientsSectionStyles.ingredients_list} pt-10`}
      >
        <h2
          className={`${ingredientsSectionStyles.ingredients_list_title} mb-6 text text_type_main-medium`}
        >
          {title}
        </h2>
        <div className={`${ingredientsSectionStyles.cards_box} pl-4 pr-4`}>
          {ingredients
            .filter((ingredient) => {
              return ingredient.type === type;
            })
            .map((ingredient) => {
              return (
                <IngredientCardDraggable
                  key={ingredient._id}
                  ingredient={ingredient}
                  onIngredientClick={onIngredientClick}
                  count={counts[ingredient._id]}
                />
              );
            })}
        </div>
      </section>
    );
  }
);

interface IIngredientsSectionProps {
  title: string;
  ingredients: Array<TIngredient>;
  type: string;
  onIngredientClick: (ingredients: TIngredient) => void;
  counts: { [key: string]: number };
}

export default IngredientsSection;
