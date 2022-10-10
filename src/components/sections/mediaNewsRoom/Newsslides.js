import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import newsdata from "../../../database/news";
import { Image, Text, Box, Flex } from "@chakra-ui/react";
import "../../../views/pages/style.css";

function Newsslides(props) {
  let settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div id="pressRelease" className="wrappernews">
      <div className="carousalnews">
        <Slider {...settings}>
          {newsdata.map((news) => (
            <Box
              mt={{ lg: "10%" }}
              height={{ base: "340px", md: "370px", lg: "320px" }}
              alignItems={"center"}
              backgroundColor={"rgba(0, 113, 215, 0.2)"}
              borderRadius={"20px"}
              boxShadow="lg"
              width={{ base: "80px", md: "120px", lg: "150px" }}
              justifyContent="center"
            >
              <Flex
                flexDirection={{ base: "column", md: "column", lg: "row" }}
                alignItems="center"
                height={"100%"}
                width={"100%"}
                justifyContent="center"
              >
                <Flex
                  justifyContent={"center"}
                  alignItems="center"
                  height={"100%"}
                  width={{ base: "100%", md: "100%", lg: "50%" }}
                >
                  <Image
                    className="newsimage"
                    border={"5px solid rgba(0, 113, 215, 0.1)"}
                    boxSize={{ base: "130px", md: "170px", lg: "180px" }}
                    src={news.imagePath}
                    alt={"TrackGenesis in news"}
                    pointerEvents={"none"}
                  ></Image>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems={"center"}
                  height="100%"
                  width={{ base: "100%", md: "100%", lg: "50%" }}
                  flexDirection={"column"}
                >
                  <Text
                    mt={"10px"}
                    maxW={{ base: "160px", md: "300px", lg: "200px" }}
                    ml={{ lg: "24px" }}
                    fontSize={{ base: "11px", md: "13px", lg: "15px" }}
                    textAlign={{ base: "center", md: "center", lg: "left" }}
                    fontWeight="bold"
                    className="heading"
                  >
                    {news.title}
                  </Text>
                  <Text
                    ml={{ lg: "13px" }}
                    mt={"10px"}
                    p={{ base: "10px", md: "10px", lg: "10px" }}
                    textAlign={"left"}
                    fontSize={{ base: "10px", md: "12px", lg: "13px" }}
                    maxW={{ md: "300px", lg: "200px" }}
                    className="content_font"
                  >
                    {news.description}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Newsslides;
