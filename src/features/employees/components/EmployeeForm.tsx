import { Formik } from "formik";
import Employee from "../models/employee";
import { object, string as yupString, date } from "yup";
import { useHistory } from "react-router-dom";
import useAddNewEmployee, { NewEmployee } from "../hooks/useAddNewEmployee";
import styleClasses from "./EmployeeForm.module.css";
import {
  Col,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import Panel from "../../../shared/components/UI/Panel";
import Button from "../../../shared/components/UI/Button";

import "react-datepicker/dist/react-datepicker.css";

interface Props {
  employee: Partial<Employee>;
  onFormSubmit: (newEmployee: NewEmployee) => void;
}

const employeeFormSchema = object().shape({
  firstName: yupString()
    .min(3, "Min length is 3")
    .trim()
    .matches(/^[a-zA-Z]+$/, "Only english alphabets are allowed")
    .required("First Name is required"),
  middleName: yupString()
    .min(3, "Min length is 3")
    .trim()
    .matches(/^[a-zA-Z]+$/, "Only english alphabets are allowed")
    .nullable()
    .notRequired(),
  lastName: yupString()
    .min(3, "Min length is 3")
    .trim()
    .matches(/^[a-zA-Z]+$/, "Only english alphabets are allowed")
    .nullable()
    .notRequired(),
  avatar: yupString()
    .url("Must be a valid URL")
    .trim()
    .nullable()
    .notRequired(),
  gender: yupString()
    .oneOf(["M", "F", "T", "O"])
    .required("Gender is required"),
  email: yupString()
    .email("Please enter a valid email")
    .trim()
    .required("Email is required"),
  phone: yupString()
    .trim()
    .required("Phone Number is required")
    .matches(
      new RegExp(/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6-9]\d{9}$/),
      "Invalid Phone Number."
    ),
  permanentAddress: yupString()
    .matches(
      /^[a-zA-Z0-9 ,-/()]*$/,
      "Only alphanumeric characters are allowed. Only , - / ( ) special characters are allowed"
    )
    .nullable()
    .notRequired(),
  currentAddress: yupString()
    .matches(
      /^[a-zA-Z0-9 ,-/()]*$/,
      "Only alphanumeric characters are allowed. Only , - / ( ) special characters are allowed"
    )
    .nullable()
    .notRequired(),
  dateOfJoining: date()
    .required("Date of Joining is required")
    .min(new Date(2000, 1, 1), "Date should be after 2000-01-01"),
  group: yupString().required("Group is required"),
  subGroup: yupString().required("Sub Group is required"),
  designation: yupString().required("Designation is required"),
});

