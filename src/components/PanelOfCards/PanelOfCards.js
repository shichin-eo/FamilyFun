import React, { useEffect, useState } from "react";
import CardPanel from "./CardPanel";
import CardforAddition from "./CardForAddition";

const PanelOfCards = () => {
  const [cards, setCards] = useState([]);
  const cardPanelImages = {
    familyUrl: "../assets/img/family.png",
    funUrl: "../assets/img/fun.png",
  };
  const cardPanelTypes = ["family", "fun"];

  const panelCards = [
    {
      cardType: "family",
      cardName: "",
      cardInfo: "",
    },
  ];

  async function getPersonalCards() {
    const url = "http://localhost:3000/api/v1/cards/1";
    const response = await fetch(url);
    const data = await response.json();
    setCards(data);
    console.log(data);
  }

  const familyCards = cards.filter((card) => card["card_type"] === "family");
  const funCards = cards.filter((card) => card["card_type"] === "fun");

  useEffect(() => {
    getPersonalCards();
  }, []);

  return (
    <>
      <div className="panelOfCards-container">
        <CardPanel cards={familyCards} url={cardPanelImages.familyUrl} />
        <CardforAddition />
        <CardPanel cards={funCards} url={cardPanelImages.funUrl} />
      </div>
    </>
  );
};

export default PanelOfCards;
