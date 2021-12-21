import IngredientCard from "../ingredient-card/ingredient-card";
import ingredientsSectionStyles from "./ingredients-section.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { forwardRef } from "react";

const IngredientsSection = forwardRef(
  ({ title, ingredients, type, onIngredientClick }, ref) => {
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
                <IngredientCard
                  key={ingredient._id}
                  ingredient={ingredient}
                  onIngredientClick={onIngredientClick}
                />
              );
            })}
        </div>
      </section>
    );
  }
);

IngredientsSection.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
  type: PropTypes.string.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};

export default IngredientsSection;
