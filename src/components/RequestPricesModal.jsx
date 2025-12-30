import React, { Component } from "react";
import closeBtn from "../assets/icons/close-icon.png";
import Button from "./Button";
import Carousel from "./Carousel";
import "../assets/css/componentStyles/requestPricesModal.css";
import { LangContext } from "../context/langProvider";

class RequestPricesModal extends Component {
  static contextType = LangContext;
  componentDidMount() {
    const targetElement = document.getElementById("servicesSectionStart");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }

  handleBackdropClick = (e) => {
    if (e.target.classList.contains("modalWindowPrices")) {
      this.props.modalClose();
    }
  };

  handleCloseAndNavigate = () => {
    this.props.modalClose();

    const element = document.getElementById("formSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    const { translations } = this.context;
    return (
      <>
        <section
          className="modalWindowPrices"
          onClick={this.handleBackdropClick}
        >
          <div className="modalPrices">
            <div className="modalPricesTitle">
              <h3>{translations.modalWindowPrices.title}</h3>
            </div>
            <button className="btnClose" onClick={this.props.modalClose}>
              <img src={closeBtn} alt="close button icon" />
            </button>
            <Carousel />
            <button
              className="modalPricesBtn"
              onClick={this.handleCloseAndNavigate}
            >
              {translations.promoSection.btnText}
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default RequestPricesModal;
