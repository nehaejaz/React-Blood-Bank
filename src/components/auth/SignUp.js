import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-materialize";
import "./signup.css";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    retypepassword: ""
  };

  ChangeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  SubmitHandler = e => {
    e.preventDefault();
    const { password, retypepassword } = this.state;

    password === retypepassword
      ? console.log("match")
      : console.log("no match");
  };
  render() {
    return (
      <div className="SignUp center">
        <form onSubmit={this.SubmitHandler}>
          <Row>
            <Col className="offset-m3" m={6} s={12}>
              <Card
                className="red lighten-2 signup-card"
                textClassName="white-text"
                title="Sign Up"
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
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">lock</i>
                      <input
                        id="retypepassword"
                        type="password"
                        className="validate"
                        onChange={this.ChangeHandler}
                      />
                      <label htmlFor="password">Retype Password</label>
                    </div>
                  </div>
                </div>
                <Button className="center" type="submit">
                  Submit
                </Button>
              </Card>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}
export default SignUp;
