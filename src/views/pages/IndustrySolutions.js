/** @format */

import { Center, Image, Flex, Text, Box, Heading } from "@chakra-ui/react";
import React from "react";
import "./style.css";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";
import Mobilenavbar from "../../components/sections/Mobilenavbar";
import Clientsection from "../../components/sections/industrialSolutions/Clientsection";
import clientimg from "../../../src/assets/images/IndustrysolutionsPage/trackgenesis-bird.webp";
import FashionIndustry from "../../components/sections/industrialSolutions/FashionIndustry";
import FoodAndBeveragesIndustry from "../../components/sections/industrialSolutions/FoodAndBeveragesIndustry";
import CarbonCredits from "../../components/sections/industrialSolutions/CarbonCredits";
import SeaFoodIndustry from "../../components/sections/industrialSolutions/SeaFoodIndustry";
import Finance from "../../components/sections/industrialSolutions/Finance";
import OilAndGas from "../../components/sections/industrialSolutions/OilAndGas";
import OurWorks from "../../components/sections/industrialSolutions/OurWorks";
import { Helmet } from "react-helmet";
import BlockchainInScotland from "../../assets/images/IndustrysolutionsPage/blockchain-scotland.webp";
import HeaderGif from "../../assets/images/IndustrysolutionsPage/Burning.gif";
import techLady from "../../assets/images/IndustrysolutionsPage/casual-life-3d-designer-at-work-mail-deadline-chat.webp";
import indusBG from "../../assets/images/IndustrysolutionsPage/trackgenesis-background.png";
import bcRobot from "../../assets/images/IndustrysolutionsPage/casual-life-3d-girl-with-robot-bot.webp";

