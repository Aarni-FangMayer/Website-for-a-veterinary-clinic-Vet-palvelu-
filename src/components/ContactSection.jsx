import React, { Component } from "react";
import Title from "./Title";
import location from "../assets/icons/location.png";
import telephone from "../assets/icons/tel.png";
import mail from "../assets/icons/mail.png";
import Map from "./Map";
import "../assets/css/componentStyles/contactSection.css";
import { LangContext } from "../context/langProvider";

class Contacts extends Component {
  static contextType = LangContext;
  render() {
    const { translations } = this.context;
    return (
      <>
        <section className="contactSection" id="contacts">
          <div className="content">
            <Title
              subtitle={translations.contactsSection.subtitle}
              title={translations.contactsSection.title}
            />
            <div className="textContent">
              <div className="describtion">
                <p>{translations.contactsSection.paragraphFirst}</p>
                <p>
                  {translations.contactsSection.paragraphSecond}
                  <b>{translations.contactsSection.boldText}</b>
                  {translations.contactsSection.paragraphThird}
                </p>
              </div>
              <div className="workInfo">
                <div className="adress info">
                  <img src={location} alt="location icon" />
                  <p>Helsinki, Välskärinkatu 1b</p>
                </div>
                <div className="workingTime info">
                  <div className="workindDays">
                    <p>{translations.contactsSection.workDaysText}</p>
                    <p>10.00 — 19.00</p>
                  </div>
                  <div className="dayOff">
                    <p>{translations.contactsSection.dayOffText}</p>
                    <p>{translations.contactsSection.closeText}</p>
                  </div>
                </div>
                <div className="phone info">
                  <img src={telephone} alt="location icon" />
                  <a href="tel:+358503737252">(+358) 40-473-6458</a>
                </div>
                <div className="mail info">
                  <img src={mail} alt="location icon" />
                  <a href="mailto:info@vet-helsinki.fi">info@vet-helsinki.fi</a>
                </div>
              </div>
            </div>
            <div className="map">
              <Map />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contacts;
