import React from "react";
import "./css/bedonor.css";
import { donorActions } from "../../store/actions/donorActions";
import { connect } from "react-redux";
import { Card, Col, Row, Button } from "react-materialize";
import { Formik, Form, Field, ErrorMessage } from "formik";

const BeDonor = props => (
  <div className="Bedonor">
    <Formik
      initialValues={{
        FirstName: "",
        LastName: "",
        Age: "",
        BloodGroup: "",
        Contact: "",
        City: "",
        Country: ""
      }}
      validate={values => {
        let errors = {};
        if (!values.FirstName) {
          errors.FirstName = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.FirstName)
        ) {
          errors.FirstName = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
        props.RegistereDonor(values);
        setSubmitting(false);
        // }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Row className="center">
            <Col className="offset-m2" m={8} s={12}>
              <Card
                className="red lighten-2 bedonor-card"
                textClassName="white-text"
                title="Become a Donor"
              >
                <div className="row">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">contact_mail</i>
                    <Field
                      type="text"
                      name="FirstName"
                      placeholder="FirstName"
                    />
                    <ErrorMessage name="FirstName" component="div" />
                  </div>
                  <div className="input-field col s6">
                    <i className="material-icons prefix">contact_mail</i>
                    <Field type="text" name="LastName" placeholder="LastName" />
                    <ErrorMessage name="LastName" component="div" />
                  </div>
                </div>
                {/* <button type="submit" disabled={isSubmitting}>
                  Submit
                </button> */}
                <Button type="submit" disabled={isSubmitting}>
                  Register
                </Button>
              </Card>
            </Col>
          </Row>
          {/* <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" /> */}
        </Form>
      )}
    </Formik>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    RegistereDonor: donor => dispatch(donorActions(donor))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BeDonor);
