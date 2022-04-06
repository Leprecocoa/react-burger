import { useEffect } from "react";
import { Route, Redirect, RouteProps, useLocation, useHistory } from "react-router-dom";
import { getUserInfo } from "../../services/actions/user-actions";
import { useAppDispatch, useAppSelector } from "../../utils/types";

function ProtectedRoute(props: RouteProps) {
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserInfo(history));
  }, [dispatch, history]);

  const { loggedIn } = useAppSelector((state) => ({
    loggedIn: state.user.loggedIn,
  }));

  const location = useLocation();

  return (
    <Route
      {...props}
      children={
        loggedIn ? (
          props.children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

export default ProtectedRoute;
