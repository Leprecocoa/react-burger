import { getIngredients, sendOrder } from "../utils/api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_CONSTRUCTOR_INGREDIENTS = "GET_CONSTRUCTOR_INGREDIENTS";
export const SELECT_INGREDIENT = "SELECT_INGREDIENT";
export const DELETE_SELECTED_INGREDIENT_DATA =
  "DELETE_SELECTED_INGREDIENT_DATA";
export const GET_ORDER_NUMBER_REQUEST = "GET_ORDER_NUMBER_REQUEST";
export const GET_ORDER_NUMBER_SUCCESS = "GET_ORDER_NUMBER_SUCCESS";
export const GET_ORDER_NUMBER_FAILED = "GET_ORDER_NUMBER_FAILED";
export const DELETE_ORDER_DATA = "DELETE_ORDER_DATA";
export const DROP_INGREDIENT = "DROP_INGREDIENT";
export const DELETE_IGREDIENT = "DELETE_IGREDIENT";
export const REORDER_CONSTRUCTOR_ITEM = "REORDER_CONSTRUCTOR_ITEM";

export function getIngredientsApi() {
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
}

export function getOrderNumber(ingredientIds) {
  return (dispatch) => {
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
}
