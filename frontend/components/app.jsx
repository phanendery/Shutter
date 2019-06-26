import React from "react";
import { AuthRoute } from "../util/route_util";
import NavBar from "./navbar/nav_bar_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import PictureIndexContainer from "./pictures/picture_index_container";
import HomeContainer from "./home/home_container";
import PictureShowContainer from "./pictures/picture_show/picture_show_container";
import PictureUploadContainer from "./pictures/picture_upload/picture_upload_container";
import UserContainer from "./users/user_container";
import AvatarContainer from "./avatar/avatar_container";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <div>
    <header />
    <NavBar />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/avatar" component={AvatarContainer} />
      <Route exact path="/users/:userId" component={UserContainer} />
      <Route exact path="/pictures/new" component={PictureUploadContainer} />
      <Route
        exact
        path="/pictures/:pictureId"
        component={PictureShowContainer}
      />
      <Route exact path="/pictures" component={PictureIndexContainer} />
      <Route exact path="/" component={HomeContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
