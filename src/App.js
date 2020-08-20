import React from "react";
import AppBar from "./components/AppBar";
import AboutUs from "./components/AboutUs";
import ColoredContainer from "./components/ColoredContainer";
import Footer from "./components/Footer";
import AudienceAnalysis from "./components/AudienceAnalysis";
import Roles from "./components/Roles";
import Interests from "./components/Interests";
import Teamsection from "./components/Teamsection";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <Slider />
      <div className="container">
        <AboutUs />
        <ColoredContainer />
        <div className="main-content">
          <p className="location">
            {" "}
            <img
              src="https://img.icons8.com/wired/64/000000/region-code.png"
              alt="Location"
            />
            Port-Hacourt, Nigeria
          </p>
          <AudienceAnalysis />
          <Roles />
          <Teamsection />
        </div>
        <Interests />
        <Footer />
      </div>
    </div>
  );
};

export default App;
