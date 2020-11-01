import React from "react";
import PassInput from "./PassInput";

const Register = (props) => {
  return (
    <div className="authorization-container">
      <div className="auth-fields">
        <input
          id="auth-firstname"
          className="auth-reg"
          type="text"
          name="firstname"
          placeholder="Enter your First Name"
        ></input>
        <input
          id="auth-surname"
          className="auth-reg"
          type="text"
          name="surname"
          placeholder="Enter your Surname"
        ></input>
        <input
          id="auth-email"
          className="auth-reg"
          type="text"
          name="email"
          placeholder="Phone or email"
        ></input>
        {/* <input
          id="auth-pass"
          className="auth-reg"
          type="password"
          name="pass"
          placeholder="Password"
        ></input>
        <input
          id="auth-confirm-pass"
          className="auth-reg"
          type="password"
          name="pass"
          placeholder="Confirm Password"
        ></input> */}

        <PassInput type="pass" />
        <PassInput type="confirm" />
      </div>
      <div className="auth-controls">
        <div className="auth-birthdate">
          <input maxLength="2"></input>
          <select>
            <option value="Январь"></option>
            <option value="Февраль"></option>
            <option value="Март"></option>
            <option value="Апрель"></option>
          </select>
          <input maxLength="4"></input>
        </div>
        <button className="signup-btn">SIGN UP</button>
        <button className="back-btn" onClick={() => props.handler("")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Register;
