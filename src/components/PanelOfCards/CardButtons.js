import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faTrashAlt,
  faEdit,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  deleteCard,
  enableEditCard,
  disableEditCard,
  updateCard,
} from "../../redux/actions";

const CardButtons = ({ card, description, setDescription }) => {
  const type = card["card_type"];
  const dispatch = useDispatch();
  //! The card can be edited
  const handlerEditableCard = (item) => {
    if (!item["editable"]) {
      item["editable"] = true;
      dispatch(enableEditCard(item));
    } else {
      item["editable"] = false;
      dispatch(disableEditCard(item));
      //? If card not editable return the last value
      resetDescription(item);
    }
  };
  //! Update card
  const updateCardHandler = (item) => {
    if (item["editable"] && item["card_description"] !== description.trim()) {
      item["card_description"] = description;
      dispatch(updateCard(card));
    }
    handlerEditableCard(item);
  };
  //! Delete card
  const deleteCardHandler = (item) => {
    console.log(item);
    dispatch(deleteCard(item));
  };

  //! Reset description card (change not accepted)
  const resetDescription = (item) => {
    setDescription(item["card_description"]);
  };

  //! Add class to buttons
  const toggleClass = (event) => {
    let elem = event.target.nextSibling;
    if (!elem) {
      elem = event.target.parentNode.nextSibling;
    }
    elem.classList.toggle("show");
  };
  //! Toggle buttons
  const toggleButtons = (item) => {
    return (
      <>
        {!item["editable"] ? (
          <FontAwesomeIcon
            className="card-btns_edit"
            icon={faEdit}
            onClick={() => handlerEditableCard(item)}
          />
        ) : (
          <FontAwesomeIcon
            className="card-btns_save"
            icon={faSave}
            onClick={() => {
              updateCardHandler(item);
            }}
          />
        )}
      </>
    );
  };

  return (
    <>
      {type === "family" || type === "fun" ? (
        <div className="card-btns-container">
          <FontAwesomeIcon
            className={`card-options ${type}`}
            icon={faEllipsisV}
            onClick={(e) => {
              toggleClass(e);
              if (card["editable"]) handlerEditableCard(card);
            }}
          />
          <div className={`card-btns ${type}`}>
            {toggleButtons(card)}
            <FontAwesomeIcon
              className="card-btns_trash"
              icon={faTrashAlt}
              onClick={() => {
                deleteCardHandler(card);
              }}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default CardButtons;
