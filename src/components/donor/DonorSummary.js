import React, { Component } from "react";
import { Col, Row, Button, Modal } from "react-materialize";

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
              <Modal
                header="Modal Header"
                trigger={<Button>View Details</Button>}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </Modal>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default DonorSummary;
