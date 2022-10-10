import { Flex, Button, Text, Image, Box } from "@chakra-ui/react";
import React from "react";
import "../section.css";
import { NavLink } from "react-router-dom";
import { HashLink  } from 'react-router-hash-link';
import Blockchain_fashion from "../../../assets/images/HomePage/blockchain-fashion.webp";
import Blockchain_FoodAndDrink from "../../../assets/images/HomePage/blockchain-food-and-drink.webp";
import Blockhain_CarbonCredits from "../../../assets/images/HomePage/blockchain-carbon-credits.webp";
import Blockchain_Seafood from "../../../assets/images/HomePage/blockchain-seafood.webp";
import Blockchain_finance from "../../../assets/images/HomePage/blockchain-finance.webp";
import Blockchain_OilAndGas from "../../../assets/images/HomePage/blockchain-oil-and-gas.webp";
import blockchainlady from "../../../assets/images/HomePage/blockchain-lady.webp";
import industrybg from "../../../assets/images/HomePage/trackgenesis-background2.png";

function IndustrySolutionsSection(props) {
  return (
    <Flex
      overflowX={"hidden"}
      flexDirection={"column"}
      bgImage={industrybg}
      bgRepeat="no-repeat"
      bgSize={{ base: "cover", md: "cover", lg: "140vw" }}
      bgPosition={"-10vw"}
      p={{ base: 2, md: 2, lg: 10 }}
    >
      <Flex py={{ base: "", md: 10, lg: "" }} pb={20}  flexDirection={"column"}>
        <Flex 
       
        mt={{base:"10px",md:"0px",lg:"0px"}}
        justifyContent={"end"} width={"100%"}>
          <Text
            className="heading "
            mr={{ base: "3%", md: "8%", lg: "8%" }}
            textAlign="right"
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
            Industry Solutions
          </Text>
          <Text
            className="heading "
            mr={{ base: "5%", md: "10%", lg: "16%" }}
            textAlign="right"
            position="absolute"
            zIndex={3}
            color={"rgba(0, 0, 0, 0.05)"}
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
            Industry Solutions
          </Text>
        </Flex>
        <Flex
          flexDirection={{
            base: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          justifyContent={"space-around"}
        >
          {/* left side cards section */}
          <Flex
            className="solutionsCard"
            width={{ base: "100%", md: "100%", lg: "50%" }}
            height={{ base: "50%", md: "50%", lg: "100%" }}
            flexDirection={"row"}
            pl={{ base: 0, md: 0, lg: 20 }}
            mt={{ base: 8, md: 8, lg: 0 }}
            justifyContent={{ base: "space-around", md: "center" }}
          >
            {/* first 3 sets */}
            <Flex
              data-aos="slide-right"
              data-aos-easing="ease-in-quad"
              data-aos-duration="2000"
              flexDirection={"column"}
              width={{ base: "30vw", md: "fit-content" }}
            >
              {/* fashion industry */}
              <HashLink to="/industry-solutions/#fashion">
                <Flex
                  boxShadow={"lg"}
                  backdropFilter={"blur(30px)"}
                  height={{ base: "110px", md: "150px", lg: "fit-content" }}
                  width={{ base: "", md: "", lg: "", xl: "", "2xl": "100%" }}
                  borderRadius={10}
                  bg={" rgba(232, 243, 247, 0.47)"}
                  px={{ base: 1, md: 4, lg: 4 }}
                  py={{ base: 1, md: 4, lg: 4 }}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Box height={"80px"} width={{ base: "100%", md: "100%" }}>
                    <Image
                      height={"100%"}
                      className="industryImage"
                      borderRadius={10}
                      width="100%"
                      src={Blockchain_fashion}
                      alt="Blockchain in fashion Industry"
                      pointerEvents={"none"}
                    />
                  </Box>
                  <Box py={{ base: 1, lg: 2, xl: 2 }}>
                    <Text
                      className={"content_font"}
                      fontSize={{
                        base: "small",
                        md: "large",
                        lg: "md",
                        xl: "md",
                        "2xl": "md",
                      }}
                      fontWeight={"bold"}
                      textAlign={"center"}
                    >
                      Fashion Industry
                    </Text>
                  </Box>
                </Flex>
              </HashLink>
              {/* food and beverages */}
              <HashLink to="/industry-solutions/#food-beverages">
                <Flex
                  mt={4}
                  color={"whiteAlpha.900"}
                  boxShadow={"lg"}
                  backdropFilter={"blur(30px)"}
                  height={{ base: "110px", md: "150px", lg: "fit-content" }}
                  width={{ base: "", md: "", lg: "", xl: "", "2xl": "100%" }}
                  borderRadius={10}
                  bg={"#040F6D"}
                  px={{ base: 1, md: 4, lg: 4 }}
                  py={{ base: 1, md: 4, lg: 4 }}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Box height={"80px"} width={{ base: "100%", md: "100%" }}>
                    <Image
                      height={"100%"}
                      className="industryImage"
                      borderRadius={10}
                      width="100%"
                      src={Blockchain_FoodAndDrink}
                      alt="Blockchain in food and beverages"
                      pointerEvents={"none"}
                    />
                  </Box>
                  <Box py={{ base: 1, lg: 2, xl: 2 }}>
                    <Text
                      className={"content_font"}
                      fontSize={{
                        base: "small",
                        md: "large",
                        lg: "md",
                        xl: "md",
                        "2xl": "sm",
                      }}
                      fontWeight={"bold"}
                      textAlign={"center"}
                    >
                      Food & Beverages
                    </Text>
                  </Box>
                </Flex>
              </HashLink>
              {/* carbon trading */}
              <HashLink to="/industry-solutions/#carbon-trading">
                <Flex
                  mt={4}
                  color={"whiteAlpha.900"}
                  boxShadow={"lg"}
                  backdropFilter={"blur(30px)"}
                  height={{ base: "110px", md: "150px", lg: "fit-content" }}
                  width={{ base: "", md: "", lg: "", xl: "", "2xl": "100%" }}
                  borderRadius={10}
                  bg={" rgba(2, 3, 7, 0.47)"}
                  px={{ base: 1, md: 4, lg: 4 }}
                  py={{ base: 1, md: 4, lg: 4 }}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Box height={"80px"} width={{ base: "100%", md: "100%" }}>
                    <Image
                      height={"100%"}
                      className="industryImage"
                      borderRadius={10}
                      width="100%"
                      src={Blockhain_CarbonCredits}
                      alt="Blockchain in carbon trading"
                      pointerEvents={"none"}
                    />
                  </Box>
                  <Box py={{ base: 1, lg: 2, xl: 2 }}>
                    <Text
                      className={"content_font"}
                      fontSize={{
                        base: "small",
                        md: "large",
                        lg: "md",
                        xl: "large",
                        "2xl": "md",
                      }}
                      fontWeight={"bold"}
                      textAlign={"center"}
                    >
                      Carbon Trading
                    </Text>
                  </Box>
                </Flex>
              </HashLink>
            </Flex>
            {/* second 2 sets */}
            <Flex
              data-aos="slide-right"
              data-aos-easing="ease-in-quad"
              data-aos-duration="1500"
              flexDirection={"column"}
              width={{ base: "30vw", md: "fit-content" }}
              ml={{ base: 2, md: 4 }}
              mt={20}
            >
              {/* sea food */}
              <HashLink to="/industry-solutions/#sea-food">
                <Flex
                  boxShadow={"lg"}
                  backdropFilter={"blur(30px)"}
                  height={{ base: "110px", md: "150px", lg: "fit-content" }}
                  width={{ base: "", md: "", lg: "", xl: "", "2xl": "100%" }}
                  borderRadius={10}
                  bg={" rgba(26, 124, 155, 0.47)"}
                  px={{ base: 1, md: 4, lg: 4 }}
                  py={{ base: 1, md: 4, lg: 4 }}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Flex height={"80px"} width={{ base: "100%", md: "100%" }}>
                    <Image
                      className="industryImage"
                      borderRadius={10}
                      height="100%"
                      width="100%"
                      src={Blockchain_Seafood}
                      alt="Blockchain in seafood Industry"
                      pointerEvents={"none"}
                    />
                  </Flex>
                  <Box py={{ base: 1, md: 2 }}>
                    <Text
                      className={"content_font"}
                      fontSize={{
                        base: "small",
                        md: "large",
                        lg: "md",
                        xl: "md",
                        "2xl": "md",
                      }}
                      fontWeight={"bold"}
                      textAlign={"center"}
                    >
                      Seafood Industry
                    </Text>
                  </Box>
                </Flex>
              </HashLink>
              {/* finance */}
              <HashLink to="/industry-solutions/#finance">
                <Flex
                  mt={4}
                  boxShadow={"lg"}
                  backdropFilter={"blur(30px)"}
                  height={{ base: "110px", md: "150px", lg: "fit-content" }}
                  width={{ base: "", md: "", lg: "", xl: "", "2xl": "100%" }}
                  borderRadius={10}
                  bg={" rgba(3, 1, 79, 0.31)"}
                  px={{ base: 1, md: 4, lg: 4 }}
                  py={{ base: 1, md: 4, lg: 4 }}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Box height={"80px"} width={{ base: "100%", md: "100%" }}>
                    <Image
                      className="industryImage"
                      borderRadius={10}
                      height={"100%"}
                      width="100%"
                      src={Blockchain_finance}
                      alt="Blockchain in finance Industry"
                      pointerEvents={"none"}
                    />
                  </Box>
                  <Box py={{ base: 1, md: 2 }}>
                    <Text
                      className={"content_font"}
                      fontSize={{
                        base: "small",
                        md: "large",
                        lg: "md",
                        xl: "md",
                        "2xl": "md",
                      }}
                      fontWeight={"bold"}
                      textAlign={"center"}
                    >
                      Finance
                    </Text>
                  </Box>
                </Flex>
              </HashLink>
            </Flex>
            {/* third 1 set */}
            <Flex
              data-aos="slide-right"
              data-aos-easing="ease-in-quad"
              data-aos-duration="1000"
              flexDirection={"column"}
              width={{ base: "30vw", md: "fit-content" }}
              ml={{ base: 2, md: 4 }}
              mt={40}
            >
              {/* oil and gas*/}
              <HashLink to="/industry-solutions/#oil-gas">
                <Flex
                  boxShadow={"lg"}
                  backdropFilter={"blur(30px)"}
                  height={{ base: "110px", md: "150px", lg: "fit-content" }}
                  width={{ base: "", md: "", lg: "", xl: "", "2xl": "100%" }}
                  borderRadius={10}
                  bg={" rgba(232, 243, 247, 0.97)"}
                  px={{ base: 1, md: 4, lg: 4 }}
                  py={{ base: 1, md: 4, lg: 4 }}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Box height={"80px"} width={{ base: "100%", md: "100%" }}>
                    <Image
                      className="industryImage"
                      borderRadius={10}
                      height={"100%"}
                      width="100%"
                      src={Blockchain_OilAndGas}
                      alt="Blockchain in oil and gas Industry"
                      pointerEvents={"none"}
                    />
                  </Box>
                  <Box py={{ base: 1, md: 2 }}>
                    <Text
                      className={"content_font"}
                      fontSize={{
                        base: "small",
                        md: "large",
                        lg: "md",
                        xl: "md",
                        "2xl": "md",
                      }}
                      fontWeight={"bold"}
                      textAlign={"center"}
                    >
                      Oil & Gas
                    </Text>
                  </Box>
                </Flex>
              </HashLink>
            </Flex>
          </Flex>
          {/* right side box */}
          <Flex
            className="industryImage"
            px={2}
            pl={{ base: "0", md: "0vw", lg: "10vw" }}
            pr={{ base: "0", md: "0", lg: 10 }}
            flexDirection={"column"}
            mt={{ base: "", md: "", lg: "", xl: "", "2xl": 10 }}
            mb={{ base: "", md: "", lg: 10 }}
            width={{ base: "100%", md: "100%", lg: "50%" }}
            height={{ base: "50%", md: "50%", lg: "100%" }}
          >
            {/* lady image */}
            <Box
              data-aos="fade-in"
              data-aos-easing="ease-in-quad"
              data-aos-duration="1400"
              alignSelf={"center"}
            >
              <Image
                pl={4}
                height={{ base: "80px", md: "100px", lg: "150px" }}
                src={blockchainlady}
                alt="blockchain lady"
                pointerEvents={"none"}
              />
            </Box>
            {/* content */}
            <Box
              alignSelf={"center"}
              width={{ base: "100%", md: "60%", lg: "100%" }}
              bg={"rgba(255, 255, 255, 0.46)"}
              borderRadius={10}
              p={{ base: 4, md: 4, lg: 10 }}
              boxShadow={"lg"}
            >
              {/* are you a business */}
              <Text
                className="heading"
                fontSize={{
                  base: "xl",
                  md: "xl",
                  lg: "xl",
                  xl: "xl",
                  "2xl": "2xl",
                }}
                fontWeight={"bold"}
              >
                Looking to fix lack of transparency in your Industry?
              </Text>
              {/* description */}
              <Text
                pt={{ base: 2, md: 2, lg: 4 }}
                className="content_font"
                fontSize={{
                  base: "md",
                  md: "md",
                  lg: "md",
                  xl: "md",
                  "2xl": "xl",
                }}
                textAlign={{ base: "justify", md: "left", lg: "left" }}
              >
                No matter which industry you belong to, blockchain can transform
                your business retail, from supply chain and inventory management
                to product provenance. Transparent and tamper-proof records
                created by blockchain always help businesses build a loyal
                customer base.
              </Text>
              {/* read more button */}
              <Box>
                <NavLink to="/industry-solutions">
                  <Button
                    mt={{ base: 4, md: 4, lg: "5%" }}
                    mb={{ base: 10, md: "0" }}
                    className="readmorebutton"
                    backgroundColor={"#0071D7"}
                    fontSize={{
                      base: "",
                      md: "",
                      lg: "",
                      xl: "md",
                      "2xl": "large",
                    }}
                  >
                    Read More
                  </Button>
                </NavLink>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default IndustrySolutionsSection;
