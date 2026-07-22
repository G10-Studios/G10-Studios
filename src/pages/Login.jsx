import { useState } from "react";
import { User, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

import "./AuthPage.css";
import backgroundImage from "../assets/background.jpg";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage:
          `url(${backgroundImage})`,
      }}
    >
      <div className="glass-card">

        <h2>
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Username */}
          {!isLogin && (
            <div className="input-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                required
              />

              <User
                className="input-icon"
                size={18}
              />
            </div>
          )}

          {/* Email */}
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

            <Mail
              className="input-icon"
              size={18}
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <Lock
              className="input-icon"
              size={18}
            />
          </div>

          {/* Login options */}
          {isLogin && (
            <div className="auth-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <span className="forgot-link">
                Forgot password?
              </span>
            </div>
          )}

          <button
            type="submit"
            className="submit-btn"
          >
            {isLogin
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            onClick={() =>
              setIsLogin(!isLogin)
            }
            className="toggle-link"
          >
            {isLogin
              ? " Register"
              : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}