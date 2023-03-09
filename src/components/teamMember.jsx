import React from "react";
import shashikant from "../img/founder.jpg";
import sunil from "../img/co-found1.jpeg";
import deepesh from "../img/co-found2.jpeg";
import ayush from "../img/co-found3.jpeg";
import {
  Box,
  Text,
  Card,
  Heading,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Icon } from "@chakra-ui/react";

const Founder = [
  {
    key: 0,
    image: shashikant,
    name: "Dr. Shashikant Das",
    role: "Founder",
    desc: "phd IIT Roorkee",
    desc1: "M.Tech-IIT Kharagpur | B.Tech-NIT Calicut",
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
];

const CoFounder = [
  {
    key: 0,
    image: sunil,
    name: "Mr. Sunil Meena",
    role: "Co-Founder",
    desc: "B. Tech IIT Roorkee",
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
  {
    key: 1,
    image: deepesh,
    name: "Mr. Deepesh Meena",
    role: "Co-Founder",
    desc: "B. Tech IIT Roorkee",
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
  {
    key: 2,
    image: ayush,
    name: "Mr. Ayush Kumar",
    role: "Co-Founder",
    desc: "B. Tech IIT Roorkee",
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
];

const ImgCard = ({ props }) => {
  return (
    <Card
      width={{ base: "80vw", sm: "45vw", md: "30vw", lg: "23vw" }}
      border="20px solid white"
      borderRadius={0}
      boxShadow="0 5px 15px rgba(0, 0, 0, 0.2)"
      margin={"auto"}
    >
      <div className="card p-0">
        <div className="card-image">
          <img src={props?.image} alt="person" />
        </div>
        <div className="card-content d-flex flex-column align-items-center mt-5">
          <Heading size="md" mt={2} textAlign="center">
            {props?.name}
          </Heading>
          <Text fontSize="sm">{props?.role}</Text>
          <Text fontSize="md">{props?.desc}</Text>
          <Text fontSize="md">{props?.desc1}</Text>
          <Wrap spacing={0} justify="center" mt={4}>
            <WrapItem>
              <Button
                colorScheme="white"
                variant="link"
                as="a"
                href={props?.facebook}
                target="blank"
                className="hover-icon"
              >
                <Icon as={AiOutlineFacebook} />
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                colorScheme="white"
                variant="link"
                as="a"
                href={props?.instagram}
                target="blank"
                className="hover-icon"
              >
                <Icon as={AiOutlineInstagram} />
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                colorScheme="white"
                variant="link"
                as="a"
                href={props?.twitter}
                target="blank"
                className="hover-icon"
              >
                <Icon as={AiOutlineTwitter} />
              </Button>
            </WrapItem>
          </Wrap>
        </div>
      </div>
    </Card>
  );
};
const TeamMember = () => {
  return (
    <>
      <Wrap justify="space-evenly" spacing={10}>
        {Founder.map((m) => (
          <WrapItem key={m.key}>
            <ImgCard props={m} />
          </WrapItem>
        ))}
      </Wrap>
      <br />
      <br />
      <Wrap justify="space-evenly">
        {CoFounder.map((m) => (
          <WrapItem key={m.key}>
            <ImgCard props={m} />
          </WrapItem>
        ))}
      </Wrap>
      <br />
    </>
  );
};
export default TeamMember;
