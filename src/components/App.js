import React, { Component } from "react";
import Authorization from "./Authorization/Register.js";
import InfoGraph from "./InfoGraph/InfoGraph.js";
import Header from "./Header/Header";
import NoticePanel from "./NoticePanel/NoticePanel.js";
import PanelOfCards from "./PanelOfCards/PanelOfCards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <InfoGraph /> */}
        <PanelOfCards />
        {/* <NoticePanel />
        <Authorization /> */}
      </div>
    );
  }
}

export default App;
