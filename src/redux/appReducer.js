import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  FETCH_PRESETS,
} from "./types";
const initialState = {
  loading: false,
  alert: null,
  presets: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    case FETCH_PRESETS:
      return { ...state, presets: action.payload };
    default:
      return state;
  }
};
