import React, { Component } from "react";
import "../assets/css/componentStyles/requestFormModal.css";
import "../assets/css/componentStyles/requestSucsessModal.css";
import closeBtn from "../assets/icons/close-icon.png";
import sucsessImage from "../assets/img/sucsess_modal.png";
import { LangContext } from "../context/langProvider";

class RequestSucsessModal extends Component {
  static contextType = LangContext;

  handleBackdropClick = (e) => {
    if (e.target.classList.contains("modalWindowSucsess")) {
      this.props.modalClose();
    }
  };

  render() {
    const { translations } = this.context;
    return (
      <>
        <section
          className="modalWindowSucsess"
          onClick={this.handleBackdropClick}
        >
          <div className="sucsessMassage">
            <div className="sucsessImage">
              <img src={sucsessImage} alt="image of sucsess request sending " />
            </div>
            <div className="sucsessTitle">
              <h3>{translations.modalWindowSucsess.title}</h3>
              {translations.modalWindowSucsess.subtitle}
            </div>
            <button className="btnClose" onClick={this.props.modalClose}>
              <img src={closeBtn} alt="close button icon" />
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default RequestSucsessModal;
