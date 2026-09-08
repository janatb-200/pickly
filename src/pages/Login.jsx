import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setMessage("Please fill in all fields.");
      return;
    }

    login();

    setMessage("Login successful!");

    setTimeout(() => {
      navigate("/home");
    }, 700);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          Pickly
        </div>

        <h1>Welcome Back</h1>

        <p>
          Login to continue shopping with Pickly.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />

          <label className="remember-row">
            <input type="checkbox" />
            Remember me
          </label>

          <button type="submit">
            Login
          </button>
        </form>

        {message && (
          <p className="login-message">
            {message}
          </p>
        )}

        <p className="demo-note">
          Demo login — enter any email and password.
        </p>
      </div>
    </div>
  );
}

export default Login;