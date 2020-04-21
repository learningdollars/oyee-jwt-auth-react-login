import React, { Component } from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import { Provider } from "react-redux";
import Login from "./containers/auth/Login";
import Registration from "./containers/registration/Registration";
import SideBar from "./containers/commons/SideBar";
import TopNav from "./containers/commons/TopNav";
import store from "./redux/store/store";
import Dashboard from "./containers/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <TopNav />
            <SideBar />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/home" exact component={Dashboard} />
              <Route path="/register" exact component={Registration} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
