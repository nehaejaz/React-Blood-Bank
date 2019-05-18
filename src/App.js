import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/dashboard";
import SignIn from "./components/auth/SiginIn";
import SignUp from "./components/auth/SignUp";
import BeDonor from "./components/donor/BeDonor";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/beDonor" component={BeDonor} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
