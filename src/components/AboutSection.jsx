import React, { Component } from "react";
import "../assets/css/componentStyles/aboutSection.css";
import vetImg from "../assets/img/veterinary.jpg";
import pawImg from "../assets/img/paw.png";
import { LangContext } from "../context/langProvider";

class About extends Component {
  static contextType = LangContext;
  render() {
    const { translations } = this.context;
    return (
      <>
        <section className="aboutSection" id="about">
          <div className="content">
            <div className="doctorImage">
              <img src={vetImg} alt="Veterinary photo" />
            </div>
            <div className="textContentAbout">
              <h3>{translations.aboutSection.title}</h3>
              <p>
                {translations.aboutSection.paragraphFirst}
                <span className="hilights">
                  {" "}
                  {translations.aboutSection.highlightText}{" "}
                </span>
              </p>
              <p>{translations.aboutSection.paragraphSecond}</p>
              <p>{translations.aboutSection.paragraphThird}</p>
              <p className="semiBold">{translations.aboutSection.boldText}</p>
              <img src={pawImg} alt="paw (decoration) image" id="pawImg" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
