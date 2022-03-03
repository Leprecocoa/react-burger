import { composeEnhancers } from "../redux-devtools";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../services/root-reducer";

const enhancer = composeEnhancers(applyMiddleware(thunk));
export const store = createStore(rootReducer, enhancer);