const EmployeeForm = (props: Props) => {
  const { employee, onFormSubmit } = props;

  const initialValues = {
    firstName: employee.firstName || "",
    middleName: employee.middleName || "",
    lastName: employee.lastName || "",
    avatar: employee.avatar || "",
    gender: employee.gender || "",
    email: employee.email || "",
    phone: employee.phone || "",
    currentAddress: employee.currentAddress || "",
    permanentAddress: employee.permanentAddress || "",
    dateOfJoining: employee.dateOfJoining || new Date(),
    group: employee.group || "",
    subGroup: employee.subGroup || "",
    designation: employee.designation || "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={employeeFormSchema}
      validateOnChange
      onSubmit={(values) => {
        onFormSubmit(values);
      }}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Container className={styleClasses.FormContainer}>
            <Panel
              id="personalInfoPanel"
              header="Personal Information"
              collapsible
              errors={errors}
            >
              {/* Name */}
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel>First Name</FormLabel>
                    <FormControl
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.firstName && !!errors.firstName}
                    />
                    {touched.firstName && errors.firstName ? (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl
                      name="middleName"
                      type="text"
                      placeholder="Middle Name"
                      value={values.middleName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.middleName && !!errors.middleName}
                    />
                    {touched.middleName && errors.middleName ? (
                      <div className="invalid-feedback">
                        {errors.middleName}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.lastName && !!errors.lastName}
                    />
                    {touched.lastName && errors.lastName ? (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>

              {/* Avatar */}
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel>Profile Picture</FormLabel>
                    <FormControl
                      name="avatar"
                      type="url"
                      placeholder="Profile Picture URL"
                      value={values.avatar}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.avatar && !!errors.avatar}
                    />
                    {touched.avatar && errors.avatar ? (
                      <div className="invalid-feedback">{errors.avatar}</div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>

              {/* Gender */}
              <Row>
                <FormGroup>
                  <FormLabel>Gender</FormLabel>
                  <div>
                    <FormCheck
                      type="radio"
                      name="gender"
                      label="Male"
                      value="M"
                      onClick={handleChange}
                      onBlur={handleBlur}
                      style={{ display: "inline-block", marginRight: "1em" }}
                      defaultChecked={values.gender === "M"}
                    />
                    <FormCheck
                      type="radio"
                      name="gender"
                      label="Female"
                      value="F"
                      onClick={handleChange}
                      onBlur={handleBlur}
                      style={{ display: "inline-block", marginRight: "1em" }}
                      defaultChecked={values.gender === "F"}
                    />
                    <FormCheck
                      type="radio"
                      name="gender"
                      label="Other"
                      value="O"
                      onClick={handleChange}
                      onBlur={handleBlur}
                      style={{ display: "inline-block", marginRight: "1em" }}
                      defaultChecked={values.gender === "O"}
                    />
                    {touched.gender && errors.gender ? (
                      <div
                        style={{
                          display: "inline-block",
                          color: "#dc3545",
                          fontSize: "0.875em",
                          marginLeft: "1em",
                        }}
                      >
                        {errors.gender}
                      </div>
                    ) : null}
                  </div>
                </FormGroup>
              </Row>

              {/* Email and Phone */}
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      name="email"
                      type="text"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.email && !!errors.email}
                    />
                    {touched.email && errors.email ? (
                      <div className="invalid-feedback">{errors.email}</div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Phone</FormLabel>
                    <FormControl
                      name="phone"
                      type="text"
                      placeholder="Mobile Number"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.phone && !!errors.phone}
                    />
                    {touched.phone && errors.phone ? (
                      <div className="invalid-feedback">{errors.phone}</div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>

              {/* Address */}
              <Row>
                <FormGroup>
                  <FormLabel>Permanent Address</FormLabel>
                  <FormControl
                    as="textarea"
                    rows={5}
                    name="permanentAddress"
                    placeholder="Permanent Address"
                    value={values.permanentAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.permanentAddress && !!errors.permanentAddress
                    }
                  />
                  {touched.permanentAddress && errors.permanentAddress ? (
                    <div className="invalid-feedback">
                      {errors.permanentAddress}
                    </div>
                  ) : null}
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <FormLabel>Current Address</FormLabel>
                  <FormControl
                    as="textarea"
                    rows={5}
                    name="currentAddress"
                    placeholder="Current Address"
                    value={values.currentAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.currentAddress && !!errors.currentAddress
                    }
                  />
                  {touched.currentAddress && errors.currentAddress ? (
                    <div className="invalid-feedback">
                      {errors.currentAddress}
                    </div>
                  ) : null}
                </FormGroup>
              </Row>
            </Panel>

            <Panel
              id="jobProfileInformation"
              collapsible
              header="Job Profile Information"
              errors={errors}
            >
              {/* Date of Joining */}
              <Row>
                <FormGroup>
                  <FormLabel>Date of Joining</FormLabel>
                  <DatePicker
                    selected={values.dateOfJoining}
                    onChange={(date) =>
                      setFieldValue("dateOfJoining", date, true)
                    }
                    onBlur={handleBlur}
                    dateFormat="yyyy-MM-dd"
                    showYearDropdown
                    maxDate={new Date()}
                    scrollableYearDropdown
                  />
                  {touched.dateOfJoining && errors.dateOfJoining ? (
                    <div className="invalid-feedback">
                      {errors.dateOfJoining}
                    </div>
                  ) : null}
                </FormGroup>
              </Row>

              {/* Group and Sub-Group */}
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel>Group</FormLabel>
                    <FormControl
                      name="group"
                      type="text"
                      placeholder="Group"
                      value={values.group}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.group && !!errors.group}
                    />
                    {touched.group && errors.group ? (
                      <div className="invalid-feedback">{errors.group}</div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Sub Group</FormLabel>
                    <FormControl
                      name="subGroup"
                      type="text"
                      placeholder="Sub Group"
                      value={values.subGroup}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.subGroup && !!errors.subGroup}
                    />
                    {touched.subGroup && errors.subGroup ? (
                      <div className="invalid-feedback">{errors.subGroup}</div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>

              {/* Designation */}
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel>Designation</FormLabel>
                    <FormControl
                      name="designation"
                      type="text"
                      placeholder="Designation"
                      value={values.designation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.designation && !!errors.designation}
                    />
                    {touched.designation && errors.designation ? (
                      <div className="invalid-feedback">
                        {errors.designation}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
            </Panel>
            <Button
              variant="success"
              style={{ margin: "20px" }}
              type="submit"
            >
              Submit
            </Button>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default EmployeeForm;
