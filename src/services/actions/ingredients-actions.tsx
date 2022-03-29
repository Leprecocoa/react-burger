import { getIngredients } from "../../utils/api";
import { AppThunk } from "../../utils/types";

export const DELETE_SELECTED_INGREDIENT_DATA: "DELETE_SELECTED_INGREDIENT_DATA" =
  "DELETE_SELECTED_INGREDIENT_DATA";
export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" =
  "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" =
  "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED" =
  "GET_INGREDIENTS_FAILED";
export const SELECT_INGREDIENT: "SELECT_INGREDIENT" = "SELECT_INGREDIENT";

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
