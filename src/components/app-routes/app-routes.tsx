import appstyles from "../app/app.module.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { Location } from "history";
import { Constructor } from "../../pages/constructor";
import { Register } from "../../pages/register";
import { Login } from "../../pages/login";
import { ForgotPassword } from "../../pages/forgot-password";
import { ResetPassword } from "../../pages/reset-password";
import { Profile } from "../../pages/profile";
import ProtectedRoute from "../protected-route/protected-route";
import { IngredientDetailsPage } from "../ingredient-details/ingredient-details-page";
import { IngredientDetailsModal } from "../ingredient-details-modal/ingredient-details-modal";
import PublicRoute from "../public-route/public-route";
import { Feed } from "../../pages/feed";
import Header from "../header/header";
import { useAppDispatch } from "../../utils/types";
import { useEffect } from "react";
import { getIngredientsApi } from "../../services/actions/ingredients-actions";

export function AppRoutes() {
  const location = useLocation<{ background: Location }>();
  const background = location.state && location.state.background;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredientsApi());
  }, [dispatch]);
  return (
    <div className={appstyles.page}>
      <Header />
      <Switch location={background || location}>
        <Route exact path="/">
          <Constructor />
        </Route>
        <PublicRoute path="/register">
          <Register />
        </PublicRoute>
        <PublicRoute path="/login">
          <Login />
        </PublicRoute>
        <PublicRoute path="/forgot-password">
          <ForgotPassword />
        </PublicRoute>
        <PublicRoute path="/reset-password">
          <ResetPassword />
        </PublicRoute>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route path="/ingredients/:id">
          <IngredientDetailsPage />
        </Route>
        <ProtectedRoute path="/profile/orders">
          <IngredientDetailsModal />
        </ProtectedRoute>
        <Route path="/feed" exact>
          <Feed />
        </Route>
        <Route path="/feed/:id">
          <div>feed id</div>
        </Route>
        <ProtectedRoute path="/profile/orders" exact>
          <div>profile orders</div>
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders/:id">
          <div>profile orders id</div>
        </ProtectedRoute>
      </Switch>
      {/* Show the modal when a background page is set */}
      {background && (
        <Route path="/ingredients/:id" children={<IngredientDetailsModal />} />
      )}
    </div>
  );
}
