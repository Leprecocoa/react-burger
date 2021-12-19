import IngredientCard from "../ingredient-card/ingredient-card";
import ingredientsSectionStyles from "./ingredients-section.module.css";
import PropTypes from "prop-types";

IngredientsSection.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};

function IngredientsSection({ title, ingredients, type, onIngredientClick }) {
  return (
    <section className={`${ingredientsSectionStyles.ingredients_list} pt-10`}>
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

export default IngredientsSection;
