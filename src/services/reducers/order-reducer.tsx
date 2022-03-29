import { Reducer } from "redux";
import { TOrder } from "../../utils/types";
import { GET_ORDER_NUMBER_SUCCESS } from "../actions/burger-constructor-actions";
import { GET_ORDER_NUMBER_REQUEST, GET_ORDER_NUMBER_FAILED, DELETE_ORDER_DATA } from "../actions/order-actions";

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
