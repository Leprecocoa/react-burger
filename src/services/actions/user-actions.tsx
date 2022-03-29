import {
  register,
  login,
  logout,
  getUserInfoApi,
  refreshToken,
  setUserInfoApi,
} from "../../utils/api";
import { AppThunk, AppDispatch } from "../../utils/types";
import { setCookie } from "../../utils/utils";
import { History, LocationState } from "history";

export const USER_REGISTER: "USER_REGISTER" = "USER_REGISTER";
export const USER_LOGIN: "USER_LOGIN" = "USER_LOGIN";
export const USER_SET_DATA: "USER_SET_DATA" = "USER_SET_DATA";
export const REFRESH_TOKEN: "REFRESH_TOKEN" = "REFRESH_TOKEN";
export const USER_LOGOUT: "USER_LOGOUT" = "USER_LOGOUT";
export const GET_USER_INFO: "GET_USER_INFO" = "GET_USER_INFO";
export const SET_USER_INFO: "SET_USER_INFO" = "SET_USER_INFO";

export const registerUser: (
  email: string,
  password: string,
  name: string,
  history: History<LocationState>
) => AppThunk = (email, password, name, history) => {
  return () => {
    register({ email, password, name })
      .then((res) => {
        console.log("registerUser", res);
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };
};

export const loginUser: (
  email: string,
  password: string,
  history: History<LocationState>
) => AppThunk = (email, password, history) => {
  return (dispatch: AppDispatch) => {
    login({ email, password })
      .then((res) => {
        console.log("loginUser", res);
        if (res.accessToken == null) {
          return;
        }
        let authToken = res.accessToken.split("Bearer ")[1];
        if (authToken && res.refreshToken) {
          setCookie("authToken", authToken);
          localStorage.setItem("refreshToken", res.refreshToken);
        }
        if (res.success) {
          dispatch({ type: USER_LOGIN });
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
};

export const logoutUser: (
  refreshToken: string | null,
  history: History<LocationState>
) => AppThunk = (refreshToken, history) => {
  return (dispatch: AppDispatch) => {
    if (refreshToken == null) {
      return;
    }
    logout(refreshToken)
      .then((res) => {
        console.log("logoutUser", res);
        if (res.success) {
          localStorage.removeItem("refreshToken");
        }
      })
      .then((res) => {
        dispatch({
          type: USER_LOGOUT,
        });
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };
};

export const getUserInfo: (authToken: string | undefined) => AppThunk = (
  authToken
) => {
  return (dispatch: AppDispatch) => {
    if (authToken == null) {
      return;
    }
    getUserInfoApi(authToken)
      .then((res) => {
        console.log("getUserInfoApi", res);
        dispatch({
          type: GET_USER_INFO,
          payload: {
            name: res.user.name,
            email: res.user.email,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.data.message === "jwt expired") {
          const refreshingToken = localStorage.getItem("refreshToken");
          if (refreshingToken == null) {
            return;
          }
          refreshToken(refreshingToken)
            .then((res) => {
              console.log("refreshToken", res);
              let authToken = res.accessToken.split("Bearer ")[1];
              if (authToken && res.refreshToken) {
                setCookie("authToken", authToken);
                localStorage.setItem("refreshToken", res.refreshToken);
              }
            })
            .catch((err) => console.log(err));
        }
      });
  };
};

export const setUserInfo: (
  authToken: string | undefined,
  name: string,
  email: string,
  password: string
) => AppThunk = (authToken, name, email, password) => {
  return (dispatch: AppDispatch) => {
    if (authToken == null) {
      return;
    }
    setUserInfoApi(authToken, { name, email, password })
      .then((res) => {
        console.log("setUserInfoApi", res);
        dispatch({
          type: SET_USER_INFO,
          payload: {
            name: res.user.name,
            email: res.user.email,
            password: res.user.password,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.data.message === "jwt expired") {
          const refreshingToken = localStorage.getItem("refreshToken");
          if (refreshingToken == null) {
            return;
          }
          refreshToken(refreshingToken)
            .then((res) => {
              console.log("refreshToken", res);
              let authToken = res.accessToken.split("Bearer ")[1];
              if (authToken && res.refreshToken) {
                setCookie("authToken", authToken);
                localStorage.setItem("refreshToken", res.refreshToken);
              }
            })
            .catch((err) => console.log(err));
        }
      });
  };
};
