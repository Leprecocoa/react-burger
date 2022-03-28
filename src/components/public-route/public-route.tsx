import { ComponentType } from "react";
import { Route, Redirect } from "react-router-dom";

function PublicRoute({
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
        return !loggedIn ? <Component {...props} /> : <Redirect to="/" />;
      }}
    </Route>
  );
}

export default PublicRoute;
