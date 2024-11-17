import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";

function App() {
  const validationSchema = Yup.object().shape({
    fname: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters long"),
    mname: Yup.string()
      .required("Middle name is required")
      .min(2, "Middle name must be at least 2 characters long"),
    lname: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters long"),
    address: Yup.string().required("Address is required"),
    apartment: Yup.string().required("Apartment is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    zip_code: Yup.string().required("Zip-Code is required"),
    cno: Yup.string()
      .required("Contact number is required")
      .matches(/^[0-9]{10}$/, "Contact number must be exactly 10 digits"),
    email: Yup.string().required("Email is required"),
    gender: Yup.string()
      .required("Gender is required")
      .oneOf(["Male", "Female", "Other"], "Invalid gender selection"),
    photo: Yup.string().required("Photo is required"),
    aadhar: Yup.string()
      .required("AadharCard is required")
      .matches(/^\d{4}\s\d{4}\s\d{4}$/, "Invalid Aadharcard number"),
    declare: Yup.string().required("Declaration is required"),
  });

  return (
    <div className="App">
      <Formik
        initialValues={{
          fname: "",
          mname: "",
          lname: "",
          address: "",
          apartment: "",
          city: "",
          country: "",
          state: "",
          zip_code: "",
          cno: "",
          email: "",
          gender: "",
          photo: "",
          aadhar: "",
          declare: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          localStorage.setItem("Basic-Information", JSON.stringify(values));
          alert("Your data are stored in LocalStorage");
          setSubmitting(false);
        }}
      >
        {(onSubmitting) => (
          <Form>
            <h1 className="text-center my-4 bg-info-subtle text-info-emphasis ">
              Basic Information
            </h1>
            <div className="container-fluid px-5">
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="fname" className="form-label fs-5">
                      First Name
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="fname"
                      placeholder="Enter first name"
                      name="fname"
                    />
                    <ErrorMessage
                      name="fname"
                      component="div"
                      className="error-msg"
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="mname" className="form-label fs-5">
                      Middle Name
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="mname"
                      placeholder="Enter middle name"
                      name="mname"
                    />
                    <ErrorMessage
                      name="mname"
                      component="div"
                      className="error-msg"
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="lname" className="form-label fs-5">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="lname"
                      placeholder="Enter last name"
                      name="lname"
                    />
                    <ErrorMessage
                      name="lname"
                      component="div"
                      className="error-msg"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4">
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label fs-5">
                      Address
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter address"
                      name="address"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="error-msg"
                    />
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="mb-3">
                    <label htmlFor="apartment" className="form-label fs-5">
                      Apartment
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="apartment"
                      placeholder="Enter apartment"
                      name="apartment"
                    />
                    <ErrorMessage
                      name="apartment"
                      component="div"
                      className="error-msg"
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label fs-5">
                      City
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="Enter city"
                      name="city"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="error-msg"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="select" className="form-label fs-5">
                      Country
                    </label>
                    <Field
                      as="select"
                      className="form-select"
                      id="select"
                      name="country"
                    >
                      <option value="">Select Your Country</option>
                      <option value="United-States">United States</option>
                      <option value="India">India</option>
                      <option value="United-Kingdom">United Kingdom</option>
                      <option value="Japan">Japan</option>
                      <option value="China">China</option>
                      <option value="Russia">Russia</option>
                      <option value="Canada">Canada</option>
                    </Field>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="error-msg"
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="state" className="form-label fs-5">
                      State
                    </label>
                    <Field
                      as="select"
                      className="form-select"
                      id="select"
                      name="state"
                    >
                      <option value="">Select Your State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                    </Field>
                    <ErrorMessage
                      name="state"
                      component="div"
                      className="error-msg"
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="zip_code" className="form-label fs-5">
                      Zip Code
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="zip_code"
                      placeholder="Enter zip code"
                      name="zip_code"
                    />
                    <ErrorMessage
                      name="zip_code"
                      component="div"
                      className="error-msg"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="cno" className="form-label fs-5">
                      Contact Number
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="cno"
                      placeholder="Enter contact number"
                      name="cno"
                    />
                    <ErrorMessage
                      name="cno"
                      component="div"
                      className="error-msg"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fs-5">
                      Email Address
                    </label>
                    <Field
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email address"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-msg"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-md-12 ">
                  <label htmlFor="gender" className="form-label fs-5">
                    Gender
                  </label>
                  <div className="row my-2">
                    <div className="col-xl-3 col-md-3">
                      <div className="form-check form-check-inline d-flex justify-content-center align-items-center gap-2">
                        <Field
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="male"
                          value="Male"
                        />
                        <label className="form-check-label fs-5" htmlFor="male">
                          Male
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-3">
                      <div className="form-check form-check-inline d-flex justify-content-center align-items-center gap-2">
                        <Field
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="female"
                          value="Female"
                        />
                        <label
                          className="form-check-label fs-5"
                          htmlFor="female"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-3">
                      <div className="form-check form-check-inline d-flex justify-content-center align-items-center gap-2">
                        <Field
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="other"
                          value="Other"
                        />
                        <label
                          className="form-check-label fs-5"
                          htmlFor="other"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="error-msg"
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <label className="form-label fs-5" htmlFor="photo">
                    Choose Passport size photo
                  </label>
                  <Field
                    type="file"
                    id="photo"
                    className="form-control"
                    name="photo"
                  />
                  <ErrorMessage
                    name="photo"
                    component="div"
                    className="error-msg"
                  />
                </div>
                <div className="col-xl-4 col-md-6">
                  <label className="form-label fs-5" htmlFor="aadhar">
                    AadharCard Number
                  </label>
                  <Field
                    type="text"
                    id="aadhar"
                    className="form-control"
                    placeholder="Enter your aadharcard number"
                    name="aadhar"
                  />
                  <ErrorMessage
                    name="aadhar"
                    component="div"
                    className="error-msg"
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-xl-12 form-check form-check-inline d-flex justify-content-center align-items-center gap-2">
                  <Field
                    type="checkbox"
                    className="form-check-input"
                    id="check"
                    name="declare"
                  />
                  <label className="form-check-label fs-5" htmlFor="check">
                    I hereby declare that all Information are correct.
                  </label>
                  <ErrorMessage
                    name="declare"
                    component="div"
                    className="error-msg"
                  />
                </div>
              </div>
              <div className="row mt-4 mb-5">
                <div className="d-grid col-xl-2 col-md-4 mx-auto">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
