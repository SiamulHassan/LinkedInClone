import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import education from "../../assets/education.png";
const Education = () => {
  return (
    <>
      <Box
        className="education"
        padding={"3rem"}
        backgroundColor={"#fff"}
        borderRadius={"8px"}
      >
        <Heading as={"h2"} size={"2xl"}>
          Education
        </Heading>

        <Flex className="education-box" mt="2rem" mb="3rem" gap={"2rem"}>
          <Box
            className="education-logo"
            w={"54px"}
            h={"54px"}
            overflow={"hidden"}
            borderRadius={"50%"}
          >
            <Image
              w={"100%"}
              h={"100%"}
              objectFit="cover"
              src={education}
              alt="experience-image"
            />
          </Box>
          <Box className="education-details">
            <Heading as="h3" size="xl">
              Moscow State Linguistic University
            </Heading>
            <Text mt={"1.5rem"}>
              Bachelor&apos;s degree Field Of StudyComputer and Information
              Systems Security/Information Assurance
            </Text>
            <Text>2013 — 2017</Text>
            <Text mt="1rem">
              Additional English classes and UX profile courses
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Education;
