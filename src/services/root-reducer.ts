import { combineReducers } from "redux";
import { burgerConstructorReducer } from "./reducers/burger-constructor-reducer";
import { ingredientsReducer } from "./reducers/ingredients-reducer";
import { orderReducer } from "./reducers/order-reducer";
import { resetPasswordReducer } from "./reducers/reset-password-reducer";
import { userReducer } from "./reducers/user-reducer";

export const rootReducer = combineReducers({
  order: orderReducer,
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  user: userReducer,
  resetPassword: resetPasswordReducer,
});
