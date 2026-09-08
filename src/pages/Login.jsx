import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =
    useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      email.trim() === "" ||
      password.trim() === ""
    ) {
      setMessage(
        "Please enter your email and password."
      );
      setIsError(true);
      return;
    }

    setIsError(false);
    setMessage("Welcome back!");

    login();

    setTimeout(() => {
      navigate("/home");
    }, 600);
  };

  return (
    <div className="login-page">
      <div className="login-decoration login-decoration-one" />
      <div className="login-decoration login-decoration-two" />

      <div className="login-floating-item login-float-one">
        🛍️
      </div>

      <div className="login-floating-item login-float-two">
        ♡
      </div>

      <div className="login-floating-item login-float-three">
        ✦
      </div>

      <div className="login-container">
        <div className="login-brand">
          <div className="login-brand-icon">
            P
          </div>

          <span>Pickly</span>
        </div>

        <div className="login-intro">
          <span className="login-label">
            Welcome to Pickly
          </span>

          <h1>Welcome back</h1>

          <p>
            Sign in to continue discovering products
            you'll love.
          </p>
        </div>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >
          <div className="login-field">
            <label htmlFor="email">
              Email Address
            </label>

            <div className="login-input-wrapper">
              <span className="login-input-icon">
                @
              </span>

              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />
            </div>
          </div>

          <div className="login-field">
            <div className="login-password-label">
              <label htmlFor="password">
                Password
              </label>
            </div>

            <div className="login-input-wrapper">
              <span className="login-input-icon">
                ◇
              </span>

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(
                    (previous) => !previous
                  )
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {message && (
            <div
              className={
                isError
                  ? "login-feedback login-error"
                  : "login-feedback login-success"
              }
            >
              {isError ? "!" : "✓"}

              <span>{message}</span>
            </div>
          )}

          <button
            type="submit"
            className="login-submit"
          >
            <span>Sign In</span>
            <span className="login-arrow">
              →
            </span>
          </button>
        </form>

        <div className="login-divider">
          <span />
          <p>SHOP SMARTER WITH PICKLY</p>
          <span />
        </div>

        <div className="login-benefits">
          <div>
            <span>♡</span>
            <p>Save favorites</p>
          </div>

          <div>
            <span>🛒</span>
            <p>Smart cart</p>
          </div>

          <div>
            <span>✓</span>
            <p>Easy checkout</p>
          </div>
        </div>

        <p className="login-footer-text">
          Discover. Save. Shop.
        </p>
      </div>
    </div>
  );
}

export default Login;