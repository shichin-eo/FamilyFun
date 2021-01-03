import { FETCH_SENDER_NOTIFICATIONS } from "./types";
const initialState = {
  notifications: [],
  events: [],
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SENDER_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
};