function Productservices(props) {
  return (
    <>
      {/* helmet */}
      <Helmet>
        <title>Software & Blockchain Industry Solutions | TrackGenesis&reg;</title>
        <meta
          name="title"
          content="Software & Blockchain Industry Solutions | TrackGenesis "
        />
        <meta
          name="description"
          content="See our Blockchain solutions for industries like Fashion, Food & Beverages, Carbon Trading, Seafood, Oil & Gas, Retail, E-commerce, and Finance. Check out some of our recent software applications with exceptional UI."
        />
        <link
          href="https://trackgenesis.com/industry-solutions"
          rel="canonical"
          content="max-age: 1209600, no-cache, no-store, must-revalidate"
        />
      </Helmet>
      {/* helmet */}

      <Flex id="industry" flexDirection={"column"} overflowX={"hidden"}>
   
        {/* heading section */}
        <Flex
          backgroundImage={HeaderGif}
          // width="100%"
          // height={"100px"}
          // overflow="hidden"
          objectFit={"cover"}
          // border={"2px solid red"}
          height={"250px"}
          backgroundSize={"cover"}
          bgRepeat={"no-repeat"}
        >
               {/* <video autoPlay loop muted width={"100%"} height="100%">
          <source src={HeaderGif} type="video/webm" />
        </video> */}
        </Flex>

        <Navbar />
        <Mobilenavbar />

        {/* heading */}
        <Center>
          <Heading
            as={"h1"}
            className="heading"
            marginTop={"-150px"}
            position={"absolute"}
            color="white"
            fontSize={{ md: "33px", base: "23px" }}
            fontWeight="bold"
            textShadow="1px 1px #000000"
          >
            Why Blockchain In Your Industry?
          </Heading>
          <Flex
            mt={"-100px"}
            border={"1px solid white"}
            className="line2"
            width={"260px"}
            position={"absolute"}
          ></Flex>
        </Center>

        {/* image and intro section*/}
        <Flex
          mx={{ base: 8, md: "10vw" }}
          my={{ base: "", md: 10 }}
          flexDirection={{ md: "row", base: "column" }}
          justifyContent={"space-around"}
        >
          {/* intro text */}
          <Flex
            justifyContent={"center"}
            width={{ md: "40%" }}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Text
              className="content_font"
              textAlign={"center"}
              p={10}
              mt={{ base: 8, md: 10, lg: 20 }}
              fontSize={{ md: "15px", lg: "20px", xl: "20px", "2xl": "25px" }}
            >
              Our dedicated, professional and experienced team will be on hand
              to listen to your requirements and guide you through technologies
              that can take up your business to support and fit your business
              needs.
            </Text>
          </Flex>
          {/* intro image */}
          <Flex
            display={{ md: "flex", base: "none" }}
            ml={"40px"}
            width={"60%"}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Image
              src={techLady}
              alt={"technology solution lady"}
              pointerEvents={"none"}
            ></Image>
          </Flex>
        </Flex>

        {/* Our work */}
        <OurWorks />

        {/* Industry Solutions */}
        <Flex
          flexDirection={{ base: "column" }}
          mt={{ base: 5, md: 0 }}
          id="solutions"
          width={"100%"}
          justifyContent="center"
          bgImage={indusBG}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          {/* Blockchain intro flex */}
          <Flex
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            mx={{ base: 2, md: "10vw" }}
            textAlign={{ base: "justify", md: "justify", lg: "left" }}
            my={{ base: 0, md: 20 }}
            pt={{ base: "", md: 10, lg: 20 }}
          >
            {/* Image */}
            <Box
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              mt={{ base: 0, md: "0", lg: 0 }}
              width={"100%"}
            >
              <Image
                height={"120%"}
                src={BlockchainInScotland}
                alt="blockchain"
                pointerEvents={"none"}
              />
            </Box>
            {/*solutions intro content */}
            <Box
              data-aos="slide-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              width={"100%"}
            >
              <Text
                className="content_font"
                mt={{ base: -5, md: -8, lg: "10%", xl: "10%", "2xl": "13%" }}
                mx={{ base: 4, md: 10, lg: 0 }}
                ml={{ base: "", md: "", lg: "-20%" }}
                minHeight={"60%"}
                bg={"rgba(1,5,35,.8)"}
                p={{ base: 8, md: 8, lg: 10 }}
                color={"whiteAlpha.900"}
                fontSize={{ base: "", md: "", lg: "", xl: "", "2xl": "xl" }}
              >
                No matter which industry you belong to, blockchain can transform
                your business retail, from supply chain and inventory management
                to product provenance.Transparent and tamper-proof records
                created by blockchain always help businesses build a loyal
                customer base. It facilitates businesses to share the story of
                their product with the customers in a single QR code. Customers
                come to know a product, from what it was to what it is, in a
                most trusted way.
              </Text>
            </Box>
          </Flex>
          {/* robot and lady */}
          <Image
            data-aos="slide-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            zIndex={2}
            alignSelf={"end"}
            mr={{ base: 0, md: 0, lg: 0, xl: 10 }}
            mt={{ lg: "-150px", base: "-50px", md: "-50px" }}
            boxSize={{ base: "150px", md: "250px", lg: "300px" }}
            src={bcRobot}
            alt="blockchain robotics"
            pointerEvents={"none"}
          ></Image>
        </Flex>

        {/* Fashion */}
        <FashionIndustry />

        {/* food and beverages */}
        <FoodAndBeveragesIndustry />

        {/* carbon Trading */}
        <CarbonCredits />

        {/* sea food */}
        <SeaFoodIndustry />

        {/* finance */}
        <Finance />

        {/* oil and gas */}

        <OilAndGas />
        <hr width="20px" />

        {/* clients section */}
        <Flex
          id="clients"
          backgroundColor={"rgba(199,224,246,1)"}
          flexDirection={"column"}
          width={"100%"}
        >
          <Text
            className="heading "
            ml={"8%"}
            maxW={{ base: "300px", md: "900px", lg: "900px" }}
            textAlign="left"
            my="30px"
            fontSize={{ base: "30", md: "33px", lg: "43px" }}
            fontWeight="bold"
          >
            Our Clients
          </Text>
          <Text
            className="heading "
            mt={{ base: "12%", md: "5%", lg: "3%" }}
            ml={"16%"}
            maxW={{ base: "300px", md: "900px", lg: "900px" }}
            textAlign="left"
            position="absolute"
            zIndex={-1}
            color={"rgba(221, 221, 221, 0.31)"}
            stroke="black"
            fontSize={{ base: "32", md: "63px", lg: "53px" }}
            fontWeight="bold"
          >
            Our Clients
          </Text>
          <Flex mt={{ base: "5%", md: "5%", lg: "5%" }} mb={{ xl: "30px" }}>
            <Clientsection />
          </Flex>
          <Image
            data-aos="slide-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            zIndex={"3"}
            mb={"20px"}
            ml={{ base: "65%", md: "80%", lg: "90%" }}
            mt={{ base: "-18%", md: "-15%", lg: "-10%" }}
            boxSize={{ base: "80px", md: "100px", lg: "100px" }}
            src={clientimg}
            alt={"TrackGenesis clients"}
            pointerEvents={"none"}
          ></Image>
        </Flex>

        <Footer />
      </Flex>
    </>
  );
}

export default Productservices;
