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
        <CardPanel type={"family"} />
        <CardforAddition />
        <CardPanel type={"fun"} />
        {alert.messages.length ? <Alert alert={alert} /> : ""}
      </div>
    </>
  );
};

export default PanelOfCards;
