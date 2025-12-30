import React, { Component } from "react";
import "../assets/css/componentStyles/servicesBlock.css";

class Services extends Component {
  render() {
    return (
      <>
        <div className="servicesComponentWrapper">
          <div className="serviceType">{this.props.serviceType}</div>
          <div className="serviceWrapper">
            <div className="service">{this.props.service1}</div>
            <div className="service">{this.props.service2}</div>
            <div className="service">{this.props.service3}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
