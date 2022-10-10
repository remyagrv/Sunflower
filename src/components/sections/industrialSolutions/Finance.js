import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { HashLink  } from 'react-router-hash-link';
import BlockchainInFinanceSmall from "../../../assets/images/IndustrysolutionsPage/blockchain-in-finance-1000.webp";
import BlockchainInFinance from "../../../assets/images/IndustrysolutionsPage/blockchain-in-finance.webp";

function Finance() {
  return (
    <Flex
      p={{ base: 1, md: 3, lg: 20 }}
      px={{ base: 4, md: "" }}
      flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
      id="finance"
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
        <Box>
          <Heading
            as={"h2"}
            py={{ base: 4, md: 4, lg: 10 }}
            className="heading"
            fontSize={{ base: "lg", md: "lg", lg: "3xl", xl: "4xl" }}
          >
            Blockchain in Fintech
          </Heading>
        </Box>
        {/* details */}
        <Box>
          <Text
            lineHeight={1.6}
            fontSize={{ base: "", md: "small", lg: "large", xl: "2xl" }}
            pr={{ base: "", md: "", lg: "10%" }}
            className="content_font"
          >
            Security of online transactions have always been a concern.
            Blockchain solution promises security,transparency and trust in the
            transfer of digital assets. It Implements a decentralized system
            that save huge cost and time on maintaining transaction history and
            administration.
          </Text>
        </Box>
        {/* request demo button */}

        <HashLink smooth to="/contact-us#contact">
          <Box>
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
          srcSet={`${BlockchainInFinanceSmall} 1000w, ${BlockchainInFinance} 2000w`}
          width={"100%"}
          alt="Future of blockchain in cryptocurrency"
          pointerEvents={"none"}
        />
      </Flex>
    </Flex>
  );
}

export default Finance;
