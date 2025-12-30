import React, { Component } from "react";
import AdvantagesBlock from "./AdvantagesBlock";
import Title from "./Title";
import PawsPng from "../assets/img/paws.png";
import "../assets/css/componentStyles/advantagesSection.css";
import { LangContext } from "../context/langProvider";

class Advantages extends Component {
  static contextType = LangContext;
  render() {
    const { translations } = this.context;
    return (
      <>
        <section className="advantagesSection">
          <div className="content">
            <Title
              subtitle={translations.advantagesSection.subtitle}
              title={translations.advantagesSection.title}
            />
            <AdvantagesBlock
              advantageTitle={translations.advantagesSection.blockSubtitleOne}
              advantageDescription={translations.advantagesSection.blockTextOne}
            />
            <AdvantagesBlock
              advantageTitle={translations.advantagesSection.blockSubtitleTwo}
              advantageDescription={translations.advantagesSection.blockTextTwo}
            />
            <AdvantagesBlock
              advantageTitle={translations.advantagesSection.blockSubtitleThree}
              advantageDescription={
                translations.advantagesSection.blockTextThree
              }
            />
            <AdvantagesBlock
              advantageTitle={translations.advantagesSection.blockSubtitleFour}
              advantageDescription={
                translations.advantagesSection.blockTextFour
              }
            />
            <AdvantagesBlock
              advantageTitle={translations.advantagesSection.blockSubtitleFive}
              advantageDescription={
                translations.advantagesSection.blockTextFive
              }
            />
            <AdvantagesBlock
              advantageTitle={translations.advantagesSection.blockSubtitleSix}
              advantageDescription={translations.advantagesSection.blockTextSix}
            />
            <img src={PawsPng} alt="Paws Decoration Image" />
          </div>
        </section>
      </>
    );
  }
}

export default Advantages;
