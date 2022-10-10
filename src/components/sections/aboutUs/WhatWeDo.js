import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import tgvideo from "../../../assets/images/AboutUsPage/trackgenesis-video.mp4";
import circulareconomy from "../../../assets/images/AboutUsPage/blockchain-in-circular-economy.webp";
import proofbacked from "../../../assets/images/AboutUsPage/trackgeneis-space.webp";
import tracability from "../../../assets/images/AboutUsPage/tracability.webp";
import nft from "../../../assets/images/AboutUsPage/nft.webp";
import { VscMute, VscUnmute } from "react-icons/vsc";

function WhatWeDo() {
  const [mute, setMute] = useState(true);

  return (
    <Flex
      id="whatWeDo"
      backgroundColor={"rgba(199,224,246,0.7)"}
      flexDirection={{ base: "column", md: "column" }}
      justifyContent={{ base: "", md: "", lg: "center" }}
    >
      <Flex width={{ base: "100%", md: "100%" }} flexDirection={"column"}>
        <Heading
          as={"h2"}
          className="heading"
          ml={{ base: "3%", md: "8%", lg: "8%" }}
          textAlign="left"
          my="30px"
          fontSize={{ base: "30", md: "33px", lg: "43px" }}
          maxW={{ base: "300px", md: "900px", lg: "900px" }}
          fontWeight="medium"
        >
          What We Do
        </Heading>
        <Text
          className="heading "
          ml={{ base: "5%", md: "10%", lg: "16%" }}
          textAlign="left"
          position="absolute"
          zIndex={-1}
          color={"rgba(221, 221, 221, 1)"}
          mt={{ base: "12%", md: "5%", lg: "3%" }}
          maxW={{ base: "300px", md: "900px", lg: "900px" }}
          fontSize={{ base: "32px", md: "43px", lg: "53px" }}
          fontWeight="bold"
        >
          What we Do
        </Text>

        {/* video */}
        <Box
          display={{ base: "block", md: "block", lg: "none" }}
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1200"
          width={{ base: "", md: "", lg: "60%", xl: "60%" }}
          height={"fit-content"}
          position={"relative"}
          mt={4}
          mx={{ base: "", md: "", lg: 80 }}
        >
          <Flex
            height={"fit-content"}
            width={"fit-content"}
            ml={{ base: "0", md: "10vw" }}
            mr={{ base: "0", md: "10vw" }}
          >
            <video
              playsInline
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
              src={tgvideo}
              autoPlay={true}
              muted={mute}
              controls={false}
              loop
            />
          </Flex>
          <Box
            position={"absolute"}
            top={{
              base: "11%",
              md: "0%",
              lg: "0%",
              xl: "3%",
              "2xl": "3%",
            }}
            left={{
              base: "7%",
              md: "10%",
              lg: "17%",
              xl: "18%",
              "2xl": "18%",
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
                size="10"
                onClick={() => {
                  setMute(!mute);
                }}
              />
            )}
          </Box>
        </Box>
      </Flex>

      {/* what we do content */}
      <SimpleGrid
        ml={{ base: "10px", md: "0px" }}
        mx={{ base: "", md: 10, lg: 40 }}
        mb={{ base: 5, md: 10, lg: 20 }}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 0, md: 0 }}
        spacingX={{ base: "0", md: 10, lg: 40 }}
        className="content_font"
        color={"black"}
        maxWidth={{ md: "900px", lg: "100%", xl: "100%" }}
        textAlign="left"
        lineHeight={1.5}
        fontSize={"12px"}
        p={4}
        mt={{ md: 10 }}
      >
        {/* images from : https://www.hiclipart.com/ */}
        {/* blockchain in circular economy */}
        <Box>
          <Image
            alt="Circular economy"
            className="zoom-in-zoom-out2"
            height={"100px"}
            src={circulareconomy}
            pointerEvents={"none"}
          ></Image>
          <Heading as={"h3"} fontWeight="normal" fontSize={"2xl"}>
            Blockchain in Circular Economy
          </Heading>
          <Text fontSize={"large"} p={5}>
            Blockchain supports sustainable business practices. The prime factor
            required to achieve sustainability, is to know the intermediaries in
            the supply chain network. The social and environmental impact caused
            should also be considered. Blockchain ensure transparency in the
            network and accounts all transactions and assets in digital
            tamper-proof records. Data traced using blockchain aid businesses to
            implement better practices and take a step further towards the
            sustainability goal.
          </Text>
        </Box>
        {/* Tracability */}
        <Box>
          <Image
            alt="tracability"
            className="zoom-in-zoom-out2"
            height={"100px"}
            src={tracability}
            pointerEvents={"none"}
          ></Image>
          <Heading as={"h3"} fontWeight="normal" fontSize={"2xl"}>
            Blockchain to Build Trust
          </Heading>
          <Text fontSize={"large"} p={5}>
            Our blockchain experts develop softwares with blockchain adoption
            and exceptional UI customized for your business. Blockchain has
            multiple use cases across every industry. It traces all the way a
            product travel to reach the consumer. Blockchain ensure transparency
            in the supply chain network and provide the earliest known history
            of a product or service that a consumer choose to buy. Decentralized
            immutable data recorded in blockchain, help businesses build trust
            and boost their brand value.
          </Text>
        </Box>
        {/* proofbacked */}
        <Box>
          <Image
            alt="proofbacked"
            className="zoom-in-zoom-out2"
            height={"100px"}
            src={proofbacked}
            pointerEvents={"none"}
          ></Image>
          <Heading as={"h3"} fontWeight="normal" fontSize={"2xl"}>
            Blockchain to Identify Fake Products
          </Heading>
          <Text fontSize={"large"} p={5}>
            In todays world,shoppers are confused with the genuinity of a
            product. Counterfeits are released into the market, parallel to
            every trusted product and its hard for shoppers to trust a product
            or service. Blockchain adoption enable brands to prove their
            authenticity and uphold the brand value. Many of the brands
            encourage local produce, cruelty free products, recyclable
            packaging, sustainable initiatives and so on. Evidences for such
            honest claims can be provided to customers using blockchain.
          </Text>
        </Box>
        {/* nft */}
        <Box>
          <Image
            alt="NFT"
            className="zoom-in-zoom-out"
            height={"100px"}
            src={nft}
            pointerEvents={"none"}
          ></Image>
          <Heading as={"h3"} fontSize={"2xl"} fontWeight="normal">
            NFT to Prove Ownership of Assets
          </Heading>
          <Text fontSize={"large"} p={5}>
            We create fungible and non-fungible tokens(NFTs) which can claim the
            ownership of your digital and physical assets. NFTs are unique
            identification codes recorded in tamper-proof blockchain technology.
            You may also transfer the ownership of your creative assets such as
            paintings, and physical properties by selling and trading NFTs.
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export default WhatWeDo;
