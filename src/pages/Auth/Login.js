import React from "react";
import "../../styles/login.css";

function Login() {
  return (
    <div>
      <div class="row">
        {/* <!-- left side --> */}
        <div class="col-6 background-login">
          <div>
            <img src="./images/logo.png" width="150px" height="150px" />
            <p class="text-white text-center mt-2">Mama Recipe.</p>
          </div>
        </div>
        {/* <!-- right side --> */}
        <div class="col-6 form-login">
          <div>
            <h1>Welcome</h1>
            <p>Log in into your exiting account</p>

            <div class="mb-3 form-width">
              <label for="email-input" class="form-label">
                E-mail
              </label>
              <input
                type="email"
                class="form-control form-control-lg"
                id="email-input"
                placeholder="Enter your email"
              />
            </div>

            <div class="mb-3 form-width">
              <label for="password-input" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control form-control-lg"
                id="password-input"
                placeholder="Enter your password"
              />
            </div>

            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="agrement"
              />
              <label class="form-check-label" for="flexCheckDefault">
                I agree to terms & conditions
              </label>
            </div>

            <div class="d-grid">
              <button type="button" class="btn btn-primary btn-lg btn-warning">
                Log in
              </button>
            </div>

            <a class="forgot" href="forgot.html">
              Forgot Password ?
            </a>

            <p class="dont-have-account">
              Don’t have an account?
              <a class="sign-up" href="sign-up.html">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
