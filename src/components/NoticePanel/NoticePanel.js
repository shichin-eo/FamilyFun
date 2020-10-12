import React, { useState, useEffect } from "react";
import PushNotification from "./PushNotification";
import WeekEventNotice from "./WeekEventNotice";
const NoticePanel = () => {
  const [pushState, setPushProps] = useState({
    title: "Исчезающее напоминание",
    body:
      "Здесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТ Здесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТЗдесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТЗдесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТЗдесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТЗдесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТЗдесь могло бы быть ваше push-уведомление, но увы вы не подумали об этом, а хотелось бы указать более важный ТЕКСТ",
    type: "push",
  });

  const [eventProps, setEventProps] = useState({
    title: "Поставьте цель!",
    body:
      "Здесь могло бы быть ваше описание цели на неделю...по достижению, которой вы могли бы наградить себя походом на улицу без маски и антисептика",
    type: "event",
  });

  const handleChangeNotice = (value, type, property)=>{
    console.log("CHANGE");
    console.log(`Элемент ${type} хочет поменять ${property} на ${value}`);
    if (type === 'push') {
      if(property === 'title') {
        setPushProps(prev => ({...prev, [property] : value}));
      } else if (property === 'body') {
        setPushProps(prev => ({...prev, "body" : value}));
      }
    } else if (type === 'event') {
      if(property === 'title') {
        setEventProps(prev => ({...prev, "title" : value}));
      } else if (property === 'body') {
        setEventProps(prev => ({...prev, "body" : value}));
      }
    }
  } 

  

  return (
    <>
      <div className="noticePanel">
        {/* <PushNotification notice={pushProps} handler={handleChangeNotice}/>
        <div className="noticeSeparator"></div>
        <WeekEventNotice notice={eventProps} /> */}
        <PushNotification state={pushState} handleChangeNotice={handleChangeNotice} />
        <div className="noticeSeparator"></div>
        <WeekEventNotice state={eventProps} handleChangeNotice={handleChangeNotice} />
      </div>
    </>
  );
};

export default NoticePanel;
