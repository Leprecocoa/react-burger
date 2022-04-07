import {
  DELETE_IGREDIENT,
  DROP_INGREDIENT,
  GET_CONSTRUCTOR_INGREDIENTS,
  GET_ORDER_NUMBER_SUCCESS,
  REORDER_CONSTRUCTOR_ITEM,
} from "../services/actions/burger-constructor-actions";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  SELECT_INGREDIENT,
  DELETE_SELECTED_INGREDIENT_DATA,
} from "../services/actions/ingredients-actions";
import {
  GET_ORDER_NUMBER_REQUEST,
  GET_ORDER_NUMBER_FAILED,
  DELETE_ORDER_DATA,
} from "../services/actions/order-actions";
import {
  FORGOT_PASSWORD_SET_EMAIL,
  RESET_PASSWORD,
} from "../services/actions/reset-password-actions";
import {
  USER_REGISTER,
  USER_SET_DATA,
  USER_LOGIN,
  REFRESH_TOKEN,
  USER_LOGOUT,
  GET_USER_INFO,
  SET_USER_INFO,
} from "../services/actions/user-actions";
import { TIngredient, TOrder, TSelectedIngredient } from "./types";

export interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: { ingredients: [] };
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface IGetConstructorIngredientsAction {
  readonly type: typeof GET_CONSTRUCTOR_INGREDIENTS;
}

export interface ISelectIngredientAction {
  readonly type: typeof SELECT_INGREDIENT;
  payload: { ingredient: TIngredient };
}

export interface IDeleteSelectedIngredientDataAction {
  readonly type: typeof DELETE_SELECTED_INGREDIENT_DATA;
  readonly selectedIngredient: TIngredient;
}

export interface IGetOrderNumberRequestAction {
  readonly type: typeof GET_ORDER_NUMBER_REQUEST;
}

export interface IGetOrderNumberSuccessAction {
  readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
  readonly payload: { order: TOrder };
}

export interface IGetOrderNumberFailedAction {
  readonly type: typeof GET_ORDER_NUMBER_FAILED;
}

export interface IDeleteOrderDataAction {
  readonly type: typeof DELETE_ORDER_DATA;
  readonly order: TOrder;
}

export interface IDropIngredientAction {
  readonly type: typeof DROP_INGREDIENT;
  readonly payload: { ingredient: TSelectedIngredient };
}

export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_IGREDIENT;
  readonly payload: { deleteIndex: number };
}

export interface IReorderConstructorItemAction {
  readonly type: typeof REORDER_CONSTRUCTOR_ITEM;
  readonly payload: { dragIndex: number; itemIndex: number };
}

export interface IUserRegister {
  readonly type: typeof USER_REGISTER;
}

export interface IUserSetData {
  readonly type: typeof USER_SET_DATA;
}

export interface IUserLogin {
  readonly type: typeof USER_LOGIN;
}

export interface IRefreshToken {
  readonly type: typeof REFRESH_TOKEN;
}

export interface IUserLogout {
  readonly type: typeof USER_LOGOUT;
}

export interface IGetUserInfo {
  readonly type: typeof GET_USER_INFO;
}

export interface ISetUserInfo {
  readonly type: typeof SET_USER_INFO;
}

export interface IForgotPasswordSetEmail {
  readonly type: typeof FORGOT_PASSWORD_SET_EMAIL;
}

export interface IResetPassword {
  readonly type: typeof RESET_PASSWORD;
}

export type TActions =
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | IGetConstructorIngredientsAction
  | ISelectIngredientAction
  | IDeleteSelectedIngredientDataAction
  | IGetOrderNumberRequestAction
  | IGetOrderNumberSuccessAction
  | IGetOrderNumberFailedAction
  | IDeleteOrderDataAction
  | IDropIngredientAction
  | IDeleteIngredientAction
  | IReorderConstructorItemAction
  | IUserRegister
  | IUserLogin
  | IUserSetData
  | IRefreshToken
  | IUserLogout
  | IGetUserInfo
  | ISetUserInfo
  | IForgotPasswordSetEmail
  | IResetPassword;
