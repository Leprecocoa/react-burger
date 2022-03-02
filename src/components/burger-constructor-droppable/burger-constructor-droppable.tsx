import { useDrop } from "react-dnd";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { TIngredient, useAppDispatch, useAppSelector } from "../../utils/types";
import { DROP_INGREDIENT } from "../../services/actions";
import { v4 } from "uuid";

interface IBurgerConstructorDroppableProps {
  onSubmit: (ingredients: Array<TIngredient>) => void;
}

function BurgerConstructorDroppable({
  onSubmit,
}: IBurgerConstructorDroppableProps) {
  const dispatch = useAppDispatch();
  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop({ ingredient }: { ingredient: TIngredient }) {
      dispatch({
        type: DROP_INGREDIENT,
        payload: { ingredient: { ...ingredient, uid: v4() } },
      });
    },
  });

  const { ingredients } = useAppSelector(({ ingredients: { ingredients } }) => {
    return {
      ingredients,
    };
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
