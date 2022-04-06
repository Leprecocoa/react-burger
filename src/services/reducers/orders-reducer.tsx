import { Reducer } from "redux";
import {
  FEED_WS_GET_MESSAGE,
  PROFILE_FEED_WS_GET_MESSAGE,
} from "../actions/ws-actions";
import { TOrder } from "../../utils/types";
import { TActions } from "../../utils/tactions";

type TOrdersState = {
  orders: { [key: string]: TOrder | undefined };
};

const ordersInitialState: TOrdersState = {
  orders: {},
};

export const ordersReducer: Reducer<TOrdersState, TActions> = (
  state = ordersInitialState,
  action
) => {
  switch (action.type) {
    case FEED_WS_GET_MESSAGE: {
      const { orders } = action.payload.data;
      return {
        ...state,
        orders: {
          ...state.orders,
          ...orders.reduce<TOrdersState["orders"]>(
            (acc, order) => ({ ...acc, [order._id]: order }),
            {}
          ),
        },
      };
    }
    case PROFILE_FEED_WS_GET_MESSAGE: {
      const { orders } = action.payload.data;
      return {
        ...state,
        orders: {
          ...state.orders,
          ...orders.reduce<TOrdersState["orders"]>(
            (acc, order) => ({ ...acc, [order._id]: order }),
            {}
          ),
        },
      };
    }
    default:
      return state;
  }
};
