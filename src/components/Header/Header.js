import React, { useState } from "react";
import Register from "../Authorization/Register";
import { Login } from "../Authorization/Login";

const Header = () => {
  const [status, setStatus] = useState("");

  const handleStatus = (action) => {
    setStatus((prev) => (prev = action));
  };

  return (
    <div className="header">
      <div className="header__logo">FAMILY FOR FUN</div>
      {status === "login" ? (
        <Login status={status} handler={handleStatus} />
      ) : status === "register" ? (
        <Register status={status} handler={handleStatus} />
      ) : (
        <div
          className="header__settings"
          onClick={() => {
            handleStatus("login");
          }}
        >
          ПРОФИЛЬ
        </div>
      )}
    </div>
  );
};

export default Header;
