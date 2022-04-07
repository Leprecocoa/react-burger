import { useEffect } from "react";
import { useAppDispatch } from "../../utils/types";
import { getCookie } from "../../utils/utils";
import {
  WS_CONNECTION_INIT,
  PROFILE_FEED_WS_CONNECTION_CLOSED,
  PROFILE_FEED_WS_CONNECTION_ERROR,
  PROFILE_FEED_WS_CONNECTION_START,
  PROFILE_FEED_WS_CONNECTION_SUCCESS,
  PROFILE_FEED_WS_GET_MESSAGE,
  WS_CONNECTION_CLOSE,
} from "../actions/ws-actions";

export function useWsProfileFeed() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = getCookie("authToken");
    if (!token) {
      console.log("useWsProfileFeed", "missing token");
      return;
    }
    dispatch({
      type: WS_CONNECTION_INIT,
      payload: {
        wsUrl: `wss://norma.nomoreparties.space/orders?token=${token}`,
        id: "profileFeed",
        actions: {
          start: PROFILE_FEED_WS_CONNECTION_START,
          open: PROFILE_FEED_WS_CONNECTION_SUCCESS,
          error: PROFILE_FEED_WS_CONNECTION_ERROR,
          message: PROFILE_FEED_WS_GET_MESSAGE,
          close: PROFILE_FEED_WS_CONNECTION_CLOSED,
        },
      },
    });
    return () => {
      dispatch({
        type: WS_CONNECTION_CLOSE,
        payload: {
          id: "profileFeed",
        },
      });
    };
  }, [dispatch]);
}
