import { forgotPasswordApi, resetPasswordApi } from "../../utils/api";
import { AppDispatch } from "../../utils/types";
import { History, LocationState } from "history";

export const FORGOT_PASSWORD_SET_EMAIL: "FORGOT_PASSWORD_SET_EMAIL" =
  "FORGOT_PASSWORD_SET_EMAIL";
export const RESET_PASSWORD: "RESET_PASSWORD" = "RESET_PASSWORD";

export const resetPassword = (
  password: string,
  resetToken: string,
  history: History<LocationState>
) => {
  return (dispatch: AppDispatch) => {
    resetPasswordApi(password, resetToken)
      .then((res) => {
        console.log(res);
        if (res.success) {
          history.push("/");
          dispatch({ type: RESET_PASSWORD });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const forgotPassword = (
  email: string,
  history: History<LocationState>
) => {
  return () => {
    forgotPasswordApi(email)
      .then((res) => {
        console.log("forgotPasswordApi", res);
        if (res.success) {
          history.push("/reset-password");
          console.log("redir", res);
        }
      })
      .catch((err) => console.log(err));
  };
};
