import { composeEnhancers } from "../redux-devtools";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../services/root-reducer";
import { socketMiddleware } from "../services/middleware/ws-middleware"

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware()));
export const store = createStore(rootReducer, enhancer);
