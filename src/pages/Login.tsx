import React from "react";

const Login = () => {
  return (
    <section id="login">
      <div id="group">
        <div className="text-center img-responsive img1">
          {/* <img src="images/Logo/white-logo.png" /> */}
        </div>
        <div className="form-box">
          <form>
            <h2 className="form-heading">Login</h2>
            <p className="form-sub-heading">
              Enter email address and password for login
            </p>
            <div className="form-group" id="email">
              <label className="control-label">Email</label>
              <div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="emailtext"
                  placeholder="Enter email address"
                  required
                />
              </div>
            </div>
            <div className="form-group" id="password">
              <label className="control-label">Password</label>
              <label id="forgot">
                <a href="forgot.html">Forgot Password?</a>
              </label>
              <div>
                <input
                  id="password-field"
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <span className="field-icon toggle-password" id="icon">
                  {/* <img src="images/icon/eye.png" /> */}
                </span>
              </div>
            </div>
            <div className="invalid-text">
              The password that you've entered is incorrect
            </div>
            <div className="form-group form-check" id="checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <br />
            <p className="form-last-heading">
              Don't have an account?<a href="signup.html">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
