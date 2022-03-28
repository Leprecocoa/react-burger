import { Route, Redirect } from "react-router-dom";

function PublicRoute({ component: Component, path, ...props }: any) {
  return (
    <Route path={path}>
      {() => {
        return !props.loggedIn ? <Component {...props} /> : <Redirect to="/" />;
      }}
    </Route>
  );
}

export default PublicRoute;
