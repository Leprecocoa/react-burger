import appstyles from "../app/app.module.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { Location } from "history";
import { Constructor } from "../../pages/constructor";
import { Register } from "../../pages/register";
import { Login } from "../../pages/login";
import { ForgotPassword } from "../../pages/forgot-password";
import { ResetPassword } from "../../pages/reset-password";
import { Profile } from "../../pages/profile";
import { useAppSelector } from "../../utils/types";
import ProtectedRoute from "../protected-route/protected-route";
import { IngredientDetailsPage } from "../ingredient-details/ingredient-details-page";
import { IngredientDetailsModal } from "../ingredient-details-modal/ingredient-details-modal";
import PublicRoute from "../public-route/public-route";

export function AppRoutes() {
  const { loggedIn } = useAppSelector((state) => {
    return {
      loggedIn: state.user.loggedIn,
    };
  });
  let location = useLocation<{ background: Location }>();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;
  return (
    <div className={appstyles.page}>
      <Switch location={background || location}>
        <Route exact path="/">
          <Constructor />
        </Route>
        <PublicRoute
          path="/register"
          component={Register}
          loggedIn={loggedIn}
        />
        <PublicRoute path="/login" component={Login} loggedIn={loggedIn} />
        <PublicRoute
          path="/forgot-password"
          component={ForgotPassword}
          loggedIn={loggedIn}
        />
        <PublicRoute
          path="/reset-password"
          component={ResetPassword}
          loggedIn={loggedIn}
        />
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
        />
        <ProtectedRoute
          loggedIn={loggedIn}
          path="/ingredients/:id"
          component={IngredientDetailsPage}
        />
      </Switch>
      {/* Show the modal when a background page is set */}
      {background && (
        <Route path="/ingredients/:id" children={<IngredientDetailsModal />} />
      )}
    </div>
  );
}
