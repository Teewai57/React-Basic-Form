import React from "react";

export default LoggedIn() {
    return(
        <div class="form-container">
        <form class="register-form " onSubmit={handleSubmit}>
          {submitted && valid ? <div className="success-message">Success! Thank you {values.firstName} for registering</div> :null}
          {/* Uncomment the next line to show the success message */}
          {/* <div class="success-message">Success! Thank you for registering</div> */}
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
            type="text"
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
    )
}