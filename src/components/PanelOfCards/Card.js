import React, { useState, useEffect } from "react";
import CardButtons from "./CardButtons";

const Card = ({ card, id }) => {
  const [description, setDescription] = useState(card["card_description"]);
  const onDescriptionChanged = (e) => setDescription(e.target.value);

  const setCurrentDesc = (item) => {
    if (item["card_description"] === "Описание") {
      setDescription("");
    } else {
      setDescription(item["card_description"]);
    }
  };
  useEffect(() => setCurrentDesc(card), [card]);

  return (
    <>
      <div className="card-container" id={id}>
        <CardButtons
          card={card}
          description={description}
          setDescription={setDescription}
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
    </>
  );
};

export default Card;
