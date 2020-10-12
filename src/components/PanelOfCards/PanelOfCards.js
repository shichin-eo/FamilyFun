import React from "react";
import CardPanel from "./CardPanel";
import CardforAddition from "./CardForAddition";

const PanelOfCards = () => {
  const cardPanelImages = {
    familyUrl: "../assets/img/sky1.jpg",
    funUrl: "../assets/img/sky2.jpg",
  };
  const cardPanelTypes = ["family", "fun"];

  const panelCards = [
    {
      cardType: "family",
      cardName: "",
      cardInfo: "",
    },
  ];

  return (
    <>
      <div className="panelOfCards-container">
        <CardPanel url={cardPanelImages.familyUrl} />
        <CardforAddition />
        <CardPanel url={cardPanelImages.funUrl} />
      </div>
    </>
  );
};

export default PanelOfCards;
