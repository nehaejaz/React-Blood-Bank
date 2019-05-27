import React from "react";
import "./css/bedonor.css";
import { donorActions } from "../../store/actions/donorActions";
import { connect } from "react-redux";
import {
  Card,
  Col,
  Row,
  Button,
  Select,
  DatePicker,
  TextInput
} from "react-materialize";
import { Formik, Form, Field, ErrorMessage } from "formik";

const BeDonor = props => (
  <div className="Bedonor">
    <Formik
      initialValues={{
        FirstName: "",
        LastName: "",
        Gender: null,
        Age: "",
        BloodGroup: "",
        Contact: "",
        City: "",
        Country: "",
        myRadioGroup: ""
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
        // props.RegistereDonor(values);
        console.log(values);
        setSubmitting(false);
        // }, 400);
      }}
    >
      {({ isSubmitting, values, handleChange }) =>
        console.log(values) || (
          <Form>
            <Row className="">
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
                      <Field
                        type="text"
                        name="LastName"
                        placeholder="LastName"
                      />
                      <ErrorMessage name="LastName" component="div" />
                    </div>
                  </div>
                  <div>
                    <h5>Gender</h5>
                    <p>
                      <label>
                        <input
                          className="with-gap"
                          name="Gender"
                          type="radio"
                          onClick={e => (values.Gender = "female")}
                        />
                        <span className="white-text">Female</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input
                          className="with-gap"
                          name="Gender"
                          type="radio"
                          onClick={e => (values.Gender = "male")}
                        />
                        <span className="white-text">Male</span>
                      </label>
                    </p>
                  </div>
                  <div className="row white-text">
                    <h5>BloodGroup</h5>
                    <Select
                      className="white-text"
                      value=""
                      icon="invert_colors"
                    >
                      <option className="white-text" value="" disabled>
                        Choose your option
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Select>
                  </div>
                  <div className="row">
                    <DatePicker
                      className="blue-text"
                      placeholder="BirthDate"
                      icon="cake"
                    />
                  </div>
                  <div className="row">
                    <TextInput
                      label="Contact number"
                      data-length={11}
                      icon="contact_phone"
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    Register
                  </Button>
                </Card>
              </Col>
            </Row>
          </Form>
        )
      }
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
