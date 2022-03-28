import { Reducer } from "redux";
import { TIngredient, TOrder, TSelectedIngredient } from "../utils/types";
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
  USER_REGISTER,
  USER_LOGOUT,
  GET_USER_INFO,
  SET_USER_INFO,
  USER_SET_DATA,
  USER_LOGIN,
  FORGOT_PASSWORD_SET_EMAIL,
  RESET_PASSWORD,
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

type TUserState = {
  email: string;
  password: string;
  name: string;
  loggedIn: boolean;
};

const userInitialState: TUserState = {
  email: "",
  password: "",
  name: "",
  loggedIn: !!localStorage.getItem("refreshToken"),
};

export const userReducer: Reducer<TUserState> = (
  state = userInitialState,
  action
) => {
  switch (action.type) {
    case USER_REGISTER: {
      return {
        ...state,
        email: action.payload.email ?? state.email,
        password: action.payload.password ?? state.password,
        name: action.payload.name ?? state.name,
      };
    }
    case USER_SET_DATA: {
      return {
        ...state,
        email: action.payload.email ?? state.email,
        password: action.payload.password ?? state.password,
      };
    }
    case USER_LOGIN: {
      return {
        ...state,
        loggedIn: true,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        email: "",
        password: "",
        loggedIn: false,
      };
    }
    case GET_USER_INFO: {
      return {
        ...state,
        email: action.payload.email ?? state.email,
        name: action.payload.name ?? state.name,
      };
    }
    case SET_USER_INFO: {
      return {
        ...state,
        email: action.payload.email ?? state.email,
        name: action.payload.name ?? state.name,
        password: action.payload.password ?? state.password,
      };
    }
    default:
      return state;
  }
};

type TResetPasswordState = {
  email: string;
};

const resetPasswordInitialState: TResetPasswordState = {
  email: "",
};

export const resetPasswordReducer: Reducer<TResetPasswordState> = (
  state = resetPasswordInitialState,
  action
) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SET_EMAIL: {
      return {
        ...state,
        email: action.payload.email,
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        email: "",
      };
    }
    default:
      return state;
  }
};
