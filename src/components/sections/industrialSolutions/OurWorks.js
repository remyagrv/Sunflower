/** @format */

import {
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import MadPotatoDemo from "../../../assets/images/IndustrysolutionsPage/madpotato-optimised.mp4";
import RoehillDemo from "../../../assets/images/IndustrysolutionsPage/roehilsprings-optmised.mp4";
import BrewDemo from "../../../assets/images/IndustrysolutionsPage/brewtoon-optimised.mp4";
import sittinggirl from "../../../assets/images/IndustrysolutionsPage/casual-life-3d-young-woman-sitting-and-tapping-on-smartphone.webp";
import worksbg from "../../../assets/images/IndustrysolutionsPage/our-works-bg.png";

function OurWorks() {
  return (
    <Flex
      flexDirection={"column"}
      bgImage={worksbg}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      id="products"
    >
      {/* heading and shadow */}
      <Flex
        mt={{ base: "30px", md: "0px", lg: "0px" }}
        justifyContent={"start"}
        width={"100%"}
      >
        <Heading
          as={"h2"}
          className="heading "
          ml={{ base: "3%", md: "8%", lg: "8%" }}
          textAlign="left"
          my="35px"
          zIndex={2}
          fontSize={{ base: "30", md: "33px", lg: "43px" }}
          maxW={{ base: "300px", md: "900px", lg: "900px" }}
          fontWeight="normal"
        >
          Our Works
        </Heading>
        <Text
          className="heading "
          ml={{ base: "5%", md: "10%", lg: "16%" }}
          textAlign="left"
          position="absolute"
          zIndex={1}
          color={"rgba(221, 221, 221, 0.31)"}
          mt={{ base: "12%", md: "5%", lg: "3%" }}
          maxW={{ base: "300px", md: "900px", lg: "900px" }}
          fontSize={{ base: "32px", md: "43px", lg: "53px" }}
          fontWeight="bold"
        >
          Our Works
        </Text>
      </Flex>
      {/* demo videos */}
      <Flex ml={{ base: 6, md: 20, lg: 40 }} flexDirection={"column"}>
        <Heading as={"h3"} width={"300px"} fontSize={"2xl"} fontWeight={"bold"}>
          Take a look at some of our recent works
        </Heading>
        <div
          className="Blue-bar"
          style={{
            borderTop: "2px solid #fff ",
          }}
        ></div>
      </Flex>
      <Flex
        height="fit-content"
        width={"100%"}
        flexDirection={"row"}
        justifyContent={{ base: "center", md: "" }}
      >
        <Flex width={{ base: 0, md: "50%", lg: "40%" }}>
          <Image
            data-aos="slide-right"
            data-aos-easing="ease-in-quad"
            data-aos-duration="3000"
            ml={{ md: 20, lg: 40 }}
            mt={{ md: 20, lg: 60 }}
            height={{ md: "50%", lg: "35%" }}
            src={sittinggirl}
            alt={"blockchain works looking lady"}
            pointerEvents={"none"}
          />
        </Flex>
        {/* demos */}
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "center" }}
          px={20}
        >
          <Flex
            mx={{ base: "", md: 5 }}
            flexDirection={"row"}
            justifyContent={{ base: "center", md: "" }}
          >
            {/* <Image
              height={{ base: "90%", md: "70%" }}
              src={BrewDemo}
              alt={"blockchain ui demo"}
            /> */}
            <Flex height={{ base: "90%", md: "70%" }}>
              <video width="320" height="240" autoPlay loop muted playsInline>
                <source src={BrewDemo} type="video/mp4" />.
              </video>
            </Flex>
          </Flex>
          <Flex mx={5} mt={10} flexDirection={"column"}>
            {/* <Image
              height={{ md: "60%", lg: "280px", xl: "380px" }}
              width={{ lg: "135px", xl: "185px" }}
              src={MadPotatoDemo}
              alt={"blockchain ui demo"}
            /> */}
            <Flex
              height={{ md: "60%", lg: "280px", xl: "380px" }}
              width={{ lg: "135px", xl: "185px" }}
            >
              <video autoPlay loop muted playsInline>
                <source src={MadPotatoDemo} type="video/mp4" />.
              </video>
            </Flex>
          </Flex>
          <Flex mx={5} mt={20} flexDirection={"row"}>
            {/* <Image
              height={{ md: "50%" }}
              src={RoehillDemo}
              alt={"blockchain ui demo"}
            /> */}
            <Flex height={{ md: "50%" }}>
              <video autoPlay loop muted playsInline>
                <source src={RoehillDemo} type="video/mp4" />
              </video>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default OurWorks;
