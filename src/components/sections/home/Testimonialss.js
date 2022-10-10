import React from "react";
import testidatas from "../../../database/testimonialdata";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

function Testimonialss(props) {
  const settings = {
    // dots: false,
    infinite: true,

    autoplay: true,
    speed: 1000,
    // fade: true,
    autoplaySpeed: 4000,

    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
    dots: true,
    className: "sample",
  };

  return (
    <Flex
      overflow={"hidden"}
      width={"100%"}
      bgSize="contain"
      bgRepeat="no-repeat"
      mt={{ lg: "20px" }}
      alignItems={"center"}
      justifyContent="center"
    >
      <Box      
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        height={{ base: "480px", md: "490px", lg: "460px", xl: "510px" }}
      >
        <Slider {...settings}>
          {testidatas.map((testidata) => (
            <div>
              <Box
                
                ml={{base:"auto",md:"auto",lg:"auto",xl:"auto"}}
                mr="auto"
                p={{ base: "3px", md: "8px", lg: "10px" }}
                maxW={{ base: "200px", md: "400px", lg: "600px" }}
                // ml={{ base: "0%", md: "20%", lg: "0%" }}
              >
                <Flex
                
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={"center"}
                  width={"100%"}
                  height="100%"
                >
                  <Box
                    boxShadow="lg"
                    className="bubble"
                    height={{ base: "320px", md: "280px", lg: "250px", xl: "280px" }}
                    width={{ base: "225px", md: "400px", lg: "650px" }}
                  >
                    <Flex
                      alignItems={"center"}
                      justifyContent="center"
                      height="100%"
                      width={"100%"}
                    >
                      <Text
                        overflow={"auto"}
                        className="content_font"
                        p={{ base: "6px", md: "10px", lg: "10px", xl: "10px" }}
                        fontSize={{
                          base: "14px",
                          md: "md",
                          lg: "15px",
                          xl: "17px",
                          "2xl": "xl",
                        }}
                        maxW={{ base: "200px", md: "295px", lg: "550px" }}
                        textAlign="center"
                        fontStyle="italic"
                      >
                        {" "}
                        {testidata.testimony}
                      </Text>
                    </Flex>
                  </Box>

                  <Image
                    boxSize={{
                      base: "40px",
                      md: "60px",
                      lg: "70px",
                      xl: "90px",
                    }}
                    mt={'18px'}
                    src={testidata.imagePath}
                    alt={"Client logo"}
                  ></Image>
                  <Text
                    className="heading"
                    fontSize={{ base: "14px", md: "15px", lg: "17px", xl:"18px" }}
                    textAlign={"center"}
                  >
                    {testidata.founder}</Text>
                    <Text 
                    fontSize={{ base: "13px", md: "14px", lg: "16px", xl:"17px" }}
                    className="content_font">
                    Founder</Text>
                   <Text className="heading">
                    {testidata.companyname}
                  </Text>
                </Flex>
              </Box>
            </div>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}

export default Testimonialss;
