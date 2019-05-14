import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Link } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <BrowserRouter>
        <Switch>
          <Link to={{ pathname: "/dashboard" }} component={Dashboard} />
          <Link to={{ pathname: "" }} component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
