import React from "react";
import { Carousel } from "react-bootstrap";
const Slider = () => {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="slider.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="slider2.jpg" alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
