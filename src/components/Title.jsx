import React, { Component } from "react";
import "../assets/css/componentStyles/title.css";

class Title extends Component {
  render() {
    return (
      <>
        <div className="titles">
          <h4>{this.props.subtitle}</h4>
          <h3>{this.props.title}</h3>
        </div>
      </>
    );
  }
}

export default Title;
