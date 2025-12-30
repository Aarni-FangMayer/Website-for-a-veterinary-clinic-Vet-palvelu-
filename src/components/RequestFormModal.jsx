import React, { Component } from "react";
import Form from "./Form";
import "../assets/css/componentStyles/formSection.css";
import "../assets/css/componentStyles/requestFormModal.css";
import closeBtn from "../assets/icons/close-icon.png";
import RequestSucsessModal from "./RequestSucsessModal";
import { LangContext } from "../context/langProvider";

class RequestFormModal extends Component {
  static contextType = LangContext;
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }

  handleBackdropClick = (e) => {
    if (e.target.classList.contains("modalWindowForm")) {
      this.props.modalClose();
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
    };
  }

  modalOpen = () => {
    this.setState(() => ({
      isModalOpened: true,
    }));
  };

  render() {
    const { translations } = this.context;
    return (
      <>
        {this.state.isModalOpened ? (
          <RequestSucsessModal modalClose={this.props.modalClose} />
        ) : (
          <section
            className="modalWindowForm"
            onClick={this.handleBackdropClick}
          >
            <div className="modalForm">
              <div className="modalForm-title">
                <h3>{translations.modalWindowForm.title}</h3>
                {translations.modalWindowForm.subtitle}
              </div>
              <button className="btnClose" onClick={this.props.modalClose}>
                <img src={closeBtn} alt="close button icon" />
              </button>
              <div className="modalForm-wrapper">
                <Form />
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

export default RequestFormModal;
