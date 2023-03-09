import React from "react";
import "./About.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TeamMember from "../components/teamMember";
import { Text, Box } from "@chakra-ui/react";

function About() {
  return (
    <Box
      style={{ background: "linear-gradient(#F8F9FA 20%, white 70%)" }}
      mt={0}
    >
      <Text
        textAlign={"center"}
        fontWeight="bold"
        fontSize={"3xl"}
        color="rgb(239,107,107,0.99)"
        mt={5}
        mb={5}
      >
        Meet Our Team
      </Text>
      <TeamMember />
    </Box>
  );
}

export default About;
