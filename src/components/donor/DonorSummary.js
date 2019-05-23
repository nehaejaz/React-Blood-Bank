import React from "react";
import { Col, Row, Button, Modal } from "react-materialize";

const DonorSummary = ({ donors }) => {
  return (
    <div className="DonorSummary">
      <div className="">
        <Row className="grey">
          <Col s={3}>{donors.name}</Col>
          <Col s={3}>{donors.bloodgrp}</Col>
          <Col s={3}>{donors.location}</Col>
          <Col s={3}>
            <Modal
              header="Modal Header"
              trigger={<Button>View Details</Button>}
            >
              <p>
                {donors.id}
                {donors.name}
                {donors.bloodgrp}
                {donors.location}
              </p>
            </Modal>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DonorSummary;
