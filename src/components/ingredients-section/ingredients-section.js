import IngredientCard from "../ingredient-card/ingredient-card";
import ingredientsSectionStyles from "./ingredients-section.module.css";

function IngredientsSection(props) {
  return (
    <section className={`${ingredientsSectionStyles.ingredients_list} pt-10`}>
      <h2
        className={`${ingredientsSectionStyles.ingredients_list_title} mb-6 text text_type_main-medium`}
      >
        {props.title}
      </h2>
      <div className={`${ingredientsSectionStyles.cards_box} pl-4 pr-4`}>
        {props.ingredients
          .filter((ingredient) => {
            return ingredient.type === props.type;
          })
          .map((ingredient) => {
            return (
              <IngredientCard key={ingredient._id} ingredient={ingredient} />
            );
          })}
      </div>
    </section>
  );
}

export default IngredientsSection;
