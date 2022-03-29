import { Route, Redirect, RouteProps, useLocation } from "react-router-dom";
import { useAppSelector } from "../../utils/types";

function ProtectedRoute(props: RouteProps) {
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
