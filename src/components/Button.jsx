import React, { Component } from "react";
import "../assets/css/componentStyles/button.css";

class Button extends Component {
  render() {
    return (
      <>
        <button className="customButton" onClick={this.props.callback}>
          {this.props.btnText}
        </button>
      </>
    );
  }
}

export default Button;
