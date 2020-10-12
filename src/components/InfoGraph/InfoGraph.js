import React from "react";

const InfoGraph = () => {
  return (
    <>
      <div className="infograph-container">
        <div className="infograph-body">
          <div className="infograph-date">
            <div className="infograph-day">20</div>
            <div className="infograph-month">Сентябрь</div>
          </div>
          <div className="infograph">
            <div className="infograph-full"></div>
            <div className="infograph-short"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoGraph;
