import React from "react";

const Notification = ({state, handleChangeNotice}) => {

  const HEADER_NOTIFICATION =
    state.type === "push" ? `Push-уведомление` : `Событие недели`;
  const ICON_NOTIFICATION =
    state.type === "push" ? "../assets/img/clock.png" : "";
  return (
    <>
      <div className={`notification-container ${state.type}`}>
        <div className="notification-component">
          <div className="notification-header">
            <div className={`notification-title ${state.type}`}>
              <h1>{HEADER_NOTIFICATION}</h1>
              <input value={state.title}></input>                       {/* дело с OnChange*/}
            </div>
            {state.type === "push" ? (
              <img src={ICON_NOTIFICATION} alt="clock"></img>
            ) : (
              <div></div>
            )}
          </div>
          <div className={`notification-body ${state.type}`}>
              <textarea value={state.body} onChange={(e) => handleChangeNotice(e.target.value, 'push', 'body')}>                         {/* дело с OnChange*/}
              </textarea>
          </div>
        </div>
        <div className="notification-control-btns">
          <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9531 3.78125C15.7969 3.625 15.5625 3.625 15.4062 3.78125L6.89062 12.2969L6.5 15.9297C6.42188 16.3984 6.85156 16.8281 7.32031 16.75L10.9531 16.3594L19.4688 7.84375C19.625 7.6875 19.625 7.45312 19.4688 7.29688L15.9531 3.78125ZM22.2812 2.88281L20.3672 0.96875C19.7812 0.382812 18.8047 0.382812 18.2188 0.96875L16.8516 2.33594C16.6953 2.49219 16.6953 2.72656 16.8516 2.88281L20.3672 6.39844C20.5234 6.55469 20.7578 6.55469 20.9141 6.39844L22.2812 5.03125C22.8672 4.44531 22.8672 3.46875 22.2812 2.88281ZM15.25 14.0547V18H2.75V5.5H11.6953C11.8516 5.5 11.9688 5.46094 12.0469 5.38281L13.6094 3.82031C13.8828 3.50781 13.6875 3 13.2578 3H2.125C1.07031 3 0.25 3.85938 0.25 4.875V18.625C0.25 19.6797 1.07031 20.5 2.125 20.5H15.875C16.8906 20.5 17.75 19.6797 17.75 18.625V12.4922C17.75 12.0625 17.2422 11.8672 16.9297 12.1406L15.3672 13.7031C15.2891 13.7812 15.25 13.8984 15.25 14.0547Z" fill="white"/>
          </svg>
          <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.75781 14.6875C8.14844 15.0781 8.8125 15.0781 9.20312 14.6875L20.6875 3.20312C21.0781 2.8125 21.0781 2.14844 20.6875 1.75781L19.2812 0.351562C18.8906 -0.0390625 18.2656 -0.0390625 17.875 0.351562L8.5 9.72656L4.08594 5.35156C3.69531 4.96094 3.07031 4.96094 2.67969 5.35156L1.27344 6.75781C0.882812 7.14844 0.882812 7.8125 1.27344 8.20312L7.75781 14.6875Z" fill="white"/>
          </svg>
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.57812 7.5L13.4844 3.59375C13.9922 3.125 13.9922 2.34375 13.4844 1.875L12.625 1.01562C12.1562 0.507812 11.375 0.507812 10.9062 1.01562L7 4.92188L3.05469 1.01562C2.58594 0.507812 1.80469 0.507812 1.33594 1.01562L0.476562 1.875C-0.03125 2.34375 -0.03125 3.125 0.476562 3.59375L4.38281 7.5L0.476562 11.4453C-0.03125 11.9141 -0.03125 12.6953 0.476562 13.1641L1.33594 14.0234C1.80469 14.5312 2.58594 14.5312 3.05469 14.0234L7 10.1172L10.9062 14.0234C11.375 14.5312 12.1562 14.5312 12.625 14.0234L13.4844 13.1641C13.9922 12.6953 13.9922 11.9141 13.4844 11.4453L9.57812 7.5Z" fill="white"/>
          </svg>

        </div>
      </div> 
    </>
  );
};

export default Notification;
