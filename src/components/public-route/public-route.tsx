import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAppSelector } from "../../utils/types";

function PublicRoute(props: RouteProps) {
  const { loggedIn } = useAppSelector((state) => ({
    loggedIn: state.user.loggedIn,
  }));
  return (
    <Route
      {...props}
      children={!loggedIn ? props.children : <Redirect to="/login" />}
    />
  );
}

export default PublicRoute;
