import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-materialize";

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
    console.log(this.state);
  };
  render() {
    return (
      <div className="SignIn center">
        <form onSubmit={this.SubmitHandler}>
          <Row className="center">
            <Col className="" m={6} s={12}>
              <Card
                className="blue-grey darken-1"
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
export default BeDonor;
