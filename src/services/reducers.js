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
} from "./actions";

const initialState = {
  ingredients: [],
  selectedIngredients: [],
  selectedIngredient: null,
  order: null,
  ingredientsRequest: false,
  ingredientsFailed: false,
  orderNumberRequest: false,
  orderNumberFailed: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredients: action.payload.ingredients,
        ingredientsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
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
        ...state,
        orderNumberFailed: true,
        orderNumberRequest: false,
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
