import React, { useState, useContext } from "react";
import "../assets/css/componentStyles/carousel.css";
import { LangContext } from "../context/langProvider";

const Carousel = () => {
  const language = useContext(LangContext).translations;
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    <div className="servicesPricesWrapper">
      <div className="servicesTitle">{language.carousel.titleFirst}</div>
      <div className="servicesBlock">
        <div className="servicePrice">
          <p>{language.carousel.item1}</p>
          55€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item2}</p>
          65€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item3}</p>
          80€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item4}</p>
          50€ / 10€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item5}</p>
          80€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item6}</p>
          35€ / 15€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item7}</p>
          55€ / 35€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item8}</p>
          60€
        </div>
      </div>
    </div>,
    <div className="servicesPricesWrapper">
      <div className="servicesTitle">{language.carousel.titleSecond}</div>
      <div className="servicesBlock">
        <div className="servicePrice">
          <p>{language.carousel.item9}</p>
          50€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item10}</p>
          50€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item11}</p>
          60€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item12}</p>
          15€
        </div>
      </div>
      <div className="servicesTitle">{language.carousel.titleThird}</div>
      <div className="servicesBlock">
        <div className="servicePrice">
          <p>{language.carousel.item13}</p>
          65€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item14}</p>
          80€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item15}</p>
          90€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item16}</p>
          100€
        </div>
      </div>
    </div>,
    <div className="servicesPricesWrapper">
      <div className="servicesTitle">{language.carousel.titleFourth}</div>
      <div className="servicesBlock">
        <div className="servicePrice">
          <p>{language.carousel.item17}</p>
          229€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item18}</p>
          245€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item19}</p>
          275€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item20}</p>
          300€
        </div>
        <div className="servicePrice">
          <p>
            {language.carousel.item21}
            <span className="tooltip">
              *<span className="tooltipText">lääkkeet ei sisälty hintaan</span>
            </span>
          </p>
          155€
        </div>
        <div className="servicePrice">
          <p>
            {language.carousel.item22}
            <span className="tooltip">
              *<span className="tooltipText">lääkkeet ei sisälty hintaan</span>
            </span>
          </p>
          170€
        </div>
        <div className="servicePrice">
          <p>
            {language.carousel.item23}
            <span className="tooltip">
              *<span className="tooltipText">lääkkeet ei sisälty hintaan</span>
            </span>
          </p>
          200€
        </div>
        <div className="servicePrice">
          <p>
            {language.carousel.item24}
            <span className="tooltip">
              *<span className="tooltipText">lääkkeet ei sisälty hintaan</span>
            </span>
          </p>
          150€
        </div>
        <div className="servicePrice">
          <p>
            {language.carousel.item25}
            <span className="tooltip">
              **
              <span className="tooltipText">lisätään lääkkeet</span>
            </span>
          </p>
          250€
        </div>
      </div>
    </div>,
    <div className="servicesPricesWrapper">
      <div className="servicesTitle">{language.carousel.titleFifth}</div>
      <div className="servicesBlock">
        <div className="servicePrice">
          <p>{language.carousel.item26}</p>
          150€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item27}</p>
          80€
        </div>
        <div className="servicePrice">
          <p>
            {language.carousel.item28}
            <span className="tooltip">
              *<span className="tooltipText">lääkkeet ei sisälty hintaan</span>
            </span>
          </p>
          125€
        </div>
        <div className="servicePrice">
          <p>
            {language.carousel.item29}
            <span className="tooltip">
              **
              <span className="tooltipText">lisätään lääkkeet</span>
            </span>
          </p>
          150€
        </div>
        <div className="servicePrice">
          <p>
            {language.carousel.item30}
            <span className="tooltip">
              **
              <span className="tooltipText">lisätään lääkkeet</span>
            </span>
          </p>
          250€
        </div>
        <div className="servicePrice">
          <p>{language.carousel.item31}</p>
          80€
        </div>
      </div>
    </div>,
  ];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <button className="nav left" onClick={goToPrev}>
        ‹
      </button>
      <div className="carousel-content-wrapper">
        <div
          className="carousel-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-slide">
              {item}
            </div>
          ))}
        </div>
      </div>
      <button className="nav right" onClick={goToNext}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
