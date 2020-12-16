import React, { memo, useState, useEffect } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { setFamilyCards, setFunCards, updateCard } from "../../redux/actions";

const CardPanel = ({ type }) => {
  const [locked, setLocked] = useState(true);

  const dispatch = useDispatch();
  const familyCards = useSelector((state) => state.cards.familyCards);
  const funCards = useSelector((state) => state.cards.funCards);

  const fetchedCards = useSelector((state) => state.cards.fetchedCards);
  const dbFamilyCards = fetchedCards.filter(
    (card) => card["card_type"] === "family"
  );
  const dbFunCards = fetchedCards.filter((card) => card["card_type"] === "fun");

  const emptyCard = {
    card_category: "Категория",
    card_description: "Описание",
    id: null,
  };
  //*** function for unlock cardPanel */
  function lockHandler() {
    setLocked(!locked);
    if (!locked) {
      if (type === "family") {
        sendUpdateCards(dbFamilyCards, familyCards);
      } else if (type === "fun") {
        sendUpdateCards(dbFunCards, funCards);
      }
    }
  }
  //*** function for fill the list of cards */
  function fillListCards(cards) {
    let nocards = [
      emptyCard,
      emptyCard,
      emptyCard,
      emptyCard,
      emptyCard,
      emptyCard,
    ];
    nocards = nocards.map((card, index) => ({ ...card, id: `empty${index}` }));
    let currentCards = [...cards];
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
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let newPanel = Array.from(panel.cards);
    const selectedCard = newPanel.find(
      (dragCard) => dragCard["id"] === Number(draggableId)
    );
    newPanel.splice(source.index, 1);
    newPanel.splice(destination.index, 0, selectedCard);
    console.log(newPanel);
    newPanel = newPanel.map((item, index) => {
      console.log(item);
      return {
        ...item,
        card_priority: index + 1,
      };
    });
    if (type === "family") dispatch(setFamilyCards(newPanel));
    else if (type === "fun") dispatch(setFunCards(newPanel));
  };
  //*** function compare db cards and relevant cards */
  const setUpdatedCards = (oldArr, newArr) => {
    //   newArr.length = oldArr.length;
    console.log(`oldArr`);
    console.log(oldArr);
    console.log(`newArr`);
    console.log(newArr);
    let updatedCards = newArr.filter((card, index) => {
      if (card["id"] !== oldArr[index]["id"]) return true;
    });
    return updatedCards;
  };
  // const sendUpdateCards = () => {
  //   if (type === "family") {
  //     const cardsToSend = setUpdatedCards(dbFamilyCards, familyCards);
  //     cardsToSend.forEach((card) => dispatch(updateCard(card)));
  //     console.log(`cardsToSend`);
  //     console.log(cardsToSend);
  //   } else if (type === "fun") {
  //     const cardsToSend = setUpdatedCards(dbFunCards, funCards);
  //     cardsToSend.forEach((card) => dispatch(updateCard(card)));
  //     console.log(`cardsToSend`);
  //     console.log(cardsToSend);
  //   }
  // };
  const sendUpdateCards = (dbCards, relevantCards) => {
    const cardsToSend = setUpdatedCards(dbCards, relevantCards);
    cardsToSend.forEach((card) => dispatch(updateCard(card)));
    console.log(`cardsToSend`);
    console.log(cardsToSend);
  };
  const getItemStyle = (isDragging, draggableStyle) => {
    let color;
    if (isDragging) color = "#edebeb";
    return {
      ...draggableStyle,
      userSelect: "none",
      background: color,
    };
  };

  return (
    <div className="cardPanel-container">
      <div className={`cardPanel_img_${type}`}>
        <img src={panel.img} alt="CardPanel Image"></img>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={type}>
          {(provided, snapshot) => {
            return (
              <div
                className="cardPanel"
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={getItemStyle(
                  snapshot.isDraggingOver,
                  provided.droppableProps.style
                )}
              >
                {panel.cards.map((card, index) => {
                  return (
                    <Card
                      card={card}
                      id={`${type}Card${index}`}
                      key={`${card["id"]}`}
                      index={index}
                      locked={locked}
                      sendUpdateCards={sendUpdateCards}
                    />
                  );
                })}
                <button
                  className={`cardPanel_lock cardPanel_lock_${locked}`}
                  onClick={lockHandler}
                >
                  {locked ? (
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon icon={faLockOpen}></FontAwesomeIcon>
                  )}
                </button>
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default memo(CardPanel);
