/** @format */

import React, { useEffect, useState } from "react";
import { Flex, Text, Box, Center, Image } from "@chakra-ui/react";
import "./TGsplash.scss";
import "./splash.css";
import Logo from "../../assets/images/HomePage/TG-logo.svg";
import Galaxygif from "../../assets/images/HomePage/galaxy.gif";
import { Wave } from "react-animated-text";
import 'animate.css';
import TGmobLogo from "../../assets/images/TGSplashMObFinalOut.mp4";

let TgLOGO =
  "https://res.cloudinary.com/dj6eghdzu/image/upload/v1654516619/Group_1474_jqdkcg.png";

// let TGmobLogo =
//   "https://res.cloudinary.com/dj6eghdzu/image/upload/v1655103389/TGmobSplash_yuwtz3.gif";

function TrackGenSplash() {
  // splash timeOut
  const [anime, setAnime] = useState(false);
  setTimeout(() => {
    setAnime(true);
  }, 300);

  return (
 
      
    <Flex
  
      height={"100vh"}
      bgGradient='linear(to-r, #005098, #000054)'
    >
      
      <Center marginLeft={"auto"} marginRight="auto">
        <Box   height={"200px"} width={{ base: "200px",md:"400px" ,lg: "400px" }}>
      
          <Image
          className="animate__animated animate__pulse animate__slow"
       
         
            width={{ base: "160px", md: "200px", lg: "260px" }}
            ml="auto"
            mr={"auto"}
            src={Logo}
          ></Image>
          <Box  mt={{base:"-28px",md:"-33px",lg:"-35px"}}  ml={{base:"68px",md:"160px",lg:"148px"}}  width={{base:"110px",md:"140px",lg:"170px"}}>
          <span class="loader"></span></Box>
        </Box>
      </Center>
    </Flex>

    // <Flex
    //   justifyContent={"center"}
    //   color="#fff"
    //   w="100%"
    //   height={"100vh"}
    //   backgroundColor={"#020230"}
    // >
    //   <Flex
    //     justifyContent={"center"}
    //     alignSelf="center"
    //     width={{ base: "40%", lg: "40%" }}
    //     height={{ lg: "40%" }}
    //     display={{ base: "none", md: "flex", lg: "flex" }}
    //     className="tgLogoAnime"
    //   >
    //     <Image src={TgLOGO} alt={"TrackGenesis Blockchain logo"} />
    //   </Flex>
    //   {anime && (
    //     <Flex
    //       justifyContent={"center"}
    //       alignSelf="center"
    //       width={"100%"}
    //       height="100%"
    //       display={{ base: "block", md: "none", lg: "none", xl: "none" }}
    //       id="MobSplash"
    //     >
    //       {/* <Image
    //       src={TGmobLogo}
    //       alt={"TrackGenesis Blockchain logo"}
    //       width={"100%"}
    //       height="100%"
    //     /> */}

    //       <video
    //         autoPlay={true}
    //         loop={true}
    //         muted
    //         width={"100%"}
    //         height="100%"
    //         playsInline
    //       >
    //         <source src={TGmobLogo} type="video/mp4" />
    //       </video>
    //     </Flex>
    //   )}
    // </Flex>
  );
}

export default TrackGenSplash;
