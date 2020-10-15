import React, { Component } from "react";
import InfoGraph from "./InfoGraph/InfoGraph.js";
import Menu from "./Menu/Menu";
import NoticePanel from "./NoticePanel/NoticePanel.js";
import PanelOfCards from "./PanelOfCards/PanelOfCards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <InfoGraph />
        <PanelOfCards />
        <NoticePanel />
      </div>
    );
  }
}

export default App;
