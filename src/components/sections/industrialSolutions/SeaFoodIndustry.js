import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { HashLink  } from 'react-router-hash-link';
import BlockchainInSeafoodSmall from "../../../assets/images/IndustrysolutionsPage/blockchain-in-seafood-1000.webp"
import BlockchainInSeafood from "../../../assets/images/IndustrysolutionsPage/blockchain-in-seafood.webp"

function SeaFoodIndustry() {
  return (
    <Flex
      id="sea-food"
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
            Blockchain in Seafood Industry
          </Heading>
        </Box>
        {/* details */}
        <Box pl={{ base: "", md: "", lg: "10%" }}>
          <Text
            lineHeight={1.6}
            fontSize={{ base: "", md: "small", lg: "large", xl: "2xl" }}
            className="content_font"
          >
            Seafood fraud is happening on a vast global scale.Since it is one
            among the most internationally traded seafood,traceability in the
            global supply chain is laborious. Blockchain assure transparency in
            the supply chain network and consumers could trust the food that
            goes into his basket.
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
          srcSet={`${BlockchainInSeafoodSmall} 1000w, ${BlockchainInSeafood} 2000w`}
          width={"100%"}
          alt="Blockchain in seafood and fishing industry"
          pointerEvents={"none"}
        />
      </Flex>
    </Flex>
  );
}

export default SeaFoodIndustry;
