import React from "react";

const Category = ({ category, updateCategory, activeClass, index }) => {
  return (
    <li
      className={`category-li ${activeClass}`}
      key={index}
      title={category["value"]}
      onClick={() => updateCategory(category["value"])}
    >
      <img src={category.url}></img>
    </li>
  );
};

export default Category;
