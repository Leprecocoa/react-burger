import { combineReducers } from "redux";
import {
  orderReducer,
  ingredientsReducer,
  burgerConstructorReducer,
} from "./reducers";

export const rootReducer = combineReducers({
  order: orderReducer,
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
});
