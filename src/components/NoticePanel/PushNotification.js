import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
// import { fetchSenderNotifications } from "../../redux/actions";
import Notification from "./Notification";
import NotificationBar from "./NotificationBar";
import SendingUnit from "./SendingUnit";
//!
import CustomDateTimePicker from "./CustomDateTimePicker";

const PushNotification = (props) => {
  console.log(props);
  // const dispatch = useDispatch();

  const [counterAddressees, setCounterAddressees] = useState(0);

  const changeCounterAddressees = (list) => {
    setCounterAddressees(list.length);
  };
  return (
    <>
      <div className="pushNotification">
        <NotificationBar
          currentNotification={props.currentNotification}
          updateCounterNotification={props.updateCounterNotification}
        />
        <div className="pushNotification_main">
          <Notification
            type={"push"}
            notification={props.notification}
          ></Notification>
          <div className="pushNotification_main_footer">
            <div className="pushNotification_main_footer_recipient">
              <span className="pushNotification_main_recipient_span">
                Получателей:
              </span>
              <div className="pushNotification_main_footer_recipient_counter">
                <img src="../assets/img/recipient.png" alt="recipient"></img>
                <span className="pushNotification_main_footer_recipient_counter_amount">
                  {counterAddressees}
                </span>
              </div>
            </div>
            <div className="pushNotification_main_footer_timer">
              <h1>Time to Send: </h1>
              <CustomDateTimePicker />
            </div>
          </div>
        </div>
        <SendingUnit props={{ counterAddressees, changeCounterAddressees }} />
      </div>
    </>
  );
};

export default PushNotification;
