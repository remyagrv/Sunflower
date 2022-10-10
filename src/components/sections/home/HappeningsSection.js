import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react";
import Testimonialss from "./Testimonialss";
import happyCustomer from "../../../assets/images/HomePage/happy-customer-quotes.png";
import standingpeople from "../../../assets/images/HomePage/happy-customers-standing.webp";
import trackgenesisFemale from "../../../assets/images/HomePage/trackgenesis-female.png";
import trackgenesisFemale2 from  "../../../assets/images/HomePage/trackgenesis-female-human.png";
import trackgenesisMale from "../../../assets/images/HomePage/trackgenesis-male-human-spec.png"

function HappeningsSection(props) {
  return (
    <Flex flexDirection={"column"}>
      <Text
        className="heading "
        ml={{ base: "3%", md: "8%", lg: "8%" }}
        textAlign="left"
        my="30px"
        fontSize={{ base: "30", md: "33px", lg: "43px" }}
        maxW={{ base: "300px", md: "900px", lg: "900px" }}
        fontWeight="bold"
      >
        Testimonials
      </Text>
      <Text
        className="heading "
        ml={{ base: "5%", md: "10%", lg: "16%" }}
        textAlign="left"
        position="absolute"
        zIndex={-1}
        color={"rgba(221, 221, 221, 0.31)"}
        mt={{ base: "12%", md: "5%", lg: "3%" }}
        maxW={{ base: "300px", md: "900px", lg: "900px" }}
        fontSize={{ base: "32px", md: "43px", lg: "53px" }}
        fontWeight="bold"
      >
        Testimonials
      </Text>

      <Flex
        bgRepeat={"no-repeat"}
        bgSize="cover"
        alignItems={"center"}
        justifyContent="center"
        width={"100%"}
        backgroundImage={
          "../../../assets/images/HomePage/testimonials-bg.svg"
        }
      >
        <Testimonialss />{" "}
      </Flex>
      <Image
        display={{ base: "none", md: "block", lg: "block" }}
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1200"
        position={"absolute"}
        width={{ base: "80px", md: "140px", lg: "230px" }}
        height={{ base: "80px", md: "130px", lg: "190px" }}
        ml={{ base: "100px", md: "100px", lg: "100px" }}
        mt={{ base: "150px", md: "150px", lg: "100px" }}
        zIndex={2}
        src={happyCustomer}
        alt={"happy customer quotes"}
        pointerEvents={"none"}
      ></Image>
      <Flex
        position={"absolute"}
        mt={{ base: "320px", md: "280px", lg: "280px" }}
        ml={{ base: "20px", md: "100px", lg: "100px" }}
      >
        <Image
          zIndex={-1}
          width={{ base: "150px", md: "180px", lg: "200px" }}
          src={ standingpeople}
          alt={"happy customers standing"}
          pointerEvents={"none"}
        ></Image>
      </Flex>

      <Flex
        display={{ base: "none", md: "none", lg: "flex" }}
        width={"95%"}
        justifyContent="end"
        mt={{ md: "300px", lg: "400px" }}
        position={"absolute"}
      >
        <Image
          className="zoom-in-zoom-out"
          boxSize={{ md: "80px", lg: "100px" }}
          src={trackgenesisFemale}
          alt={"Clients talking about TrackGenesis"}
          pointerEvents={"none"}
        ></Image>
        <Image
          className="zoom-in-zoom-out1"
          mr={"100px"}
          mt={{ md: "-20px", lg: "-20px" }}
          boxSize={{ md: "30px", lg: "50px" }}
          src={trackgenesisFemale2}
          alt={"clients talking about TrackGenesis"}
        ></Image>
        <Image
          className="zoom-in-zoom-out2"
          mr={"50px"}
          mt={{ md: "50px", lg: "50px" }}
          ml={{ md: "-150px", lg: "-150px" }}
          boxSize={{ md: "40px", lg: "70px" }}
          src={trackgenesisMale}
          alt={"clients talking about TrackGenesis"}
          pointerEvents={"none"}
        ></Image>
      </Flex>
    </Flex>
  );
}

export default HappeningsSection;
