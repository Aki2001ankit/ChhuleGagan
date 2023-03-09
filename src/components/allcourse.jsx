import React from "react";
import course from "../img/undraw_certificate_re_yadi.svg";
import coming from "../img/coming-soon.webp";
import { Card, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { NavLink} from "react-router-dom";

const CourseDetails = [
  {
    key: 0,
    image: course,
    title: "English Speaking Course",
    desc1:
      "Some representative placeholder content for the three columns of text below the carousel. This is the first column.",
    url: "/course",
    bottonText: "View Course Details",
  },
  {
    key: 1,
    image: coming,
    title: "More Courses",
    desc1:
      " Another exciting bit of representative placeholder content. This time, we've moved on to the second column.",
    url: "/",
    bottonText: "Comming Soon",
  },
];

const ImgCard = ({ props }) => {

  return (
    <>
      <Card
        width={{ base: "90vw", sm: "70vw", md: "40vw", lg: "25vw" }}
        bg="transparent"
        border="transparent"
        bocShadow="none"
        variant="outline"
        mt={5}
        color="white"
      >
        <Text className="m-auto">
          <Image
            boxSize="150px"
            objectFit="cover"
            src={props?.image}
            alt="poster"
          />
        </Text>

        <Text>{props?.title}</Text>
        <Text>{props?.desc1}</Text>
        <Text textAlign={"center"}>
          <button className="btn btn-secondary">
            <NavLink to={props.url}>
              {" "}
              View Course details &nbsp;
              <i class="bi bi-arrow-right-circle"></i>
            </NavLink>
          </button>
        </Text>
      </Card>
    </>
  );
};
const AllCourse = () => {
  return (
    <>
      <div className="container main-3 mt-5 rounded">
        <h1 className="h1">All our Courses</h1>
        <p>
          We provide live affordable classes provide state-of-the-art learning
          experience by top faculties who will conduct classes with the latest
          syllabus and provide solutions and solve doubts through best in-class
          doubt sessions.
        </p>

        <Wrap justify="space-evenly">
          {CourseDetails.map((m) => (
            <WrapItem key={m.key}>
              <ImgCard props={m} />
            </WrapItem>
          ))}
        </Wrap>
      </div>
    </>
  );
};
export default AllCourse;
