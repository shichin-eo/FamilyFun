import React from "react";
import Card from "./Card";

const CardforAddition = () => {
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
        <div className="cardForAddition-buttonsOfControl">
          <div className="cardForAddition-familyBtnAdd-container">
            <button className="cardForAddition-familyBtnAdd"></button>
            <div className="familySign1"></div>
            <div className="familySign2"></div>
          </div>
          <div className="cardForAddition-funBtnAdd-container">
            <button className="cardForAddition-funBtnAdd"></button>
            <div className="funSign1"></div>
            <div className="funSign2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardforAddition;
