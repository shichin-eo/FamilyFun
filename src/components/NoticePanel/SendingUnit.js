import React, { useState, useEffect } from "react";

const SendingUnit = ({ props }) => {
  const [addressee, setAddressee] = useState("");
  const [active, setActive] = useState("");
  const [selectedAddresse, setSelectedAddresse] = useState([
    "Jenek",
    "Nastuha",
  ]);

  const addAddresse = (newUser) => {
    if (!selectedAddresse.includes(newUser)) {
      //setSelectedAddresse([...selectedAddresse, newUser]);
      setSelectedAddresse((prev) => [newUser, ...prev]);
    }
  };
  const toggleActiveClass = () => {
    !active ? setActive("active") : setActive("");
  };

  const USERS = ["Shichin Evgenii", "Shichin Anastasia", "Andrey Arshavin"];

  useEffect(() => {
    //!! Изменение счетчика "Получателей"
    props.changeCounterAddressees(selectedAddresse);
  }, [selectedAddresse]);

  return (
    <>
      <div className="sendingUnit-container">
        <div className="sendingUnit-main">
          <div className="sendingUnit-input">
            <input
              type="text"
              placeholder="Пользователь"
              onChange={(e) => {
                setAddressee(e.target.value);
              }}
              value={addressee}
            ></input>
            <div
              className={`sendingUnit-select-btn ${active}`}
              onClick={() => {
                toggleActiveClass();
              }}
            >
              {/* <img
                className={`${active}`}
                src="../assets/img/angle-down.png"
                alt=""
              ></img> */}
            </div>
          </div>
          <div className="sendingUnit-list-selected">
            <div className={`sendingUnit-list-users ${active}`}>
              <ul>
                {USERS.map((user, index) => {
                  return (
                    <li
                      onClick={() => {
                        addAddresse(user);
                        toggleActiveClass();
                      }}
                      key={index}
                    >
                      {user}
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul>
              {selectedAddresse.map((selectedUser, index) => (
                <li key={index}>{selectedUser}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sendingUnit-btn">
          <button type="submit">Отправить</button>
        </div>
      </div>
    </>
  );
};

export default SendingUnit;
