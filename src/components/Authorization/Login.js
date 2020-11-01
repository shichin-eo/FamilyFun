import React from "react";
import PassInput from "./PassInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

export const Login = (props) => {
  return (
    <div className="login-container">
      <input type="text" placeholder="Enter your email"></input>
      <PassInput type="pass" />
      <div className="login-buttons-container">
        <button className="login-btn">Log in</button>
        <button
          className="register-btn"
          onClick={() => props.handler("register")}
        >
          Register now
        </button>
        <button className="back-btn" onClick={() => props.handler("")}>
          <FontAwesomeIcon icon={faUndo} />
        </button>
      </div>
    </div>
  );
};
