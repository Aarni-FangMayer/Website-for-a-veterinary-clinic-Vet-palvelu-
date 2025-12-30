import React, { Component } from "react";
import "../assets/css/componentStyles/advantagesBlock.css";

class AdvantagesBlock extends Component {
  render() {
    return (
      <>
        <div className="advantagesWrapper">
          <div className="advantageTitle">{this.props.advantageTitle}</div>
          <div className="advantage">{this.props.advantageDescription}</div>
        </div>
      </>
    );
  }
}

export default AdvantagesBlock;
