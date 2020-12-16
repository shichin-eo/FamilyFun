import {
  UPDATE_CARD,
  CREATE_CARD,
  FETCH_CARDS,
  SET_FAMILY_CARDS,
  SET_FUN_CARDS,
  ENABLE_EDIT_CARD,
  DISABLE_EDIT_CARD,
  DELETE_CARD,
} from "./types";

const initialState = {
  fetchedCards: [],
  familyCards: [],
  funCards: [],
};
export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD:
      if (action.payload["card_type"] === "family") {
        return {
          ...state,
          fetchedCards: [...state.fetchedCards, action.payload], //!
          familyCards: [...state.familyCards, action.payload],
        };
      } else if (action.payload["card_type"] === "fun") {
        return {
          ...state,
          fetchedCards: [...state.fetchedCards, action.payload], //!
          funCards: [...state.funCards, action.payload],
        };
      }
    case UPDATE_CARD:
      if (action.payload["card_type"] === "family") {
        return {
          ...state,
          familyCards: [
            ...state.familyCards.map((card) => {
              if (action.payload["id"] === card["id"]) {
                card = action.payload;
              }
              return card;
            }),
          ],
        };
      } else if (action.payload["card_type"] === "fun") {
        return {
          ...state,
          funCards: [
            ...state.funCards.map((card) => {
              if (action.payload["id"] === card["id"]) {
                console.log(card);
                card = action.payload;
              }
              return card;
            }),
          ],
        };
      }
    case DELETE_CARD:
      if (action.payload["card_type"] === "family") {
        return {
          ...state,
          familyCards: [
            ...state.familyCards.filter(
              (card) => card["id"] !== action.payload["id"]
            ),
          ],
        };
      } else if (action.payload["card_type"] === "fun") {
        return {
          ...state,
          funCards: [
            ...state.funCards.filter(
              (card) => card["id"] !== action.payload["id"]
            ),
          ],
        };
      }
    case FETCH_CARDS:
      return { ...state, fetchedCards: action.payload };

    case SET_FAMILY_CARDS:
      return { ...state, familyCards: action.payload };
    case SET_FUN_CARDS:
      return { ...state, funCards: action.payload };
    case ENABLE_EDIT_CARD:
      if (action.payload["card_type"] === "family") {
        return {
          ...state,
          familyCards: [
            ...state.familyCards.map((card) => {
              if (action.payload["id"] === card["id"]) {
                card = action.payload;
              }
              return card;
            }),
          ],
        };
      } else if (action.payload["card_type"] === "fun") {
        return {
          ...state,
          funCards: [
            ...state.funCards.map((card) => {
              if (action.payload["id"] === card["id"]) {
                console.log(card);
                card = action.payload;
              }
              return card;
            }),
          ],
        };
      }
    case DISABLE_EDIT_CARD:
      if (action.payload["card_type"] === "family") {
        return {
          ...state,
          familyCards: [
            ...state.familyCards.map((card) => {
              if (action.payload["id"] === card["id"]) {
                card = action.payload;
              }
              return card;
            }),
          ],
        };
      } else if (action.payload["card_type"] === "fun") {
        return {
          ...state,
          funCards: [
            ...state.funCards.map((card) => {
              if (action.payload["id"] === card["id"]) {
                card = action.payload;
              }
              return card;
            }),
          ],
        };
      }
    default:
      return state;
  }
};
