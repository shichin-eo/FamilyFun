import { CHANGE_LANGUAGE } from "./types";

const initialState = {
  language: "RU",
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      console.log("123");

      return { ...state, language: action.payload };
    default:
      return state;
  }
};
