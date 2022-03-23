import appstyles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Constructor } from "../../pages/constructor";
import { Register } from "../../pages/register";
import { Login } from "../../pages/login";
import { ForgotPassword } from "../../pages/forgot-password";
import { ResetPassword } from "../../pages/reset-password";
import { Profile } from "../../pages/profile";
import { useAppSelector } from "../../utils/types";
import ProtectedRoute from "../protected-route/protected-route";

function App() {
  const { loggedIn } = useAppSelector((state) => {
    return {
      loggedIn: state.user.loggedIn,
    };
  });
  return (
    <BrowserRouter>
      <div className={appstyles.page}>
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            loggedIn={loggedIn}
            component={Constructor}
          />
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
