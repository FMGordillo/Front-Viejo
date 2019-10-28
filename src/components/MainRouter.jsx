import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Landing from "../pages";
import Info from "../pages/info";
import About from "../pages/about";
import Social from "../pages/social";
import Profile from "../pages/profile";
import Project from "../pages/project";
import HaveNeed from "../pages/haveNeed";
import MainForm from "../pages/register/";
import MainProj from "../pages/register/project";

import PrivateRoute from "./PrivateRoute";

import ListaComponent from "./ListaReut";
import "../styles/style.css";
import { fetchUser, getAllUsers } from "../redux/actions/index";
// import { useAuth0 } from "../react-auth0-spa"

function MainRouter(props) {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      {/*Decidir cual landing va a ir si LandingForm de compornents o landing de pages*/}
      <Route exact path="/info" component={Info} />
      <Route exact path="/about" component={About} />
      <PrivateRoute exact path="/social" component={Social} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute
        exact
        path="/register"
        render={({ history }) => <MainForm history={history} />}
      />
      {/* TODO */}
      <PrivateRoute exact path="/register/proyect" component={MainProj} />
      {/* TODO */}
      <PrivateRoute exact path="/listComp" component={ListaComponent} />
      <PrivateRoute exact path="/haveNeed" component={HaveNeed} />
      <PrivateRoute exact path="/project" component={Project} />
    </Switch>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  users: state.users
});
const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  getAllUsers: () => dispatch(getAllUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainRouter);
