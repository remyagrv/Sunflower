import { Flex, Center, Text, Image, VStack, Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../../components/sections/Footer";
import Navbar from "../../components/sections/Navbar";
import Mobilenavbar from "../../components/sections/Mobilenavbar";
import { useForm as useFormspree } from "@formspree/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import contactbg from "../../assets/images/ContactUsAndCareer/Cloud.gif";
import contactLady from "../../assets/images/ContactUsAndCareer/contact-image.webp";
import plant2 from "../../assets/images/AboutUsPage/trackgenesis-plant.webp";

function Contactus(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // formspree
  const [serverState, sendToFormspree] = useFormspree("xdobjege");

  // on succesfull submission of form in formspree
  if (serverState.succeeded) {
    navigate("/");
  }

  return (
    <>
      {/* helmet */}
      <Helmet>
        <title>Contact Info | TrackGenesis&reg; | Aberdeen Scotland</title>
        <meta
          name="title"
          content="Contact Info | TrackGenesis | Aberdeen Scotland"
        />
        <meta
          name="description"
          content="Contact us for best software development and blockchain applications customized for your business."
        />
        <link href="https://trackgenesis.com/contact-us" rel="canonical" content="max-age: 1209600, no-cache, no-store, must-revalidate"/>
      </Helmet>
      {/* helmet */}

      <Flex flexDirection={"column"} id="contact">
        <Flex
          backgroundImage={contactbg}
          width="100%"
          height={"250px"}
          backgroundSize={"cover"}
          bgRepeat={"no-repeat"}
        ></Flex>
        <Navbar />
        <Mobilenavbar />

        {/* heading section */}
        <Center>
          <Text
            className="heading"
            marginTop={"-150px"}
            position={"absolute"}
            color="white"
            fontSize={"33px"}
            fontWeight="bold"
            textShadow="1px 1px #000000"
          >
            Get In Touch
          </Text>
          <Flex
            mt={"-100px"}
            border={"1px solid white"}
            className="line2"
            width={"260px"}
            position={"absolute"}
          ></Flex>
        </Center>

        {/* content */}
        <Flex
          data-aos="fade-up"
          data-aos-easing="ease-in-quad"
          data-aos-duration="1200"
          backgroundColor={"rgba(0, 113, 215, 0.29)"}
          m={{ base: "30px", md: "50px", lg: "50px" }}
          borderRadius="20px"
          boxShadow={"lg"}
          flexDirection={{ base: "column", md: "row", lg: "row" }}
        >
          {/* left image section */}
          <Flex
            width={{ base: "100%", md: "50%", lg: "50%" }}
            justifyContent="center"
          >
            <Image
              data-aos="fade-right"
              alt="contact lady"
              data-aos-easing="ease-in-quad"
              data-aos-duration="2000"
              p={5}
              width={{ base: "40vw", md: "30vw", lg: "30vw" }}
              src={contactLady}
              pointerEvents={"none"}
            ></Image>
          </Flex>

          {/* right form section */}
          <Flex
            ml={{ base: "5%", md: "0px", lg: "0px" }}
            width={{ base: "100%", md: "50%", lg: "50%" }}
            justifyContent="center"
            flexDirection={"column"}
          >
            <Text
              data-aos="fade-in"
              data-aos-easing="ease-in-quad"
              data-aos-duration="3000"
              className="heading"
              pt={9}
              fontSize={"22px"}
            >
              Need support?
            </Text>
            <Text
              mt={5}
              maxW={{ base: "300px", md: "", lg: "" }}
              data-aos="fade-in"
              data-aos-easing="ease-in-quad"
              data-aos-duration="3000"
              className="content_font"
            >
              Send us your query and we will get back to you soon
            </Text>

            {/* contact us form */}
            <form onSubmit={handleSubmit(sendToFormspree)}>
              <VStack
                width={{ base: "80%", md: "70%", lg: "70%" }}
                pt={"40px"}
                pb="40px"
              >
                <FormControl>
                  <FormLabel fontWeight={"light"}>Name</FormLabel>
                  <Input
                    boxShadow={"inner"}
                    bgColor={"rgba(255, 254, 254, 0.63)"}
                    id="name"
                    type="text"
                    value={name}
                    name="name"
                    {...register("name", {
                      required: "Name field is requires",
                    })}
                  />
                  <Text className="error">{errors?.name?.message}</Text>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={"light"}>Email</FormLabel>
                  <Input
                    boxShadow={"inner"}
                    bgColor={"rgba(255, 254, 254, 0.63)"}
                    id="email"
                    value={email}
                    name="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  <Text className="error">{errors?.email?.message}</Text>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={"light"}>Enter your queries</FormLabel>
                  <Textarea
                    boxShadow={"inner"}
                    bgColor={"rgba(255, 254, 254, 0.63)"}
                    id="query"
                    value={query}
                    name="query"
                    {...register("query", {
                      required: "Query is required",
                      minLength: {
                        value: 10,
                        message: "Query must have at least 10 characters",
                      },
                      maxLength: {
                        value: 500,
                        message: "Query must not exceed 500 characters",
                      },
                    })}
                  />
                  <Text className="error">{errors?.query?.message}</Text>
                </FormControl>

                <Flex width={"100%"} justifyContent="end" pt={6}>
                  <Button
                    width={{ base: "68px", md: "80px", lg: "90px" }}
                    height={{ base: "16px", md: "20px", lg: "30px" }}
                    className="readmorebutton"
                    backgroundColor={"#0071D7"}
                    fontSize={{
                      base: "",
                      md: "",
                      lg: "",
                      xl: "md",
                      "2xl": "md",
                    }}
                    type="submit"
                    disabled={serverState.submitting}
                  >
                    Submit
                  </Button>
                </Flex>
              </VStack>
              {serverState.errors.map((err) => (
                <Text>{err.message}</Text>
              ))}
            </form>
            <Image
              alt="plant"
              data-aos="slide-left"
              data-aos-easing="ease-in-quad"
              data-aos-duration="1400"
              mt={"-12%"}
              mb={"10px"}
              ml={"70%"}
              width={"100px"}
              src={plant2}
            ></Image>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}

export default Contactus;
