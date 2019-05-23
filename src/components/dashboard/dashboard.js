import React, { Component } from "react";
import LinstingDonor from "../donor/ListingDonor";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { donors } = this.props;
    return (
      <div className="Dashboard">
        <h1>dashboard</h1>
        <LinstingDonor donors={donors} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    donors: state.donor.donors
  };
};

export default connect(mapStateToProps)(Dashboard);
