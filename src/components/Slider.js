import React from "react";
import { Carousel } from "react-bootstrap";
const Slider = () => {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="slider.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="slider2.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
