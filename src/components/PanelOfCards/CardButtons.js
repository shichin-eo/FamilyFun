import React, { memo, useEffect, useState } from "react";
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
  showAlert,
} from "../../redux/actions";

const CardButtons = ({ cardButtonsProps }) => {
  const {
    card,
    description,
    setDescription,
    sendUpdateCards,
    cards,
    dbCards,
  } = cardButtonsProps;
  const type = card["card_type"];
  const DESCRIPTION_LENGTH = 30;
  const dispatch = useDispatch();
  //?????????????????????
  const [deletedCard, setDeletedCard] = useState(null);
  const updateDeletedCard = (item) => {
    setDeletedCard(item);
  };
  //?????????????????????

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
    triggerBeforeUpdateCard(item);
    handlerEditableCard(item);
  };

  //! Check before update the Card
  function triggerBeforeUpdateCard(item) {
    let alert = {
      type: "error",
      messages: [],
    };
    if (!description || !description.trim()) {
      alert.messages.push("- Некорректно заполнено описание карточки");
    }
    if (description.length > DESCRIPTION_LENGTH) {
      alert.messages.push(
        "- Слишком длинное описание карточки, опишите более ёмко"
      );
    }
    if (alert.messages.length) {
      dispatch(showAlert(alert));
    } else if (
      item["editable"] &&
      item["card_description"] !== description.trim()
    ) {
      item["card_description"] = description.trim();
      dispatch(updateCard(item));
    }
  }

  //! Delete card
  const deleteCardHandler = (item) => {
    console.log(item);
    updateDeletedCard(item);
    dispatch(deleteCard(item));
  };
  useEffect(() => {
    triggerAfterDelete();
  }, [deletedCard]);
  //! Update cards after delete
  function triggerAfterDelete() {
    if (deletedCard) {
      const currentCards = cards
        .filter((card) => card["id"] !== deletedCard["id"])
        .map((card, index) => ({
          ...card,
          card_priority: index + 1,
        }));
      sendUpdateCards(dbCards, currentCards);
      setDeletedCard(null);
    }
  }
  //! Reset description card (change not accepted)
  const resetDescription = (item) => {
    setDescription(item["card_description"]);
  };

  //! Add class to buttons
  const toggleClass = (event, afterSave) => {
    let elem;
    if (afterSave) {
      elem = event.target.closest(".show");
    } else {
      elem = event.target.nextSibling;
      if (!elem) {
        elem = event.target.parentNode.nextSibling;
      }
    }
    console.log(elem);
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
            onClick={(e) => {
              toggleClass(e, true);
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
              toggleClass(e, false);
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
export default memo(CardButtons);
