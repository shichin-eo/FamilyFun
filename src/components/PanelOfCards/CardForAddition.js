import React, { useState, memo, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointLeft,
  faHandPointRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { createCard, fetchPresets } from "../../redux/actions";

const CardforAddition = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("");
  const creatingCard = useRef(false);

  const [cardPriority, setCardPriority] = useState(1);
  // const [priorities, setPriorities] = useState([]);
  const initialCard = {
    card_description: "",
    card_category: "Категория",
    card_user: "",
    card_type: "",
    card_priority: "",
  };
  const [newCard, setNewCard] = useState(initialCard);

  //**** List of categories ****//
  const presets = useSelector((state) => state.app.presets);
  //**** Get categories to choose from ****//
  const setCategoryList = () => {
    const category_preset = presets.filter(
      (preset) => preset["preset_type"] === "p_category"
    );
    const list = category_preset.map((item) => item["preset_value"]);
    const liCategoryList = list.map((category, index) => {
      return (
        <li
          key={index}
          onClick={() => {
            updateCategory(category);
          }}
        >
          {category}
        </li>
      );
    });
    return liCategoryList;
  };
  //* List of categories for render *//
  const categoryList = setCategoryList();

  // const familyCards = useSelector((state) => state.cards.familyCards);
  // const funCards = useSelector((state) => state.cards.funCards);

  // console.log(`funCards.length ${funCards.length}`);
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

  useEffect(() => {
    if (creatingCard.current) {
      creatingCard.current = false;
      dispatch(createCard(newCard));
      resetNewCard();
      incrementPriority();
    }
  }, [newCard]);
  useEffect(() => {
    dispatch(fetchPresets());
  }, []);

  //* RESET CARD function *//
  const resetNewCard = () => {
    setNewCard(initialCard);
  };
  // * INCREMENT PRIORITY function*//
  const incrementPriority = () => {
    setCardPriority((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };
  //* FILL CARD PROPS function and change REF for adding
  const createCardHandler = (userID, type) => {
    setNewCard((prev) => {
      return {
        ...prev,
        card_user: userID,
        card_type: type,
        card_priority: cardPriority,
      };
    });
    creatingCard.current = true;
  };
  //* function for toggle category list
  const toggleActiveClass = () => {
    !active ? setActive("active") : setActive("");
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
            <ul>{categoryList}</ul>
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
