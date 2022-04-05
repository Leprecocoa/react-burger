import {
  register,
  login,
  logout,
  getUserInfoApi,
  refreshToken,
  setUserInfoApi,
} from "../../utils/api";
import { AppThunk, AppDispatch } from "../../utils/types";
import { getCookie, setCookie } from "../../utils/utils";
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
) => AppThunk<Promise<void>> = (email, password, name, history) => {
  return async () => {
    try {
      const res = await register({ email, password, name });
      console.log("registerUser", res);
      history.push("/login");
    } catch (err) {
      console.error(err);
    }
  };
};

export const loginUser: (
  email: string,
  password: string,
  history: History<LocationState>
) => AppThunk<Promise<void>> = (email, password, history) => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await login({ email, password });
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
    } catch (err) {
      console.error(err);
    }
  };
};

export const logoutUser: (
  history: History<LocationState>
) => AppThunk<Promise<void>> = (history) => {
  return async (dispatch: AppDispatch) => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken == null) {
        dispatch({
          type: USER_LOGOUT,
        });
        history.push("/login");
        return;
      }
      const res = await logout(refreshToken);
      console.log("logoutUser", res);
      if (res.success) {
        localStorage.removeItem("refreshToken");
        dispatch({
          type: USER_LOGOUT,
        });
        history.push("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };
};

export const getUserInfo: (
  history: History<LocationState>,
  retry?: boolean
) => AppThunk<Promise<void>> = (history, retry = true) => {
  return async (dispatch: AppDispatch) => {
    try {
      let authToken = getCookie("authToken");
      if (authToken == null && retry) {
        await dispatch(actionRefreshToken());
        await dispatch(getUserInfo(history, false));
        return;
      }
      if (authToken == null) {
        await dispatch(logoutUser(history));
        return;
      }
      const res = await getUserInfoApi(authToken);
      console.log("getUserInfoApi", res);
      dispatch({
        type: GET_USER_INFO,
        payload: {
          name: res.user.name,
          email: res.user.email,
        },
      });
    } catch (err: any) {
      console.error(err);
      if (err.data.message === "jwt expired" && retry) {
        try {
          await dispatch(actionRefreshToken());
          await dispatch(getUserInfo(history, false));
        } catch (err) {
          console.error(err);
        }
      }
    }
  };
};

export const setUserInfo: (
  name: string,
  email: string,
  password: string,
  history: History<LocationState>,
  retry?: boolean
) => AppThunk<Promise<void>> = (name, email, password, history, retry = true) => {
  return async (dispatch: AppDispatch) => {
    try {
      let authToken = getCookie("authToken");

      if (authToken == null && retry) {
        await dispatch(actionRefreshToken());
        await dispatch(setUserInfo(name, email, password, history, false));
        return;
      }

      if (authToken == null) {
        await dispatch(logoutUser(history));
        return;
      }

      const res = await setUserInfoApi(authToken, { name, email, password });
      console.log("setUserInfoApi", res);
      dispatch({
        type: SET_USER_INFO,
        payload: {
          name: res.user.name,
          email: res.user.email,
          password: res.user.password,
        },
      });
    } catch (err: any) {
      console.error(err);
      if (err.data.message === "jwt expired" && retry) {
        try {
          await dispatch(actionRefreshToken());
          await dispatch(setUserInfo(name, email, password, history, false));
        } catch (err) {
          console.error("err");
        }
      }
    }
  };
};

export const actionRefreshToken: () => AppThunk<Promise<void>> = () => {
  return async () => {
    try {
      const refreshingToken = localStorage.getItem("refreshToken");
      if (refreshingToken == null) {
        return;
      }
      const res = await refreshToken(refreshingToken);
      let authToken = res.accessToken.split("Bearer ")[1];
      if (authToken && res.refreshToken) {
        setCookie("authToken", authToken);
        localStorage.setItem("refreshToken", res.refreshToken);
      }
    } catch (err) {
      console.error(err);
    }
  };
};
