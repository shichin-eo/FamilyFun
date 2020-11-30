import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const loading = useSelector((state) => state.app.loading);
  // console.log(`loading ${loading}`);
  if (loading) {
    return (
      <div className="loader">
        <div className="l_main">
          <div className="l_square">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="l_square">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="l_square">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="l_square">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  } else return "";
};
export default Loader;
