import React from "react";
import Card from "./Card";

const CardPanel = (props) => {
  const LOGO_CARD_PANEL = props.url;
  return (
    <>
      <div className="cardPanel-container">
        <img src={LOGO_CARD_PANEL} alt=""></img>
        <div className="cardPanel">
          <Card id={"card1"} cardType={"Рецепт"} cardInfo={"Батин суп"} />
          <Card id={"card2"} cardType={"Цель"} cardInfo={"Дописать портал"} />
          <Card id={"card3"} cardType={"Бюджет"} cardInfo={"Ваш бюджет пуст"} />
          <Card id={"card4"} cardType={"Фильмы"} cardInfo={"Batman"} />
          <Card id={"card5"} cardType={"Сериалы"} cardInfo={"Peaky blinders"} />
          <Card
            id={"card6"}
            cardType={"Событие недели"}
            cardInfo={"Выгулять Настю"}
          />
        </div>
      </div>
    </>
  );
};

export default CardPanel;
