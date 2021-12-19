import { ModalCloseButton } from "../modal-close-button/modal-close-button";
import ingredientDetailsStyles from "./ingredient-details.module.css";
import PropTypes from "prop-types";

IngredientDetails.propTypes = {
  ingredient: PropTypes.object.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export function IngredientDetails({ ingredient, onCloseClick }) {
  const {
    image_large: image,
    name,
    calories,
    proteins,
    fat,
    carbohydrates,
  } = ingredient;
  return (
    <div className={`${ingredientDetailsStyles.details} pt-10 pb-15`}>
      <div className={ingredientDetailsStyles.header}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
        <ModalCloseButton onClick={onCloseClick} />
      </div>
      <div className={ingredientDetailsStyles.content}>
        <img className={ingredientDetailsStyles.image} src={image} alt={name} />
        <p className="text text_type_main-medium mt-4 mb-8">{name}</p>
        <ul className={ingredientDetailsStyles.list}>
          <li>
            <p className="text text_type_main-default text_color_inactive mb-2">
              Калории,ккал
            </p>
            <span className="text text_type_digits-default text_color_inactive">
              {calories}
            </span>
          </li>
          <li>
            <p className="text text_type_main-default text_color_inactive mb-2">
              Белки, г
            </p>
            <span className="text text_type_digits-default text_color_inactive">
              {proteins}
            </span>
          </li>
          <li>
            <p className="text text_type_main-default text_color_inactive mb-2">
              Жиры, г
            </p>
            <span className="text text_type_digits-default text_color_inactive">
              {fat}
            </span>
          </li>
          <li>
            <p className="text text_type_main-default text_color_inactive mb-2">
              Углеводы, г
            </p>
            <span className="text text_type_digits-default text_color_inactive">
              {carbohydrates}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
