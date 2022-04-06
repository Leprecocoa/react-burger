import appstyles from "../app/app.module.css";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
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
import Header from "../header/header";
import { useAppDispatch } from "../../utils/types";
import React, { useEffect } from "react";
import { getIngredientsApi } from "../../services/actions/ingredients-actions";
import { FeedDetails } from "../../pages/feed-details";
import { ProfileFeedDetails } from "../../pages/profile-feed-details";
import { FeedDetailsModal } from "../feed-details-modal/feed-details-modal";
import { ProfileFeedDetailsModal } from "../profile-feed-details-modal/profile-feed-details-modal";
import { Feed } from "../../pages/feed";
import { ProfileFeed } from "../../pages/profile-feed";
import { Test } from "../../pages/test";
import { getUserInfo } from "../../services/actions/user-actions";

export function AppRoutes() {
  const location = useLocation<{ background: Location }>();
  const background = location.state && location.state.background;
  const dispatch = useAppDispatch();
  const history = useHistory();

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
        <Route path="/ingredients/:id">
          <IngredientDetailsPage />
        </Route>
        <Route path="/feed" exact>
          <Feed />
        </Route>
        <Route path="/feed/:id">
          <FeedDetails />
        </Route>
        <ProtectedRoute path="/profile" exact>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders" exact>
          <ProfileFeed />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders/:id">
          <ProfileFeedDetails />
        </ProtectedRoute>
        <Route>
          <Test />
        </Route>
      </Switch>

      {background && (
        <React.Fragment>
          <Route
            path="/ingredients/:id"
            children={<IngredientDetailsModal />}
          />
          <Route path="/feed/:id" children={<FeedDetailsModal />} />
          <ProtectedRoute path="/profile/orders/:id">
            <ProfileFeedDetailsModal />
          </ProtectedRoute>
        </React.Fragment>
      )}
    </div>
  );
}
