import { combineReducers } from "redux";
import { languageReducer } from "./languageReducer";

export const rootReducer = combineReducers({
  language: languageReducer,
});
