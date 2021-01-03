import React, { useState, useEffect } from "react";
import CardPanel from "./CardPanel";
import CardforAddition from "./CardForAddition";
import Alert from "../Alert/Alert";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../redux/actions";

//?
import Loader from "../Loader/Loader";
const PanelOfCards = () => {
  const dispatch = useDispatch();
  // const userCards = useSelector((state) => state.cards.fetchedCards);
  // const loading = useSelector((state) => state.app.loading);
  //??????????????????????????????????????????????????????????????????????????????!!!!!!!!!!!!!!!
  const familyCards = useSelector((state) => state.cards.familyCards);
  const funCards = useSelector((state) => state.cards.funCards);
  const fetchedCards = useSelector((state) => state.cards.fetchedCards);
  const dbFamilyCards = fetchedCards.filter(
    (card) => card["card_type"] === "family"
  );
  const dbFunCards = fetchedCards.filter((card) => card["card_type"] === "fun");

  const familyCardPanelProps = {
    type: "family",
    cards: familyCards,
    dbCards: dbFamilyCards,
    img: "../assets/img/family.png",
  };

  const funCardPanelProps = {
    type: "fun",
    cards: funCards,
    dbCards: dbFunCards,
    img: "../assets/img/fun.png",
  };

  const alert = useSelector((state) => state.app.alert);
  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  // if (loading) {
  //   //!РАСКОММЕНТИРОВАТЬ
  //   return <Loader />;
  // }
  return (
    <>
      <div className="panelOfCards-container">
        <Loader />
        {/* <CardPanel type={"family"} /> */}
        <CardPanel props={familyCardPanelProps} />
        <CardforAddition familyCards={familyCards} funCards={funCards} />
        {/* <CardPanel type={"fun"} /> */}
        <CardPanel props={funCardPanelProps} />
        {alert.messages.length ? <Alert alert={alert} /> : ""}
      </div>
    </>
  );
};

export default PanelOfCards;
