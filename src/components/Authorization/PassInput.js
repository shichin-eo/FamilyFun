import React, { useState } from "react";

const PassInput = (props) => {
  const [fieldType, setFieldType] = useState("password");
  const placeholderText =
    props.type === "pass" ? "Enter your password" : "Confirm your password";

  const reviewPass = (e) => {
    e.preventDefault();
    e.target.classList.toggle("test")
      ? setFieldType((prev) => (prev = "text"))
      : setFieldType((prev) => (prev = "password"));
  };
  return (
    <span className="passinput-password">
      <input type={fieldType} placeholder={placeholderText}></input>
      <div
        className="password-check"
        onClick={(e) => {
          reviewPass(e);
        }}
      >
        {fieldType === "password" ? (
          <div className="password-eye">
            <svg
              width="23"
              height="15"
              viewBox="0 0 23 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5938 6.95312C20.4844 2.8125 16.2656 0 11.5 0C6.69531 0 2.47656 2.8125 0.367188 6.95312C0.289062 7.10938 0.25 7.30469 0.25 7.5C0.25 7.73438 0.289062 7.92969 0.367188 8.08594C2.47656 12.2266 6.69531 15 11.5 15C16.2656 15 20.4844 12.2266 22.5938 8.08594C22.6719 7.92969 22.7109 7.73438 22.7109 7.53906C22.7109 7.30469 22.6719 7.10938 22.5938 6.95312ZM11.5 13.125C8.375 13.125 5.875 10.625 5.875 7.5C5.875 4.41406 8.375 1.875 11.5 1.875C14.5859 1.875 17.125 4.41406 17.125 7.5V7.53906C17.125 10.625 14.5859 13.1641 11.5 13.1641V13.125ZM11.5 3.75C11.1484 3.78906 10.7969 3.82812 10.4844 3.90625C10.7188 4.21875 10.8359 4.60938 10.8359 5.03906C10.8359 6.05469 10.0156 6.875 9 6.875C8.57031 6.875 8.17969 6.75781 7.86719 6.52344C7.78906 6.83594 7.75 7.1875 7.75 7.5C7.75 9.57031 9.42969 11.25 11.5 11.25C13.5703 11.25 15.25 9.57031 15.25 7.5C15.25 5.42969 13.5703 3.78906 11.5 3.78906V3.75Z"
                fill="#575656"
              />
            </svg>
          </div>
        ) : (
          <div className="password-eye-slash">
            <svg
              width="25"
              height="21"
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 16.125C9.53125 16.125 7.10938 13.8594 6.91406 10.9297L2.8125 7.76562C2.26562 8.46875 1.75781 9.17188 1.36719 9.95312C1.28906 10.1094 1.25 10.3047 1.25 10.5C1.25 10.7344 1.28906 10.9297 1.36719 11.0859C3.47656 15.2266 7.69531 18 12.5 18C13.5156 18 14.5312 17.8438 15.5078 17.6094L13.5156 16.0469C13.1641 16.125 12.8125 16.125 12.5 16.125ZM24.7266 18.4297L20.4297 15.0703C21.7188 13.9766 22.8125 12.6094 23.5938 11.0859C23.6719 10.9297 23.7109 10.7344 23.7109 10.5391C23.7109 10.3047 23.6719 10.1094 23.5938 9.95312C21.4844 5.8125 17.2656 3 12.5 3C10.3906 3.03906 8.4375 3.54688 6.71875 4.48438L1.75781 0.65625C1.64062 0.578125 1.52344 0.539062 1.36719 0.539062C1.17188 0.539062 0.976562 0.617188 0.898438 0.773438L0.117188 1.75C0.0390625 1.86719 0 1.98438 0 2.14062C0 2.33594 0.078125 2.49219 0.234375 2.60938L23.2031 20.3828C23.3203 20.4609 23.4375 20.5 23.5938 20.5C23.7891 20.5 23.9844 20.4219 24.1016 20.2656L24.8438 19.2891C24.9219 19.1719 24.9609 19.0547 24.9609 18.8984C24.9609 18.7031 24.8828 18.5469 24.7266 18.4297ZM17.5781 12.8828L16.0156 11.6719C16.1719 11.3203 16.2109 10.9297 16.25 10.5C16.25 10.5 16.25 10.5 16.25 10.4609C16.25 8.42969 14.5703 6.75 12.5391 6.75C12.1875 6.75 11.8359 6.82812 11.4844 6.90625C11.7188 7.21875 11.8359 7.60938 11.875 8C11.8359 8.15625 11.8359 8.27344 11.7969 8.39062L8.90625 6.20312C9.88281 5.38281 11.1328 4.91406 12.5 4.875C15.5859 4.875 18.125 7.41406 18.125 10.5C18.125 11.3594 17.8906 12.1406 17.5781 12.8828Z"
                fill="#575656"
              />
            </svg>
          </div>
        )}
      </div>
    </span>
  );
};

export default PassInput;