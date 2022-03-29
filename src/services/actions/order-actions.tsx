import { sendOrder } from "../../utils/api";
import { AppThunk, AppDispatch } from "../../utils/types";
import { GET_ORDER_NUMBER_SUCCESS } from "./burger-constructor-actions";

export const DELETE_ORDER_DATA: "DELETE_ORDER_DATA" = "DELETE_ORDER_DATA";
export const GET_ORDER_NUMBER_REQUEST: "GET_ORDER_NUMBER_REQUEST" =
  "GET_ORDER_NUMBER_REQUEST";
export const GET_ORDER_NUMBER_FAILED: "GET_ORDER_NUMBER_FAILED" =
  "GET_ORDER_NUMBER_FAILED";

export const getOrderNumber: (ingredientIds: number[]) => AppThunk = (
  ingredientIds
) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_ORDER_NUMBER_REQUEST,
    });
    sendOrder(ingredientIds)
      .then((res) => {
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
      })
      .catch((err) => console.log(err));
  };
};
