import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
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

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
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
        <Input
        onChange={handlePassWordInputChange}
          id="password"
          class="form-field"
          type={values.showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          value = {values.PassWord}


          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          }

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