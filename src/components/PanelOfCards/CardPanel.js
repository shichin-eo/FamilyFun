import React, { memo } from "react";
import Card from "./Card";

import { useSelector } from "react-redux";

const CardPanel = ({ type }) => {
  const familyCards = useSelector((state) => state.cards.familyCards);
  const funCards = useSelector((state) => state.cards.funCards);

  const emptyCard = {
    card_category: "Категория",
    card_description: "Описание",
  };
  //*** function for fill the list of cards */
  function fillListCards(cards) {
    const nocards = [
      emptyCard,
      emptyCard,
      emptyCard,
      emptyCard,
      emptyCard,
      emptyCard,
    ];
    let currentCards = [...cards].sort(
      (prev, next) => prev["card_priority"] - next["card_priority"]
    );

    const result = [...currentCards, ...nocards];
    result.length = 6;
    return result;
  }
  //*** function for fill cardPanel */
  const fillCardPanel = (panelType) => {
    switch (panelType) {
      case "family":
        return {
          img: "../assets/img/family.png",
          cards: fillListCards(familyCards),
        };
      case "fun":
        return {
          img: "../assets/img/fun.png",
          cards: fillListCards(funCards),
        };
      default:
        return { img: "../assets/img/404.jpg", cards: [] };
    }
  };
  //* Current panel of cards
  const panel = fillCardPanel(type);

  return (
    <>
      <div className="cardPanel-container">
        <div className={`cardPanel_img_${type}`}>
          <img src={panel.img} alt="CardPanel Image"></img>
        </div>
        <div className="cardPanel">
          {panel.cards.map((card, index) => {
            return (
              <Card
                card={card}
                id={`${type}Card${index}`}
                key={`${type}Card${index}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default memo(CardPanel);
