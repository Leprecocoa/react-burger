import { History, LocationState } from "history";
import {
  forgotPasswordApi,
  getIngredients,
  getUserInfoApi,
  login,
  logout,
  refreshToken,
  register,
  resetPasswordApi,
  sendOrder,
  setUserInfoApi,
} from "../utils/api";
import {
  AppDispatch,
  AppThunk,
  TIngredient,
  TOrder,
  TSelectedIngredient,
} from "../utils/types";
import { setCookie } from "../utils/utils";

export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" =
  "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" =
  "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED" =
  "GET_INGREDIENTS_FAILED";
export const GET_CONSTRUCTOR_INGREDIENTS: "GET_CONSTRUCTOR_INGREDIENTS" =
  "GET_CONSTRUCTOR_INGREDIENTS";
export const SELECT_INGREDIENT: "SELECT_INGREDIENT" = "SELECT_INGREDIENT";
export const DELETE_SELECTED_INGREDIENT_DATA: "DELETE_SELECTED_INGREDIENT_DATA" =
  "DELETE_SELECTED_INGREDIENT_DATA";
export const GET_ORDER_NUMBER_REQUEST: "GET_ORDER_NUMBER_REQUEST" =
  "GET_ORDER_NUMBER_REQUEST";
export const GET_ORDER_NUMBER_SUCCESS: "GET_ORDER_NUMBER_SUCCESS" =
  "GET_ORDER_NUMBER_SUCCESS";
export const GET_ORDER_NUMBER_FAILED: "GET_ORDER_NUMBER_FAILED" =
  "GET_ORDER_NUMBER_FAILED";
export const DELETE_ORDER_DATA: "DELETE_ORDER_DATA" = "DELETE_ORDER_DATA";
export const DROP_INGREDIENT: "DROP_INGREDIENT" = "DROP_INGREDIENT";
export const DELETE_IGREDIENT: "DELETE_IGREDIENT" = "DELETE_IGREDIENT";
export const REORDER_CONSTRUCTOR_ITEM: "REORDER_CONSTRUCTOR_ITEM" =
  "REORDER_CONSTRUCTOR_ITEM";
export const USER_REGISTER: "USER_REGISTER" = "USER_REGISTER";
export const USER_LOGIN: "USER_LOGIN" = "USER_LOGIN";
export const USER_SET_DATA: "USER_SET_DATA" = "USER_SET_DATA";
export const REFRESH_TOKEN: "REFRESH_TOKEN" = "REFRESH_TOKEN";
export const USER_LOGOUT: "USER_LOGOUT" = "USER_LOGOUT";
export const GET_USER_INFO: "GET_USER_INFO" = "GET_USER_INFO";
export const SET_USER_INFO: "SET_USER_INFO" = "SET_USER_INFO";
export const FORGOT_PASSWORD_SET_EMAIL: "FORGOT_PASSWORD_SET_EMAIL" =
  "FORGOT_PASSWORD_SET_EMAIL";
export const RESET_PASSWORD: "RESET_PASSWORD" = "RESET_PASSWORD";

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

export const getIngredientsApi: () => AppThunk = () => {
  return (dispatch) => {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getIngredients()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            payload: {
              ingredients: res.data,
            },
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const getOrderNumber: (ingredientIds: number[]) => AppThunk = (
  ingredientIds
) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_ORDER_NUMBER_REQUEST,
    });
    sendOrder(ingredientIds).then((res) => {
      if (res && res.success) {
        dispatch({
          type: GET_ORDER_NUMBER_SUCCESS,
          payload: {
            order: res.order,
          },
        });
      } else {
        dispatch({
          type: GET_ORDER_NUMBER_FAILED,
        });
      }
    });
  };
};

export const registerUser: (
  email: string,
  password: string,
  name: string,
  history: History<LocationState>
) => AppThunk = (email, password, name, history) => {
  return () => {
    register({ email, password, name }).then((res) => {
      console.log("registerUser", res);
      history.push("/login");
    });
  };
};

