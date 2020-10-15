import React from "react";
//import { connect } from "react-redux";
import Language from "./Language";

const Menu = () => {
  return (
    <div className="Menu">
      <div className="menu-logo">FAMILY FOR FUN</div>
      <div className="menu-settings">ПРОФИЛЬ</div>
      <Language />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     mainLanguage: state.language.language,
//   };
// };

//export default connect(mapStateToProps, null)(Menu);
export default Menu;
