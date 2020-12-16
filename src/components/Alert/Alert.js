import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faVoteYea,
} from "@fortawesome/free-solid-svg-icons";

const Alert = ({ alert }) => {
  const alertIcon = () => {
    switch (alert.type) {
      case "success":
        return <FontAwesomeIcon icon={faVoteYea} />;
      case "error":
        return <FontAwesomeIcon icon={faExclamationTriangle} />;
      default:
        return "";
    }
  };
  return (
    <div className={`alert alert_${alert.type}`}>
      {alertIcon()}
      <div className="alert_message">
        {alert.messages.map((message, index) => (
          <h1 key={index}>{message}</h1>
        ))}
      </div>
    </div>
  );
};

export default Alert;
