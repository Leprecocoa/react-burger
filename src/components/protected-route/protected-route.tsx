import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, path, ...props }: any) {
  return (
    <Route path={path}>
      {() => {
        return props.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    </Route>
  );
}

export default ProtectedRoute;
