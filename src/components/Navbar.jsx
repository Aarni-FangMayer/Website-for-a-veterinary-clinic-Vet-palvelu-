import React, { Component } from "react";
import "../assets/css/componentStyles/navbar.css";
import burgerMenuImage from "../assets/icons/burger_menu.png";
import { LangContext } from "../context/langProvider";
import LanguageSwitch from "./LanguageSwitch";

class Navbar extends Component {
  static contextType = LangContext;

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { translations } = this.context;

    const { isOpen } = this.state;

    return (
      <>
        <div className="mobileMenu">
          <div className="navBar">
            <div className="logoText">Finn-Veterinary OY</div>
            <LanguageSwitch />
            {isOpen ? (
              <div className="mobileMenuWrapper">
                <ul className="mobileMenu-items">
                  <li className="mobileMenu-item">
                    <a href="#about" onClick={this.toggleMenu}>
                      {translations.header.aboutText}
                    </a>
                  </li>
                  <li className="mobileMenu-item">
                    <a href="#servicesSectionStart" onClick={this.toggleMenu}>
                      {translations.header.priceText}
                    </a>
                  </li>
                  <li className="mobileMenu-item">
                    <a href="#reviews" onClick={this.toggleMenu}>
                      {translations.header.reviewText}
                    </a>
                  </li>
                  <li className="mobileMenu-item">
                    <a href="#contacts" onClick={this.toggleMenu}>
                      {translations.header.contactsText}
                    </a>
                  </li>
                </ul>
                <button className="burgerMenu-close" onClick={this.toggleMenu}>
                  X
                </button>
              </div>
            ) : (
              <button className="burgerMenu" onClick={this.toggleMenu}>
                <img src={burgerMenuImage} alt="mobile menu button" />
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
