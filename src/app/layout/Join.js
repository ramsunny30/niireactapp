import React from "react";
//import ReactDOM from 'react-dom';
import "./App.css";

export const Join=()=> {
    return (
      <div className="wrapper">
      <div className="form-wrapper1">
        <h1>Signup</h1>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                placeholder="Your First Name"
                type="text"
                name="firstName"
                noValidate
              />
            </div>
            <div className="firstName">
              <label htmlFor="firstName">Middle Name</label>
              <input
                placeholder="Your First Name"
                type="text"
                name="middleName"
                noValidate
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder="Your Last Name"
                type="text"
                name="lastName"
                noValidate
              />
            </div>
          
          <div className="email">
            <label htmlFor="email">Email ID</label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              noValidate
            />
            </div>
            <div className="password">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password (min 8 characters)"
              type="password"
              name="password"
              noValidate
            />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Phone number</label>
              <input
                placeholder="Your Last Name"
                type="number"
                name="phonenumber"
                noValidate
              />
            </div>
            <div className="createAccount">
              <button type="submit">Signup</button>
              <div className="createAccount">
              <small>By signing up, I agree to NII's Terms of Service</small>
              <small>Already have an account? <a href="http://localhost:3000/Login">Log in »</a> </small>
            </div>
            </div>
            <div id="fb-root"></div>
      </div>
    </div>
  
    )
}