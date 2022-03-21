import { combineReducers } from "redux";
import {
  orderReducer,
  ingredientsReducer,
  burgerConstructorReducer,
  registerUserReducer,
  loginUserReducer,
} from "./reducers";

export const rootReducer = combineReducers({
  order: orderReducer,
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  registerUser: registerUserReducer,
  loginUser: loginUserReducer,
});
