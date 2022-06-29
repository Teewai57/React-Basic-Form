import React, { useState } from "react";
import BasicModal from "./Modal"
import "./index.css";



export default function App() {
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }
  

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    PassWord: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false)

  const handleFullNameInputChange = (event) => {
    setValues({...values, fullName:event.target.value})
  }
  const handlePassWordInputChange = (event) => {
    setValues({...values, PassWord:event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email:event.target.value})
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if(values.fullName && values.PassWord && values.email) {
  //     setValid(true);
  //   }
  //   setSubmitted(true)
  // }
  
  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }


  return (
    <div class="form-container">
      <form class="register-form " onSubmit={this.handleSubmit}>
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
          type="password"
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