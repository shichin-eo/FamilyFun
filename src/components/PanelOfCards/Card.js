import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card-container" id={props.id}>
        <input className="card-input" placeholder={props.cardInfo}></input>
        <div className="card-name">{props.cardType}</div>
      </div>
    </>
  );
};

export default Card;
