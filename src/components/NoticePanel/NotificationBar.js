import React from "react";

const NotificationBar = (props) => {
  // console.log(props);
  const notificationBarArray = new Array(3).fill("");

  return (
    <div className="notificationBar">
      {notificationBarArray.map((_, index) => {
        const activeClass =
          props.currentNotification === index ? "active" : "inactive";
        // console.log(activeClass);
        return (
          <div
            key={index}
            onClick={() => props.updateCounterNotification(index)}
            className={`notificationBar_item ${activeClass}`}
          ></div>
        );
      })}
    </div>
  );
};

export default NotificationBar;
