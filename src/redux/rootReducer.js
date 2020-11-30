import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReducer";
import { languageReducer } from "./languageReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  language: languageReducer,
  cards: cardsReducer,
  app: appReducer,
});
