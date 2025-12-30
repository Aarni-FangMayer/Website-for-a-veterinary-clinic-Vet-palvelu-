import React, { Component } from "react";
import Title from "./Title";
import Services from "./ServicesBlock";
import Button from "./Button";
import RequestPricesModal from "./RequestPricesModal";
import "../assets/css/componentStyles/servicesSection.css";
import servicesImage from "../assets/img/dog.jpg";
import { LangContext } from "../context/langProvider";

class ServicesSection extends Component {
  static contextType = LangContext;

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

  modalClose = () => {
    this.setState(() => ({
      isModalOpened: false,
    }));
  };

  render() {
    const { translations } = this.context;
    return (
      <>
        <section className="servicesSection" id="servicesSectionStart">
          <div className="content">
            <Title
              subtitle={translations.servicesSection.subtitle}
              title={translations.servicesSection.title}
            />
            <div className="servicesWrapper">
              <Services
                serviceType={translations.servicesSection.cervicesGroupFirst}
                service1={translations.servicesSection.itemOne}
                service2={translations.servicesSection.itemTwo}
                service3={translations.servicesSection.itemThree}
              />
              <Services
                serviceType={translations.servicesSection.cervicesGroupSecond}
                service1={translations.servicesSection.itemFour}
                service2={translations.servicesSection.itemFive}
                service3={translations.servicesSection.itemSix}
              />
              <Services
                serviceType={translations.servicesSection.cervicesGroupThird}
                service1={translations.servicesSection.itemSeven}
                service2={translations.servicesSection.itemEight}
                service3={translations.servicesSection.itemNine}
              />
            </div>
            <div className="servicesImg">
              <img src={servicesImage} alt="Dog Image" />
            </div>
            <div className="btnServices">
              <Button
                btnText={translations.servicesSection.btnText}
                callback={this.modalOpen}
              />
            </div>
          </div>
          {this.state.isModalOpened && (
            <RequestPricesModal modalClose={this.modalClose} />
          )}
        </section>
      </>
    );
  }
}

export default ServicesSection;
