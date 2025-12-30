import React, { Component } from "react";
import LanguageSwitch from "./LanguageSwitch";
import "../assets/css/componentStyles/header.css";
import { LangContext } from "../context/langProvider";
import Navbar from "./Navbar";
class Header extends Component {
  static contextType = LangContext;
  render() {
    const { translations } = this.context;
    return (
      <>
        <header>
          <div className="content">
            <ul className="navMenu">
              <li className="navMenuItem">
                <a href="#about">{translations.header.aboutText}</a>
              </li>
              <li className="navMenuItem">
                <a href="#servicesSectionStart">
                  {translations.header.priceText}
                </a>
              </li>
              <li className="navMenuItem">
                <a href="#reviews">{translations.header.reviewText}</a>
              </li>
              <li className="navMenuItem">
                <a href="#contacts">{translations.header.contactsText}</a>
              </li>
            </ul>
            <LanguageSwitch />
          </div>
        </header>
        <Navbar />
      </>
    );
  }
}

export default Header;
