import React from "react";
import Notification from "./Notification";

const WeekEventNotice = (props) => {
  return (
    <>
      <div className="weekEventNotice">
        <Notification {...props}></Notification>
      </div>
    </>
  );
};

export default WeekEventNotice;
