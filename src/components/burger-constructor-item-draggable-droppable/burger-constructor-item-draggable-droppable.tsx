import { useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { REORDER_CONSTRUCTOR_ITEM } from "../../services/actions";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import { TIngredient, useAppDispatch } from "../../utils/types";

interface IBurgerConstructorItemDraggableDroppableProps {
  ingredient: TIngredient;
  index: number;
  handleDelete: (deleteIndex: number) => void;
}

function BurgerConstructorItemDraggableDroppable({
  ingredient,
  index,
  handleDelete,
}: IBurgerConstructorItemDraggableDroppableProps) {
  const ref = useRef(null);
  const dispatch = useAppDispatch();

  const [, dragRef] = useDrag({
    type: "constructor-item",
    item: { dragIndex: index },
  });

  const [, dropTarget] = useDrop({
    accept: "constructor-item",
    drop({ dragIndex }: { dragIndex: number }) {
      dispatch({
        type: REORDER_CONSTRUCTOR_ITEM,
        payload: {
          itemIndex: index,
          dragIndex: dragIndex,
        },
      });
    },
  });

  useEffect(
    function () {
      dragRef(dropTarget(ref));
    },
    [dragRef, dropTarget]
  );

  return (
    <BurgerConstructorItem
      ingredient={ingredient}
      index={index}
      handleDelete={handleDelete}
      ref={ref}
    />
  );
}

export default BurgerConstructorItemDraggableDroppable;
