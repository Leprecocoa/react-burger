import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientCard from "./ingredient-card.module.css";

function IngredientCard({ ingredient }) {
  return (
    <section className={ingredientCard.ingredient_card}>
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
