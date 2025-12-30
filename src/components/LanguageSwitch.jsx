import React, { Component } from "react";
import "../assets/css/componentStyles/langSwitcher.css";
import { LangContext } from "../context/langProvider";

class LanguageSwitch extends Component {
  static contextType = LangContext;

  render() {
    const langs = ["FI", "EN", "RU", "SV"];
    const { lang, switchLanguage } = this.context;
    return (
      <select
        id="langs"
        name="langsList"
        form="langsForm"
        onChange={(e) => switchLanguage(e.target.value)}
        value={lang}
      >
        {langs.map((langCode, index) => (
          <option key={index} value={langCode}>
            {langCode}
          </option>
        ))}
      </select>
    );
  }
}

export default LanguageSwitch;
