import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../utils/types";
import { getUserInfo } from "../actions/user-actions";

export function useUserInfo() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserInfo(history));
  }, [dispatch, history]);
}
