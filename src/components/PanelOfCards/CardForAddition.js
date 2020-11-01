import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointLeft,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";

const CardforAddition = () => {
  const addCard = async (data) => {
    const url = "http://localhost:3000/api/v1/cards";
    const option = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, option);
    const result = await response.json();
    const message = result.message;
    console.log(`message = ${message}`);
  };

  const testData = {
    card_user: "1",
    card_type: "fun",
    card_title: "Sport",
    card_description: "Time  football",
    card_priority: "5",
  };

  return (
    <>
      <div className="cardForAddition-container">
        <div className="cardForAddition-btnAdd">
          <div className="cardForAddition-horizElem"></div>
          <div className="cardForAddition-vertElem"></div>
        </div>
        <Card
          id={"neutralCard"}
          cardType={"Категория"}
          cardInfo={"Описание карточки"}
        />
        <div className="cardForAddition_btns">
          <button className="cardForAddition_btns_lt_btn">
            <FontAwesomeIcon icon={faHandPointLeft} />
          </button>
          <button
            className="cardForAddition_btns_rt_btn"
            onClick={() => addCard(testData)}
          >
            <FontAwesomeIcon icon={faHandPointRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardforAddition;
