import { Reducer } from "redux";
import {
  USER_REGISTER,
  USER_SET_DATA,
  USER_LOGIN,
  USER_LOGOUT,
  GET_USER_INFO,
  SET_USER_INFO,
} from "../actions/user-actions";

type TUserState = {
  email: string;
  password: string;
  name: string;
  loggedIn: boolean;
};

const userInitialState: TUserState = {
  email: "",
  password: "",
  name: "",
  loggedIn: !!localStorage.getItem("refreshToken"),
};

export const userReducer: Reducer<TUserState> = (
  state = userInitialState,
  action
) => {
  switch (action.type) {
    case USER_REGISTER: {
      return {
        ...state,
        email: action.payload.email ?? state.email,
        password: action.payload.password ?? state.password,
        name: action.payload.name ?? state.name,
      };
    }
    case USER_SET_DATA: {
      return {
        ...state,
        email: action.payload.email ?? state.email,
        password: action.payload.password ?? state.password,
      };
    }
    case USER_LOGIN: {
      return {
        ...state,
        loggedIn: true,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        email: "",
        password: "",
        loggedIn: false,
      };
    }
    case GET_USER_INFO: {
      return {
        ...state,
        email: action.payload.email ?? state.email,
        name: action.payload.name ?? state.name,
      };
    }
    case SET_USER_INFO: {
      return {
        ...state,
        email: action.payload.email ?? state.email,
        name: action.payload.name ?? state.name,
        password: action.payload.password ?? state.password,
      };
    }
    default:
      return state;
  }
};
