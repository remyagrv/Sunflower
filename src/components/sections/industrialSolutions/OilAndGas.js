import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { HashLink  } from 'react-router-hash-link';
import BlockchainInOilAndGasSmall from "../../../assets/images/IndustrysolutionsPage/blockchain-in-oil-and-gas-1000.webp";
import BlockchainInOilAndGas from "../../../assets/images/IndustrysolutionsPage/blockchain-in-oil-and-gas.webp";

function OilAndGas() {
  return (
    <Flex
      id="oil-gas"
      bg={"rgba(199,224,246,0.7)"}
      p={{ base: 1, md: 3, lg: 20 }}
      px={{ base: 4, md: "" }}
      flexDirection={{
        base: "column-reverse",
        md: "row-reverse",
        lg: "row-reverse",
      }}
    >
      {/* description */}
      <Flex
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        width={{ base: "100%", md: "70%", lg: "50%" }}
        my={{ base: "", md: "", lg: 10 }}
        px={{ base: 5, md: 10, lg: "" }}
        textAlign={{ base: "justify", md: "left", lg: "left" }}
        flexDirection={"column"}
      >
        {/* industry heading */}
        <Box pl={{ base: "", md: "", lg: "10%" }}>
          <Heading
            as={"h2"}
            py={{ base: 4, md: 4, lg: 10 }}
            className="heading"
            fontSize={{ base: "lg", md: "lg", lg: "3xl", xl: "4xl" }}
          >
            Blockchain in Oil & Gas
          </Heading>
        </Box>
        {/* details */}
        <Box pl={{ base: "", md: "", lg: "10%" }}>
          <Text
            lineHeight={1.6}
            fontSize={{ base: "", md: "small", lg: "large", xl: "2xl" }}
            className="content_font"
          >
            Oil and gas is a massive industry in the global economy that
            integrates multiple enterprises. To process such huge data in
            realtime with accuracy and efficiency is a tedious task. Blockchain
            provides tamper-proof records of accounting and transactional data.
            It ensures transparency in bulk transportation supply chain.
          </Text>
        </Box>
        {/* request demo button */}

        <HashLink smooth to="/contact-us#contact">
          <Box pl={{ base: "", md: "", lg: "10%" }}>
            <Button
              my={{ base: 4, md: 4, lg: 10 }}
              mb={{ base: 10, md: "" }}
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
              Book a Demo
            </Button>
          </Box>
        </HashLink>
      </Flex>
      {/* images */}
      <Flex
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        mt={{ base: "-10%", md: "-10%" }}
        width={{ base: "100%", md: "100%", lg: "50%" }}
        height={{ base: "100%", md: "100%", lg: "50%" }}
      >
        <Image
          srcSet={`${BlockchainInOilAndGasSmall} 1000w, ${BlockchainInOilAndGas} 2000w`}
          width={"100%"}
          alt="Blockchain in oil and gas industry"
          pointerEvents={"none"}
        />
      </Flex>
    </Flex>
  );
}

export default OilAndGas;
