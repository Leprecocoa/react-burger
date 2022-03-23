import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }: any) {
  return (
    <Route>
      {() => {
        return !props.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    </Route>
  );
}

export default ProtectedRoute;
