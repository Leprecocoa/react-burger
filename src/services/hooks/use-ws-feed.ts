import { useEffect } from "react";
import { useAppDispatch } from "../../utils/types";
import {
  WS_CONNECTION_INIT,
  FEED_WS_CONNECTION_CLOSED,
  FEED_WS_CONNECTION_ERROR,
  FEED_WS_CONNECTION_START,
  FEED_WS_CONNECTION_SUCCESS,
  FEED_WS_GET_MESSAGE,
  WS_CONNECTION_CLOSE,
} from "../actions/ws-actions";

export function useWsFeed() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_INIT,
      payload: {
        wsUrl: "wss://norma.nomoreparties.space/orders/all",
        id: "feed",
        actions: {
          start: FEED_WS_CONNECTION_START,
          open: FEED_WS_CONNECTION_SUCCESS,
          error: FEED_WS_CONNECTION_ERROR,
          message: FEED_WS_GET_MESSAGE,
          close: FEED_WS_CONNECTION_CLOSED,
        },
      },
    });
    return () => {
      dispatch({
        type: WS_CONNECTION_CLOSE,
        payload: {
          id: "feed",
        },
      });
    };
  }, [dispatch]);
}
