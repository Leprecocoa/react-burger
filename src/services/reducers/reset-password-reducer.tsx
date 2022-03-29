import { Reducer } from "redux";
import { FORGOT_PASSWORD_SET_EMAIL, RESET_PASSWORD } from "../actions/reset-password-actions";

type TResetPasswordState = {
  email: string;
};

const resetPasswordInitialState: TResetPasswordState = {
  email: "",
};

export const resetPasswordReducer: Reducer<TResetPasswordState> = (
  state = resetPasswordInitialState,
  action
) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SET_EMAIL: {
      return {
        ...state,
        email: action.payload.email,
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        email: "",
      };
    }
    default:
      return state;
  }
};
