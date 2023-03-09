import React from "react";
import logo from "../img/logo.png";
import "./Navbar.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { ChatState } from "../context/chatprovider";
import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = ChatState();

  const HandleLogout = () => {
    localStorage.removeItem("Chhule_Gagan_userInfo");
  };
  //console.log(user)
  return (
    <>
      <Box
        className="bg-body-tertiary "
        display="flex"
        position="relative"
        justifyContent="space-between"
        px={5}
        height="75px"
        zIndex={50}
        mb={0}
      >
        {/* logo */}

        <HStack >
          <Image boxSize="60px" objectFit="cover" src={logo} alt="logo"  />
          <Text
            color="rgba(246, 87, 87, 1)"
            fontSize={{ base: "xl", lg: "2xl" }}
            fontFamily={"Kameron"}
          >
            CHHULE <br />
            GAGAN
          </Text>
        </HStack>

        {/* destop view */}
        <VStack
          display={{ base: "none", md: "flex" }}
          justifyContent="space-around"
          mt={2}
          color="rgba(0, 0, 0, 1)"
          fontFamily="Kameron"
          fontSize={{ base: "15px", lg: "20px" }}
        >
          <HStack spacing={{ md: "7", lg: "10" }} px={{ md: "7", lg: "10" }}>
            <NavLink to="/" className="hover">
              Home
            </NavLink>
            <NavLink to="/about" className="hover">
              About Us
            </NavLink>
            <NavLink to="/course" className="hover">
              Courses
            </NavLink>
            <NavLink to="/contact" className="hover">
              Contact Us
            </NavLink>

            {user === undefined || user === null ? (
              <>
              {/* <Button
                colorScheme="red"
                variant="outline"
                as="a"
                href="/login"
              >
                Login
              </Button> */}
              
              <NavLink to="/login" className="hover">
              login
            </NavLink>
            </>
            ) : (
              <>
                <NavLink to="/dashboard" className="hover">
                  Dashboard
                </NavLink>
                <NavLink to="" onClick={HandleLogout}>
                  logout
                </NavLink>
              </>
            )}
          </HStack>
        </VStack>

        {/* mobile view */}
        <Box
          display={{ base: "flex", md: "none" }}
          flexDir="column"
          justifyContent={"space-around"}
        >
          <Button colorScheme="white" onClick={onOpen} variant="link">
            <HamburgerIcon boxSize={8} color="black" />
          </Button>
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <HStack>
                  <Image
                    boxSize="50px"
                    objectFit="cover"
                    src={logo}
                    alt="logo"
                  />
                  <Text
                    color="rgba(246, 87, 87, 1)"
                    fontSize={{ base: "xl", lg: "2xl" }}
                    fontFamily={"Kameron"}
                    fontWeight="normal"
                  >
                    CHHULE <br />
                    GAGAN
                  </Text>
                </HStack>
              </DrawerHeader>

              <DrawerBody
                display="flex"
                flexDir="column"
                justifyContent="space-around"
              >
                <Box display="flex" flexDir="column">
                  <Button
                    colorScheme="white"
                    variant="ghost"
                    as="a"
                    href="/"
                    _hover={{ color: "tomato" }}
                  >
                    Home
                  </Button>
                  {user === undefined || user === null ? null : (
                    <>
                      <Button
                        colorScheme="white"
                        variant="ghost"
                        as="a"
                        href="/dashboard"
                        _hover={{ color: "tomato" }}
                      >
                        Dashboard
                      </Button>
                    </>
                  )}
                  <Button
                    colorScheme="white"
                    variant="ghost"
                    as="a"
                    href="/about"
                    _hover={{ color: "tomato" }}
                  >
                    About Us
                  </Button>
                  <Button
                    colorScheme="white"
                    variant="ghost"
                    as="a"
                    href="/course"
                    _hover={{ color: "tomato" }}
                  >
                    Course
                  </Button>
                  <Button
                    colorScheme="white"
                    variant="ghost"
                    as="a"
                    href="/contact"
                    _hover={{ color: "tomato" }}
                  >
                    Contact Us
                  </Button>
                  {user === undefined || user === null ? (
                    <Button
                      colorScheme="red"
                      variant="outline"
                      as="a"
                      href="/register"
                      w="50%"
                      m="auto"
                    >
                      Login
                    </Button>
                  ) : (
                    <>
                      <Button
                        colorScheme="white"
                        variant="ghost"
                        onClick={HandleLogout}
                        _hover={{ color: "tomato" }}
                      >
                        logout
                      </Button>
                    </>
                  )}
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </>
   
  );
}

export default Navbar;
