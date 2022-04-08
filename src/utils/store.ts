import { composeEnhancers } from "../redux-devtools";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../services/root-reducer";
import { socketMiddleware } from "../services/middleware/ws-middleware";
import {
  WS_CONNECTION_INIT,
  WS_SEND_MESSAGE,
  WS_CONNECTION_CLOSE,
} from "../services/actions/ws-actions";

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware({
      init: WS_CONNECTION_INIT,
      send: WS_SEND_MESSAGE,
      close: WS_CONNECTION_CLOSE,
    })
  )
);
export const store = createStore(rootReducer, enhancer);
