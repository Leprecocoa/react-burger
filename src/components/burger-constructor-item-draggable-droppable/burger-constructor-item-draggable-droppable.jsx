import { useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { REORDER_CONSTRUCTOR_ITEM } from "../../services/actions";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

BurgerConstructorItemDraggableDroppable.propTypes = {
  ingredient: ingredientType.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

function BurgerConstructorItemDraggableDroppable({
  ingredient,
  index,
  handleDelete,
}) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { _id } = ingredient;

  const [, dragRef] = useDrag({
    type: "constructor-item",
    item: { id: _id, dragIndex: index },
  });

  const [, dropTarget] = useDrop({
    accept: "constructor-item",
    drop({ dragIndex }) {
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
