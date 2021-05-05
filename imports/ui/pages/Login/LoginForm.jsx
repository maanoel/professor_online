import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

import "./styles.css";
export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  return (
    <div className="loginForm">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg"
              alt="Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3>Sign In</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <form action="#" method="post">
                  <div className="form-group first">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group last mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0">
                      <span className="caption">Remember me</span>
                      <input type="checkbox" />
                      <div className="control__indicator"></div>
                    </label>
                    <span className="ml-auto">
                      <a href="#" className="forgot-pass">
                        Forgot Password
                      </a>
                    </span>
                  </div>
                  <input
                    type="submit"
                    value="Log In"
                    className="btn btn-block btn-primary"
                  />
                  <span className="d-block text-left my-4 text-muted">
                    — or login with —
                  </span>
                  <div className="social-login">
                    <a href="#" className="facebook">
                      <span className="icon-facebook mr-3"></span>
                    </a>
                    <a href="#" className="twitter">
                      <span className="icon-twitter mr-3"></span>
                    </a>
                    <a href="#" className="google">
                      <span className="icon-google mr-3"></span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <form onSubmit={submit} className="login-form">
  //     <div>
  //       <label htmlFor="username">Login</label>
  //       <input
  //         type="text"
  //         placeholder="Username"
  //         name="username"
  //         required
  //         onChange={(e) => setUsername(e.target.value)}
  //       />
  //     </div>

  //     <div>
  //       <label htmlFor="password">Senha</label>

  //       <input
  //         type="password"
  //         placeholder="Password"
  //         name="password"
  //         required
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <button type="submit">Log In</button>
  //     </div>
  //   </form>
  // );
};
