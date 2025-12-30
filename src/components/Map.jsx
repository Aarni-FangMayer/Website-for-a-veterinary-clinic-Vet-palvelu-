import React, { Component } from "react";

class Map extends Component {
  render() {
    return (
      <>
        <div style={{ width: "100%", height: "400px" }}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.04352700938875!2d24.921084876341272!3d60.17785036136116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920a301c8a935b%3A0x7e891e6e69dc2fd0!2sV%C3%A4lsk%C3%A4rinkatu%201b%2C%2000260%20Helsinki!5e0!3m2!1sen!2sfi!4v1767121161435!5m2!1sen!2sfi" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "5px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </>
    );
  }
}

export default Map;
