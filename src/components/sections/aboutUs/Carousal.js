import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import profiledata from "../../../database/profile";
import { AiFillLinkedin } from "react-icons/ai";

import unknown from "../../../assets/images/AboutUsPage/trackgenesis-avatar.png";
import unknownloader from "../../../assets/images/AboutUsPage/new-recruitment.gif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashLink  } from 'react-router-hash-link';

function Carousal(props) {
  

  return (
    <Flex
    
    
      mx={{ base: "10px", lg: "10px" }}
      my={"50px"}
      width={"100%"}
      justifyContent="center"
    >
      <SimpleGrid  width={{lg:"80vw"}} columns={[2, null, 4]} spacing="30px">
        {profiledata.map((data) => (
          <Box
            className="profile-card"
            borderRadius="20px"
            boxShadow={"2xl"}
            backdropFilter="auto"
            backdropBlur="5px"
            backgroundColor={"rgba(255, 255, 255, 0.13)"}
          >
            <Flex
              data-aos="zoom-in"
              data-aos-easing="ease-in-quad"
              data-aos-duration="1400"
              mt={"-20px"}
              height={{ base: "100px", md: "130px", lg: "150px" }}
              width="100%"
            >
              <Image
                className="profile-img"
                alt="team profile"
                ml={"auto"}
                mr="auto"
                src={data.imagePath}
                pointerEvents={"none"}
              ></Image>
            </Flex>
            <Flex
              mt={"10px"}
              p={"10px"}
              width={"100%"}
              flexDirection="column"
              justifyContent="center"
            >
              <Text
                fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                textAlign={"center"}
                fontWeight="bold"
                className="heading"
              >
                {data.name}
              </Text>
              <Text
                ml={"auto"}
                mr="auto"
                fontSize={{ base: "11px", md: "12px", lg: "13px" }}
                className="content_font"
              >
                {data.post}
              </Text>
              <Flex
                fontSize={"20px"}
                mb={"10px"}
                mt={"5px"}
                // ml={{ base: "46%", md: "46%", lg: "47%" }}
                alignSelf={"center"}
              >
                <Link href={data.linkedinlink} isExternal>
                  {" "}
                  <AiFillLinkedin />
                </Link>
              </Flex>
            </Flex>
          </Box>
        ))}
        {/* extra profile */}

        <Box
          className="profile-card"
          borderRadius="20px"
          boxShadow={"2xl"}
          backdropFilter="auto"
          backdropBlur="5px"
          backgroundColor={"rgba(255, 255, 255, 0.13)"}
        >
          <HashLink smooth to="/careers#career">
            <Flex
            data-aos="zoom-in"
            data-aos-easing="ease-in-quad"
            data-aos-duration="1400"
              mt={"-20px"}
              height={{ base: "100px", md: "130px", lg: "150px" }}
              width="100%"
            >
              <Image
                className="profile-img"
                ml={"auto"}
                mr="auto"
                src={unknown}
                pointerEvents={"none"}
                alt="new-joinee"
              ></Image>
            </Flex>{" "}
          </HashLink >
          <Flex
            mt={"10px"}
            p={"10px"}
            width={"100%"}
            flexDirection="column"
            justifyContent="center"
          >
            <Text
              fontSize={{ base: "12px", md: "13px", lg: "15px" }}
              textAlign={"center"}
              fontWeight="normal"
              className="heading"
            >
              You may be the next...
            </Text>
            <Text
              ml={"auto"}
              mr="auto"
              fontSize={{ base: "11px", md: "12px", lg: "13px" }}
              className="content_font"
            ></Text>
            <Flex
              fontSize={"20px"}
              mb={"10px"}
              mt={"5px"}
              alignSelf={"center"}
            >
              <Image
                boxSize={{ base: "20px", lg: "30px" }}
                src={unknownloader}
                pointerEvents={"none"}
                alt="new-recruitment"
              ></Image>
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export default Carousal;
