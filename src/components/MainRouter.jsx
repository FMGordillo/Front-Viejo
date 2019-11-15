import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
// import { useAuth0 } from "../react-auth0-spa"

const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

function MainRouter(props) {
  const { location } = useHistory();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={duration}
        classNames="react-transition"
      >
        <Switch location={location}>
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
      </CSSTransition>
    </TransitionGroup>
  );
}

export default MainRouter;
