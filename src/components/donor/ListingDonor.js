import React from "react";
import DonorSummary from "./DonorSummary";
import { Col, Row, Card } from "react-materialize";

const ListingDonor = ({ donors }) => {
  return (
    <div className="ListingDonor">
      <Row>
        <Col m={12} s={12}>
          <Card
            className="blue-grey darken-1 center"
            textClassName="white-text"
            title="Dashboard"
          >
            <Row>
              <Col s={3} className=" white-text">
                Name
              </Col>
              <Col s={3} className=" white-text">
                BloodGroup
              </Col>
              <Col s={3} className=" white-text">
                Location
              </Col>
              <Col s={3} className=" white-text">
                Details
              </Col>
            </Row>
            {donors &&
              donors.map(donors => {
                return <DonorSummary donors={donors} key={donors.id} />;
              })}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default ListingDonor;
