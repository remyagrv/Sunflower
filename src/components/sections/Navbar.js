import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MenuItem, Menu, MenuButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HashLink  } from 'react-router-hash-link';
import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import "./section.css";

function Navbar(props) {
  return (
    <Flex
      alignItems={"center"}
      zIndex={3}
      className="navbar animate__animated animate__slideInDown animate__delay"
      height={{
        base: "7vh",
        md: "7vh",
        lg: "7vh",
        xl: "7vh",
        "2xl": "7vh",
        "3xl": "6vh",
      }}
      position={"absolute"}
      marginLeft="35%"
      marginTop={{ base: "2%", md: "2%", lg: "2%" }}
      pt={{
        base: "0",
        md: "0",
        lg: "3px",
        xl: "0px",
      }}
      px={8}
      borderLeftRadius="20"
      borderRightRadius="20"
      color={"white"}
      display={{ base: "none", md: "none", lg: "block" }}
    >
      <Flex
        justifyContent={"center"}
        py={{ base: "0", md: "0", lg: "5", xl: "4" }}
        className="heading"
        fontSize={{ md: "0", lg: "0.9vw", xl: "1vw" }}
        flexDirection={"row"}
      >
        <NavLink
          to="/home"
          _hover={{
            textDecoration: "none",
          }}
          className="NavHov"
        >
          <Text px={5}>Home</Text>
        </NavLink>
        <Text>I</Text>

        <Menu>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <MenuButton>
                <Text px={5}>About Us</Text>
              </MenuButton>
            </PopoverTrigger>
            <PopoverContent className="popup" maxW="200px" border={"none"}>
              <Stack>
                <NavLink
                  _hover={{
                    textDecoration: "none",
                  }}
                  className="NavHov"
                  to="/about-us"
                >
                  <MenuItem p={2} _hover={{ bg: "rgb(0,113,215,0.3)" }}>
                    Our Mission & Vision
                  </MenuItem>
                </NavLink>
                <HashLink 
                 smooth
                  _hover={{
                    textDecoration: "none",
                  }}
                  to={'/about-us#whatWeDo'}
                >
                  <MenuItem p={2} _hover={{ bg: "rgb(0,113,215,0.3)" }} >
                    What We Do
                  </MenuItem>
                </HashLink >
                <HashLink
                 smooth
                  _hover={{
                    textDecoration: "none",
                  }}
                  className="NavHov"
                  to="/about-us#ourTeam"
                >
                  <MenuItem p={2} _hover={{ bg: "rgb(0,113,215,0.3)" }}>
                    Our Team
                  </MenuItem>
                </HashLink>
              </Stack>
            </PopoverContent>
          </Popover>
        </Menu>

        <Text>I</Text>
        <Menu>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <MenuButton>
                <Text px={5}>Industry Solutions</Text>
              </MenuButton>
            </PopoverTrigger>
            <PopoverContent className="popup" maxW="200px" border={"none"}>
              <Stack>
                <NavLink
                  _hover={{
                    textDecoration: "none",
                  }}
                  to="/industry-solutions"
                  className="NavHov"
                >
                  <MenuItem p={2} _hover={{ bg: "rgb(0,113,215,0.3)" }}>
                    Our Works
                  </MenuItem>
                </NavLink>
                <HashLink
                smooth
                  _hover={{
                    textDecoration: "none",
                  }}
                  to="/industry-solutions/#solutions"
                >
                  <MenuItem p={2} _hover={{ bg: "rgb(0,113,215,0.3)" }}>
                    Blockchain Solutions
                  </MenuItem>
                </HashLink>
                <HashLink
                smooth
                  _hover={{
                    textDecoration: "none",
                  }}
                  to="/industry-solutions#clients"
                  className="NavHov"
                >
                  <MenuItem p={2} _hover={{ bg: "rgb(0,113,215,0.3)" }}>
                    Our Clients
                  </MenuItem>
                </HashLink>
              </Stack>
            </PopoverContent>
          </Popover>
        </Menu>
        <Text>I</Text>
        <Menu>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <MenuButton>
                <Text px={5}>Media & Newsroom</Text>
              </MenuButton>
            </PopoverTrigger>
            <PopoverContent className="popup" maxW="200px" border={"none"}>
              <Stack>
                <NavLink
                  to="/media-newsroom"
                  _hover={{
                    textDecoration: "none",
                  }}
                  className="NavHov"
                >
                  <MenuItem p={2} _hover={{ bg: "rgb(0,113,215,0.3)" }}>
                    Events
                  </MenuItem>
                </NavLink>
                <HashLink
                smooth
                  to="/media-newsroom#achievements"
                  _hover={{
                    textDecoration: "none",
                  }}
                  className="NavHov"
                >
                  <MenuItem p={2} _hover={{ bg: "rgb(0,113,215,0.3)" }}>
                    Achievements
                  </MenuItem>
                </HashLink>
                <HashLink
                smooth
                  to="/media-newsroom#pressRelease"
                  _hover={{
                    textDecoration: "none",
                  }}
                  className="NavHov"
                >
                  <MenuItem p={2} _hover={{ bg: "rgb(0,113,215,0.3)" }}>
                    Press Releases
                  </MenuItem>
                </HashLink>
              </Stack>
            </PopoverContent>
          </Popover>
        </Menu>
        <Text>I</Text>

        <NavLink
          to="/contact-us"
          _hover={{
            textDecoration: "none",
          }}
          className="NavHov"
        >
          <Text px={5}>Contact Us</Text>
        </NavLink>
        <Text>I</Text>
        <NavLink
          to="/careers"
          _hover={{
            textDecoration: "none",
          }}
          className="NavHov"
        >
          <Text px={5}>Careers</Text>
        </NavLink>
        {/* <Text>I</Text>
        <NavLink
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text px={5}>Blogs</Text>
        </NavLink>
        <Text>I</Text>
        <NavLink
          to="https://www.trackgenesis.com/e-brochure.pdf"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text px={5}>E-Brochure</Text>
        </NavLink> */}
      </Flex>
    </Flex>
  );
}

export default Navbar;
