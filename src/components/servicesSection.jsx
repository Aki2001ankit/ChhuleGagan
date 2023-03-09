import { Box, Image, Text, Wrap, WrapItem, VStack } from "@chakra-ui/react";
import React from "react";
import home2 from "../img/undraw_education_f8ru.svg";
import { AiFillFire, AiFillStar } from "react-icons/ai";
import { MdGroup } from "react-icons/md";
import { Icon } from "@chakra-ui/react";

const Services = () => {
  return (
    <>
      <Box className="container px-5 mt-3 rounded main-2">
        <Wrap justify={"center"}>
          <WrapItem w={{ base: "100%", lg: "48%" }}>
            <Image
              boxSize="100%"
              objectFit="cover"
              src={home2}
              alt="school managment"
            />
          </WrapItem>
          <WrapItem w={{ base: "100%", lg: "50%" }} color="white">
            <VStack w="100%" my="auto">
              <Text w="100%" fontSize={"4xl"} mt={{ base: 5, lg: 0 }}>
                Why Choose Us ?
              </Text>
              <Text w="100%" textAlign={"left"} fontSize="2xl">
                <Icon as={AiFillFire} boxSize={8} /> Trending Courses
              </Text>
              <Text w="100%" textAlign={"left"} fontSize="2xl">
                <Icon as={AiFillStar} boxSize={8} /> Live Scheduled Lectures
                with one to one interaction.
              </Text>
              <Text w="100%" textAlign={"left"} fontSize="2xl">
                {" "}
                <i className="bi bi-person-workspace"></i>&nbsp; Classes with
                online setting.
              </Text>
              <Text w="100%" textAlign={"left"} fontSize="2xl">
                <Icon as={MdGroup} boxSize={8} /> Discussions Sessions at the
                end of the week.
              </Text>
            </VStack>
          </WrapItem>
        </Wrap>
      </Box>
    </>
  );
};

export default Services;
