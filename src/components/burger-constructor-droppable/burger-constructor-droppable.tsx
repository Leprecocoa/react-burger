import { useDrop } from "react-dnd";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {  TIngredient } from "../../utils/types";
import { useDispatch } from "react-redux";
import { DROP_INGREDIENT } from "../../services/actions";

interface IBurgerConstructorDroppableProps {
  onSubmit: (ingredients: Array<TIngredient>) => void;
  ingredients: Array<TIngredient>;
}

function BurgerConstructorDroppable({
  onSubmit,
  ingredients,
}: IBurgerConstructorDroppableProps) {
  const dispatch = useDispatch();
  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop({ ingredient }: { ingredient: TIngredient }) {
      dispatch({ type: DROP_INGREDIENT, payload: { ingredient } });
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
