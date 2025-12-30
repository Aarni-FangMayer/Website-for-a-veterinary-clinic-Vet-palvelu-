import React, { Component } from "react";
import "../assets/css/componentStyles/form.css";
import RequestSucsessModal from "./RequestSucsessModal";
import { LangContext } from "../context/langProvider";

class Form extends Component {
  static contextType = LangContext;

  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
      name: "",
      email: "",
      phone: "",
      message: "",
      privacy: false,
      errors: [],
    };
  }

  modalOpen = () => {
    this.setState({ isModalOpened: true });
  };

  modalClose = () => {
    this.setState({ isModalOpened: false });
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  validateForm = () => {
    const { name, email, phone, message, privacy } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s()+-]{7,20}$/;
    let errors = [];

    if (!name || name.length > 50) {
      errors.push("Please enter a valid name (max 50 characters).");
    }

    if (!email || !emailRegex.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (phone && !phoneRegex.test(phone)) {
      errors.push("Please enter a valid phone number.");
    }

    if (message.length > 500) {
      errors.push("Message is too long (max 500 characters).");
    }

    if (!privacy) {
      errors.push("You must agree to the privacy policy.");
    }

    this.setState({ errors });
    return errors.length === 0;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (!this.validateForm()) return;

    const { name, email, phone, message, privacy } = this.state;

    const formData = {
      name,
      email,
      phone,
      message,
      privacy: privacy ? "Agreed" : "Not agreed",
      access_key: "bc6c37a5-17f2-4302-a325-b63d0016817a",
    };

    const json = JSON.stringify(formData);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        this.setState({
          name: "",
          email: "",
          phone: "",
          message: "",
          privacy: false,
        });
        this.modalOpen();
      } else {
        console.error("Error", res);
      }
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  render() {
    const { translations } = this.context;

    const { name, email, phone, message, privacy, errors, isModalOpened } =
      this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="bc6c37a5-17f2-4302-a325-b63d0016817a"
          ></input>

          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder={translations.formSection.namePlaceholderText}
            required
          />
          {errors.includes(
            "Please enter a valid name (max 50 characters)."
          ) && (
            <div className="error">
              Please enter a valid name (max 50 characters).
            </div>
          )}

          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            placeholder={translations.formSection.phonePlaceholderText}
            required
          />
          {errors.includes("Please enter a valid phone number.") && (
            <div className="error">Please enter a valid phone number.</div>
          )}

          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder={translations.formSection.mailPlaceholderText}
            required
          />
          {errors.includes("Please enter a valid email address.") && (
            <div className="error">Please enter a valid email address.</div>
          )}

          <label htmlFor="message">{translations.formSection.labelText}</label>
          <textarea
            name="message"
            value={message}
            onChange={this.handleChange}
            id="message"
          ></textarea>
          {errors.includes("Message is too long (max 500 characters).") && (
            <div className="error">
              Message is too long (max 500 characters).
            </div>
          )}

          <div className="privacyPolicyCheck">
            <input
              type="checkbox"
              name="privacy"
              checked={privacy}
              onChange={this.handleChange}
              id="checkbox"
            />{" "}
            <label htmlFor="checkbox" required>
              {translations.formSection.checkboxLabelText}
              <a href="#">{translations.formSection.checkboxLinkText}</a>
            </label>
            {errors.includes("You must agree to the privacy policy.") && (
              <div className="error">You must agree to the privacy policy.</div>
            )}
          </div>

          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          ></input>

          <button type="submit" className="formBtn">
            {translations.formSection.btnText}
          </button>
        </form>
        {isModalOpened && <RequestSucsessModal modalClose={this.modalClose} />}
      </>
    );
  }
}

export default Form;
