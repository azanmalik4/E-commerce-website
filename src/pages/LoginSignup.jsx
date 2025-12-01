import React, { useState } from "react";
import "../CSS/LoginSignup.css";
import email from "../assets/email.png";
import password from "../assets/password.png";
import user1 from "../assets/person.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user1} alt="user" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email} alt="email" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div className="forget-password">
          Already have account?{" "}
          <span
            onClick={() => {
              setAction("Login");
            }}
          >
            Login Here!
          </span>
        </div>
      ) : (
        <div className="forget-password">
          <div>
            Forget Password? <span>Click Here!</span>
          </div>
          <div>
            {" "}
            Don't have an account?{" "}
            <span
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              SignUp Here!
            </span>{" "}
          </div>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
