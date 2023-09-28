import Image from "next/image";
import styles from "../styles/Swipe.module.css";
import picProfile from "../assets/profil.png";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <Image
          src={picProfile}
          width={100}
          height={100}
          alt="photo de profil de Joan Mas"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div>
        <Image
          src={picProfile}
          width={100}
          height={100}
          alt="photo de profil de Joan Mas"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div>
        <Image
          src={picProfile}
          width={100}
          height={100}
          alt="photo de profil de Joan Mas"
          style={{ borderRadius: "10px" }}
        />
      </div>
    </Slider>
  );
};

export default MySlider;

