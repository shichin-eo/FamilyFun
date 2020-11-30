import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faVoteYea,
} from "@fortawesome/free-solid-svg-icons";

const Alert = ({ type, text = "Простое оповещение" }) => {
  const alertIcon = (type = "success") => {
    switch (type) {
      case "success":
        return <FontAwesomeIcon icon={faVoteYea} />;
      case "error":
        return <FontAwesomeIcon icon={faExclamationTriangle} />;
      default:
        return <h1>123</h1>;
    }
  };
  return (
    <div className={`alert alert_${type}`}>
      {alertIcon(type)}
      <h1>{text}</h1>
    </div>
  );
};

export default Alert;
