import React, { useState } from "react";
import { Flex, Text, Image, Button, Box} from "@chakra-ui/react";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import peopleStanding from "../../../assets/images/HomePage/about-trackgenesis-people-standing.webp";
import backgroundDots from "../../../assets/images/HomePage/trackgenesis-blue-dots.png";
import trackgenesisVideo from "../../../assets/images/AboutUsPage/trackgenesis-video.mp4";

function AboutusSection(props) {

  const [mute,setMute] = useState(true);
  return (
    <Flex
      id="sec-2"
      mb={{ base: "50px" }}
      flexDirection={"column"}
      mt={{ md: "10%", lg: "5%" }}
    >
      {/* aboutus heading and shadow heading */}
      <Flex
        mt={{ base: "30px", md: "0px", lg: "0px" }}
        justifyContent={"start"}
        width={"100%"}
      >
        <Text
          className="heading "
          ml={{ base: "3%", md: "8%", lg: "8%" }}
          textAlign="left"
          my="30px"
          fontSize={{
            base: "30",
            md: "33px",
            lg: "43px",
            xl: "50px",
            "2xl": "54px",
          }}
          maxW={{ base: "300px", md: "900px", lg: "900px" }}
          fontWeight="bold"
        >
          About Us
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
          fontSize={{
            base: "32px",
            md: "43px",
            lg: "53px",
            xl: "58px",
            "2xl": "60px",
          }}
          fontWeight="bold"
        >
          About Us
        </Text>
      </Flex>
      {/* contents */}
      <Flex flexDirection={"row"}>
        {/* intro text */}
        <Flex
          maxWidth={{ base: "250px", md: "400px", lg: "500px" }}
          mt={{ lg: "20px" }}
          ml={{ base: "8%", md: "10%", lg: "10%" }}
          flexDirection={"column"}
        >
          <Text
            fontSize={{
              base: "md",
              md: "md",
              lg: "md",
              xl: "md",
              "2xl": "xl",
            }}
            maxW={{ lg: "1200px" }}
            className="content_font"
            lineHeight={{ lg: "32px", xl: "32px", "2xl": "35px" }}
          >
            TrackGenesis is a leading blockchain development and consulting firm
            headquartered in Aberdeen, Scotland. We develop custom software
            applications using cutting edge Blockchain Technology that support
            sustainable business by providing transparency and trust in their
            workflow. Our dedicated team will be on hand to listen to your
            requirements and guide you through technologies that can take up
            your business to the next level.
            <br />
          </Text>
          <NavLink to="/about-us">
            {/* <Link _hover={{ textDecor: "none" }} > */}
            <Button
              mt={{ base: 4, md: 4, lg: "15%" }}
              mb={{ base: 10, md: "" }}
              className="readmorebutton"
              backgroundColor={"#0071D7"}
              fontSize={{ base: "", md: "", lg: "", xl: "md", "2xl": "large" }}
            >
              Read More
            </Button>
            {/* </Link> */}
          </NavLink>
        </Flex>

        {/* illustrative people image */}
        <Flex
          width={{ base: "", md: "", lg: "700px" }}
          ml={{ base: 2, md: 10, lg: "0px" }}
          mt={{ base: "14%", md: "0%", lg: "10vh" }}
        >
          {" "}
          <Image
            height={{
              base: "150px",
              md: "300px",
              lg: "200px",
              xl: "350px",
              "2xl": "400px",
            }}
            src={peopleStanding}
            alt={"about TrackGenesis people standing"}
            pointerEvents={"none"}
          />
        </Flex>

        {/* bg image */}
        <Flex
          backgroundImage={backgroundDots}
          position="absolute"
          zIndex={-1}
          bgSize={"contain"}
          bgRepeat="no-repeat"
          ml={{ md: "70%", lg: "60%" }}
          mt={{ base: "0px", md: "-10%", lg: "-13%" }}
          width={{ md: "200px", lg: "400px" }}
          height={{ md: "400px", lg: "600px" }}
        ></Flex>
        {/* video */}
        <Flex
          ml={{ md: "-100px", lg: 10, xl: 10 }}
          mr={10}
          mt={{ base: "", md: 20, lg: "" }}
          display={{ base: "none", md: "none", lg: "flex" }}
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1200"
          position={"relative"}
          zIndex={2}
        >
          <Flex>
            <div>
              <video
                playsInline
                className="videobox"
                src={trackgenesisVideo}
                style={{ borderRadius: "10px" }}
                autoPlay={true}
                muted={mute}
                controls={false}
                loop
              />
            </div>
          </Flex>
          <Box
            position={"absolute"}
            top={{
              base: "11%",
              md: "0%",
              lg: "2%",
              xl: "5%",
              "2xl": "0",
            }}
            left={{
              base: "7%",
              md: "0%",
              lg: "0%",
              xl: "2%",
              "2xl": "0%",
            }}
            height={"fit-content"}
            width={"fit-content"}
            backgroundColor={"rgba(0,0,0,0.5)"}
            color={"white"}
            boxShadow={"lg"}
            borderRadius={"50%"}
            p={{ base: 2, "2xl": 4 }}
          >
            {mute ? (
              <VscMute
                cursor={"pointer"}
                size={"20"}
                onClick={() => {
                  setMute(!mute);
                }}
              />
            ) : (
              <VscUnmute
                cursor={"pointer"}
                size="20"
                onClick={() => {
                  setMute(!mute);
                }}
              />
            )}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AboutusSection;
