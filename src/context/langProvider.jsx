// ThemeContext.js
import React, { Component } from "react";
import { getLanguage } from "../config/langConfig";

const LangContext = React.createContext();

const fetchLangCode = () => {
  const code = localStorage.getItem("langCode");
  if (code) return code;
  return "FI";
};

class LangProvider extends Component {
  state = {
    lang: fetchLangCode(),
    translations: getLanguage(fetchLangCode()),
  };

  switchLanguage = (langCode) => {
    this.setState({
      lang: langCode,
      translations: getLanguage(langCode),
    });
    localStorage.setItem("langCode", langCode);
  };

  render() {
    return (
      <LangContext.Provider
        value={{
          lang: this.state.lang,
          switchLanguage: this.switchLanguage,
          translations: this.state.translations,
        }}
      >
        {this.props.children}
      </LangContext.Provider>
    );
  }
}

export { LangProvider, LangContext };
