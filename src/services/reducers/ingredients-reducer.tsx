import { TIngredient } from "../../utils/types";
import { Reducer } from "redux";
import { TActions } from "../../utils/tactions";
import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED, SELECT_INGREDIENT, DELETE_SELECTED_INGREDIENT_DATA } from "../actions/ingredients-actions";

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
