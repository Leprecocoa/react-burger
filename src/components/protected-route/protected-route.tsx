import { ComponentType } from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({
  component: Component,
  path,
  loggedIn,
  ...props
}: {
  loggedIn: boolean;
  path: string;
  component: ComponentType;
}) {
  return (
    <Route path={path}>
      {() => {
        return loggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    </Route>
  );
}

export default ProtectedRoute;