export const loginUser: (
  email: string,
  password: string,
  history: History<LocationState>
) => AppThunk = (email, password, history) => {
  return (dispatch: AppDispatch) => {
    login({ email, password }).then((res) => {
      console.log("loginUser", res);
      if (res.accessToken == null) {
        return;
      }
      let authToken = res.accessToken.split("Bearer ")[1];
      if (authToken && res.refreshToken) {
        setCookie("authToken", authToken);
        localStorage.setItem("refreshToken", res.refreshToken);
      }
      if (res.success) {
        dispatch({ type: USER_LOGIN });
        history.push("/");
      }
    });
  };
};

export const logoutUser: (
  refreshToken: string | null,
  history: History<LocationState>
) => AppThunk = (refreshToken, history) => {
  return (dispatch: AppDispatch) => {
    if (refreshToken == null) {
      return;
    }
    logout(refreshToken)
      .then((res) => {
        console.log("logoutUser", res);
        if (res.success) {
          localStorage.removeItem("refreshToken");
        }
      })
      .then((res) => {
        dispatch({
          type: USER_LOGOUT,
        });
        history.push("/login");
      });
  };
};

export const getUserInfo: (authToken: string | undefined) => AppThunk = (
  authToken
) => {
  return (dispatch: AppDispatch) => {
    if (authToken == null) {
      return;
    }
    getUserInfoApi(authToken)
      .then((res) => {
        console.log("getUserInfoApi", res);
        dispatch({
          type: GET_USER_INFO,
          payload: {
            name: res.user.name,
            email: res.user.email,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.data.message === "jwt expired") {
          const refreshingToken = localStorage.getItem("refreshToken");
          if (refreshingToken == null) {
            return;
          }
          refreshToken(refreshingToken)
            .then((res) => {
              console.log("refreshToken", res);
              let authToken = res.accessToken.split("Bearer ")[1];
              if (authToken && res.refreshToken) {
                setCookie("authToken", authToken);
                localStorage.setItem("refreshToken", res.refreshToken);
              }
            })
            .catch((err) => console.log(err));
        }
      });
  };
};

export const setUserInfo: (
  authToken: string | undefined,
  name: string,
  email: string,
  password: string
) => AppThunk = (authToken, name, email, password) => {
  return (dispatch: AppDispatch) => {
    if (authToken == null) {
      return;
    }
    setUserInfoApi(authToken, { name, email, password })
      .then((res) => {
        console.log("setUserInfoApi", res);
        dispatch({
          type: SET_USER_INFO,
          payload: {
            name: res.user.name,
            email: res.user.email,
            password: res.user.password,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.data.message === "jwt expired") {
          const refreshingToken = localStorage.getItem("refreshToken");
          if (refreshingToken == null) {
            return;
          }
          refreshToken(refreshingToken)
            .then((res) => {
              console.log("refreshToken", res);
              let authToken = res.accessToken.split("Bearer ")[1];
              if (authToken && res.refreshToken) {
                setCookie("authToken", authToken);
                localStorage.setItem("refreshToken", res.refreshToken);
              }
            })
            .catch((err) => console.log(err));
        }
      });
  };
};

export const forgotPassword = (
  email: string,
  history: History<LocationState>
) => {
  return () => {
    forgotPasswordApi(email)
      .then((res) => {
        console.log("forgotPasswordApi", res);
        if (res.success) {
          history.push("/reset-password");
          console.log("redir", res);
        }
      })
      .catch((err) => console.log(err));
  };
};

export const resetPassword = (
  password: string,
  resetToken: string,
  history: History<LocationState>
) => {
  return (dispatch: AppDispatch) => {
    resetPasswordApi(password, resetToken).then((res) => {
      console.log(res);
      if (res.success) {
        history.push("/");
        dispatch({ type: RESET_PASSWORD });
      }
    });
  };
};
