import { combineReducers } from "redux";
import {
  orderReducer,
  ingredientsReducer,
  burgerConstructorReducer,
  userReducer,
} from "./reducers";

export const rootReducer = combineReducers({
  order: orderReducer,
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  user: userReducer,
});
