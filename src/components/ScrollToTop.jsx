import { useState, useEffect } from "react";
import "../assets/css/componentStyles/scrollToTop.css";
import scrollImage from "../assets/icons/scrollToTop.png";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={`scrollToTop ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img src={scrollImage} alt="Scroll to top" />
    </button>
  );
};

export default ScrollToTop;
