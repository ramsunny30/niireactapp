import React from "react";
import "./App.css";
export const Login=()=> {
    return (
      <div className="wrapper">
      <div className="form-wrapper">
        <h1>Login</h1>
          <div className="email">
            <label htmlFor="email">User ID</label>
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
              placeholder="Password"
              type="password"
              name="password"
              noValidate
            />
            </div>
            <div className="createAccount">
              <button type="submit">Signin</button>
              <small><a href="http://localhost:3000/Join">Create a new Account?</a></small>
            </div>
      </div>
    </div>
  
    )
}