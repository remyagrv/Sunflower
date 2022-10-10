/** @format */

import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import "../section.css";
import "./landing.css";
import { Box, Flex, Image, Link, Heading } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Mobilenavbar from "../Mobilenavbar";
import TGLogo from "../../../assets/images/HomePage/TG-logo.svg";
import rotatingRings from "../../../assets/images/HomePage/futuristic-rotating-rings.webp";
import rotatingRingsSmall from "../../../assets/images/HomePage/futuristic-rotating-rings-1000.webp";
import interConnectedBlocks from "../../../assets/images/HomePage/interconnected-blockchain.png";
import bubble from "../../../assets/images/HomePage/futuristic-bubble.png";
import blockchainBuilding from "../../../assets/images/HomePage/blockchain-building.png";
import globe from "../../../assets/images/HomePage/futuristic-globe.png";
import dataTransfer from "../../../assets/images/HomePage/blockchain-data-transfer.png";
import robot from "../../../assets/images/HomePage/robot-with-rings.webp";
import transparentBlockchain from "../../../assets/images/HomePage/transparent-blockchain.png";
import augmentedreality from "../../../assets/images/HomePage/augmented-reality.png";
import rocket from "../../../assets/images/HomePage/futuristic-rocket.png";
import settings from "../../../assets/images/HomePage/settings.png";

