import React from "react";
import { connect } from "react-redux";
import { changeLanguage } from "../../redux/actions";

const LANGUAGES = ["RU", "ENG", "DEU", "FRA"];

const Language = ({ language, changeLanguage }) => {
  console.log(`LANG ${language}`);
  // console.log(`LANG ${changeLanguage}`);
  const languageHandler = (lang) => {
    changeLanguage(lang);
  };

  return (
    <select
      value={language}
      onChange={(e) => {
        languageHandler(e.target.value);
      }}
    >
      {LANGUAGES.map((lang, index) => {
        return <option key={index}>{lang}</option>;
      })}
    </select>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
  };
};
const mapDispatchToProps = {
  changeLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Language);
