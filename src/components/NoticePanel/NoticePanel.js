import React, { useState, useEffect } from "react";
import PushNotification from "./PushNotification";
import WeekEventNotice from "./WeekEventNotice";
import { fetchSenderNotifications } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const NoticePanel = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.notification.notifications
  );
  const [currentNotification, setCurrentNotification] = useState(0);

  const updateCounterNotification = (indexNotification) => {
    setCurrentNotification(indexNotification);
  };
  console.log(notifications);

  const renderNotificationList = (counter) => {
    if (notifications.length) {
      return (
        <PushNotification
          key={notifications[counter]["id"]}
          currentNotification={currentNotification}
          updateCounterNotification={updateCounterNotification}
          notification={notifications[counter]}
          // state={pushState}
          // handleChangeNotice={handleChangeNotice}
        />
      );
    }
  };

  // const [pushState, setPushProps] = useState({
  //   title: "Исчезающее напоминание",
  //   body:
  //     "Здесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТ Здесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТЗдесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТЗдесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТЗдесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТЗдесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТЗдесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТ",
  //   type: "push",
  // });

  // const [eventProps, setEventProps] = useState({
  //   title: "Поставьте цель!",
  //   body:
  //     "Здесь могло бы быть ваше описание цели на неделю...по достижению, которой вы могли бы наградить себя походом на улицу без маски и антисептика",
  //   type: "event",
  // });

  // const handleChangeNotice = (value, type, property) => {
  //   console.log(`Элемент ${type} хочет поменять ${property} на ${value}`);
  //   if (type === "push") {
  //     if (property === "title") {
  //       setPushProps((prev) => ({ ...prev, [property]: value }));
  //     } else if (property === "body") {
  //       setPushProps((prev) => ({ ...prev, body: value }));
  //     }
  //   } else if (type === "event") {
  //     if (property === "title") {
  //       setEventProps((prev) => ({ ...prev, title: value }));
  //     } else if (property === "body") {
  //       setEventProps((prev) => ({ ...prev, body: value }));
  //     }
  //   }
  // };

  //?Указан фиксированный SENDER ID
  //* Запрос к базе на получение Notifications
  useEffect(() => {
    dispatch(fetchSenderNotifications(1));
  }, []);
  return (
    <>
      <div className="noticePanel">
        {/* <PushNotification
        // state={pushState}
        // handleChangeNotice={handleChangeNotice}
        /> */}
        {renderNotificationList(currentNotification)}
        <div className="noticeSeparator"></div>
        {/* <WeekEventNotice
          state={eventProps}
          handleChangeNotice={handleChangeNotice}
        /> */}
      </div>
    </>
  );
};

export default NoticePanel;
