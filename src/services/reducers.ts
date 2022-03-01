import { Reducer } from "redux";
import { TIngredient, TOrder } from "../utils/types";
import {
  DELETE_ORDER_DATA,
  DELETE_SELECTED_INGREDIENT_DATA,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_ORDER_NUMBER_FAILED,
  GET_ORDER_NUMBER_REQUEST,
  GET_ORDER_NUMBER_SUCCESS,
  SELECT_INGREDIENT,
  DROP_INGREDIENT,
  DELETE_IGREDIENT,
  REORDER_CONSTRUCTOR_ITEM,
  TActions,
} from "./actions";

// ingredients reducer

type TIngredientsState = {
  ingredients: TIngredient[];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  selectedIngredient: TIngredient | null;
};

const ingredientsInitialState: TIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  selectedIngredient: null,
};

export const ingredientsReducer: Reducer<TIngredientsState, TActions> = (
  state = ingredientsInitialState,
  action
) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredientsRequest: false,
        ingredients: action.payload.ingredients,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...ingredientsInitialState,
        ingredientsFailed: true,
      };
    }
    case SELECT_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.payload.ingredient,
      };
    }
    case DELETE_SELECTED_INGREDIENT_DATA: {
      return {
        ...state,
        selectedIngredient: null,
      };
    }
    default: {
      return state;
    }
  }
};

// burger constructor reducer

type TBurgerConstructorState = {
  selectedIngredients: TIngredient[];
  selectedBun: TIngredient | null;
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

// order reducer

type TOrderState = {
  order: TOrder | null;
  orderNumberRequest: boolean;
  orderNumberFailed: boolean;
};

const orderInitialState: TOrderState = {
  order: null,
  orderNumberRequest: false,
  orderNumberFailed: false,
};

export const orderReducer: Reducer<TOrderState> = (
  state = orderInitialState,
  action
) => {
  switch (action.type) {
    case GET_ORDER_NUMBER_REQUEST: {
      return {
        ...state,
        orderNumberRequest: true,
      };
    }
    case GET_ORDER_NUMBER_SUCCESS: {
      return {
        ...state,
        orderNumberRequest: false,
        orderNumberFailed: false,
        order: action.payload.order,
      };
    }
    case GET_ORDER_NUMBER_FAILED: {
      return {
        ...orderInitialState,
        orderNumberFailed: true,
      };
    }
    case DELETE_ORDER_DATA: {
      return {
        ...state,
        order: null,
      };
    }
    default:
      return state;
  }
};
