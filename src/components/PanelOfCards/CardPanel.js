import React, { memo, useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { setFamilyCards, setFunCards, updateCard } from "../../redux/actions";

const CardPanel = ({ props }) => {
  const { type, cards, dbCards, img } = props;
  const [locked, setLocked] = useState(true);
  const dispatch = useDispatch();
  const emptyCard = {
    card_category: "Категория",
    card_description: "Описание",
    id: null,
  };

  //*** function for unlock cardPanel */
  function lockHandler() {
    setLocked(!locked);
    if (!locked) {
      sendUpdateCards(dbCards, cards);
    }
  }
  //*** function for fill the list of cards */
  function fillListCards(listCards) {
    let nocards = [
      emptyCard,
      emptyCard,
      emptyCard,
      emptyCard,
      emptyCard,
      emptyCard,
    ];
    nocards = nocards.map((card, index) => ({ ...card, id: `empty${index}` }));
    let currentCards = [...listCards];
    const result = [...currentCards, ...nocards];
    result.length = 6;
    return result;
  }
  //*****! Current panel of cards
  const panel = fillListCards(cards);
  //*****!
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
    let newPanel = Array.from(panel);
    console.log(`newPanel length ${newPanel.length}`);
    const selectedCard = newPanel.find(
      (dragCard) => dragCard["id"] === Number(draggableId)
    );
    console.log(`selectedCard ${selectedCard.id}`);
    console.log(`draggableId ${draggableId}`);
    newPanel.splice(source.index, 1);
    newPanel.splice(destination.index, 0, selectedCard);
    console.log(`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`);
    console.log(newPanel);
    newPanel = newPanel
      .filter((item) => Number(item["id"]))
      .map((item, index) => {
        console.log(item["id"]);
        console.log(Number(item["id"]));
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
    //  newArr.length = oldArr.length;      //!Если раскомментировать строку, то при удалении добавляет пустой элемент, карточек в newArr становится больше, т.к. oldArr.length > newArr.length
    console.log(`oldArr`);
    console.log(oldArr);
    console.log(`newArr`);
    console.log(newArr);
    let updatedCards = newArr.filter((card, index) => {
      if (card["id"] !== oldArr[index]["id"]) return true;
    });
    return updatedCards;
  };

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
  const cardProps = {
    cards,
    dbCards,
    locked,
    sendUpdateCards,
  };

  return (
    <div className="cardPanel-container">
      <div className={`cardPanel_img_${type}`}>
        <img src={img} alt="CardPanel Image"></img>
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
                {panel.map((card, index) => {
                  return (
                    <Card
                      card={card}
                      id={`${type}Card${index}`}
                      key={`${card["id"]}`}
                      index={index}
                      cardProps={cardProps}
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
