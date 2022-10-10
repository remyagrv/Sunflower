import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/sections/Footer";
import Navbar from "../../components/sections/Navbar";
import Mobilenavbar from "../../components/sections/Mobilenavbar";
import WhatWeDo from "../../components/sections/aboutUs/WhatWeDo";
import OurTeam from "../../components/sections/aboutUs/OurTeam";

import aboutusgif from "../../assets/images/AboutUsPage/Snow.gif";
import vision from "../../assets/images/AboutUsPage/trackgenesis-vision-1.webp";
import missionbg from "../../assets/images/AboutUsPage/mission-background.webp";
import teambackground from "../../assets/images/AboutUsPage/teambg3_ldxfve.webp";
import team from "../../assets/images/AboutUsPage/team.webp";
import { Helmet } from "react-helmet";

function Aboutus(props) {
  return (
    <>
      {/* helmet */}
      <Helmet>
        <title>About TrackGenesis&reg; | Vision Mission and Services </title>
        <meta
          name="title"
          content="About TrackGenesis | Vision Mission and Services"
        />
        <meta
          name="description"
          content="Our dedicated team of developers provide Blockchain solutions for the traceability of products with solid proof,nft for trading and providing ownership of digital arts,real estate assets and much more."
        />
        <link href="https://trackgenesis.com/about-us" rel="canonical" content="max-age: 1209600, no-cache, no-store, must-revalidate"/>
      </Helmet>
      {/* helmet */}

      <Flex overflowX={"hidden"} flexDirection={"column"}>
        {/* heading section */}
        <Flex
          backgroundImage={aboutusgif}
          width="100%"
          height={"250px"}
          backgroundSize={"cover"}
          bgRepeat={"no-repeat"}
          id="about"
        ></Flex>
        <Navbar />
        <Mobilenavbar />
        {/* heading */}
        <Center>
          <Heading as={'h1'}
            className="heading"
            marginTop={"-150px"}
            position={"absolute"}
            color="white"
            fontSize={"33px"}
            fontWeight="bold"
            textShadow="1px 1px #000000"
          >
            Who We Are
          </Heading>
          <Flex
            mt={"-100px"}
            border={"1px solid white"}
            className="line2"
            width={"260px"}
            position={"absolute"}
          ></Flex>
        </Center>

        {/* vission and mission section */}
        {/* {/* images from : https://www.hiclipart.com/ */}
        <Flex
          mb={{ base: "", md: 0, lg: 20 }}
          id="missionAndVission"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          justifyContent="center"
          width="100%"
        >
          {/* vission */}
          <Flex
            data-aos="fade-in"
            data-aos-easing="ease-in-quad"
            data-aos-duration="1400"
            mr={{ base: "", md: "", lg: "", xl: 10 }}
            justifyContent={"center"}
          >
            <Image
              alt="vision image"
              height={{ md: "80vh" }}
              src={vision}
              pointerEvents={"none"}
            />
          </Flex>
          {/* mission */}
          <Flex
            data-aos="fade-in"
            data-aos-easing="ease-in-quad"
            data-aos-duration="2000"
            ml={{ base: "", md: "", lg: "", xl: 10 }}
            my={{ base: 0, md: 20 }}
            mt={{ base: "", md: "", lg: 40 }}
            bgImage={missionbg}
            bgRepeat={"no-repeat"}
            bgSize={{ base: "90vw 350px ", md: "100% 100%" }}
            bgPosition={"center"}
            width={{ base: "", md: "70%", lg: "24%" }}
            flexDirection={"column"}
            height={{ base: "400px", md: "" }}
            alignSelf={"center"}
            justifyContent={"center"}
          >
            <Text
              className="heading"
              fontSize={{ base: "large", md: "2xl" }}
              textAlign={"center"}
            >
              Our Mission
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "1vw" }}
              px={{ base: 20, md: 20, lg: 10, xl: 20 }}
              py={{ base: 3, md: 4 }}
              className="content_font"
              textAlign={{ base: "center", md: "center" }}
            >
              Uphold the values of Trust and Transparency with our clients,
              employees, and society and be committed to delivering exemplary
              outputs through innovation blended with honesty, consistently
              without compromise in quality.
            </Text>
          </Flex>
        </Flex>
        {/* what we do section */}
        <WhatWeDo />
        <Box
          bgRepeat={"no-repeat"}
          bgSize="cover"
          backgroundImage={teambackground}
          id="ourTeam"
        >
          <OurTeam />
        </Box>
        <Flex>
          <Image
            alt="team"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1200"
            height={{ base: "110px", md: "150px", lg: "180px" }}
            width={{ base: "210px", md: "250px", lg: "280px" }}
            mt={{ base: "-10%", md: "-10%", lg: "-7%" }}
            mb="10px"
            zIndex={1}
            src={team}
            pointerEvents={"none"}
          ></Image>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}

export default Aboutus;
