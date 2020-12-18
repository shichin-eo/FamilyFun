import React, { memo, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faTrashAlt,
  faEdit,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCard,
  enableEditCard,
  disableEditCard,
  updateCard,
  showAlert,
} from "../../redux/actions";

const CardButtons = ({
  card,
  description,
  setDescription,
  sendUpdateCards,
}) => {
  const type = card["card_type"];
  const DESCRIPTION_LENGTH = 30;
  const dispatch = useDispatch();
  //?????????????????????
  const [deletedCard, setDeletedCard] = useState(null);
  const updateDeletedCard = (item) => {
    setDeletedCard(item);
  };
  //?????????????????????
  const familyCards = useSelector((state) => state.cards.familyCards);
  const funCards = useSelector((state) => state.cards.funCards);
  const fetchedCards = useSelector((state) => state.cards.fetchedCards);
  const dbFamilyCards = fetchedCards.filter(
    (card) => card["card_type"] === "family"
  );
  const dbFunCards = fetchedCards.filter((card) => card["card_type"] === "fun");

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
      let currentFunCards;
      if (deletedCard["card_type"] === "family") {
        currentFunCards = familyCards
          .filter((fameilyCard) => fameilyCard["id"] !== deletedCard["id"])
          .map((fameilyCard, index) => ({
            ...fameilyCard,
            card_priority: index + 1,
          }));
        sendUpdateCards(dbFamilyCards, currentFunCards);
      } else if (deletedCard["card_type"] === "fun") {
        currentFunCards = funCards
          .filter((funCard) => funCard["id"] !== deletedCard["id"])
          .map((funCard, index) => ({ ...funCard, card_priority: index + 1 }));
        sendUpdateCards(dbFunCards, currentFunCards);
      }

      setDeletedCard(null);
    }
  }
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
export default memo(CardButtons);
