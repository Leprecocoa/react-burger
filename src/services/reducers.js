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
} from "./actions";

const initialState = {
  ingredients: [],
  selectedIngredients: [],
  selectedIngredient: null,
  selectedBun: null,
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
        selectedBun: action.payload.ingredients.find(ingredient => ingredient.type === "bun")._id
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
    case DROP_INGREDIENT: {
      const { ingredientId } = action.payload;

      const getIsBun = (id) => {
        const ingredient = state.ingredients.find(ingredient => ingredient._id === id) 
        return ingredient && ingredient.type === "bun"
      }

      if (getIsBun(ingredientId)) {
        return {
          ...state,
          selectedBun: ingredientId
        }
      }

      return {
        ...state,
        selectedIngredients: [
          ...state.selectedIngredients,
          action.payload.ingredientId,
        ],
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
    default:
      return state;
  }
};
