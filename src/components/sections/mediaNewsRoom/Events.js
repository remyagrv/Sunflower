import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trackLifeSmall from "../../../assets/images/Media&newsroomPage/trackgenesis-life-1000.webp"
import trackLife from "../../../assets/images/Media&newsroomPage/trackgenesis-life.webp";

function Events(props) {
  let settings = {
    dots: true,
    className: "events",
  };
  return (
    <div style={{ padding: "10px" }}>
      <Slider {...settings}>
        <div>
          <Box
            ml={{ base: "10%", lg: "10%" }}
            justifyContent="center"
            alignItems={"center"}
          >
            <Flex
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              width={"80%"}
            >
              <Flex
                justifyContent={"center"}
                alignItems="center"
                width={{ base: "100%", md: "60%", lg: "70%" }}
              >
                <Image
                  data-aos="fade-in"
                  data-aos-easing="ease-in-quad"
                  data-aos-duration="2000"
                  width={{ base: "500px", md: "600px", lg: "750px" }}
                  srcSet={`${trackLifeSmall} 1000w, ${trackLife} 2000w`}
                  alt={"TrackGenesis event"}
                  pointerEvents={"none"}
                ></Image>
              </Flex>
              <Flex
                mt={{ base: "20px" }}
                justifyContent={"center"}
                alignItems="start"
                width={{ base: "100%", md: "40%", lg: "40%" }}
                flexDirection={"column"}
              >
                <Text
                  fontSize={{ md: "19px", lg: "25px" }}
                  className="heading"
                  fontWeight={"bold"}
                >
                  INSPIRE 01
                </Text>
                <Text
                  fontSize={{ md: "16px", lg: "18px", xl: "20px" }}
                  mt={{ base: "15px", md: "20px", lg: "20px" }}
                  textAlign={"left"}
                  className="content_font"
                  maxW={{ base: "600px", md: "500px", lg: "550px" }}
                >
                  Inspire 01 was such an eventful day with fun-filled games,
                  great food and incredible sessions. Our team, together had
                  strong celebrations, which helped us to have a better
                  understanding of each other and to keep up that good vibes.
                  The day was not limited to fun activities, we had interactive
                  sessions on stress management and the changing work scenarios.
                </Text>
              </Flex>
            </Flex>
          </Box>
        </div>
      </Slider>
    </div>
  );
}

export default Events;
