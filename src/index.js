/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider ,Image, Flex, background} from "@chakra-ui/react";
import AOS from "aos";
import "animate.css";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
let ScrollImg = "https://res.cloudinary.com/dj6eghdzu/image/upload/v1654677685/back-to-top-icon-png-16_j6oryb.png"

AOS.init();

ReactDOM.render(
  <ChakraProvider>
    <Flex m={0} display={{base:"none",md:"block",lg:"block",xl:"block"}}>
    <ScrollToTop
      
      component={<Image src={ScrollImg} />}
      smooth
      style={{
        textAlign: "center",
        zIndex:3,
        boxShadow:"none",
        background:"none"
      }}
    />
    </Flex>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
