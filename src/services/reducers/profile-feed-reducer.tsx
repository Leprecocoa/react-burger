import { Reducer } from "redux";
import {
  PROFILE_FEED_WS_CONNECTION_ERROR,
  PROFILE_FEED_WS_CONNECTION_START,
  PROFILE_FEED_WS_CONNECTION_SUCCESS,
  PROFILE_FEED_WS_GET_MESSAGE,
} from "../actions/ws-actions";
import { TOrder } from "../../utils/types";
import { TActions } from "../../utils/tactions"

type TProfileFeedState = {
  isLoading: boolean;
  isError: boolean;
  orders: TOrder[];
};

const feedInitialState: TProfileFeedState = {
  isLoading: false,
  isError: false,
  orders: [],
};

export const profileFeedReducer: Reducer<TProfileFeedState, TActions> = (
  state = feedInitialState,
  action
) => {
  switch (action.type) {
    case PROFILE_FEED_WS_CONNECTION_START:
      return { ...state, isLoading: true, isError: false };
    case PROFILE_FEED_WS_CONNECTION_ERROR:
      return { ...state, isLoading: false, isError: true };
    case PROFILE_FEED_WS_CONNECTION_SUCCESS:
      return { ...state, isError: false };
    case PROFILE_FEED_WS_GET_MESSAGE:
      const { orders } = action.payload.data;
      return { ...state, orders, isLoading: false };
    default:
      return state;
  }
};
