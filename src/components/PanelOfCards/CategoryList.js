import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
const CategoryList = ({ updateCategory, activeClass }) => {
  //**** List of categories ****//
  const presets = useSelector((state) => state.app.presets);

  //**** Get categories to choose from ****//
  const getList = () => {
    const category_preset = presets.filter(
      (preset) => preset["preset_type"] === "p_category"
    );
    const list = category_preset.map((item) => ({
      value: item["preset_value"],
      url: item["url"],
    }));
    return list;
  };
  const fetchedList = getList();
  return (
    <ul>
      {fetchedList.map((category, index) => (
        <Category
          category={category}
          updateCategory={updateCategory}
          index={index}
          key={index}
          activeClass={activeClass}
        />
      ))}
    </ul>
  );
};
export default CategoryList;