function LandingSection(props) {
  return (
    <Flex className="landingBody">
      <Link href="/">
        <Image
          zIndex={3}
          position={"absolute"}
          ml={{ base: 0, md: 0, lg: 20 }}
          mt={{ base: "0px", md: "0px", lg: "0px", xl: "5px", "2xl": "10px" }}
          p={5}
          height={{
            base: "90px",
            md: "90px",
            lg: "100px",
            xl: "110px",
            "2xl": "110px",
          }}
          src={TGLogo}
          alt={"TrackGenesis logo of blockchain"}
        />
      </Link>
      <Navbar />
      <Mobilenavbar />
      <Flex
        htmlFor="landingSection"
        className="bgGif"
        width={"100%"}
        height={"100vh"}
        justifyContent={"center"}
        flexDirection={{
          base: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
      >
        {/* Text and arrow */}
        <Flex
          height={{ base: "30%", md: "30%", lg: "100%" }}
          justifyContent={"center"}
          width={{ base: "100%", md: "100%", lg: "50%" }}
          flexDirection={"column"}
          textAlign={{ base: "center", md: "center", lg: "start" }}
          fontSize={{ base: "3vh", md: "3vh", lg: "5vh", xl: "7vh" }}
          fontWeight={"bold"}
          pl={{ base: "", md: "", lg: "10vw" }}
          zIndex={"2"}
          className="heading slogan"
        >
          <Heading
            as="h1"
            font
            fontSize={{ base: "3vh", md: "3vh", lg: "5vh", xl: "7vh" }}
            fontWeight={"bold"}
            className="heading"
            lineHeight={1.5}
          >
            Transparency <br />
            Trust <br />
            Innovation
          </Heading>

          <a href="#sec-2">
            <Box
              height={{ base: "50px", md: "50px", lg: "100px" }}
              width={{ base: "30px", md: "30px", lg: "100px" }}
              position="absolute"
              left={{ base: "47%", md: "47%", lg: "10%", xl: "15%" }}
              top={{ base: "92vh", md: "92vh", lg: "70vh" }}
              ml={{ base: "", md: "" }}
              className="scroll-down"
            ></Box>
          </a>
        </Flex>
        {/* images */}
        <Flex
          height={{ base: "50%", md: "60%", lg: "100%" }}
          justifyContent={"center"}
          flexDirection={"column"}
          width={{ base: "100%", md: "100%", lg: "50%" }}
          position={"relative"}
        >
          {/* rotating ring */}
          <Image
            className="bgRotate"
            srcSet={`${rotatingRingsSmall} 1000w, ${rotatingRings} 2000w`}
            width={"100%"}
            alt="futuristic rotating ring"
            pointerEvents={"none"}
          />
          {/* mouse parallax */}
          <Flex width={"100%"} position={"absolute"} justifyContent={"center"}>
            <Flex>
              {/* mouse parallax container */}
              <MouseParallaxContainer
                className="parallax"
                containerStyles={{
                  width: "100%",
                  height: "100vh",
                  display: "grid",
                  gridTemplateColumns: "20% 20% 20% 20% 20%",
                  gridTemplateRows: "45% 10% 50%",
                  gridArea: "2/1/span 2",
                  gridGap: "0px",
                  justifyItems: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                resetOnLeave
              >
                {/* images from : https://www.hiclipart.com/ */}
                {/* No Image */}
                <MouseParallaxChild
                  factorX={0.2}
                  factorY={0.12}
                ></MouseParallaxChild>
                {/* Interconnected cube */}
                <MouseParallaxChild factorX={0.21} factorY={0.18}>
                  <Image
                    mt={{ base: 60, md: 60, lg: 20 }}
                    width={"60%"}
                    src={interConnectedBlocks}
                    alt="blockchain cubes"
                    pointerEvents={"none"}
                  />
                </MouseParallaxChild>
                {/* bubble 2 */}
                <MouseParallaxChild factorX={0.3} factorY={0.3}>
                  <Image
                    mt={{ base: 60, md: 60, lg: 20 }}
                    src={bubble}
                    alt="Futuristic space bubble"
                    pointerEvents={"none"}
                  />
                </MouseParallaxChild>
                {/* blockchain building */}
                <MouseParallaxChild factorX={0.08} factorY={0.22}>
                  <Image
                    width={"50%"}
                    mt={{ base: 60, md: 60, lg: 20 }}
                    src={blockchainBuilding}
                    alt="Blockchain data"
                    pointerEvents={"none"}
                  />
                </MouseParallaxChild>
                {/* lighting globe */}
                <MouseParallaxChild factorX={0.25} factorY={0.3}>
                  <Image
                    ml={-20}
                    mt={{ base: 80, md: 80, lg: 40 }}
                    width={"70%"}
                    src={globe}
                    alt="Futuristic globs"
                    pointerEvents={"none"}
                  />
                </MouseParallaxChild>
                {/* block chain data transfer */}
                <MouseParallaxChild factorX={0.14} factorY={0.23}>
                  <Image
                    width={"50%"}
                    ml={{ base: 10, md: 20, lg: 10 }}
                    src={dataTransfer}
                    alt="Blockchain data connection"
                    pointerEvents={"none"}
                  />
                </MouseParallaxChild>
                {/* robot */}
                <MouseParallaxChild
                  className="robot"
                  factorX={0.03}
                  factorY={0.03}
                >
                  {/* images from: https://www.hiclipart.com/free-transparent-background-png-clipart-dgwfm */}
                  <Image
                    src={robot}
                    alt="TrackGenesis Blockchain technology Robot"
                    pointerEvents={"none"}
                  />
                </MouseParallaxChild>
                {/* blue bubble */}
                <MouseParallaxChild factorX={0.4} factorY={0.2}>
                  <Image
                    width={{ base: "50%", md: "50%" }}
                    src={bubble}
                    alt="Futuristic bubbles"
                    pointerEvents={"none"}
                  />
                </MouseParallaxChild>
                {/* Transparent squares */}
                <MouseParallaxChild factorX={0.32} factorY={0.28}>
                  <Image
                    mt={{ base: -40, md: -40, lg: -20 }}
                    ml={60}
                    src={transparentBlockchain}
                    alt="Transparent Blockchain"
                    pointerEvents={"none"}
                  />
                </MouseParallaxChild>

                {/* ar */}
                <MouseParallaxChild factorX={0.16} factorY={0.12}>
                  <Image
                    mt={{ base: -40, md: -40, lg: 0 }}
                    width={{ base: "40%", md: "40%", lg: "70%" }}
                    src={augmentedreality}
                    alt="Augmented Reality"
                    pointerEvents={"none"}
                  />
                </MouseParallaxChild>
                {/* rocket*/}
                <MouseParallaxChild factorX={0.02} factorY={0.3}>
                  <Image
                    display={{ base: "none", md: "none", lg: "block" }}
                    mt={-20}
                    src={rocket}
                    alt="Futuristic rocket"
                  />
                </MouseParallaxChild>
                {/* Settings */}
                <MouseParallaxChild factorX={0.14} factorY={0.26}>
                  <Image
                    mt={-40}
                    src={settings}
                    alt="settings"
                    pointerEvents={"none"}
                  />
                </MouseParallaxChild>
                {/* No image */}
                <MouseParallaxChild
                  factorX={0.2}
                  factorY={0.12}
                ></MouseParallaxChild>
              </MouseParallaxContainer>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default LandingSection;
