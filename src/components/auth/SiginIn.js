import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-materialize";

class SignIn extends Component {
  state = {
    email: [],
    password: []
  };
  render() {
    return (
      <div className="SignUp center">
        <Row>
          <Col className="offset-m6" m={6} s={12}>
            <Card
              className="blue-grey darken-1"
              textClassName="white-text"
              title="Sign In"
            >
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">contact_mail</i>
                  <input id="email" type="email" class="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">lock</i>
                  <input id="password" type="password" class="validate" />
                  <label for="password">Password</label>
                </div>
              </div>
              <Button>Submit</Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default SignIn;
