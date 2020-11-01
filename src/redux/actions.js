import { CHANGE_LANGUAGE } from "./types";

export function changeLanguage(lang) {
  return {
    type: CHANGE_LANGUAGE,
    payload: lang,
  };
}
