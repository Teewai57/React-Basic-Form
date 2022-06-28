import React, { useState } from "react";
import BasicModal from "./Modal"
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false)

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName:event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName:event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email:event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true)
  }

  return (
    <div class="form-container">
      <form class="register-form " onSubmit={handleSubmit}>
        {submitted && valid ? <BasicModal name = {values.firstName} /> :null}
        <input
        onChange={handleFirstNameInputChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
        />
        {submitted && !values.firstName ? <span>Please enter a First name</span> :null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
        onChange={handleLastNameInputChange}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value = {values.lastName}
        />
        {submitted && !values.lastName ? <span>Please enter a last name</span> :null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
        onChange={handleEmailInputChange}
          id="email"
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
          value = {values.email}
        />
        {submitted && !values.email ? <span>Please enter an email address</span> :null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
        
        
      </form>
    </div>
  );
}