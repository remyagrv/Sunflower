import { DrawerHeader, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import images from "../../database/images.json"
import { NavLink } from "react-router-dom";


import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { MenuItem, Menu } from "@chakra-ui/react";

function Mobilenavbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex
      display={{ base: "block", md: "block", lg: "none" }}
      zIndex={2}
      pt={5}
      position={"absolute"}
      color={"white"}
    >
      {/* hamberger icon */}
      <Button
        ml={{ base: "80vw", md: "90vw", lg: "0vw" }}
        style={{ outline: "none" }}
        ref={btnRef}
        backgroundColor={"rgba(0, 0, 0, 0.33)"}
        onClick={onOpen}
        aria-label="mobilenavbar hamberger"
      >
        <HiOutlineMenuAlt3 />
      </Button>

      {/* opening drawer */}
      <Drawer
        color={"white"}
        isOpen={isOpen}
        placement="right"
        size="full"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          backdropFilter="auto"
          backdropBlur="8px"
          bg={"rgba(0,113,215,0.5)"}
        >
          <DrawerCloseButton color={"white"} bg={"rgba(100,100,100,0.5)"} />
          <DrawerHeader
            bg={"rgba(0,113,215,1)"}
            borderBottomWidth="2px"
            borderColor={"white"}
          >
            <Image ml={"auto"} mr={"auto"} src={images.tglogo} />
          </DrawerHeader>

          <DrawerBody color={"whiteAlpha.900"}>
            <Menu className="heading">
              {/* home */}
              <NavLink
                to="/home"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <MenuItem
                  borderBottomWidth="1px"
                  borderColor={"rgba(250,250,250,0.8)"}
                  justifyContent={"center"}
                  p={4}
                  _hover={{ bg: "rgb(0,113,215,01)" }}
                >
                  Home
                </MenuItem>
              </NavLink>
              {/* about us */}
              <NavLink
                to="/about-us"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <MenuItem
                  borderBottomWidth="1px"
                  borderColor={"rgba(250,250,250,0.8)"}
                  justifyContent={"center"}
                  p={4}
                  _hover={{ bg: "rgb(0,113,215,01)" }}
                >
                  About Us
                </MenuItem>
              </NavLink>
              {/* industry solutions */}
              <NavLink
                to="/industry-solutions"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <MenuItem
                  borderBottomWidth="1px"
                  borderColor={"rgba(250,250,250,0.8)"}
                  justifyContent={"center"}
                  p={4}
                  _hover={{ bg: "rgb(0,113,215,01)" }}
                >
                  Industry Solutions
                </MenuItem>
              </NavLink>
              {/* media news room */}
              <NavLink
                to="/media-newsroom"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <MenuItem
                  borderBottomWidth="1px"
                  borderColor={"rgba(250,250,250,0.8)"}
                  justifyContent={"center"}
                  p={4}
                  _hover={{ bg: "rgb(0,113,215,01)" }}
                >
                  Media & Newsroom
                </MenuItem>
              </NavLink>
              {/* contact us */}
              <NavLink
                to="/contact-us"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <MenuItem
                  borderBottomWidth="1px"
                  borderColor={"rgba(250,250,250,0.8)"}
                  justifyContent={"center"}
                  p={4}
                  _hover={{ bg: "rgb(0,113,215,01)" }}
                >
                  Contact Us
                </MenuItem>
              </NavLink>
              {/* careers */}
              <NavLink
                to="/careers"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <MenuItem
                  borderBottomWidth="1px"
                  borderColor={"rgba(250,250,250,0.8)"}
                  justifyContent={"center"}
                  p={4}
                  _hover={{ bg: "rgb(0,113,215,01)" }}
                >
                  Careers
                </MenuItem>
              </NavLink>
              {/* blogs */}
              {/* <NavLink
                href="#"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <MenuItem
                  borderBottomWidth="1px"
                  borderColor={"rgba(250,250,250,0.8)"}
                  justifyContent={"center"}
                  p={2}
                  _hover={{ bg: "rgb(0,113,215,01)" }}
                >
                  Blogs
                </MenuItem>
              </NavLink> */}
              {/* E brochure */}
              {/* <NavLink
                href="https://www.trackgenesis.com/e-brochure.pdf"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <MenuItem
                borderBottomWidth="1px"
                  borderColor={"rgba(250,250,250,0.8)"}
                  justifyContent={"center"}
                  p={2}
                  _hover={{ bg: "rgb(0,113,215,0.5)" }}
                >
                  E-Brochure
                </MenuItem>
              </NavLink> */}
            </Menu>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Mobilenavbar;
