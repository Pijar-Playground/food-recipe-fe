import React from "react";
import "../../styles/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  // check if already login
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const token = localStorage.getItem("token");

    if (isLogin && token) {
      navigate("/"); // navigate to home
    }
  }, []);

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

            {isError ? (
              <div class="alert alert-danger" role="alert">
                {errMsg}
              </div>
            ) : null}

            <div class="mb-3 form-width">
              <label for="email-input" class="form-label">
                E-mail
              </label>
              <input
                type="email"
                class="form-control form-control-lg"
                id="email-input"
                placeholder="Enter your email"
                onChange={(event) => setEmail(event.target.value)}
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
                onChange={(event) => setPassword(event.target.value)}
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
              <button
                type="button"
                class="btn btn-primary btn-lg btn-warning"
                disabled={isLoading}
                onClick={() => {
                  setIsLoading(true);
                  axios
                    .post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`, {
                      email,
                      password,
                    })
                    .then((res) => {
                      localStorage.setItem("isLogin", "true");
                      localStorage.setItem(
                        "token",
                        res?.data?.data?.token ?? ""
                      );
                      localStorage.setItem(
                        "profile",
                        JSON.stringify(res?.data?.data?.profile)
                      );
                      navigate("/"); // navigate to home
                    })
                    .catch((err) => {
                      setIsError(true);
                      setErrMsg(
                        err?.response?.data?.message ??
                          "System error, try again later."
                      );
                    })
                    .finally(() => setIsLoading(false));
                }}
              >
                {isLoading ? "Loading..." : "Log in"}
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
