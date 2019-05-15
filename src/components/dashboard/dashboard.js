import React, { Component } from "react";
import LinstingDonor from "../donor/ListingDonor";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <h1>dashboard</h1>
        <LinstingDonor />
      </div>
    );
  }
}

export default Dashboard;
