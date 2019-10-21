import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Landing from "../pages";
import Info from "../pages/info";
import About from "../pages/about";
import Social from "../pages/social";
import Profile from "../pages/profile";
import MainForm from "../pages/register";

import Project from "./Project";
import HaveNeed from "./HaveNeed";
import MainProj from "./Project/Main";
import ListaComponent from "./ListaReut";
import "../styles/style.css";
import { fetchUser, getAllUsers } from "../redux/actions/index";

class MainRouter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false
    };
  }

  componentDidMount() {
    // TODO: Check logged user here
    // this.props.getAllUsers();
    // this.props.fetchUser().then(() => this.setState({ isRegistered: true }));
  }

  render() {
    return this.state.isRegistered ? (
      "Acá va el componente de HOME, falta poner un ComponentDidMount que haga que cuando se carga el MainRouter pregunte si el usuario estÃ¡ registrado y logeado o no"
    ) : (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/about" component={About} />
        <Route exact path="/social" component={Social} />
        <Route exact path="/profile" component={Profile} />
        <Route
          exact
          path="/register"
          render={({ history }) => <MainForm history={history} />}
        />
        {/* TODO */}
        <Route exact path="/register/proyect" component={MainProj} />
        {/* TODO */}
        <Route exact path="/listComp" component={ListaComponent} />
        <Route exact path="/haveNeed" component={HaveNeed} />
        <Route exact path="/project" component={Project} />
      </Switch>
    );
  }
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
