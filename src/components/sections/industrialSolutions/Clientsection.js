import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientdatas from "../../../database/clients";

function Clientsection(props) {
  let settings = {
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    className: "clientlist",
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    


   
        <Slider {...settings}>
          {clientdatas.map((clientdata) => (
          <div className="clientbox">
                <img
                className="clientimage"
                  src={clientdata.imagePath}
                ></img>
              
              </div>
          ))}
        </Slider>
   
  );
}

export default Clientsection;
