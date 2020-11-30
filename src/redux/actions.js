import {
  CHANGE_LANGUAGE,
  CREATE_CARD,
  DELETE_CARD,
  FETCH_CARDS,
  HIDE_LOADER,
  SET_FAMILY_CARDS,
  SET_FUN_CARDS,
  SHOW_LOADER,
  UPDATE_CARD,
  ENABLE_EDIT_CARD,
  DISABLE_EDIT_CARD,
  SHOW_ALERT,
  HIDE_ALERT,
  FETCH_PRESETS,
} from "./types";

export function changeLanguage(lang) {
  return {
    type: CHANGE_LANGUAGE,
    payload: lang,
  };
}

export function createCard(card) {
  return async (dispatch) => {
    try {
      const url = `http://localhost:3000/api/v1/cards`;
      const option = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
      };
      const response = await fetch(url, option);
      const json = await response.json();
      const message = json.message;
      if (response.ok) {
        const addedCard = json.body.card;
        console.log(addedCard);
        dispatch({ type: CREATE_CARD, payload: addedCard });
        dispatch(showAlert(message));
      } else {
        console.log(json);
        dispatch(showAlert(message));
      }
    } catch (e) {
      const errorMessage = "400 Bad Request";
      dispatch(showAlert(errorMessage));
      throw new Error(errorMessage);
    }
  };
}
export function updateCard(card) {
  return async (dispatch) => {
    try {
      const url = `http://localhost:3000/api/v1/cards/${card["id"]}`;
      const options = {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
      };
      console.log("HERERE");
      const response = await fetch(url, options);
      const json = await response.json();
      const message = json.message;
      if (response.ok) {
        console.log(`json changeCard ${json}`);
        dispatch({ type: UPDATE_CARD, payload: card });
        dispatch(showAlert(message));
      } else {
        dispatch(showAlert(message));
      }
    } catch (e) {
      const errorMessage = "400 Bad Request";
      dispatch(showAlert(errorMessage));
      throw new Error(errorMessage);
    }
  };
}
export function deleteCard(card) {
  return async (dispatch) => {
    try {
      const url = `http://localhost:3000/api/v1/cards/${card["id"]}`;
      const options = {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, options);
      const json = await response.json();
      const message = json.message;
      if (response.ok) {
        console.log(`Message from DELETE method ${message}`);
        dispatch({ type: DELETE_CARD, payload: card });
        dispatch(showAlert(message));
      } else {
        console.log(message);
        dispatch(showAlert(message));
      }
    } catch (e) {
      throw new Error("Не удалось удалить карточку");
    }
  };
}

export function fetchCards(userID) {
  return async (dispatch) => {
    dispatch(showLoader());
    const id = userID || 1;
    const url = `http://localhost:3000/api/v1/cards/${id}`;
    const response = await fetch(url);
    const json = await response.json();
    const additionalProps = {
      editable: false,
      updated: false,
    };
    const data = json.map((elem) => {
      return { ...elem, ...additionalProps };
    });
    dispatch({ type: FETCH_CARDS, payload: data });
    dispatch(setFamilyCards(data));
    dispatch(setFunCards(data));
    dispatch(hideLoader());
  };
}

export function setFamilyCards(cards) {
  return {
    type: SET_FAMILY_CARDS,
    payload: cards.filter((card) => card["card_type"] === "family"),
  };
}

export function setFunCards(cards) {
  return {
    type: SET_FUN_CARDS,
    payload: cards.filter((card) => card["card_type"] === "fun"),
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function enableEditCard(card) {
  return {
    type: ENABLE_EDIT_CARD,
    payload: card,
  };
}

export function disableEditCard(card) {
  return {
    type: DISABLE_EDIT_CARD,
    payload: card,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => dispatch(hideAlert()), 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function fetchPresets() {
  return async (dispatch) => {
    const url = `http://localhost:3000/api/v1/presets/`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch({ type: FETCH_PRESETS, payload: json });
  };
}
