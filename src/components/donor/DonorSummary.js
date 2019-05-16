import React, { Component } from "react";
import { Col, Row, Button } from "react-materialize";

class DonorSummary extends Component {
  render() {
    return (
      <div className="DonorSummary">
        <div className="">
          <Row className="grey">
            <Col s={3}>Neha</Col>
            <Col s={3}>A+</Col>
            <Col s={3}>Karachi,Pakistan</Col>
            <Col s={3}>
              <Button>View Details</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default DonorSummary;
