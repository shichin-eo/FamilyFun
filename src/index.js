import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import "./js/common";
import "./assets/css/main.css";
import "./assets/scss/main.scss";
import { rootReducer } from "./redux/rootReducer.js";

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
