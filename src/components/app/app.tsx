import appstyles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Constructor } from "../../pages/constructor";
import { Register } from "../../pages/register";
import { Login } from "../../pages/login";
import { ForgotPassword } from "../../pages/forgot-password";
import { ResetPassword } from "../../pages/reset-password";
import { Profile } from "../../pages/profile";

function App() {
  return (
    <BrowserRouter>
      <div className={appstyles.page}>
        <Switch>
          <Route path="/" exact>
            <Constructor />
          </Route>
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
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
