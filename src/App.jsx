import React from "react";
import { PrimeReactProvider } from "primereact/api";
import Header from "./components/Header";
import MobileMenu from "./components/Navbar";
import Promo from "./components/PromoSection";
import About from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Title from "./components/Title";
import Services from "./components/ServicesBlock";
import Advantages from "./components/AdvantagesSection";
import ScrollToTop from "./components/ScrollToTop";
import Reviews from "./components/ReviewsSection";
import FormSection from "./components/FormSection";
import Contacts from "./components/ContactSection";
import Carousel from "./components/Carousel";
import { LangProvider } from "./context/langProvider";

class App extends React.Component {
  render() {
    return (
      <>
        <LangProvider>
          <Header />
          <ScrollToTop />
          <Promo />
          <About />
          <ServicesSection />
          <Advantages />
          <Reviews />
          <FormSection />
          <Contacts />
          <Footer />
        </LangProvider>
      </>
    );
  }
}

export default App;