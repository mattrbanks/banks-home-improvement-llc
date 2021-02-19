import React from "react";
import ImageReusable from "./imageReusable";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const TestimonialsMobile = () => {
  return (
    <Slider {...settings} className="overflow-hidden max-w-3xl">
      <ImageReusable
        alt="picture of school site project"
        filename="image0.jpeg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="image0.jpeg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="image0.jpeg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="image0.jpeg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="image0.jpeg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="image0.jpeg"
      />
    </Slider>
  );
};

export default TestimonialsMobile;
