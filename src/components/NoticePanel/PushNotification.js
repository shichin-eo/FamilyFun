import React, { useState, useEffect } from "react";
import Notification from "./Notification";
import SendingUnit from "./SendingUnit";

const PushNotification = (props) => {
  const [counterAddressees, setCounterAddressees] = useState(0);
   const [timer, setTimer] = useState({
    hour: "00",
    minute: "00",
  });

  const changeTimer = (e, elemTimer) => {
    console.log(elemTimer);
    console.log(typeof elemTimer);
    switch (elemTimer) {
      case "hour":
        setTimer({ ...timer, hour: e.target.value });

        break;
      case "minute":
        setTimer({ ...timer, minute: e.target.value });
        break;
    }
  };

  const validate = {
    validateHour: (hour) => {
      console.log("validateHour");
      let hourElems = hour.split("");
      if (hourElems.length === 1) {
        let regexp1 = /[0-2]/g;
        if (!regexp1.test(hourElems[0])) {
          setTimer({ ...timer, hour: "00" });
        }
      } else if (hourElems.length === 2) {
        let regexp2 = /[01]\d|2[0-3]/g;
        if (!regexp2.test(hour)) {
          setTimer({ ...timer, hour: "00" });
        }
      }
    },
    validateMinute: (minute) => {
      console.log("validateMinute");
      let minuteElems = minute.split("");
      if (minuteElems.length === 1) {
        let regexp1 = /[0-5]/g;
        if (!regexp1.test(minuteElems[0])) {
          setTimer({ ...timer, minute: "00" });
        }
      } else if (minuteElems.length === 2) {
        let regexp2 = /[0-5]\d/g;
        if (!regexp2.test(minute)) {
          setTimer({ ...timer, minute: "00" });
        }
      }
    },
  };

  const changeCounterAddressees = (list) => {
    setCounterAddressees(list.length);
  };

  useEffect(() => {
    validate.validateHour(timer.hour);
    validate.validateMinute(timer.minute);
  }, [timer]);

  return (
    <>
      <div className="pushNotification">
        {/* <Notification props={props}></Notification> */}
        <Notification {...props}></Notification>
        <div className="pushNotification-footer">
          <div className="pushNotification-recipient">
            <span className="pushNotification-recipient-span">
              Получателей:
            </span>
            <div className="pushNotification-recipient-counter">
              <img src="../assets/img/recipient.png" alt="recipient"></img>
              <span className="pushNotification-recipient-amount">
                {counterAddressees}
              </span>
            </div>
          </div>
          <div className="pushNotification-timer">
            <span className="pushNotification-timer-span">Таймер:</span>
            <div className="pushNotification-timer-container">
              {/* <form> */}
              <input
                type="text"
                value={timer.hour}
                className="pushNotification-timer-hour"
                maxLength="2"
                required
                onChange={(e) => changeTimer(e, "hour")}
              ></input>
              <input
                type="text"
                value={timer.minute}
                className="pushNotification-timer-minute"
                maxLength="2"
                required
                onChange={(e) => changeTimer(e, "minute")}
              ></input>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
      <SendingUnit props={{ counterAddressees, changeCounterAddressees }} />
    </>
  );
};

export default PushNotification;
