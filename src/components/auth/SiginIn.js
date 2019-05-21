import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-materialize";
import "./signin.css";

class SignIn extends Component {
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
          <Row>
            <Col className="offset-m6" m={6} s={12}>
              <Card
                className="red lighten-2 signin-card"
                textClassName="white-text"
                title="Sign In"
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
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">lock</i>
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      onChange={this.ChangeHandler}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <Button type="submit">Submit</Button>
              </Card>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}
export default SignIn;
