import { Flex, Image, Center, Text, Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/sections/Navbar";
import Mobilenavbar from "../../components/sections/Mobilenavbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../../components/sections/Footer";
import "./style.css";
import Newsslides from "../../components/sections/mediaNewsRoom/Newsslides";
import Events from "../../components/sections/mediaNewsRoom/Events";
import { Helmet } from "react-helmet";
import mediaBg from "../../assets/images/Media&newsroomPage/Sea.gif";
import newsBg from "../../assets/images/Media&newsroomPage/newsbg.webp";
import eventsBg from "../../assets/images/Media&newsroomPage/eventsbg.webp";
import trackEmployee from "../../assets/images/Media&newsroomPage/trackgenesis-employee.webp";
import trackAward1 from "../../assets/images/Media&newsroomPage/trackgenesis-rajesh-award.webp";
import trackAward2 from "../../assets/images/Media&newsroomPage/trackgenesis-rajesh-new-award.webp";
import plant1 from "../../assets/images/Media&newsroomPage/plant1.webp";

function Newsroom(props) {
  return (
    <>
      {/* helmet */}
      <Helmet>
        <title>News & Press Release | TrackGenesis&reg; | Scotland</title>
        <meta
          name="title"
          content="News & Press Release | TrackGenesis | Scotland"
        />
        <meta
          name="description"
          content="Learn about our latest events, achievements and awards for excellence in software development and implementing blockchain solutions."
        />
         <link href="https://trackgenesis.com/media-newsroom" rel="canonical" content="max-age: 1209600, no-cache, no-store, must-revalidate"/>
      </Helmet>
      {/* helmet */}

      <Flex flexDirection={"column"} id="media">
        {/* header section */}
        <Flex
          backgroundImage={mediaBg}
          width="100%"
          height={"250px"}
          backgroundSize={"cover"}
          bgRepeat={"no-repeat"}
        ></Flex>
        <Navbar />
        <Mobilenavbar />
        {/* Heading */}
        <Center>
          <Text
            className="heading"
            marginTop={"-150px"}
            position={"absolute"}
            color="white"
            fontSize={{ base: "23px", md: "33px", lg: "33px" }}
            fontWeight="bold"
            textShadow="1px 1px #000000"
          >
            Media & Newsroom
          </Text>
          <Flex
            mt={"-100px"}
            border={"1px solid white"}
            className="line2"
            width={"260px"}
            position={"absolute"}
          ></Flex>
        </Center>

        {/* right image */}
        <Flex
          display={{ base: "none", md: "flex", lg: "flex" }}
          mt={"12%"}
          width={"100%"}
          justifyContent="end"
          position="absolute"
        >
          <Image
            data-aos="fade-in"
            data-aos-easing="ease-in-quad"
            data-aos-duration="3000"
            boxSize={{ base: "0px", md: "250px", lg: "300px" }}
            src={newsBg}
            alt={"background"}
          ></Image>
        </Flex>

        {/* events */}
        <Box id="events">
          <Flex
            mt={{ base: "0px", md: "0px", lg: "0px" }}
            justifyContent={"start"}
            width={"100%"}
          >
            <Text
              className="heading "
              ml={{ base: "3%", md: "8%", lg: "8%" }}
              textAlign="left"
              my="30px"
              fontSize={{ base: "30", md: "33px", lg: "33x" }}
              maxW={{ base: "300px", md: "900px", lg: "900px" }}
              fontWeight="bold"
            >
              Latest Happenings
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
              fontSize={{ base: "32px", md: "43px", lg: "53px" }}
              fontWeight="bold"
            >
              Latest Happenings
            </Text>
          </Flex>
          <Flex
            backgroundImage={eventsBg}
            justifyContent="center"
            alignItems="center"
            width={"100%"}
          >
            <Events />
          </Flex>
        </Box>

        {/* our achievements */}
        <Flex
          id="achievements"
          backgroundColor={"rgba(199,224,246,0.7)"}
          bgRepeat={"no-repeat"}
          objectFit="cover"
          mt="50px"
          flexDirection={"column"}
        >
          <Flex justifyContent={"end"} width={"100%"}>
            <Text
              className="heading "
              mr={{ base: "3%", md: "8%", lg: "8%" }}
              textAlign="right"
              my="30px"
              fontSize={{ base: "30", md: "33px", lg: "43px" }}
              maxW={{ base: "300px", md: "900px", lg: "900px" }}
              fontWeight="bold"
            >
              Our Achievements
            </Text>
            <Text
              className="heading "
              mr={{ base: "5%", md: "10%", lg: "16%" }}
              textAlign="right"
              position="absolute"
              zIndex={-1}
              color={"rgba(221, 221, 221, 0.31)"}
              mt={{ base: "12%", md: "5%", lg: "3%" }}
              maxW={{ base: "300px", md: "900px", lg: "900px" }}
              fontSize={{ base: "32px", md: "43px", lg: "53px" }}
              fontWeight="bold"
            >
              Our Achievements
            </Text>
          </Flex>
          <Image
            position={"absolute"}
            display={{ base: "none", md: "none", lg: "flex" }}
            mt={{ lg: "200px" }}
            height={{ lg: "300px" }}
            src={trackEmployee}
            alt={"achievement happy person"}
          ></Image>
          <Flex width={"100%"} alignItems={"center"} flexDirection={"column"}>
            <Flex
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1200"
              m={10}
              maxW="800px"
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              borderRadius="20px"
              boxShadow={"lg"}
              backgroundColor={"white"}
            >
              <Image
                p={5}
                boxSize={"300px"}
                src={trackAward1}
                alt={"TrackGenesis award for fresh idea"}
              ></Image>
              <Flex mt={5} ml={"30px"} flexDirection={"column"}>
                <Text
                  fontSize={{ base: "15px", md: "13px", lg: "18px" }}
                  className="heading"
                >
                  Fresh Ideas Winner
                </Text>
                <Text
                  mt={10}
                  mr={5}
                  mb={5}
                  fontSize={{ base: "14px", md: "12px", lg: "16px" }}
                  maxW={"500px"}
                  className="content_font"
                >
                  TrackGenesis won Scottish Institute for Enterprise’s (SIE)
                  monthly fresh ideas competition in December 2018. SIE’s Fresh
                  Ideas competition is the longest-running early-stage idea
                  competition in Scotland.
                </Text>
              </Flex>
            </Flex>

            <Flex
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1200"
              mb={10}
              mr={10}
              ml={10}
              maxW="800px"
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              borderRadius="20px"
              boxShadow={"lg"}
              backgroundColor={"white"}
            >
              <Flex mt={5} ml={"30px"} flexDirection={"column"}>
                <Text
                  fontSize={{ base: "15px", md: "13px", lg: "18px" }}
                  className="heading"
                >
                  Special Award - Food and Drink Category
                </Text>
                <Text
                  mt={10}
                  mr={5}
                  mb={5}
                  fontSize={{ base: "13px", md: "12px", lg: "16px" }}
                  maxW={"500px"}
                  className="content_font"
                >
                  TrackGenesis won a special award in the Food and Drink
                  category at a prestigious national awards ceremony by Scottish
                  Institute for Enterprise in March 2019. The Scottish Institute
                  for Enterprise (SIE) Awards were held on Thursday 28 March at
                  Glasgow’s Corinthian Club, recognising the winners of SIE’s
                  annual Fresh Ideas competition, the longest-running
                  early-stage idea competition in Scotland.
                </Text>
              </Flex>
              <Image
                p={5}
                boxSize={"300px"}
                src={trackAward2}
                alt={"TrackGenesis award in food and drink industry"}
              ></Image>
            </Flex>
          </Flex>
        </Flex>

        {/* press release */}
        <Box>
          <Flex
            mt={{ base: "0px", md: "0px", lg: "0px" }}
            justifyContent={"start"}
            width={"100%"}
          >
            <Text
              className="heading "
              ml={{ base: "3%", md: "8%", lg: "8%" }}
              textAlign="left"
              my="30px"
              fontSize={{ base: "30", md: "33px", lg: "33x" }}
              maxW={{ base: "300px", md: "900px", lg: "900px" }}
              fontWeight="bold"
            >
              Press Releases
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
              fontSize={{ base: "32px", md: "43px", lg: "53px" }}
              fontWeight="bold"
            >
              Press Releases
            </Text>
          </Flex>

          <Newsslides />
        </Box>

        <Image
          ml={"5%"}
          boxSize={"100px"}
          src={plant1}
          alt={"plant"}
        ></Image>

        <Footer />
      </Flex>
    </>
  );
}

export default Newsroom;
