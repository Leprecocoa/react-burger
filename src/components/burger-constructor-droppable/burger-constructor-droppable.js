import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { ingredientType } from "../../utils/types";
import { useDispatch } from "react-redux";
import { DROP_INGREDIENT } from "../../services/actions";

BurgerConstructorDroppable.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(ingredientType),
};

function BurgerConstructorDroppable({ onSubmit, ingredients }) {
  const dispatch = useDispatch();
  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop({ id }) {
      dispatch({ type: DROP_INGREDIENT, payload: { ingredientId: id } });
    },
  });
  return (
    <BurgerConstructor
      onSubmit={onSubmit}
      ingredients={ingredients}
      ref={dropTarget}
    />
  );
}

export default BurgerConstructorDroppable;
