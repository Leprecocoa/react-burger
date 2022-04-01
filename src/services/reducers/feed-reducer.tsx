import { Reducer } from "redux";
import {
  FEED_WS_CONNECTION_ERROR,
  FEED_WS_CONNECTION_START,
  FEED_WS_CONNECTION_SUCCESS,
  FEED_WS_GET_MESSAGE,
} from "../actions/ws-actions";
import { TOrder } from "../../utils/types";

type TFeedState = {
  isLoading: boolean;
  isError: boolean;
  orders: TOrder[];
};

const feedInitialState: TFeedState = {
  isLoading: false,
  isError: false,
  orders: [],
};

export const feedReducer: Reducer<TFeedState> = (
  state = feedInitialState,
  action
) => {
  switch (action.type) {
    case FEED_WS_CONNECTION_START:
      return { ...state, isLoading: true, isError: false };
    case FEED_WS_CONNECTION_ERROR:
      return { ...state, isLoading: false, isError: true };
    case FEED_WS_CONNECTION_SUCCESS:
      return { ...state, isError: false };
    case FEED_WS_GET_MESSAGE:
      const data = JSON.parse(action.payload.data);
      return { ...state, orders: data.orders, isLoading: false };
    default:
      return state;
  }
};
