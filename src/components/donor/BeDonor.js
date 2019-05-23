import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-materialize";
import "./css/bedonor.css";
import { connect } from "react-redux";
import { donorAction } from "../../store/actions/donorActions";
class BeDonor extends Component {
  state = {
    email: "",
    password: ""
  };
  ChangeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  SubmitHandler = e => {
    e.preventDefault();
    this.props.registerDonor(this.state);
  };
  render() {
    return (
      <div className="Bedonor center">
        <form onSubmit={this.SubmitHandler}>
          <Row className="center">
            <Col className="offset-m3" m={6} s={12}>
              <Card
                className="red lighten-2 bedonor-card"
                textClassName="white-text"
                title="Become a Donor"
              >
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">contact_mail</i>
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      onChange={this.ChangeHandler}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <Button type="submit">Register</Button>
              </Card>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerDonor: donor => dispatch(donorAction(donor))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(BeDonor);
