import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_INIT,
  WS_SEND_MESSAGE,
} from "../services/actions/ws-actions";
import { store } from "./store";
import { TActions } from "./tactions";

export type TIngredient = {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  _id: string;
  count: number;
};

export type TSelectedIngredient = TIngredient & { uid: string };

export type TOrder = {
  number: number;
  _id: string;
  status: "created" | "pending" | "done";
  name: string;
  createdAt: string;
  updatedAt: string;
  ingredients: string[];
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch &
  ThunkDispatch<RootState, unknown, TActions>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TActions
>;

export type TFeedWsResponse = {
  success: boolean;
  total: number;
  totalToday: number;
  orders: TOrder[];
  message?: string;
};

export type TWsActions = {
  init: typeof WS_CONNECTION_INIT;
  send: typeof WS_SEND_MESSAGE;
  close: typeof WS_CONNECTION_CLOSE;
};

export type TWsConnectionPool = {
  [id: string]: {
    socket: WebSocket;
    wsUrl: string;
    id: string;
    actions: {
      start: string;
      open: string;
      error: string;
      message: string;
      close: string;
    };
  };
};
