import React, { useState, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import CardButtons from "./CardButtons";

const Card = ({ card, id, index, locked, sendUpdateCards }) => {
  const [description, setDescription] = useState(card["card_description"]);
  const onDescriptionChanged = (e) => setDescription(e.target.value);

  const setCurrentDesc = (item) => {
    if (item["card_description"] === "Описание") {
      setDescription("");
    } else {
      setDescription(item["card_description"]);
    }
  };

  const getItemStyle = (isDragging, draggableStyle) => {
    let color;
    if (isDragging) color = "#f66f6c";
    // console.log(draggableStyle);
    return {
      ...draggableStyle,
      userSelect: "none",
      background: color,
    };
  };

  const isDragDisabled = locked || String(card["id"]).includes("empty");
  const draggableID = `${card["id"]}`;

  useEffect(() => setCurrentDesc(card), [card]);
  return (
    <Draggable
      draggableId={draggableID}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => {
        return (
          <div
            className="card-container"
            id={id}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            <CardButtons
              card={card}
              description={description}
              setDescription={setDescription}
              sendUpdateCards={sendUpdateCards}
            />
            <input
              className="card-input"
              placeholder="Описание"
              value={description}
              readOnly={!card["editable"]}
              name="cardDescription"
              onChange={onDescriptionChanged}
            ></input>
            <div className="card-category">{card["card_category"]}</div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card;
