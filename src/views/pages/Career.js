import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Table,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Mobilenavbar from "../../components/sections/Mobilenavbar";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useForm as useFormspree } from "@formspree/react";
import { Helmet } from "react-helmet";
import careerbg from "../../assets/images/ContactUsAndCareer/careerbg.gif";
import learning from "../../assets/images/ContactUsAndCareer/learning.png";
import blob from "../../assets/images/ContactUsAndCareer/career-blob-background.png";
import success from "../../assets/images/ContactUsAndCareer/success.png";
import gadgets from "../../assets/images/ContactUsAndCareer/gadgets.png";
import work from "../../assets/images/ContactUsAndCareer/work.png";
import plant2 from "../../assets/images/AboutUsPage/trackgenesis-plant.webp";

function Career(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [qualification, setQualification] = useState();
  const [skills, setSkills] = useState();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // formspree
  const [serverState, sendToFormspree] = useFormspree("xayvkeoo");

  // on succesfull submission of form in formspree
  if (serverState.succeeded) {
    navigate("/");
  }

  return (
    <>
      {/* helmet */}
      <Helmet>
        <title>Careers | Apply Now | TrackGenesis&reg; | Aberdeen Scotland</title>
        <meta
          name="title"
          content="Careers | Apply Now | TrackGenesis | Aberdeen Scotland"
        />
        <meta
          name="description"
          content="Discover new job opportunities - Join the team of software developers, blockchain experts and digital marketing executives. Careers in TrackGenesis - Apply now"
        />
        <link href="https://trackgenesis.com/careers" rel="canonical" content="max-age: 1209600, no-cache, no-store, must-revalidate"/>
      </Helmet>
      {/* helmet */}
      <Flex flexDirection={"column"} id="career">
        {/* heading Section */}
        <Flex
          backgroundImage={careerbg}
          width="100%"
          height={"350px"}
          backgroundSize={"cover"}
          bgRepeat={"no-repeat"}
          id="career"
        ></Flex>

        <Navbar />
        <Mobilenavbar />

        {/* heading */}
        <Center>
          <Text
            className="heading"
            marginTop={"-350px"}
            position={"absolute"}
            color="white"
            fontSize={"33px"}
            fontWeight="bold"
            textShadow="1px 1px #000000"
          >
            Careers
          </Text>
          <Flex
            mt={"-300px"}
            border={"1px solid white"}
            className="line2"
            width={"260px"}
            position={"absolute"}
          ></Flex>
        </Center>
        <Flex
          mb={5}
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          pl={{ md: "0vw", lg: "5vw", base: "0" }}
        >
          {/* why work with us */}
          <Flex
            overflow={"hidden"}
            mt={{ md: "10", lg: "10", base: "0" }}
            mr={{ base: "0", md: "8", lg: "0" }}
            p={{ base: "5", lg: "5", md: "0" }}
            width={{ base: "100%", md: "80%", lg: "50%" }}
            justifyContent="center"
            backgroundImage={blob}
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundPosition="center"
          >
            <Flex
              ml={{ base: "5vw", md: "0px", lg: "0px" }}
              width={{ base: "100%", md: "100%", lg: "100%" }}
              justifyContent="center"
              flexDirection={"column"}
            >
              <Text
                className="heading"
                textAlign={"center"}
                pt={9}
                pb={5}
                fontSize={{ md: "28px", lg: "32px", base: "22px" }}
              >
                Why work with us?
              </Text>
              <Table
                variant={"unstyled"}
                fontSize={{ md: "17px", lg: "18px", base: "15px" }}
              >
                <Tr
                  data-aos="slide-right"
                  data-aos-easing="ease-in-quad"
                  data-aos-duration="1400"
                >
                  <Td width={{ base: "100px", md: "130px", lg: "180px" }}>
                    <Image
                      alt="culture of learning"
                      width="152px"
                      height="106px"
                      src={learning}
                      pointerEvents={"none"}
                    />
                  </Td>
                  <Td>
                    <Text fontWeight={"medium"}>Culture of learning</Text>
                  </Td>
                </Tr>
                <Tr
                  data-aos="slide-right"
                  data-aos-easing="ease-in-quad"
                  data-aos-duration="1400"
                >
                  <Td>
                    <Image
                      alt="shared success"
                      width="105.55px"
                      height="69.59px"
                      src={success}
                      pointerEvents={"none"}
                    />
                  </Td>
                  <Td>
                    <Text fontWeight={"medium"}>Shared Success</Text>
                  </Td>
                </Tr>
                <Tr
                  data-aos="slide-right"
                  data-aos-easing="ease-in-quad"
                  data-aos-duration="1400"
                >
                  <Td>
                    <Image
                      width="79px"
                      alt="conductive work"
                      height="90px"
                      src={work}
                      pointerEvents={"none"}
                    />
                  </Td>
                  <Td>
                    <Text fontWeight={"medium"}>Conductive work</Text>
                  </Td>
                </Tr>
                <Tr
                  data-aos="slide-right"
                  data-aos-easing="ease-in-quad"
                  data-aos-duration="1400"
                >
                  <Td>
                    <Image
                      alt="best gadgets"
                      width="109px"
                      height="59px"
                      src={gadgets}
                      pointerEvents={"none"}
                    />
                  </Td>
                  <Td>
                    <Text fontWeight={"medium"}>Best gadgets</Text>
                  </Td>
                </Tr>
              </Table>
            </Flex>
          </Flex>

          {/* career apply card */}
          <Flex
            width={"100%"}
            pl={{ md: "0vw", lg: "10vw", base: "0" }}
            pr={{ md: "1vw", lg: "10vw", base: "0" }}
          >
            <Flex
              data-aos="fade-up"
              data-aos-easing="ease-in-quad"
              data-aos-duration="1400"
              backgroundColor={"rgba(180, 213, 243, 1)"}
              borderRadius="20px"
              boxShadow={"lg"}
              width={"100%"}
              height={"fit-content"}
              justifyContent="center"
              flexDirection={"column"}
              pl={"5vw"}
              pr={"5vw"}
              pt={"5vw"}
              pb={{ md: "1vw", lg: "1vw", base: "5vw" }}
              mt={{ md: "-100px", lg: "-100px", base: "0px" }}
              ml={{ base: "2vw", md: "0", lg: "0" }}
              mr={{ base: "1vw", md: "0", lg: "0" }}
            >
              <Text
                className="heading"
                mt={{ base: "8vh", md: "0", lg: "0px" }}
                fontSize={{ md: "28px", lg: "32px", base: "22px" }}
              >
                Create Future with us?
              </Text>
              <br />
              <Text className="content_font">
                Fill your details and we will get back to you soon
              </Text>

              {/* career apply form */}
              <form onSubmit={handleSubmit(sendToFormspree)}>
                <VStack
                  width={{ base: "100%", md: "100%", lg: "100%" }}
                  pt={"40px"}
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
                        required: "Name field is required",
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
                    <FormLabel fontWeight={"light"}>
                      Highest Qualification
                    </FormLabel>
                    <Input
                      boxShadow={"inner"}
                      bgColor={"rgba(255, 254, 254, 0.63)"}
                      id="qualification"
                      type="text"
                      value={qualification}
                      name="qualification"
                      {...register("qualification", {
                        required: "Highest qualification field is required",
                      })}
                    />
                    <Text className="error">
                      {errors?.qualification?.message}
                    </Text>
                  </FormControl>
                  <FormControl>
                    <FormLabel fontWeight={"light"}>Skill Sets</FormLabel>
                    <Input
                      boxShadow={"inner"}
                      bgColor={"rgba(255, 254, 254, 0.63)"}
                      id="skills"
                      type="text"
                      value={skills}
                      name="skills"
                      {...register("skills", {
                        required: "Skill sets field is required",
                      })}
                    />
                    <Text className="error">{errors?.skills?.message}</Text>
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
                <Text my={"10px"} className="content_font">
                Send your updated resume to info@trackgenesis.com.
              </Text>
                {serverState.errors.map((err) => (
                  <Text>{err.message}</Text>
                ))}
              </form>
              <Flex justifyContent={"end"}>
                <Image
                  alt="career plant"
                  data-aos="slide-left"
                  data-aos-easing="ease-in-quad"
                  data-aos-duration="1400"
                  width={{ md: "100px", lg: "100px" }}
                  display={{ base: "none", md: "block" }}
                  src={plant2}
                  pointerEvents={"none"}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}

export default Career;
