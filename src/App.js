import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import BasicModal from "./Modal"
import "./index.css";



export default function App() {
  
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    PassWord: "",
    showPassword: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false)

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleFullNameInputChange = (event) => {
    setValues({...values, fullName:event.target.value})
  }
  const handlePassWordInputChange = (event) => {
    setValues({...values, PassWord:event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email:event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.fullName && values.PassWord && values.email) {
      setValid(true);
    }
    setSubmitted(true)
  }

  return (
    <div class="form-container">
      <form class="register-form " onSubmit={handleSubmit}>
        {submitted && valid ? <BasicModal name = {values.fullName} /> :null}
        <input
        onChange={handleFullNameInputChange}
          id="full-name"
          class="form-field"
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={values.firstName}
        />
        {submitted && !values.fullName ? <span>Please enter a Fullname</span> :null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
        onChange={handlePassWordInputChange}
          id="password"
          class="form-field"
          type={values.showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          value = {values.PassWord}
        />
        {submitted && !values.PassWord ? <span>Please enter a last name</span> :null}
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