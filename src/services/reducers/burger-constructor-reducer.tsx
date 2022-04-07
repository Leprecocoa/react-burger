import { Reducer } from "redux";
import { TActions } from "../../utils/tactions";
import { TSelectedIngredient } from "../../utils/types";
import {
  DELETE_IGREDIENT,
  DROP_INGREDIENT,
  GET_ORDER_NUMBER_SUCCESS,
  REORDER_CONSTRUCTOR_ITEM,
} from "../actions/burger-constructor-actions";

type TBurgerConstructorState = {
  selectedIngredients: TSelectedIngredient[];
  selectedBun: TSelectedIngredient | null;
};

const burgerConstructorInitialState: TBurgerConstructorState = {
  selectedIngredients: [],
  selectedBun: null,
};

export const burgerConstructorReducer: Reducer<
  TBurgerConstructorState,
  TActions
> = (state = burgerConstructorInitialState, action) => {
  switch (action.type) {
    case GET_ORDER_NUMBER_SUCCESS: {
      return {
        ...state,
        selectedIngredients: [],
        selectedBun: null,
      };
    }
    case DROP_INGREDIENT: {
      const { ingredient } = action.payload;
      if (ingredient.type === "bun") {
        return {
          ...state,
          selectedBun: ingredient,
        };
      }
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, ingredient],
      };
    }
    case DELETE_IGREDIENT: {
      return {
        ...state,
        selectedIngredients: state.selectedIngredients.filter(
          (item, index) => index !== action.payload.deleteIndex
        ),
      };
    }
    case REORDER_CONSTRUCTOR_ITEM: {
      const { dragIndex, itemIndex } = action.payload;
      const constructorItems = [...state.selectedIngredients];
      let draggingItemIndex = constructorItems[dragIndex];
      constructorItems[dragIndex] = constructorItems[itemIndex];
      constructorItems[itemIndex] = draggingItemIndex;
      return {
        ...state,
        selectedIngredients: constructorItems,
      };
    }
    default: {
      return state;
    }
  }
};
