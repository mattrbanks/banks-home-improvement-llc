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
  slidesToShow: 3,
  slidesToScroll: 3,
};

const Gallery = () => {
  return (
    <Slider {...settings} className="overflow-hidden">
      <ImageReusable
        alt="picture of school site project"
        filename="IMG_3967001.jpg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="IMG_3968001.jpg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="IMG_3968001.jpg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="IMG_3968001.jpg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="IMG_3968001.jpg"
      />
      <ImageReusable
        alt="picture of school site project"
        filename="IMG_3968001.jpg"
      />
    </Slider>
  );
};

export default Gallery;
