import React, { useState, memo, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointLeft,
  faHandPointRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { createCard, fetchPresets, showAlert } from "../../redux/actions";
import CategoryList from "./CategoryList";

const CardforAddition = () => {
  const DESCRIPTION_LENGTH = 30;
  const dispatch = useDispatch();
  const initialCard = {
    card_description: "",
    card_category: "Категория",
    card_user: "",
    card_type: "",
    card_priority: "",
  };
  const [active, setActive] = useState("");
  const [familyCardPriority, setfamilyCardPriority] = useState(1);
  const [funCardPriority, setfunCardPriority] = useState(1);
  const [newCard, setNewCard] = useState(initialCard);

  const creatingCard = useRef(false);

  const familyCards = useSelector((state) => state.cards.familyCards);
  const funCards = useSelector((state) => state.cards.funCards);

  function setRelevantPriority(cardType) {
    let relevantPriority;
    switch (cardType) {
      case "family":
        if (familyCards.length) {
          relevantPriority = Math.max.apply(
            null,
            familyCards.map((card) => card["card_priority"])
          );
          console.log(`relevantPriority123 ${relevantPriority}`);
          setfamilyCardPriority(relevantPriority + 1);
          break;
        }
      case "fun":
        if (funCards.length) {
          relevantPriority = Math.max.apply(
            null,
            funCards.map((card) => card["card_priority"])
          );
          console.log(`relevantPriority456 ${relevantPriority}`);
          setfunCardPriority(relevantPriority + 1);
          break;
        }

      default:
        relevantPriority = 1;
        break;
    }
    return relevantPriority;
  }

  useEffect(() => {
    setRelevantPriority("family");
  }, [familyCards]);

  useEffect(() => {
    setRelevantPriority("fun");
  }, [funCards]);

  //* function for toggle category list
  const toggleActiveClass = () => {
    !active ? setActive("active") : setActive("");
  };
  //* UPDATE CARD CATEGORY function*//
  const updateCategory = (newCategory) => {
    setNewCard((prev) => ({ ...prev, card_category: newCategory }));
    toggleActiveClass();
  };
  //* UPDATE CARD DESCRIPTION function*//
  const updateDescriptionCard = (event) => {
    const description = event.target.value;
    setNewCard((prev) => ({ ...prev, card_description: description }));
  };
  //* RESET CARD function *//
  const resetNewCard = () => {
    setNewCard(initialCard);
  };
  useEffect(() => {
    if (creatingCard.current) {
      creatingCard.current = false;
      // if (canAddCard()) {
      //   dispatch(createCard(newCard));
      // } else {
      //   dispatch(showAlert("Некорректно заполнены атрибуты карточки"));
      // }
      triggerBeforeCreateCard();
      resetNewCard();
    }
  }, [newCard]);
  useEffect(() => {
    dispatch(fetchPresets());
  }, []);
  //* Проверка перед добавление карточки
  // function canAddCard() {
  //   let result = false;
  //   if (
  //     newCard["card_description"] &&
  //     newCard["card_description"].trim() &&
  //     newCard["card_category"] !== initialCard["card_category"]
  //   ) {
  //     result = true;
  //   }
  //   return result;
  // }
  function triggerBeforeCreateCard() {
    let alert = {
      type: "error",
      messages: [],
    };
    if (!newCard["card_description"] || !newCard["card_description"].trim()) {
      alert.messages.push("- Некорректно заполнено описание карточки");
    }
    if (newCard["card_category"] === initialCard["card_category"]) {
      alert.messages.push("- Выберите категорию");
    }
    if (newCard["card_description"].length > DESCRIPTION_LENGTH) {
      alert.messages.push(
        "- Слишком длинное описание карточки, опишите более ёмко"
      );
    }
    if (alert.messages.length) {
      dispatch(showAlert(alert));
    } else {
      dispatch(createCard(newCard));
    }
  }

  //* FILL CARD PROPS function and change REF for adding
  const createCardHandler = (userID, type) => {
    let currentPriority =
      type === "family" ? familyCardPriority : funCardPriority;
    setNewCard((prev) => {
      return {
        ...prev,
        card_user: userID,
        card_type: type,
        card_priority: currentPriority,
      };
    });
    creatingCard.current = true;
  };

  return (
    <>
      <div className="cardForAddition">
        <div className="cardForAddition_header">
          <FontAwesomeIcon
            className="cardForAddition_header_plus"
            icon={faPlus}
          />
        </div>
        <div className="cardForAddition_main">
          <input
            className="cardForAddition_main_input"
            readOnly={false}
            placeholder={"Описание"}
            value={newCard["card_description"]}
            onChange={updateDescriptionCard}
          ></input>
          <div className={`cardForAddition_main_list ${active}`}>
            <CategoryList
              updateCategory={updateCategory}
              activeClass={active}
            />
          </div>
          <div className="cardForAddition_main_category">
            {newCard["card_category"]}
            <div
              className="cardForAddition_main_category_burger"
              onClick={toggleActiveClass}
            >
              <span
                className={`cardForAddition_main_category_burger_btn ${active} `}
              ></span>
            </div>
          </div>
        </div>
        <div className={`cardForAddition_btns ${active}`}>
          <button
            className="cardForAddition_btns_lt_btn"
            onClick={() => {
              createCardHandler("1", "family");
            }}
          >
            <FontAwesomeIcon icon={faHandPointLeft} />
          </button>
          <button
            className="cardForAddition_btns_rt_btn"
            onClick={() => createCardHandler("1", "fun")}
          >
            <FontAwesomeIcon icon={faHandPointRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(CardforAddition);
