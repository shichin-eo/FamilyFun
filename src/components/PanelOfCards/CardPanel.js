import React from "react";
import Card from "./Card";

const CardPanel = (props) => {
  const LOGO_CARD_PANEL = props.url;
  const cards = props.cards;

  const COUNT_CARDS = 6;
  const emptyCard = {
    card_title: "Заголовок",
    card_description: "Описание",
  };

  for (let i = cards.length; i < COUNT_CARDS; i++) {
    cards.push(emptyCard);
  }
  return (
    <>
      <div className="cardPanel-container">
        <img src={LOGO_CARD_PANEL} alt=""></img>
        <div className="cardPanel">
          {cards.map((card, index) => {
            return (
              <Card
                id={`card${index + 1}`}
                key={`card${index + 1}`}
                cardType={card["card_title"]}
                cardInfo={card["card_description"]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardPanel;
